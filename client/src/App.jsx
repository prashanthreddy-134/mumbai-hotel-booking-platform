import { useEffect, useState } from "react";
import "./App.css";

const API = import.meta.env.VITE_API_URL || "https://mumbai-hotel-booking-platform.onrender.com";
const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function money(value) {
  return `\u20B9${Number(value || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
}

function toIsoDate(value) {
  return new Date(`${value}T00:00:00`).toISOString();
}

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${RAZORPAY_SCRIPT}"]`
    );

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve(Boolean(window.Razorpay));
        return;
      }

      existingScript.addEventListener(
        "load",
        () => resolve(Boolean(window.Razorpay)),
        { once: true }
      );

      existingScript.addEventListener(
        "error",
        () => resolve(false),
        { once: true }
      );

      return;
    }

    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT;
    script.async = true;

    script.onload = () => {
      script.dataset.loaded = "true";
      resolve(Boolean(window.Razorpay));
    };

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}

async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("hotelToken");

  const headers = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(
      data.error || data.message || `Request failed (${response.status})`
    );

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
}

function App() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const [checkIn, setCheckIn] = useState(dateOffset(1));
  const [checkOut, setCheckOut] = useState(dateOffset(2));

  const [rooms, setRooms] = useState([]);
  const [roomsLoading, setRoomsLoading] = useState(false);
  const [roomsError, setRoomsError] = useState("");

  const [bookingLoading, setBookingLoading] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [bookingMessageType, setBookingMessageType] = useState("info");

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [specialRequests, setSpecialRequests] = useState("");

  const [authMode, setAuthMode] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("hotelUser")) || null;
    } catch {
      return null;
    }
  });

  const [showBookings, setShowBookings] = useState(false);
  const [myBookings, setMyBookings] = useState([]);
  const [myBookingsLoading, setMyBookingsLoading] = useState(false);
  const [myBookingsError, setMyBookingsError] = useState("");
  const [cancelLoading, setCancelLoading] = useState("");

  useEffect(() => {
    loadHotels();
  }, []);


  async function loadHotels(query = "") {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();

      if (query.trim()) {
        params.set("search", query.trim());
      }

      const data = await apiRequest(`/api/v1/hotels?${params}`);

      setHotels(data.hotels || []);
    } catch (err) {
      setError(
        `${err.message} Check that your backend is running on port 4000.`
      );
    } finally {
      setLoading(false);
    }
  }

  async function submitAuth(event) {
    event.preventDefault();

    setAuthLoading(true);
    setAuthError("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const data = await apiRequest(`/api/v1/auth/${authMode}`, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      localStorage.setItem("hotelToken", data.token);
      localStorage.setItem("hotelUser", JSON.stringify(data.user));

      setUser(data.user);
      setGuestName(data.user.name || "");
      setGuestEmail(data.user.email || "");

      setAuthMode("");
      setAuthError("");
    } catch (err) {
      setAuthError(err.message);
    } finally {
      setAuthLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("hotelToken");
    localStorage.removeItem("hotelUser");

    setUser(null);
    setGuestName("");
    setGuestEmail("");
    setMyBookings([]);
    setShowBookings(false);
    setSelectedHotel(null);
  }

  async function findAvailableRooms(event) {
    event.preventDefault();

    setRooms([]);
    setRoomsError("");
    setBookingMessage("");

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setRoomsError("Check-out must be after check-in.");
      return;
    }

    if (checkIn < dateOffset(1)) {
      setRoomsError("Check-in must be a future date.");
      return;
    }

    setRoomsLoading(true);

    try {
      const params = new URLSearchParams({
        checkIn: toIsoDate(checkIn),
        checkOut: toIsoDate(checkOut),
      });

      const data = await apiRequest(
        `/api/v1/hotels/${selectedHotel.id}/rooms?${params}`
      );

      setRooms(data.rooms || []);

      if (!data.rooms?.length) {
        setRoomsError(
          "No rooms are available for these dates. Try different dates."
        );
      }
    } catch (err) {
      setRoomsError(err.message);
    } finally {
      setRoomsLoading(false);
    }
  }

  async function refreshRoomAvailability() {
    if (!selectedHotel) return;

    const params = new URLSearchParams({
      checkIn: toIsoDate(checkIn),
      checkOut: toIsoDate(checkOut),
    });

    const data = await apiRequest(
      `/api/v1/hotels/${selectedHotel.id}/rooms?${params}`
    );

    setRooms(data.rooms || []);
  }

  async function refreshMyBookings() {
    const data = await apiRequest("/api/v1/bookings/my");
    setMyBookings(data.bookings || []);
  }

  async function createBooking(room) {
    if (!user) {
      setAuthError("");
      setAuthMode("login");

      setBookingMessage("Log in to continue with checkout.");
      setBookingMessageType("info");

      return;
    }

    if (!guestName.trim() || guestName.trim().length < 2) {
      setBookingMessage("Enter the guest's full name.");
      setBookingMessageType("error");
      return;
    }

    if (
      !guestEmail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestEmail)
    ) {
      setBookingMessage("Enter a valid guest email address.");
      setBookingMessageType("error");
      return;
    }

    if (!/^[+\d\s()-]{8,20}$/.test(guestPhone.trim())) {
      setBookingMessage("Enter a valid guest phone number.");
      setBookingMessageType("error");
      return;
    }

    const count = Number(guestCount);

    if (!Number.isInteger(count) || count < 1 || count > 10) {
      setBookingMessage("Guest count must be between 1 and 10.");
      setBookingMessageType("error");
      return;
    }

    if (count > room.capacity) {
      setBookingMessage(
        `This room allows a maximum of ${room.capacity} guests.`
      );
      setBookingMessageType("error");
      return;
    }

    setBookingLoading(room.id);
    setBookingMessage("Creating your secure payment order...");
    setBookingMessageType("info");

    let orderData;

    try {
      orderData = await apiRequest("/api/v1/checkout/orders", {
        method: "POST",
        body: JSON.stringify({
          roomId: room.id,
          checkIn: toIsoDate(checkIn),
          checkOut: toIsoDate(checkOut),
          guestName: guestName.trim(),
          guestEmail: guestEmail.trim(),
          guestPhone: guestPhone.trim(),
          guestCount: count,
          specialRequests: specialRequests.trim(),
        }),
      });
    } catch (err) {
      setBookingMessage(err.message);
      setBookingMessageType("error");
      setBookingLoading("");
      return;
    }

    try {
      const scriptLoaded = await loadRazorpayScript();

      if (!scriptLoaded || !window.Razorpay) {
        setBookingMessage(
          "Razorpay Checkout could not load. Your room hold will expire automatically after 10 minutes. Please try again."
        );
        setBookingMessageType("error");
        setBookingLoading("");
        return;
      }

      let verificationStarted = false;
      let checkoutDismissed = false;

      const options = {
        key: orderData.keyId,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Monsoon Stays",
        description: `${selectedHotel.name} - ${room.name}`,
        order_id: orderData.order.id,

        prefill: {
          name: guestName.trim(),
          email: guestEmail.trim(),
          contact: guestPhone.trim(),
        },

        notes: {
          bookingId: orderData.booking.id,
          hotel: selectedHotel.name,
          room: room.name,
        },

        theme: {
          color: "#233d32",
        },

        handler: async function (paymentResponse) {
          verificationStarted = true;

          setBookingMessage(
            "Payment received. Verifying payment with the server..."
          );

          setBookingMessageType("info");

          try {
            const verification = await apiRequest(
              "/api/v1/checkout/verify",
              {
                method: "POST",
                body: JSON.stringify({
                  bookingId: orderData.booking.id,
                  razorpay_order_id:
                    paymentResponse.razorpay_order_id,
                  razorpay_payment_id:
                    paymentResponse.razorpay_payment_id,
                  razorpay_signature:
                    paymentResponse.razorpay_signature,
                }),
              }
            );

            if (verification.status !== "CONFIRMED") {
              throw new Error(
                "The server has not confirmed this booking. Check My Bookings before trying again."
              );
            }

            setBookingMessage(
              `Payment verified successfully. Your booking is CONFIRMED. Reference: ${
                verification.bookingId || orderData.booking.id
              }`
            );

            setBookingMessageType("success");

            try {
              await refreshRoomAvailability();
            } catch {
              // Availability refresh failure does not undo confirmation.
            }

            try {
              await refreshMyBookings();
            } catch {
              // The server already returned booking confirmation.
            }
          } catch (verificationError) {
            const extra =
              verificationError.status === 409
                ? " The payment may require refund processing or manual review."
                : "";

            setBookingMessage(
              `Payment verification needs attention: ${verificationError.message}.${extra} Do not pay again until you check My Bookings or contact support.`
            );

            setBookingMessageType("error");
          } finally {
            setBookingLoading("");
          }
        },

        modal: {
          ondismiss: function () {
            checkoutDismissed = true;

            if (verificationStarted) return;

            setBookingLoading("");

            setBookingMessage(
              "Checkout was closed. No booking confirmation has been received. Your room hold expires automatically after 10 minutes."
            );

            setBookingMessageType("info");
          },
        },
      };

      const checkout = new window.Razorpay(options);

      checkout.on("payment.failed", function (response) {
        if (checkoutDismissed) return;

        const reason =
          response?.error?.description ||
          response?.error?.reason ||
          "Payment was not completed.";

        setBookingLoading("");

        setBookingMessage(
          `Payment failed: ${reason} Your booking is not confirmed. Check My Bookings before attempting another payment.`
        );

        setBookingMessageType("error");
      });

      checkout.open();

      setBookingMessage(
        "Complete your payment in the Razorpay checkout window."
      );

      setBookingMessageType("info");
    } catch (err) {
      setBookingMessage(
        `Unable to open payment checkout: ${err.message}. Your room hold expires automatically after 10 minutes.`
      );

      setBookingMessageType("error");
      setBookingLoading("");
    }
  }

  async function openMyBookings() {
    if (!user) {
      setAuthMode("login");
      return;
    }

    setShowBookings(true);
    setMyBookingsLoading(true);
    setMyBookingsError("");

    try {
      await refreshMyBookings();
    } catch (err) {
      setMyBookingsError(err.message);
    } finally {
      setMyBookingsLoading(false);
    }
  }

  async function cancelBooking(bookingId) {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (!confirmed) return;

    setCancelLoading(bookingId);
    setMyBookingsError("");

    try {
      await apiRequest(`/api/v1/bookings/${bookingId}/cancel`, {
        method: "PATCH",
      });

      await refreshMyBookings();
    } catch (err) {
      setMyBookingsError(err.message);
    } finally {
      setCancelLoading("");
    }
  }

  function openHotel(hotel) {
    setSelectedHotel(hotel);

    setRooms([]);
    setRoomsError("");
    setBookingMessage("");
    setBookingMessageType("info");

    setCheckIn(dateOffset(1));
    setCheckOut(dateOffset(2));

    setGuestName(user?.name || "");
    setGuestEmail(user?.email || "");
    setGuestPhone("");
    setGuestCount("1");
    setSpecialRequests("");
  }

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#">
          MONSOON<span> STAYS</span>
        </a>

        <nav>
          <a href="#stays">Explore stays</a>
          <a href="#about">About</a>
        </nav>

        <div className="account">
          {user ? (
            <>
              <span className="welcome">Hi, {user.name}</span>

              <button className="text-btn" onClick={openMyBookings}>
                My bookings
              </button>

              <button className="outline-btn" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                className="text-btn"
                onClick={() => {
                  setAuthError("");
                  setAuthMode("login");
                }}
              >
                Log in
              </button>

              <button
                className="dark-btn"
                onClick={() => {
                  setAuthError("");
                  setAuthMode("register");
                }}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR MUMBAI ESCAPE STARTS HERE</p>

          <h1>
            Find your place
            <br />
            in the <em>city of dreams.</em>
          </h1>

          <p className="hero-description">
            Discover comfortable stays, explore vibrant neighbourhoods,
            and experience Mumbai your way.
          </p>

          <form
            className="search-box"
            onSubmit={(event) => {
              event.preventDefault();
              loadHotels(search);
            }}
          >
            

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search hotels or Mumbai locations..."
            />

            <button type="submit">Explore stays</button>
          </form>
        </div>

        <div className="hero-note">
          A CITY FULL OF STORIES. A STAY OF YOUR OWN.
        </div>
      </section>

      <section className="intro" id="about">
        <div>
          <p className="eyebrow">CURATED CITY EXPERIENCES</p>

          <h2>
            Stay somewhere
            <br />
            <em>worth remembering.</em>
          </h2>
        </div>

        <p className="intro-copy">
          From lively city streets to peaceful coastal corners,
          find a stay that makes your Mumbai visit special.
        </p>
      </section>

      <section className="stays" id="stays">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2>Explore our stays</h2>
          </div>

          <span>{hotels.length} properties</span>
        </div>

        {loading && (
          <p className="status">Discovering stays...</p>
        )}

        {error && (
          <div className="error">
            {error}
            <button onClick={() => loadHotels(search)}>Retry</button>
          </div>
        )}

        {!loading && !error && hotels.length === 0 && (
          <p className="status">No stays found. Try another search.</p>
        )}

        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <article className="hotel-card" key={hotel.id}>
              <div className="hotel-image">
                {hotel.image ? (
                  <img src={hotel.image} alt={hotel.name} />
                ) : (
                  <div className="image-placeholder">
                    MUMBAI | INDIA
                  </div>
                )}

                <span className="image-tag">CITY STAY</span>
              </div>

              <div className="hotel-info">
                <div className="hotel-location">
                  {hotel.location}
                </div>

                <h3>{hotel.name}</h3>
                <p>{hotel.description}</p>

                <div className="hotel-bottom">
                  <span>
                    {money(hotel.price)}
                  </span>

                  <button onClick={() => openHotel(hotel)}>
                    View stay
                  </button>
                </div>

                <small className="demo-note">
                  Demo property | Verify details before booking
                </small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <a className="brand" href="#">
          MONSOON<span> STAYS</span>
        </a>

        <p>Discover Mumbai. Stay a little longer.</p>

        <small>Copyright 2026 Monsoon Stays | Demo booking platform</small>
      </footer>

      {selectedHotel && (
        <div
          className="modal-backdrop"
          onClick={() => {
            if (!bookingLoading) {
              setSelectedHotel(null);
            }
          }}
        >
          <section
            className="modal booking-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedHotel(null)}
              disabled={Boolean(bookingLoading)}
              aria-label="Close"
            >
              &times;
            </button>

            <p className="eyebrow">PROPERTY DETAILS</p>

            <h2>{selectedHotel.name}</h2>
            <p>{selectedHotel.description}</p>

            <p>
              <strong>Location:</strong> {selectedHotel.address}
            </p>

            <p>
              <strong>Starting price:</strong>{" "}
              {money(selectedHotel.price)} / night
            </p>

            <div className="modal-divider" />

            <h3 className="booking-heading">
              Check room availability
            </h3>

            <form
              className="date-form"
              onSubmit={findAvailableRooms}
            >
              <label>
                Check-in

                <input
                  type="date"
                  value={checkIn}
                  min={dateOffset(1)}
                  onChange={(event) => {
                    setCheckIn(event.target.value);

                    if (event.target.value >= checkOut) {
                      const next = new Date(
                        `${event.target.value}T00:00:00`
                      );

                      next.setDate(next.getDate() + 1);

                      setCheckOut(
                        `${next.getFullYear()}-${String(
                          next.getMonth() + 1
                        ).padStart(2, "0")}-${String(
                          next.getDate()
                        ).padStart(2, "0")}`
                      );
                    }

                    setRooms([]);
                    setRoomsError("");
                    setBookingMessage("");
                  }}
                  required
                />
              </label>

              <label>
                Check-out

                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || dateOffset(2)}
                  onChange={(event) => {
                    setCheckOut(event.target.value);
                    setRooms([]);
                    setRoomsError("");
                    setBookingMessage("");
                  }}
                  required
                />
              </label>

              <button
                className="dark-btn full-btn"
                type="submit"
                disabled={roomsLoading || Boolean(bookingLoading)}
              >
                {roomsLoading
                  ? "Checking rooms..."
                  : "Check availability"}
              </button>
            </form>

            {roomsError && (
              <div className="inline-error">{roomsError}</div>
            )}

            {bookingMessage && (
              <div
                className={`inline-message payment-message ${bookingMessageType}`}
                role="status"
              >
                {bookingMessage}
              </div>
            )}

            {rooms.length > 0 && (
              <div className="available-rooms">
                <h3>Available rooms ({rooms.length})</h3>

                <div className="guest-details">
                  <h4>Guest details</h4>

                  {!user && (
                    <p className="guest-login-note">
                      Please log in before continuing to payment.
                    </p>
                  )}

                  <label>
                    Guest full name

                    <input
                      value={guestName}
                      onChange={(event) =>
                        setGuestName(event.target.value)
                      }
                      placeholder="Full name"
                      maxLength={100}
                      required
                    />
                  </label>

                  <label>
                    Guest email

                    <input
                      type="email"
                      value={guestEmail}
                      onChange={(event) =>
                        setGuestEmail(event.target.value)
                      }
                      placeholder="name@example.com"
                      maxLength={254}
                      required
                    />
                  </label>

                  <label>
                    Guest phone

                    <input
                      type="tel"
                      value={guestPhone}
                      onChange={(event) =>
                        setGuestPhone(event.target.value)
                      }
                      placeholder="Phone number with country code if needed"
                      minLength={8}
                      maxLength={20}
                      required
                    />
                  </label>

                  <label>
                    Number of guests

                    <input
                      type="number"
                      value={guestCount}
                      onChange={(event) =>
                        setGuestCount(event.target.value)
                      }
                      min="1"
                      max="10"
                      required
                    />
                  </label>

                  <label>
                    Special requests (optional)

                    <textarea
                      value={specialRequests}
                      onChange={(event) =>
                        setSpecialRequests(event.target.value)
                      }
                      placeholder="Any requests for the property?"
                      maxLength={1000}
                      rows={3}
                    />
                  </label>
                </div>

                {rooms.map((room) => (
                  <article className="room-card" key={room.id}>
                    <div>
                      <h4>{room.name}</h4>

                      <p>Capacity: {room.capacity} guests</p>

                      <strong>
                        {money(room.price)}
                      </strong>
                    </div>

                    <button
                      className="dark-btn"
                      disabled={Boolean(bookingLoading)}
                      onClick={() => createBooking(room)}
                    >
                      {bookingLoading === room.id
                        ? "Opening checkout..."
                        : "Pay & reserve"}
                    </button>
                  </article>
                ))}
              </div>
            )}

            <p className="booking-disclaimer">
              Secure payment is processed by Razorpay. Room prices are
              GST-inclusive; no additional tax is added at checkout.
              Your booking is confirmed only after our server verifies
              the payment.
            </p>
          </section>
        </div>
      )}

      {showBookings && (
        <div
          className="modal-backdrop"
          onClick={() => setShowBookings(false)}
        >
          <section
            className="modal bookings-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowBookings(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <p className="eyebrow">YOUR ACCOUNT</p>
            <h2>My bookings</h2>

            {myBookingsLoading && (
              <p className="status">Loading your bookings...</p>
            )}

            {myBookingsError && (
              <div className="inline-error">{myBookingsError}</div>
            )}

            {!myBookingsLoading &&
              !myBookingsError &&
              myBookings.length === 0 && (
                <p className="status">
                  You haven't made any reservations yet.
                </p>
              )}

            <div className="booking-list">
              {myBookings.map((booking) => (
                <article className="booking-card" key={booking.id}>
                  <div className="booking-card-top">
                    <div>
                      <h3>
                        {booking.room?.hotel?.name ||
                          "Hotel reservation"}
                      </h3>

                      <p>{booking.room?.name || "Room"}</p>
                    </div>

                    <span
                      className={`booking-status ${String(
                        booking.status
                      ).toLowerCase()}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <p>
                    <strong>Check-in:</strong>{" "}
                    {formatDate(booking.checkIn)}
                  </p>

                  <p>
                    <strong>Check-out:</strong>{" "}
                    {formatDate(booking.checkOut)}
                  </p>

                  <p>
                    <strong>Total:</strong> {money(booking.total)}
                  </p>

                  <p className="booking-reference">
                    Reference: {booking.id}
                  </p>

                  {["PENDING", "CONFIRMED"].includes(
                    booking.status
                  ) && (
                    <button
                      className="cancel-btn"
                      disabled={cancelLoading === booking.id}
                      onClick={() => cancelBooking(booking.id)}
                    >
                      {cancelLoading === booking.id
                        ? "Cancelling..."
                        : "Cancel reservation"}
                    </button>
                  )}
                </article>
              ))}
            </div>

            <p className="booking-disclaimer">
              Only bookings marked CONFIRMED have completed payment
              verification. Refund processing may take additional time.
            </p>
          </section>
        </div>
      )}

      {authMode && (
        <div
          className="modal-backdrop"
          onClick={() => setAuthMode("")}
        >
          <form
            className="modal auth-modal"
            onSubmit={submitAuth}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setAuthMode("")}
              aria-label="Close"
            >
              &times;
            </button>

            <p className="eyebrow">WELCOME TO MONSOON STAYS</p>

            <h2>
              {authMode === "login"
                ? "Welcome back."
                : "Create your account."}
            </h2>

            {authError && (
              <div className="inline-error">{authError}</div>
            )}

            {authMode === "register" && (
              <input
                name="name"
                placeholder="Your name"
                required
              />
            )}

            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password (minimum 8 characters)"
              minLength="8"
              required
            />

            <button
              className="dark-btn full-btn"
              type="submit"
              disabled={authLoading}
            >
              {authLoading
                ? "Please wait..."
                : authMode === "login"
                  ? "Log in"
                  : "Create account"}
            </button>

            <p className="switch-auth">
              {authMode === "login"
                ? "New here?"
                : "Already registered?"}

              <button
                type="button"
                onClick={() => {
                  setAuthError("");

                  setAuthMode(
                    authMode === "login" ? "register" : "login"
                  );
                }}
              >
                {authMode === "login" ? " Sign up" : " Log in"}
              </button>
            </p>
          </form>
        </div>
      )}
    </main>
  );
}

export default App;



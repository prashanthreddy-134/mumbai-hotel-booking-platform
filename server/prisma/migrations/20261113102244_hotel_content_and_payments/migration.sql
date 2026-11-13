
-- AlterTable
ALTER TABLE "Booking"
ADD COLUMN "guestCount" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN "guestEmail" TEXT,
ADD COLUMN "guestName" TEXT,
ADD COLUMN "guestPhone" TEXT,
ADD COLUMN "holdExpiresAt" TIMESTAMP(3),
ADD COLUMN "specialRequests" TEXT;

-- CreateTable
CREATE TABLE "HotelImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "altText" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "hotelId" TEXT NOT NULL,

    CONSTRAINT "HotelImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HotelAmenity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,

    CONSTRAINT "HotelAmenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HotelPolicy" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hotelId" TEXT NOT NULL,

    CONSTRAINT "HotelPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomAmenity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "RoomAmenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "status" TEXT NOT NULL DEFAULT 'CREATED',
    "provider" TEXT NOT NULL DEFAULT 'RAZORPAY',
    "razorpayOrderId" TEXT,
    "razorpayPaymentId" TEXT,
    "razorpaySignature" TEXT,
    "refundId" TEXT,
    "refundStatus" TEXT,
    "refundedAmount" DOUBLE PRECISION,
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentWebhookEvent" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'RAZORPAY',
    "eventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentWebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "HotelImage_hotelId_sortOrder_idx"
ON "HotelImage"("hotelId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "HotelAmenity_hotelId_name_key"
ON "HotelAmenity"("hotelId", "name");

-- CreateIndex
CREATE INDEX "HotelPolicy_hotelId_idx"
ON "HotelPolicy"("hotelId");

-- CreateIndex
CREATE UNIQUE INDEX "RoomAmenity_roomId_name_key"
ON "RoomAmenity"("roomId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_razorpayOrderId_key"
ON "Payment"("razorpayOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_razorpayPaymentId_key"
ON "Payment"("razorpayPaymentId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_refundId_key"
ON "Payment"("refundId");

-- CreateIndex
CREATE INDEX "Payment_bookingId_createdAt_idx"
ON "Payment"("bookingId", "createdAt");

-- CreateIndex
CREATE INDEX "Payment_status_idx"
ON "Payment"("status");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentWebhookEvent_eventId_key"
ON "PaymentWebhookEvent"("eventId");

-- CreateIndex
CREATE INDEX "Booking_roomId_status_checkIn_checkOut_idx"
ON "Booking"("roomId", "status", "checkIn", "checkOut");

-- CreateIndex
CREATE INDEX "Booking_userId_createdAt_idx"
ON "Booking"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Booking_status_holdExpiresAt_idx"
ON "Booking"("status", "holdExpiresAt");

-- AddForeignKey
ALTER TABLE "HotelImage"
ADD CONSTRAINT "HotelImage_hotelId_fkey"
FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HotelAmenity"
ADD CONSTRAINT "HotelAmenity_hotelId_fkey"
FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HotelPolicy"
ADD CONSTRAINT "HotelPolicy_hotelId_fkey"
FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomAmenity"
ADD CONSTRAINT "RoomAmenity_roomId_fkey"
FOREIGN KEY ("roomId") REFERENCES "Room"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment"
ADD CONSTRAINT "Payment_bookingId_fkey"
FOREIGN KEY ("bookingId") REFERENCES "Booking"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;

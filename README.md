# Mumbai Hotel Booking Platform

A full-stack hotel booking platform focused on discovering hotels in Mumbai, checking room availability, managing reservations, and processing payments through Razorpay.

## Features

### Frontend
- Hotel listing and hotel details.
- Room availability interface.
- Booking and guest information forms.
- Checkout and payment interface.
- Responsive React application.

### Backend
- REST API built with Node.js and Express.
- PostgreSQL database with Prisma ORM.
- User authentication using JWT.
- Password hashing with bcrypt.
- Hotel, room, and booking management.
- Booking holds and room-capacity validation.
- Razorpay payment order creation and verification.
- Payment webhook processing.
- Request validation and security middleware.

## Technology Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript, CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | JWT, bcrypt |
| Payments | Razorpay |
| Testing | Vitest, Supertest |
| Security | Helmet, CORS, Express Rate Limit, Zod |

## Project Structure

```text
mumbai-hotel-booking-platform/
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
│
├── server/
│   ├── generated/
│   │   └── prisma/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.js
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── index.js
│   ├── tests/
│   ├── .env.example
│   └── package.json
│
└── .gitignore
```

## Prerequisites

Install the following before running the project:

- Node.js
- npm
- PostgreSQL
- Git

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/prashanthreddy-134/mumbai-hotel-booking-platform.git

cd mumbai-hotel-booking-platform
```

### 2. Configure the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory using `.env.example` as a template.

Configure your PostgreSQL connection and application credentials:

```env
PORT=4000

DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/mumbai_hotel_db?schema=public"

JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=1h

RAZORPAY_KEY_ID=your_razorpay_test_key_id
RAZORPAY_KEY_SECRET=your_razorpay_test_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

Create the PostgreSQL database named `mumbai_hotel_db` before running migrations.

### 3. Run database migrations

From the `server` directory:

```bash
npx prisma migrate deploy
npx prisma generate
```

### 4. Seed the database

```bash
node prisma/seed.js
```

### 5. Start the backend

```bash
npm run dev
```

Backend default URL:

```text
http://localhost:4000
```

### 6. Start the frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## Testing

Run backend tests:

```bash
cd server
npm test
```

Run frontend lint checks:

```bash
cd client
npm run lint
```

Build the frontend:

```bash
npm run build
```

## Environment Variables and Security

- Never commit `.env` files.
- Use `.env.example` as a configuration template.
- Never expose Razorpay secret keys or JWT secrets.
- Use Razorpay test credentials while testing payments.
- Configure production credentials securely before deployment.

## Payment Integration

The project includes Razorpay order creation, payment verification, and webhook processing.

**Important:** The webhook delivery flow still requires verification before production use. Do not use this repository as evidence of a production-ready payment system.

## Current Project Status

- Backend test suite: 59 tests passed across 6 test files.
- Frontend lint: passed.
- Frontend production build: passed.
- PostgreSQL migrations: applied successfully.
- Razorpay: test-mode integration implemented; webhook delivery requires further verification.

## Author

**Prashanth Reddy**

GitHub: [@prashanthreddy-134](https://github.com/prashanthreddy-134)

## License

No license has been added yet. All rights are reserved unless a license is added to this repository.

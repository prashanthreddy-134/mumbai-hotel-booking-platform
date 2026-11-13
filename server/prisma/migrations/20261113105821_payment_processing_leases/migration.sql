-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "refundAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "refundCreateAttemptedAt" TIMESTAMP(3),
ADD COLUMN     "refundLockExpiresAt" TIMESTAMP(3),
ADD COLUMN     "refundLockToken" TEXT;

-- AlterTable
ALTER TABLE "PaymentWebhookEvent" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastError" TEXT,
ADD COLUMN     "processingLockExpiresAt" TIMESTAMP(3),
ADD COLUMN     "processingToken" TEXT;

-- CreateIndex
CREATE INDEX "Payment_refundLockExpiresAt_idx" ON "Payment"("refundLockExpiresAt");

-- CreateIndex
CREATE INDEX "PaymentWebhookEvent_processingLockExpiresAt_idx" ON "PaymentWebhookEvent"("processingLockExpiresAt");

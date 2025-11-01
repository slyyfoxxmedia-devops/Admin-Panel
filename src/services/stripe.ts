import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

export { stripePromise }

export const stripeConfig = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
  secretKey: import.meta.env.VITE_STRIPE_SECRET_KEY || '',
  webhookSecret: import.meta.env.VITE_STRIPE_WEBHOOK_SECRET || '',
}
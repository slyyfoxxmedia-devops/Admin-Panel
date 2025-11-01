import { useState } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { stripePromise } from '../services/stripe'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    const card = elements.getElement(CardElement)
    
    if (card) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      })

      if (error) {
        console.error(error)
      } else {
        console.log('Payment method created:', paymentMethod)
      }
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-burnt-orange text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  )
}

const PaymentForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Test Payment</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default PaymentForm
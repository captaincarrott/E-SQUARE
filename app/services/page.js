export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#1C65A2] mb-4">
          Our Services 🚀
        </h1>

        {/* INTRO */}
        <p className="text-gray-600 leading-7 mb-8">
          We provide a complete e-commerce experience designed to make online
          shopping fast, easy, and reliable for everyone.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg hover:shadow-md transition">
            <h2 className="font-bold text-lg mb-2">🛒 Online Shopping</h2>
            <p className="text-gray-600 text-sm">
              Browse thousands of products and add them to your cart in seconds.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow-md transition">
            <h2 className="font-bold text-lg mb-2">🚚 Fast Delivery</h2>
            <p className="text-gray-600 text-sm">
              Quick and reliable delivery service to your doorstep.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow-md transition">
            <h2 className="font-bold text-lg mb-2">💳 Secure Checkout</h2>
            <p className="text-gray-600 text-sm">
              Safe checkout experience with multiple payment options.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow-md transition">
            <h2 className="font-bold text-lg mb-2">📦 Order Tracking</h2>
            <p className="text-gray-600 text-sm">
              Track your orders in real-time from purchase to delivery.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow-md transition">
            <h2 className="font-bold text-lg mb-2">🎧 Customer Support</h2>
            <p className="text-gray-600 text-sm">
              24/7 support to help you with any issue or question.
            </p>
          </div>

          <div className="p-5 border rounded-lg hover:shadow-md transition">
            <h2 className="font-bold text-lg mb-2">🔄 Easy Returns</h2>
            <p className="text-gray-600 text-sm">
              Hassle-free return policy for a better shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

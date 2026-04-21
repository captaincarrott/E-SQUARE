export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#1C65A2] mb-4">
          About Our Platform 🛒
        </h1>

        {/* INTRO */}
        <p className="text-gray-600 leading-7 mb-8">
          Welcome to <span className="font-semibold">E-Square</span> — a modern
          e-commerce platform designed to connect customers with a wide range of
          products in one place. We focus on simplicity, speed, and a smooth
          shopping experience.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg">
            <h2 className="font-bold text-lg mb-2">🛍️ Wide Selection</h2>
            <p className="text-gray-600 text-sm">
              Thousands of products across multiple categories in one place.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h2 className="font-bold text-lg mb-2">⚡ Fast Experience</h2>
            <p className="text-gray-600 text-sm">
              Optimized platform for fast browsing and smooth checkout.
            </p>
          </div>

          <div className="p-5 border rounded-lg">
            <h2 className="font-bold text-lg mb-2">🔒 Secure Shopping</h2>
            <p className="text-gray-600 text-sm">
              Safe and reliable shopping experience for all users.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-10 text-center text-gray-600">
          <p>
            Our mission is to make online shopping simple, fast, and accessible
            for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-gray-800">
        <div className="text-xl font-bold">🍴 Premium Restaurant</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Menu</a>
          <a href="#" className="hover:text-orange-400">Pages</a>
          <a href="#" className="hover:text-orange-400">Blog</a>
          <a href="#" className="hover:text-orange-400">Contact</a>
        </nav>
        <button className="bg-orange-500 px-4 py-2 rounded">Sign In</button>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-16 text-center bg-gray-900">
        <h1 className="text-5xl font-extrabold">Anida Dedelay</h1>
        <p className="mt-4 text-lg">Best healthy salad served in our restaurant</p>
        <button className="mt-6 bg-orange-500 px-6 py-3 rounded">Learn More</button>
        <div className="mt-10">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Fruit Bowl"
            className="mx-auto rounded-full border-4 border-gray-700"
          />
        </div>
      </section>

      {/* Orange Benefit Section */}
      <section className="px-8 py-12 bg-gray-800 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-2">Orange Benefit</h2>
          <p className="mb-4">Just imagine seeds and summer in golden sunshine.</p>
          <button className="bg-orange-500 px-6 py-2 rounded">Learn More</button>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/150x150"
            alt="Orange Juice"
            className="rounded-lg mt-6 md:mt-0"
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <img src="https://via.placeholder.com/150" alt="Product" className="rounded mb-4" />
            <h3 className="text-lg font-bold">
              {index === 0 ? "ARCU VOLUT FAT VITAE" : index === 1 ? "$19.99, 90.99€" : "SFILEY TUN DENARD"}
            </h3>
            <p className="text-sm">
              {index === 0 ? "Pheristers lgeart" : index === 1 ? "Orviste past bronps" : "Ongand sunfires"}
            </p>
          </div>
        ))}
      </section>

      {/* Seeds + Summer Banner */}
      <section className="px-8 py-12 flex flex-col md:flex-row items-center justify-between bg-gray-800">
        <div className="text-white max-w-md">
          <h2 className="text-2xl font-bold mb-2">Just imagine seeds and summer in gell sunshine.</h2>
        </div>
        <div>
          <img src="https://via.placeholder.com/150" alt="Red Berries" className="rounded mb-4" />
          <button className="bg-orange-500 px-4 py-2 rounded">Read More</button>
        </div>
      </section>

      {/* Menu Benefits */}
      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900">
        <div className="bg-gray-800 p-6 rounded text-center">
          <img src="https://via.placeholder.com/100" alt="Hello Bowl" className="mx-auto mb-4 rounded" />
          <p className="text-xl font-bold">HELLO.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-orange-400 font-bold">FRESH</p>
            <p>Ripe picked on mountains</p>
          </div>
          <div>
            <p className="text-orange-400 font-bold">VITAMIN</p>
            <p>Nipen non season premium</p>
          </div>
          <div>
            <p className="text-orange-400 font-bold">ORGANIC</p>
            <p>Towers plus warranties</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 bg-gray-800 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-2">Opening Hours</h4>
            <ul>
              <li>Monday: 17:00 - 21:00</li>
              <li>Tuesday: 16:20 - 21:00</li>
              <li>Wednesday: 19:00 - 21:00</li>
              <li>Thursday: 13:00 - 21:00</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-orange-400">Support</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

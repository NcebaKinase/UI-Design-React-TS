import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-orange-400">Premium Restaurant</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Menu</a>
          <a href="#" className="hover:text-orange-400">Pages</a>
          <a href="#" className="hover:text-orange-400">Blog</a>
          <a href="#" className="hover:text-orange-400">Contact Us</a>
        </nav>
        <Button className="bg-orange-500 hover:bg-orange-600">Sign In</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Anida Dedelay</h2>
          <p className="mb-6 text-lg">Best healthy salad served in our restaurant</p>
          <Button className="bg-orange-500 hover:bg-orange-600">Learn More</Button>
        </div>
        <img src="/images/hero-salad.jpg" alt="Healthy Salad" className="w-full md:w-1/2 rounded-xl shadow-lg" />
      </section>

      {/* Orange Section */}
      <section className="bg-gray-900 px-8 py-16">
        <h3 className="text-3xl font-semibold mb-4">Orange Benefit</h3>
        <p className="mb-6">Just imagine seeds and summer in golden sunshine.</p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src="/images/orange-juice.jpg" alt="Orange Juice" className="w-full md:w-1/3 rounded-xl" />
          <Button className="bg-orange-500 hover:bg-orange-600">Learn More</Button>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16">
        <Card>
          <CardContent className="p-4">
            <img src="/images/orange-1.jpg" alt="Orange" className="rounded mb-4" />
            <p>ARCU VOLUT FAT VITAE</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="/images/orange-2.jpg" alt="Orange Sliced" className="rounded mb-4" />
            <p>$19.99, 90.99€</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <img src="/images/berries.jpg" alt="Berries" className="rounded mb-4" />
            <p>Sfiely Tun Denard</p>
          </CardContent>
        </Card>
      </section>

      {/* Quote Section */}
      <section className="px-8 py-16 bg-black">
        <div className="text-xl font-semibold mb-4">Just imagine seeds and summer in gel sunshine.</div>
        <div className="flex gap-8">
          <img src="/images/red-berries.jpg" alt="Berries" className="w-1/2 rounded" />
          <div>
            <p className="mb-4 font-medium">Ebee Wous Benefit</p>
            <p className="mb-4">With a twist that’s heavenly sweet.</p>
            <Button className="bg-orange-500 hover:bg-orange-600">Read More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-gray-900 grid md:grid-cols-2 gap-12">
        <img src="/images/cherries.jpg" alt="Cherries" className="rounded-xl" />
        <div>
          <h4 className="text-2xl font-bold mb-6">Our Menu Benefit</h4>
          <ul className="space-y-4">
            <li>
              <strong>Fresh:</strong> Ripe and no additives
            </li>
            <li>
              <strong>Vitamin:</strong> Rich in nutrients
            </li>
            <li>
              <strong>Organic:</strong> Toward wellness
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-bold mb-4">Opening Hours</h5>
            <ul>
              <li>Monday: 17:00 - 21:00</li>
              <li>Tuesday: 18:00 - 21:00</li>
              <li>Wednesday: 13:00 - 19:00</li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Pages</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
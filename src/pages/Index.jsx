import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSignup = () => {
    // Handle newsletter signup logic here
    console.log("Signed up with email:", email);
  };

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Clothes Store</h1>
          <Button className="mt-4">Shop Now</Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example product cards */}
          <Card>
            <CardHeader>
              <CardTitle>Product 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/product1.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4" />
              <p className="text-lg font-semibold">$29.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/product2.jpg" alt="Product 2" className="w-full h-48 object-cover mb-4" />
              <p className="text-lg font-semibold">$39.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product 3</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/product3.jpg" alt="Product 3" className="w-full h-48 object-cover mb-4" />
              <p className="text-lg font-semibold">$49.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product 4</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/product4.jpg" alt="Product 4" className="w-full h-48 object-cover mb-4" />
              <p className="text-lg font-semibold">$59.99</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto text-center py-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Sign Up for Our Newsletter</h2>
        <p className="mb-6">Stay updated with the latest news and exclusive offers.</p>
        <div className="flex justify-center items-center space-x-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-64"
          />
          <Button onClick={handleNewsletterSignup}>Sign Up</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
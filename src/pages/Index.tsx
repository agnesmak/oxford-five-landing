import { Award, Globe, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-oxford-dark mb-6 animate-fade-up">
            Welcome to Oxford V
          </h1>
          <p className="text-xl text-oxford-gray mb-8 max-w-2xl mx-auto animate-fade-up">
            Empowering businesses with innovative solutions for tomorrow's challenges
          </p>
          <button className="bg-oxford-purple text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-oxford-purple/90 transition-colors animate-fade-up">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-oxford-dark text-center mb-12">
            Why Choose Oxford V
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Global Reach"
              description="Connect with clients and partners worldwide through our extensive network"
              Icon={Globe}
            />
            <FeatureCard
              title="Excellence"
              description="Award-winning solutions backed by years of expertise and innovation"
              Icon={Award}
            />
            <FeatureCard
              title="Customer Focus"
              description="Dedicated support and personalized solutions for your success"
              Icon={Heart}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-oxford-dark text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-300 mb-8">
              Oxford V is committed to delivering exceptional value through innovative solutions. 
              Our team of experts works tirelessly to ensure your success in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-oxford-dark text-center mb-8">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-oxford-gray mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-oxford-purple"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-oxford-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-oxford-purple"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-oxford-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-oxford-purple"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-oxford-purple text-white py-3 rounded-lg font-semibold hover:bg-oxford-purple/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oxford-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Oxford V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
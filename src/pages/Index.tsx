import { Database, BarChart3, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-oxford-white mb-6 animate-fade-up">
            Improve Your Brand Presence Through
            <span className="text-oxford-blue block mt-2">Actionable Insights</span>
          </h1>
          <p className="text-base text-oxford-white/80 mb-8 max-w-2xl mx-auto animate-fade-up">
            As consumers embrace AI tools like ChatGPT and Google Gemini, there are challenges for traditional SEO to keep up. Our AI-SEO solutions leverage advanced benchmarks to optimize your brand's presence in the AI-driven search landscape.
          </p>
          <button className="bg-gradient-to-r from-[#045EEC] to-[#0F2D6E] text-oxford-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity animate-fade-up">
            Book a free consultation
          </button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-oxford-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-oxford-navy">
                Our Vision
              </h2>
              <p className="text-oxford-navy/80 text-lg leading-relaxed">
                To empower your brand to thrive in the age of AI by maximizing your brand presence and business impact in Large Language Model interactions.
              </p>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-oxford-blue/5 to-oxford-navy/5 p-8">
                <img
                  src="/placeholder.svg"
                  alt="AI Vision Illustration"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-oxford-white text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Data Analytics"
              description="Transform raw data into meaningful insights with our advanced analytics solutions"
              Icon={Database}
            />
            <FeatureCard
              title="Marketing Intelligence"
              description="Make data-driven marketing decisions with our comprehensive analytics tools"
              Icon={BarChart3}
            />
            <FeatureCard
              title="Global Reach"
              description="Connect with markets worldwide through our international network and expertise"
              Icon={Globe}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-oxford-navy/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-oxford-white">About Us</h2>
            <p className="text-lg text-oxford-white/80 mb-8">
              Oxford V is a leading marketing technology and data analytics consulting firm. 
              We help businesses harness the power of data to drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-oxford-navy/30 backdrop-blur-sm rounded-xl border border-oxford-white/10 p-8">
            <h2 className="text-3xl font-bold text-oxford-white text-center mb-8">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-oxford-white/80 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-oxford-white/5 border border-oxford-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-oxford-blue text-oxford-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-oxford-white/80 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-oxford-white/5 border border-oxford-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-oxford-blue text-oxford-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-oxford-white/80 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-oxford-white/5 border border-oxford-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-oxford-blue text-oxford-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-oxford-blue text-oxford-white py-3 rounded-lg font-semibold hover:bg-oxford-blue/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oxford-navy py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-oxford-white/60">&copy; 2024 Oxford V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

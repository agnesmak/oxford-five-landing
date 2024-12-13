import React from "react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
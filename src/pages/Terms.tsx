import React from "react";
import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-oxford-white text-4xl font-bold mb-8">Terms and Conditions</h1>
          <div className="text-oxford-white/80 space-y-6">
            <p>Last Updated: December 16th, 2024</p>
            <p>Welcome to Oxford Five ("we", "us", or "our"). By accessing or using our website (the "Site"), you agree to comply with and be bound by the following Terms and Conditions ("Terms"). Please review these Terms carefully. If you do not agree to these Terms, you should not use this Site.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">1. Use of the Site</h2>
            <p>Our Site allows users to learn about our services, book a consultation call, and join our waitlist. You agree to use this Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">2. Intellectual Property</h2>
            <p>All content on this Site, including text, graphics, logos, images, and software, is the property of Oxford Five or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or otherwise use our content without our prior written permission.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">3. Joining the Waitlist</h2>
            <p>By providing your email address to join our waitlist, you consent to receive email communications from us. We reserve the right to contact you via email regarding updates, service information, or other relevant communications related to our offerings. You can opt-out of these communications at any time by following the unsubscribe instructions provided in the email.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">4. Booking a Call</h2>
            <p>When booking a consultation call through the Site, you agree to provide accurate information and adhere to any scheduling policies we may have. This call is provided as a preliminary discussion about our services and does not constitute a formal client relationship or binding agreement for services.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">5. Limitation of Liability</h2>
            <p>While we aim to keep information on the Site accurate and up-to-date, we make no warranties or representations about the accuracy or completeness of the Site’s content. We are not liable for any direct, indirect, incidental, or consequential loss or damage arising from the use of or inability to use the Site or its content.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">6. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from these Terms or your use of the Site will be subject to the exclusive jurisdiction of the courts of the United Kingdom.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">7. Changes to These Terms</h2>
            <p>We may revise these Terms from time to time. Any changes will be posted on this page, and your continued use of the Site after such changes are made constitutes your acceptance of the updated Terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

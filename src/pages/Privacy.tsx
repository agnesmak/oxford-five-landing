import React from "react";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-oxford-white text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="text-oxford-white/80 space-y-6">
            <p>Last Updated: December 16th, 2024</p>
            <p>Oxford Five ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and store your personal data when you visit our website (the "Site"), join our waitlist, book a call, or otherwise interact with us. Please read this policy carefully to understand how we handle your information.</p>
            
            <h2 className="text-2xl font-bold text-oxford-white mt-8">1. Information We Collect</h2>
            <p>We collect personal information directly from you when you use our Site, including:</p>
            <p>Contact Information: When you join our waitlist or book a call, we collect your name and email address, as well as ask for your location and your message. We also ask for non-mandatory additional information like your LinkedIn profile which you tell us at your own discretion.</p>
            <p>Website Usage Data: We may collect information about your interaction with our Site, such as IP address, browser type, pages visited, and other analytics data to help improve the user experience.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">2. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <p>To Provide Services: We use your contact information to manage waitlist entries, confirm bookings, and communicate about our services.</p>
            <p>To Send Communications: By joining our waitlist, you consent to receive emails from us, including updates, marketing materials, and other information related to our services. You can opt-out of these communications at any time by following the unsubscribe instructions in the email.</p>
            <p>To Improve Our Site: We may use analytics data to optimize our Site's performance and ensure a smooth user experience.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">3. Data Sharing and Disclosure</h2>
            <p>We will not sell, rent, or lease your personal information to third parties. We may share your information only under the following circumstances:</p>
            <p>With Service Providers: We may share your data with trusted third-party service providers who assist us in operating the Site or conducting our business, provided they agree to keep your data confidential and secure.</p>
            <p>To Comply with Legal Obligations: We may disclose your information if required by law or to respond to legal requests, such as subpoenas, court orders, or to protect our rights.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">4. Data Storage and Retention</h2>
            <p>We store your personal information securely and retain it only as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required by law. We regularly review our data retention practices to ensure that data is not kept longer than needed.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">5. Your Rights Under GDPR</h2>
            <p>If you are located in the UK or EU, you have certain rights regarding your personal data under the General Data Protection Regulation (GDPR), including:</p>
            <p>Access: You have the right to request access to your personal information.</p>
            <p>Correction: You can request that we correct or update any inaccurate information.</p>
            <p>Deletion: You have the right to request the deletion of your data, subject to legal obligations.</p>
            <p>Restriction: You can ask us to limit the processing of your data under certain conditions.</p>
            <p>Objection: You can object to the processing of your personal data for direct marketing.</p>
            <p>Data Portability: You may request a copy of your data in a machine-readable format.</p>
            <p>To exercise any of these rights, please contact us through our ‘Contact Us’ form on the website.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">6. Security Measures</h2>
            <p>We take reasonable precautions to protect your personal information from unauthorized access, use, alteration, or disclosure. However, please note that no data transmission or storage system is completely secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">7. Cookies and Tracking Technologies</h2>
            <p>Our Site may use cookies and similar tracking technologies to enhance the user experience and analyse Site traffic. You may control the use of cookies through your browser settings.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and we encourage you to review this policy regularly.</p>

            <h2 className="text-2xl font-bold text-oxford-white mt-8">9. Contact Us</h2>
            <p>If you have any questions, concerns, or requests related to this Privacy Policy, please contact us at through our ‘Contact Us’ form on the website.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

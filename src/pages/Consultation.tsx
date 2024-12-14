import React from "react";
import ConsultationForm from "@/components/consultation/ConsultationForm";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-gradient-dark py-20 px-4">
      <div className="container max-w-2xl mx-auto">
        <h1 className="text-3xl font-sofia font-semibold text-oxford-white mb-8 text-center">
          Book a Free Consultation
        </h1>
        <ConsultationForm />
      </div>
    </div>
  );
};

export default Consultation;
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Portfolio } from "@/components/sections/Portfolio";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Cta } from "@/components/sections/Cta";
import { useState } from "react";
import { CallbackModal, MeasurementModal, CalculationModal, QuestionModal, SuccessModal } from "@/components/ui/modal";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    closeModal();
    setActiveModal("success");
  };

  return (
    <div className="bg-[#F5E6D3] min-h-screen text-[#666666]">
      <Navbar onOpenCallback={() => openModal("callback")} />
      <Hero 
        onOpenMeasurement={() => openModal("measurement")} 
        onOpenCalculation={() => openModal("calculation")} 
      />
      <Services />
      <Pricing onOpenCalculation={() => openModal("calculation")} />
      <Portfolio />
      <Reviews onOpenReviewForm={() => openModal("review")} />
      <Faq onOpenContactForm={() => openModal("contact")} />
      <Cta 
        onOpenMeasurement={() => openModal("measurement")} 
      />
      <Contact />
      <Footer onOpenCallback={() => openModal("callback")} />

      {/* Modals */}
      <CallbackModal 
        isOpen={activeModal === "callback"} 
        onClose={closeModal} 
        onSuccess={showSuccess} 
      />
      <MeasurementModal 
        isOpen={activeModal === "measurement"} 
        onClose={closeModal} 
        onSuccess={showSuccess} 
      />
      <CalculationModal 
        isOpen={activeModal === "calculation"} 
        onClose={closeModal} 
        onSuccess={showSuccess} 
      />
      <QuestionModal 
        isOpen={activeModal === "contact"} 
        onClose={closeModal} 
        onSuccess={showSuccess} 
      />
      <SuccessModal 
        isOpen={activeModal === "success"} 
        onClose={closeModal} 
        message={successMessage} 
      />
    </div>
  );
}

import { useState } from "react";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  const [showContactCard, setShowContactCard] = useState<boolean>(false);

  const toggleContactCard = () => {
    setShowContactCard(true);
  };

  const closeContactCard = () => {
    setShowContactCard(false);
  };
  
  return (
    <div className="flex-1 h-fit border justify-between space-y-4 border-white bg-white rounded-xl shadow-lg p-10">
      <p className="flex text-balance font-bold text-xl">
        Looking for a customized countdown page?</p>

      <p className="flex text-balance">
        If you need a countdown page designed for your event, reach out to me and I can make it happen. </p>

      <button className="flex items-center px-8 py-2 bg-primary-300 rounded-xl"
      onClick={toggleContactCard}>
        Request Services
      </button>

      {
        showContactCard && (
          <div className='fixed flex h-full items-center justify-center inset-0 bg-primary-900 bg-opacity-80' 
            onClick={closeContactCard}>
            <div onClick={(e) => e.stopPropagation()}>
              <ContactCard/>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ContactSection

import React from "react";
import video from "../Assets/video.mp4";
import DetailsForm from "../Component/TopForm/detailsForm.js";
import googleLogo from "../Assets/Google.svg";
import trustpilotLogo from "../Assets/trustpilot.svg";

const HearingAidTrial = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-8 px-4 -mt-7">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:flex-row flex-col">
        {/* Left Section */}
        <div className="flex-1 w-full md:w-auto">
          <h1 className="text-2xl md:text-4xl font-bold mt-6">
            This German hearing aid provides the best value for your money
          </h1>
          <ul className="mt-4 space-y-2 text-lg">
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Nearly invisible design
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Outstanding speech clarity
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Smartphone connectivity
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 font-bold text-lg mr-2">✔</span>
              Rechargeable battery
            </li>
          </ul>

          {/* Video Section */}
          <div className="mt-6">
            <video
              src={video}
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-lg shadow-lg"
            ></video>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full md:w-auto bg-white rounded-lg shadow-lg p-8">
          <DetailsForm />
          <p className="text-xs text-center text-gray-500 mt-4">
            By proceeding, you are authorizing us to contact you via WhatsApp,
            SMS, RCS & Email for providing consultation, updates, and sharing
            relevant product information & offers. You also agree to our T&C and
            Privacy Policy.
          </p>

          {/* Rating Card */}
          <div className="mt-6 p-4 rounded-lg flex flex-col md:flex-row items-center gap-4 text-center ">
            <div className="flex items-center space-x-4">
              <img src={googleLogo} alt="Google Rating" className="h-10" />
              <div>
                <p className="font-semibold">4.8/5</p>
                <p className="text-yellow-500">★★★★★</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src={trustpilotLogo} alt="Trustpilot Rating" className="h-10" />
              <div>
                <p className="font-semibold">4.7/5</p>
                <p className="text-green-500">★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearingAidTrial;

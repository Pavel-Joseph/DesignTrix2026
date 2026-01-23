import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contact, instaLink } from "../data";

const ContactUs = ({ handleHover }) => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-6"
    >
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Logo and Contact Details */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-start">
            <img
              src="/images/clg_logo.png" // Replace with your logo path
              alt="Logo"
              className="h-20 animate-bounce"
              loading="lazy"
            />
          </div>

          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-lg">
            Have any question? Feel free to reach out to us. We're here to help!
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-yellow-500 text-2xl" />
              <div>
                <p className="text-gray-400">Email Us</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg font-medium hover:text-pink-400 transition-colors"
                  {...handleHover}
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-yellow-500 text-2xl" />
              <div>
                <p className="text-gray-400">Call Us</p>
                <p className="text-lg font-medium" {...handleHover}>
                  {contact.number}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
              <div>
                <p className="text-gray-400">Visit Us</p>
                <p className="text-lg font-medium">{contact.loc}</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              {...handleHover}
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-3xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              {...handleHover}
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-lg font-medium hover:text-pink-400">DesignTrix'25</p>
            </a>
          </div>
        </div>

        {/* Right Section - Google Map */}
        <div className="bg-gray-950 p-6 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8968250621238!2d80.13872847455247!3d13.356691106319635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1739514651050!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer - Copyright */}
      <div className="mt-12 text-center text-gray-500">
        <p>© 2026 DesignTrix. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactUs;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import logo from "../Asset/5.png"; // ✅ Your company logo

export default function Getquote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Replace these with your EmailJS values
    const serviceID = "service_c8zwr8d";
    const templateID = "template_bcduukf";
    const publicKey = "LFX8iNoiu475bAYhF";

    emailjs.send(
  serviceID,
  templateID,
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    message: formData.message,
  },
  publicKey
   )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("❌ Failed to send. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const serviceHints = {
    "Residential Construction": "Build your dream home with trusted experts.",
    "Commercial Projects": "Tailored solutions for offices, malls & complexes.",
    "Interior & Elevation Works": "Modern designs that stand out beautifully.",
    "Renovation & Remodeling": "Transform your old space into something new.",
    Other: "Tell us your unique requirement!",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-20 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        {/* ✅ Logo + Title */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Poeage Builders Logo" className="w-20 h-20" />
        </div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-600 to-yellow-800 text-transparent bg-clip-text mb-6 text-center">
          🏗️ Request a Quote from Poeage Builders
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select a Service</option>
              {Object.keys(serviceHints).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {formData.service && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-yellow-700 mt-1"
              >
                {serviceHints[formData.service]}
              </motion.p>
            )}
          </div>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Describe your project or requirement..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Sending..." : "Request Quote"}
          </motion.button>
        </form>

        {/* ✅ Success Modal */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
            >
              <motion.div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-bold text-green-600">✅ Success!</h3>
                <p className="mt-2 text-gray-700">
                  Your request has been submitted successfully.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

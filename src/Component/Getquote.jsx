import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Getquote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Your civil construction request has been submitted successfully!');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-20 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold text-yellow-800 mb-6 text-center">
          🏗️ Request a Quote from Poeage Builders
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select a Service</option>
            <option value="Residential Construction">Residential Construction</option>
            <option value="Commercial Projects">Commercial Projects</option>
            <option value="Interior & Elevation Works">Interior & Elevation Works</option>
            <option value="Renovation & Remodeling">Renovation & Remodeling</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Describe your project or requirement..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Request Quote
          </button>
        </form>
      </motion.div>
    </div>
  );
}

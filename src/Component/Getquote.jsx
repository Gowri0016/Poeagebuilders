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
    // You can integrate EmailJS or your backend here
    alert('Your request has been submitted successfully!');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 py-20 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        <h2 className="text-3xl font-semibold text-cyan-800 mb-6 text-center">
          🚀 Get a Quote from Poeage IT Solution
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="">Select a Service</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Internship">Internship</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us what you need..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Request Quote
          </button>
        </form>
      </motion.div>
    </div>
  );
}

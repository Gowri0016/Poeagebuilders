import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Thank you for contacting Poeage Builders. We will reach out shortly!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center py-12 px-4 md:px-12">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-12 w-full max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-light text-yellow-800 mb-4 text-center">
          Get in Touch with Poeage Builders
        </h2>
        <p className="text-gray-700 text-center mb-8 text-base md:text-lg">
          Whether you’re planning a home, commercial space, or industrial unit — we’re here to help you build it right.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="md:flex md:space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full border border-yellow-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-5 md:mb-0"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border border-yellow-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border border-yellow-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or enquiry..."
            required
            className="w-full border border-yellow-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

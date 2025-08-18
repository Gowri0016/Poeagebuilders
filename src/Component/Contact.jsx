import React, { useState } from 'react';
import { User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center py-12 px-4 md:px-12">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-3xl relative overflow-hidden">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extralight text-yellow-800 mb-4 text-center relative inline-block">
          Get in Touch
          <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-2 animate-pulse rounded-full"></span>
        </h2>
        
        <p className="text-gray-600 text-center mb-8 text-base md:text-lg">
          We’d love to hear about your project and how we can help bring it to life.
        </p>

        {submitted ? (
          <div className="text-center p-6 bg-yellow-50 rounded-xl shadow-inner">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">✅ Message Sent!</h3>
            <p className="text-gray-700">Thank you for contacting Poeage Builders. We’ll reach out shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="md:flex md:space-x-4">
              <div className="relative w-full mb-5 md:mb-0">
                <User className="absolute left-3 top-3 text-yellow-500" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-yellow-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="relative w-full">
                <Phone className="absolute left-3 top-3 text-yellow-500" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-yellow-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-yellow-500" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-yellow-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email Address"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-yellow-500" size={20} />
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-yellow-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white opacity-10 transform -skew-x-12 translate-x-[-200%] hover:translate-x-[200%] transition"></span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

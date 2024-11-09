"use client";
// pages/contact.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-6 md:p-20 ">
      <div className="bg-white shadow-xl shadow-pink-900 rounded-lg max-w-2xl w-full p-6 md:p-10 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn">
        <h1 className="text-2xl md:text-4xl text-pink-800 font-bold text-center mb-6 animate-pulse">Contact Me</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-pink-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full border border-pink-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-pink-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border border-pink-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-pink-700 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here"
              className="w-full border border-pink-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-pink-500"
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-110">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8 text-pink-700 text-2xl">
          <a href="https://twitter.com" target="_blank" className="hover:text-pink-500 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"> <FaTwitter /></a>
          <a href="https://www.linkedin.com/in/touseef-khan-9891422b5" target="_blank" className="hover:text-pink-500 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"><FaLinkedin /></a>
          <a href="https://github.com/touseef1khan" target="_blank" className="hover:text-pink-500 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"><FaGithub /></a>
          <a href="https://facebook.com/" target="_blank" className="hover:text-pink-500 transform transition-transform duration-500 ease-in-out hover:scale-110 animate-fadeIn"><FaFacebook /></a>
        </div>
      </div>
    </div>
  );
}
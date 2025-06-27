import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_j8kz8zz", 
        "template_ghk2eg4", 
        form,
        "IMJgk5h_qg0rEOKPS" 
      )
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email sending failed:", err);
      });
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-4 md:px-12 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full items-stretch">
        {/* Email Form Card */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            rotateZ: [0, -1.5, 1.5, -1, 1, 0],
            boxShadow: "0px 10px 25px rgba(254, 243, 199, 1)",
          }}
          className="bg-[#1a1a2e]  border border-gray-700 rounded-xl p-8 space-y-6 shadow-md"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black border border-gray-600 text-white outline-none transition-colors duration-300 hover:shadow-2xl transform hover:scale-110 hover:shadow-amber-50"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black border border-gray-600 text-white outline-none transition-colors duration-300 hover:shadow-2xl transform hover:scale-110 hover:shadow-amber-50"
          />
          <textarea
            name="message"
            required
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black border border-gray-600 text-white outline-none resize-none transition-transform  ease-in-out duration-600 hover:shadow-2xl hover:scale-110 hover:shadow-amber-50"
            whileHover={{
              scale: 1.02,
              rotateZ: [0, -1.5, 1.5, -1, 1, 0],
              boxShadow: "0px 10px 25px rgba(254, 243, 199, 1)",
            }}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 hover:shadow-2xl transform hover:scale-110 hover:shadow-amber-50"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-400 text-sm mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>

        {/* Social Media Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1a1a2e]  border border-gray-700 rounded-xl p-8 shadow-md flex flex-col justify-between h-full"
          whileHover={{
            scale: 1.02,
            rotateZ: [0, -1.5, 1.5, -1, 1, 0],
            boxShadow: "0px 10px 25px rgba(254, 243, 199, 1)",
          }}
        >
          <h3 className="text-2xl md:text-3xl md:mb-6 sm:text-xl font-semibold text-blue-400 text-center mb-4">
            Connect with Me
          </h3>
          <p className="text-gray-300 text-base sm:text-sm text-center md:mb-6  md:text-2xl mb-6 px-2">
            Let's connect directly through social media platforms.
          </p>
          <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-wrap gap-6 text-blue-400 text-lg">
            <a
              href="https://wa.me/917790910674"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="text-green-500 hover:text-green-400 transition-colors duration-300 hover:shadow-2xl transform hover:scale-150 "
            >
              <FaWhatsapp size={48} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ramchoudhary779"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:shadow-2xl transform hover:scale-150"
            >
              <FaGithub size={48} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ramchandra-choudhary-3b16b7228"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300 hover:shadow-2xl transform hover:scale-150"
            >
              <FaLinkedin size={48} />
            </a>
            <a
              href="https://instagram.com/its_ram_choudhary"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-pink-500 hover:text-pink-400 transition-colors duration-300 hover:shadow-2xl transform hover:scale-150"
            >
              <FaInstagram size={48} />
            </a>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

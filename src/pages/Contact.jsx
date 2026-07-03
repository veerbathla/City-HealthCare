import { useState } from "react";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // 🔥 Change this API later
      await axios.post("/api/contact", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F8FCFE] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="uppercase tracking-[3px] text-[#0096D6] font-semibold">
            Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[#103B50]">
            We'd Love to Hear From You
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Have questions or need medical assistance? Fill out the form below
            or contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 shadow">
              <Phone className="text-[#0096D6]" />
              <h3 className="font-semibold mt-4 text-lg">Call Us</h3>

              <a
                href="tel:+919728375033"
                className="text-gray-600 mt-2 block"
              >
                +91 97283 75033
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <Mail className="text-[#0096D6]" />
              <h3 className="font-semibold mt-4 text-lg">Email</h3>

              <p className="text-gray-600 mt-2">
                cityhealthcaresirsa@gmail.com
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <MapPin className="text-[#0096D6]" />
              <h3 className="font-semibold mt-4 text-lg">Address</h3>

              <p className="text-gray-600 mt-2">
                Near ICICI Bank, Deep Tower,
                <br />
                Dabwali Road, Sirsa, Haryana
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <Clock className="text-[#0096D6]" />
              <h3 className="font-semibold mt-4 text-lg">Working Hours</h3>

              <p className="text-gray-600 mt-2">
                Monday - Saturday
                <br />
                10:00 AM - 06:00 PM
              </p>
            </div>

            <div className="flex gap-4">

              <a
                href="tel:+919728375033"
                className="flex-1 bg-[#0096D6] text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-[#007ab0] transition"
              >
                <Phone size={18} />
                Call
              </a>

              <a
                href="https://wa.me/919728375033"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-green-500 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-green-600 transition"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-4 outline-none focus:border-[#0096D6]"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border rounded-xl p-4 outline-none focus:border-[#0096D6]"
                />

              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4 outline-none focus:border-[#0096D6]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 outline-none focus:border-[#0096D6]"
              />

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-xl p-4 outline-none resize-none focus:border-[#0096D6]"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#0096D6] text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-[#007ab0] transition"
              >
                <Send size={18} />

                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

        {/* Map */}

<div className="mt-16 overflow-hidden rounded-3xl shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.0616514396315!2d75.02626267499109!3d29.54369884212313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114d7b8a04995b%3A0x99b4abdf5c661ca9!2sCity%20health%20care%20%26%20Neuro%20Research%20Centre%20-%20Neurologist%2FSpine%20Surgeon%2FGynaecologist%2FBest%20Hospital%20in%20Sirsa!5e0!3m2!1sen!2sin!4v1783057909196!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="City HealthCare Location"
    className="w-full"
  />
</div>

      </div>
    </section>
  );
};

export default Contact;
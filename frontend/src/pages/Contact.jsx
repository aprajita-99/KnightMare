import { useState } from "react";
import { FaGhost, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your haunted message has been sent!");
  };

  return (
    <div   style={{
      backgroundImage: "url('chessfloor2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
      className=" backdrop-blur-sm text-white  flex flex-col items-center justify-center p-5  ">
      <h2    className="text-4xl  mb-4 flex items-center">
        Contact Us
      </h2>
      

      <div className=" backdrop-blur-sm p-6 rounded-lg shadow-xl w-full max-w-lg ">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2 text-white">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2  border border-white rounded focus:outline-none" required />

          <label className="mt-4 mb-2 text-white">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2  border border-white rounded focus:outline-none" required />

          <label className="mt-4 mb-2 text-white">Your Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="p-2  border border-white rounded focus:outline-none" required />

          <button type="submit" className="mt-6 p-3 bg-black hover:bg-slate-900 rounded text-white font-bold">Send Your Message </button>
        </form>
      </div>

      
    </div>
  );
}
import { useState } from "react";
import "./index.css";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:wari18shah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="contactsec">
      <h4 className="section-title">Contact</h4>

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-text">Have a project in mind, or just want to say hi? My inbox is open.</p>
          <div className="contact-links">
            <a href="mailto:wari18shah@gmail.com">wari18shah@gmail.com</a>
            <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name"/>
          </label>

          <label>
            Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com"/>
          </label>

          <label>
            Message
            <textarea name="message" rows="4" required value={form.message} onChange={handleChange} placeholder="What's on your mind?"></textarea>
          </label>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};
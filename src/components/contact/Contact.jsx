import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_di2gzg9",
      "template_v0ptjth",
      form.current,
      "NZrFMUlpCqr_jTjK8"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mr.baigmirza01@gmail.com</h5>
            <a
              href="mailto:mr.baigmirza01@gmail.com"
              target="_blank"
              rel="noreferrer">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@mbaig01</h5>
            <a
              href="https://telegram.me/mbaig01"
              target="_blank"
              rel="noreferrer">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <TbBrandWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+49 176 67242011</h5>
            <a
              href="https://wa.me/4917667242011"
              target="_blank"
              rel="noreferrer">
              Send Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Complete Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

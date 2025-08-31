import React, { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = ({ language = "en" }) => {
  const contactText = {
    en: {
      sectionSubText: "Get in touch",
      sectionHeadText: "Contact.",
      labels: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
      },
      placeholders: {
        name: "What's your name?",
        email: "What's your email?",
        message: "What do you want to say?",
      },
      button: {
        send: "Send",
        sending: "Sending...",
      },
    },
    fr: {
      sectionSubText: "Prenons contact",
      sectionHeadText: "Contact.",
      labels: {
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
      },
      placeholders: {
        name: "Quel est votre nom ?",
        email: "Quel est votre email ?",
        message: "Que voulez-vous dire ?",
      },
      button: {
        send: "Envoyer",
        sending: "Envoi...",
      },
    },
  };

  const texts = contactText[language];

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_kzktmjp',
      'template_7esoqam',
      {
        from_name: form.name,
        to_name: 'Chaymaa',
        from_email: form.email,
        to_email: 'chorfichaymaa101@gmail.com',
        message: form.message,
      },
      'YOwDaky7sQGGjnHzS'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        style={{ background: "#100d25" }}
      >
        <p className={styles.sectionSubText}>{texts.sectionSubText}</p>
        <h3 className={styles.sectionHeadText}>{texts.sectionHeadText}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{texts.labels.name}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={texts.placeholders.name}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{ background: "#151030" }}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{texts.labels.email}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={texts.placeholders.email}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{ background: "#151030" }}
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{texts.labels.message}</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={texts.placeholders.message}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              style={{ background: "#151030" }}
            />
          </label>

          <button
            type="submit"
            className="bg-tertianry py-3 px-8 font-bold shadow-md shadow-primary outline-none w-fit rounded-xl text-white"
            style={{ background: "#151030" }}
          >
            {loading ? texts.button.sending : texts.button.send}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

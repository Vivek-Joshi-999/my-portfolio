import { MailPlus, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef,useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-indigo-400" />,
      label: "Email",
      value: "Vivekjoshi5454@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-cyan-400" />,
      label: "Phone",
      value: "+6378660601",
    },
    {
      icon: <MapPin className="w-6 h-6  text-purple-400" />,
      label: "Location",
      value: "Rajasthan, India",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jq2k8j", // EmailJS Service ID
        "template_zgfglzt", // EmailJS Template ID
        form.current,
        "E2E1n1KadIWHZ6L88", // EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        },
      );
  };

  return (
    <section
      id="Contact"
      className="mt-0 w-full py-20 md:py-32 relative flex justify-center items-center">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div
        className="container"
        className="mx-auto px-7 md:px-20 max-w-7xl  relative z-10">
        <div className="header  flex  flex-col  gap-3 items-center justify-center mb-5 md:mb-15">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" text-indigo-400 px-4 py-2 rounded-full  bg-slate-800/50 border border-slate-700 font-semibold
          inline-flex justify-center items-center gap-2 ">
            <MailPlus className="w-5 h-5" />
            <span> Get In Touch</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex text-3xl md:text-6xl font-bold  px-4 py-3 items-center justify-center ">
            <h1 className="text-white">
              Let's{" "}
              <span className="font-bold  py-auto text-transparent bg-clip-text bg-gradient-to-r  from-indigo-400 to bg-cyan-400">
                Connect
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: [-5, 5, -5] }}
            transition={{
              duration: 0.5,
              x: {
                duration: 1.9,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            className="w-24 px-7 rounded-full h-1 bg-linear-to-r from-indigo-400 to bg-cyan-500"></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 mx-auto leading-7 text-center text-slate-400 max-w-3xl text-lg ">
            Whether you have a question, a project in mind, or just want to say
            hi, my inbox is always open. I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 ">
          <div className="left lg:w-5/12 space-y-6 p-6 ">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-slate-700/50 bg-slate-800/40 flex  gap-6 p-4 rounded-3xl justify-start items-center backdrop-blur-md  hover:border-indigo-500/50 transition-all duration-300 group shadow-lg ">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 shadow-inner group-hover:scale-110 transition transform duration-300">
                  {info.icon}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-1">
                    {info.label}
                  </h4>
                  <p className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-7/12">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-8 md:p-12 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-slate-700 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-slate-700 text-white
                    focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-inner"
                  />

                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-inner"
                  />
                </div>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-900/50 border border-slate-700 text-white resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-inner"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 active:translate-y-0">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

                {
  success && (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-4 rounded-2xl shadow-lg border border-green-400 animate-pulse">
      
      <h3 className="font-semibold text-lg">
        Message Sent Successfully 
      </h3>


    </div>
  )
}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

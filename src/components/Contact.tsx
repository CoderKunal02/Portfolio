import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertTriangle, Mail, Github, Linkedin, MessageSquareCode } from "lucide-react";
import { DEV_PROFILE } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setStatusMsg("Please fill in all required fields (*).");
      return;
    }

    if (!form.email.includes("@")) {
      setStatus("error");
      setStatusMsg("Please input a valid email address.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setStatus("error");
      setStatusMsg("Web3Forms API Key is missing! Please configure VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
      return;
    }

    // Direct Email Dispatch Integration
    setStatus("sending");
    setStatusMsg("Sending message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `Inquiry from ${form.name}`,
          message: form.message,
          from_name: "Portfolio Contact Form",
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMsg("Message sent successfully! Kunal will get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("error");
      setStatusMsg("Network error! Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 dot-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Info Side (Takes 2 Columns) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-accent-blue uppercase block mb-3">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Let's Talk<span className="text-accent-blue">.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Let's connect — I'm actively looking for backend, frontend & full stack developer opportunities.
              </p>

              {/* Card info stats */}
              <div className="flex flex-col gap-4 mb-8">
                <a
                  href={`mailto:${DEV_PROFILE.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-400">
                      Standard Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white select-all">
                      {DEV_PROFILE.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${DEV_PROFILE.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:scale-105 transition-transform">
                    <MessageSquareCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-400">
                      Active Call / WhatsApp
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white select-all">
                      {DEV_PROFILE.phone}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social handles glow layouts */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 tracking-widest block mb-4">
                Other secure channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={DEV_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-accent-blue transition-all duration-300 relative group"
                >
                  <div className="absolute inset-0 bg-accent-blue/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Github className="w-5 h-5 relative z-10" />
                </a>

                <a
                  href={DEV_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-accent-purple transition-all duration-300 relative group"
                >
                  <div className="absolute inset-0 bg-accent-purple/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Linkedin className="w-5 h-5 relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side (Takes 3 Columns) */}
          <div className="lg:col-span-3 glass-panel rounded-3xl p-8 relative overflow-hidden">
            <h3 className="font-display text-xl font-bold text-white mb-6">
              Establish a connection
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row for Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase text-gray-400 tracking-wide">
                    Full Name <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 font-sans transition-all"
                    placeholder="Jane Doe"
                    disabled={status === "sending"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase text-gray-400 tracking-wide">
                    Email Coordinate <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 font-sans transition-all"
                    placeholder="jane@organization.com"
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-mono uppercase text-gray-400 tracking-wide">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 font-sans transition-all"
                  placeholder="Architectural Audit / Full-time Venture"
                  disabled={status === "sending"}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-mono uppercase text-gray-400 tracking-wide">
                  Message Payload <span className="text-accent-blue">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-gray-500 font-sans transition-all resize-none"
                  placeholder="Briefly state your timeline, technical goals, and system size requirements..."
                  disabled={status === "sending"}
                />
              </div>

              {/* Submission visual indicators */}
              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-xs font-mono select-none ${
                      status === "sending"
                        ? "bg-white/5 border-white/5 text-gray-300"
                        : status === "success"
                        ? "bg-cyber-teal/10 border-cyber-teal/20 text-cyber-teal animate-pulse"
                        : "bg-red-500/10 border-red-500/20 text-red-400"
                    }`}
                  >
                    {status === "sending" ? (
                      <div className="w-4 h-4 rounded-full border-2 border-accent-blue border-t-transparent animate-spin" />
                    ) : status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-cyber-teal shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                    <span>{statusMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-display text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all duration-305 ${
                  status === "sending"
                    ? "bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed"
                    : "bg-white text-black hover:bg-transparent hover:text-white border border-white"
                }`}
              >
                <span>Dispatch message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

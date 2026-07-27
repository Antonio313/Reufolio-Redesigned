import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiPhone, FiCopy, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data';
import EditorWindow from '../EditorWindow';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        },
        publicKey
      );

      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: `Failed to send message. Please try again or email me directly at ${personalInfo.email}`,
      });
    }
  };

  const inputClasses = 'w-full pl-11 pr-4 py-3 bg-canvas border border-border rounded-md text-text-primary font-mono text-sm focus:outline-none focus:border-accent-cyan transition-colors';

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 bg-canvas flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <EditorWindow activeId="contact">
            <div className="p-6 sm:p-10">
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-text-primary mb-8">
                <span className="text-accent-purple">#</span> Get In Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    Let's build something amazing together
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    I'm always interested in hearing about new projects and opportunities.
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-md border border-border bg-surface-raised flex items-center justify-center flex-shrink-0">
                        <FiMail className="text-accent-cyan text-lg" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-text-secondary/60">email</p>
                        <div className="flex items-center gap-3">
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-text-primary hover:text-accent-cyan transition-colors truncate font-mono text-sm"
                          >
                            {personalInfo.email}
                          </a>
                          <button
                            onClick={handleCopyEmail}
                            className="text-text-secondary hover:text-accent-cyan transition-colors flex-shrink-0"
                            title="Copy email address"
                          >
                            {emailCopied
                              ? <FiCheck size={15} className="text-accent-green" />
                              : <FiCopy size={15} />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-md border border-border bg-surface-raised flex items-center justify-center flex-shrink-0">
                        <FiPhone className="text-accent-cyan text-lg" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-text-secondary/60">phone</p>
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="text-text-primary hover:text-accent-cyan transition-colors font-mono text-sm"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-md border border-border bg-surface-raised">
                    <p className="text-text-secondary italic font-mono text-sm">
                      // "Quality is not an act, it is a habit." — Aristotle
                    </p>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block font-mono text-sm text-text-secondary mb-2">
                        $ name:
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-mono text-sm text-text-secondary mb-2">
                        $ email:
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={inputClasses}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-mono text-sm text-text-secondary mb-2">
                        $ message:
                      </label>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-4 top-4 text-text-secondary" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className={`${inputClasses} resize-none`}
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status.loading}
                      className="w-full px-6 py-3 rounded-md bg-accent-cyan text-canvas font-mono font-semibold hover:bg-accent-cyan/90 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: status.loading ? 1 : 1.01 }}
                      whileTap={{ scale: status.loading ? 1 : 0.98 }}
                    >
                      {status.loading ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-canvas border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          $ send --message
                        </>
                      )}
                    </motion.button>

                    {status.success && (
                      <div className="flex items-center gap-2 text-accent-green bg-accent-green/10 p-4 rounded-md border border-accent-green/20 font-mono text-sm">
                        <FiCheckCircle />
                        <span>&gt; Message sent. I'll get back to you soon.</span>
                      </div>
                    )}

                    {status.error && (
                      <div className="text-accent-red bg-accent-red/10 p-4 rounded-md border border-accent-red/20 font-mono text-sm">
                        &gt; Error: {status.error}
                      </div>
                    )}
                  </form>
                </motion.div>
              </div>
            </div>
          </EditorWindow>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Get in Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Have a project in mind or want to discuss cloud solutions? Drop me a message below.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sfBlue text-slate-900 dark:text-white transition-shadow"
                    placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sfBlue text-slate-900 dark:text-white transition-shadow"
                    placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" required rows="5" value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sfBlue text-slate-900 dark:text-white transition-shadow resize-none"
                  placeholder="How can I help you?" />
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm">Failed to send message. Please ensure the backend is running.</p>
              )}

              <button type="submit" disabled={status === 'submitting'}
                className="w-full bg-sfBlue hover:bg-blue-700 disabled:opacity-70 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

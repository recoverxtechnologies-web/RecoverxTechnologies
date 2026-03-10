import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'ev-recovery',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for contacting RecoverX! We will get back to you shortly.");
    setFormData({ name: '', company: '', phone: '', email: '', service: 'ev-recovery', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
       <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-300 text-lg">Let’s build efficient recovery, logistics, and sustainability solutions together.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information */}
            <div className="bg-brand-blue text-white p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-blue-100 mb-10 leading-relaxed">
                    Ready to recover, deliver, and recycle smarter? Fill out the form or reach us via the details below.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg"><Phone size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg">Phone</h3>
                            <p className="text-blue-100">+91 79756 60772</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg"><Mail size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p className="text-blue-100">info@gorecoverx.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg"><MapPin size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg">Location</h3>
                            <p className="text-blue-100">
                                No. 32, Work Place,<br />
                                RecoverX Technologies LLP,<br />
                                JP Nagar, Bengaluru – 560078,<br />
                                Karnataka, India
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg"><Linkedin size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg">Social Media</h3>
                            <a 
                                href="https://www.linkedin.com/company/recoverx-technologies/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-100 hover:text-white transition underline decoration-transparent hover:decoration-white underline-offset-4"
                            >
                                RecoverX Technologies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-14 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                            <input 
                                type="text" 
                                name="company" 
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                                placeholder="Company Name"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                                placeholder="+91..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Service Required</label>
                        <select 
                            name="service" 
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                        >
                            <option value="ev-recovery">EV Vehicle Recovery</option>
                            <option value="logistics">Logistics Solutions</option>
                            <option value="rental-recovery">Rental Fleet Recovery</option>
                            <option value="waste-management">GreenCycle (Waste Management)</option>
                            <option value="partnership">Partnership</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                        <textarea 
                            name="message" 
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition"
                            placeholder="Tell us about your requirements..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all transform active:scale-95 flex justify-center items-center shadow-lg"
                    >
                        Send Message <Send size={18} className="ml-2" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
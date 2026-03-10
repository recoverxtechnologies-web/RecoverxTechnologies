import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About RecoverX</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A future-ready startup solving real-world challenges in mobility and sustainability.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  RecoverX Technologies is a next-generation operations and recovery company. We don't just move things; we provide intelligent solutions for the modern world of EVs and Logistics.
                </p>
                <p>
                  We specialize in <strong>EV rental vehicle recovery</strong>, supporting fleet operators, rental companies, and logistics partners with fast, reliable, and tech-enabled recovery solutions. Our expertise extends into end-to-end logistics and environmentally responsible waste management, making RecoverX a complete operations partner.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
               <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                 <div className="flex items-center mb-4">
                   <Target className="text-brand-blue mr-3" size={32} />
                   <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                 </div>
                 <p className="text-slate-600">
                   To build reliable, scalable, and sustainable recovery and logistics ecosystems that empower businesses to operate without fear of asset loss.
                 </p>
               </div>

               <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                 <div className="flex items-center mb-4">
                   <Eye className="text-brand-blue mr-3" size={32} />
                   <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                 </div>
                 <p className="text-slate-300">
                   To become India’s most trusted EV recovery and sustainable operations brand, setting the standard for efficiency and environmental responsibility.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team/Values Placeholder */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Driven by Innovation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-slate-900 border border-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(56,182,255,0.25)] hover:border-brand-blue/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center group">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-8 text-white font-bold text-2xl shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform duration-300">1</div>
                    <h3 className="text-xl font-bold mb-4 text-white">Tech-First Approach</h3>
                    <p className="text-slate-400 leading-relaxed">Leveraging data and modern tracking for efficient recovery.</p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-slate-900 border border-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(56,182,255,0.25)] hover:border-brand-blue/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center group">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-8 text-white font-bold text-2xl shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform duration-300">2</div>
                    <h3 className="text-xl font-bold mb-4 text-white">Sustainability Core</h3>
                    <p className="text-slate-400 leading-relaxed">Every process is designed to minimize environmental impact.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-900 border border-slate-800 p-10 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(56,182,255,0.25)] hover:border-brand-blue/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center group">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-8 text-white font-bold text-2xl shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform duration-300">3</div>
                    <h3 className="text-xl font-bold mb-4 text-white">Client Partnership</h3>
                    <p className="text-slate-400 leading-relaxed">We work as an extension of your team, not just a vendor.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
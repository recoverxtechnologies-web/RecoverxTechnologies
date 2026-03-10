import React from 'react';
import { Recycle, Leaf, ShieldCheck, Factory, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GreenCycle: React.FC = () => {
  return (
    <div className="bg-white">
      {/* GreenCycle Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center bg-brand-blue/10 border border-brand-blue/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
             <Leaf size={16} className="text-brand-blue mr-2" />
             <span className="text-blue-100 text-sm font-semibold tracking-wide">RecoverX GreenCycle Initiative</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Sustainable Scrapping Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Responsible waste management and certified scrapping that protects the environment while delivering value to your business.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">GreenCycle by RecoverX</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Our GreenCycle division is dedicated to the circular economy. We provide end-to-end solutions for the disposal, dismantling, and recycling of vehicles, industrial scrap, and electronic waste, ensuring full legal compliance and zero-landfill goals.
            </p>
        </div>
      </section>

      {/* Categories - Dark Cards Section */}
      <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Scrap Categories We Handle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrapCard icon={<Recycle />} title="Plastics" desc="Responsible recycling of industrial and consumer plastics." />
                <ScrapCard icon={<Factory />} title="Metals" desc="Ferrous and non-ferrous metal scrapping and recovery." />
                <ScrapCard icon={<Zap />} title="Electrical & E-Waste" desc="Safe disposal of electronic components and batteries." />
                <ScrapCard icon={<Leaf />} title="Home Appliances" desc="Eco-friendly dismantling of large home appliances." />
                <ScrapCard icon={<ShieldCheck />} title="Industrial Scrap" desc="Heavy machinery and bulk industrial waste solutions." />
                <ScrapCard icon={<Recycle />} title="Commercial Bulk" desc="End-to-end clearance for commercial entities." />
            </div>
          </div>
      </section>

      {/* Why GreenCycle */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative shadow-2xl">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-brand-blue">GreenCycle?</span></h2>
                        <ul className="space-y-4">
                            <li className="flex items-center text-lg text-slate-300">
                                <span className="w-2 h-2 bg-brand-blue rounded-full mr-4 shadow-[0_0_8px_#38b6ff]"></span>
                                Eco-friendly processes
                            </li>
                            <li className="flex items-center text-lg text-slate-300">
                                <span className="w-2 h-2 bg-brand-blue rounded-full mr-4 shadow-[0_0_8px_#38b6ff]"></span>
                                Legal & compliance-ready operations
                            </li>
                            <li className="flex items-center text-lg text-slate-300">
                                <span className="w-2 h-2 bg-brand-blue rounded-full mr-4 shadow-[0_0_8px_#38b6ff]"></span>
                                Safe dismantling & disposal
                            </li>
                            <li className="flex items-center text-lg text-slate-300">
                                <span className="w-2 h-2 bg-brand-blue rounded-full mr-4 shadow-[0_0_8px_#38b6ff]"></span>
                                Sustainable recycling methods
                            </li>
                        </ul>
                        <div className="mt-10">
                            <Link to="/contact" className="inline-flex items-center bg-brand-blue hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(56,182,255,0.4)] hover:shadow-[0_0_30px_rgba(56,182,255,0.6)] transform hover:-translate-y-1">
                                Request a Quote <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl"></div>
                        <Recycle size={200} className="text-white/10 relative z-10" />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

// Unified Dark Theme Scrap Card
const ScrapCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({ icon, title, desc }) => (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-brand-blue/50 hover:shadow-[0_0_25px_rgba(56,182,255,0.2)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">
        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon as React.ReactElement, { size: 28, strokeWidth: 2 })}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
        <p className="text-slate-400 leading-relaxed flex-grow">{desc}</p>
    </div>
);

export default GreenCycle;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RefreshCw, Car, Zap } from 'lucide-react';

const HERO_IMAGES = [
  {
    url: "https://drive.google.com/thumbnail?id=1GKDDNzZtnqMWZxatyee0n4JugDVCn5t_&sz=w1920",
    title: "End-to-End Logistics",
    subtitle: "Seamless delivery solutions for 2W & 4W fleets."
  },
  {
    url: "https://drive.google.com/thumbnail?id=1NMQifo19epMhBLX_b74uHJTO4T4p6Djs&sz=w1920",
    title: "EV Vehicle Recovery",
    subtitle: "Rapid on-road support and specialized recovery."
  },
  {
    url: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Sustainable Waste Management",
    subtitle: "Eco-friendly scrapping and recycling via GreenCycle."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-slate-900">
        {/* Background Slides */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite]"
            />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center pt-8 md:pt-12 pb-20 text-white">
          <div className="max-w-3xl space-y-3 flex flex-col items-center">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/50 text-brand-blue font-semibold text-xs md:text-sm backdrop-blur-sm mb-1">
              Next-Gen Operations & Recovery
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Powering <span className="text-brand-blue">EV Recovery</span>, <br />
              Logistics & Solutions
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-slate-200 font-light max-w-2xl mx-auto">
              RecoverX Technologies delivers specialized EV recovery, smart logistics, and eco-friendly scrapping solutions — built for speed, scale, and sustainability.
            </p>
            <div className="flex pt-4 justify-center">
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-8 py-3.5 bg-brand-blue hover:bg-sky-500 text-white rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(56,182,255,0.4)] hover:shadow-[0_0_30px_rgba(56,182,255,0.6)] transform hover:-translate-y-1 whitespace-nowrap"
              >
                Request Service <ArrowRight className="ml-3" size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-brand-blue w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Grid (What We Do) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-2">What We Do</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">End-to-End Solutions. One Reliable Partner.</h3>
            <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Car size={32} />}
              title="EV Servicing & Recovery"
              description="Comprehensive on-road support and recovery for electric vehicles."
              link="/services"
            />
            <ServiceCard 
              icon={<Truck size={32} />}
              title="First-to-Last Mile Logistics"
              description="Optimized delivery solutions for every stage of the supply chain."
              link="/services"
            />
            <ServiceCard 
              icon={<RefreshCw size={32} />}
              title="EV Rental Recovery"
              description="Specialized retrieval and management for EV rental fleets."
              link="/services"
            />
            <ServiceCard 
              icon={<Zap size={32} />}
              title="Sustainable Scrapping"
              description="Eco-friendly waste management via our GreenCycle division."
              link="/greencycle"
            />
          </div>
        </div>
      </section>

      {/* Why RecoverX? */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-2">Why Choose Us?</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Built for the Future of Mobility</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine startup agility with enterprise-grade standards to deliver solutions that are not only effective but also sustainable and compliant.
              </p>
              
              <div className="space-y-6">
                <FeatureItem title="EV-Focused Operations" desc="Deep expertise in electric vehicle nuances and handling." />
                <FeatureItem title="Specialized Recovery Expertise" desc="Proven track record in recovering rental assets efficiently." />
                <FeatureItem title="Fast Response & Scalable" desc="Tech-enabled logistics that grow with your business." />
                <FeatureItem title="Compliance-Driven" desc="Fully certified waste and scrapping processes." />
              </div>

              <div className="mt-10">
                <Link to="/about" className="text-brand-blue font-bold hover:text-sky-600 flex items-center group">
                  Learn more about our mission <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-blue/10 transform rotate-3 rounded-3xl"></div>
              <img 
                src="https://images.pexels.com/photos/34800931/pexels-photo-34800931.jpeg" 
                alt="RecoverX Operations" 
                className="relative rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Callout */}
      <section className="py-20 bg-brand-blue text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to streamline your operations?</h2>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-1"
          >
            Contact RecoverX Today
          </Link>
        </div>
      </section>
    </div>
  );
};

// Unified Dark Theme Service Card
const ServiceCard: React.FC<{icon: React.ReactNode, title: string, description: string, link: string}> = ({ icon, title, description, link }) => (
  <Link 
    to={link} 
    className="group block p-8 rounded-2xl transition-all duration-300 border bg-slate-900 border-slate-800 hover:border-brand-blue/50 hover:shadow-[0_0_25px_rgba(56,182,255,0.25)] hover:-translate-y-2 flex flex-col h-full"
  >
    <div className="mb-6 inline-flex items-center justify-center p-4 rounded-xl bg-brand-blue text-white shadow-lg shadow-brand-blue/20 w-fit">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="mb-6 leading-relaxed text-slate-400 flex-grow">{description}</p>
    <span className="font-semibold flex items-center text-brand-blue group-hover:text-white transition-colors mt-auto">
      Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
    </span>
  </Link>
);

const FeatureItem: React.FC<{title: string, desc: string}> = ({ title, desc }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-blue"></div>
      </div>
    </div>
    <div className="ml-4">
      <h5 className="text-lg font-bold text-slate-900">{title}</h5>
      <p className="text-slate-500">{desc}</p>
    </div>
  </div>
);

export default Home;
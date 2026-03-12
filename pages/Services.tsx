import React from 'react';
import { Truck, Car, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <Helmet>
        <title>Industrial Scrap & E-Waste Services in Bangalore | RecoverX</title>
        <meta name="description" content="RecoverX offers specialized industrial scrap buying, e-waste recycling, EV recovery, and sustainable logistics solutions in Bangalore and across India." />
        <link rel="canonical" href="https://gorecoverx.com/services" />
        <meta property="og:title" content="Industrial Scrap & E-Waste Services in Bangalore | RecoverX" />
        <meta property="og:description" content="RecoverX offers specialized industrial scrap buying, e-waste recycling, EV recovery, and sustainable logistics solutions in Bangalore and across India." />
        <meta property="og:url" content="https://gorecoverx.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://drive.google.com/thumbnail?id=1y0sfg4Lw2ycxe_yxJgrxipJOMRaxLxB8&sz=w1000" />
      </Helmet>
      {/* Header */}
      <section className="bg-brand-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Core Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions designed for speed, visibility, and reliability in the EV and logistics space.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        
        {/* Service Block 1: EV Recovery */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 text-brand-blue font-bold uppercase tracking-wider mb-4">
                        <Zap size={20} /> <span>Vehicle Support</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">EV Vehicle Service & Recovery</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Specialized support for electric vehicles, ensuring minimal downtime and maximum safety handling high-voltage systems.
                    </p>
                    <ul className="space-y-4">
                        <ServiceItem text="On-road EV recovery" />
                        <ServiceItem text="Breakdown & accident support" />
                        <ServiceItem text="Battery & vehicle handling with safety compliance" />
                    </ul>
                </div>
                <div className="h-64 md:h-auto bg-slate-200">
                    <img src="https://drive.google.com/thumbnail?id=1NMQifo19epMhBLX_b74uHJTO4T4p6Djs&sz=w1000" alt="EV Recovery" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

        {/* Service Block 2: Logistics */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 text-brand-blue font-bold uppercase tracking-wider mb-4">
                        <Truck size={20} /> <span>Supply Chain</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Logistics Solutions</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        From first mile to last mile, we ensure your goods move smoothly across the city and beyond.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ServiceItem text="First Mile Logistics" />
                        <ServiceItem text="Mid Mile Operations" />
                        <ServiceItem text="Last Mile Delivery" />
                        <ServiceItem text="End-to-End Management" />
                        <ServiceItem text="Delivery Partner Solutions" />
                        <ServiceItem text="Quick Commerce Support" />
                    </div>
                </div>
                <div className="h-64 md:h-auto bg-slate-200">
                    <img src="https://drive.google.com/thumbnail?id=1GKDDNzZtnqMWZxatyee0n4JugDVCn5t_&sz=w1000" alt="Logistics" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

const ServiceItem: React.FC<{text: string, dark?: boolean}> = ({ text, dark }) => (
    <li className={`flex items-start ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
        <CheckCircle2 size={20} className={`mr-3 mt-0.5 flex-shrink-0 ${dark ? 'text-brand-blue' : 'text-brand-blue'}`} />
        <span>{text}</span>
    </li>
);

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of EV Recovery in India',
    slug: 'future-of-ev-recovery',
    excerpt: 'As electric vehicles become more common, our recovery methods must evolve. Discover how RecoverX is leading the way.',
    date: 'March 10, 2026',
    author: 'RecoverX Team',
    image: 'https://picsum.photos/seed/ev-recovery/800/400'
  },
  {
    id: 2,
    title: 'Sustainable Logistics: More Than Just Delivery',
    slug: 'sustainable-logistics',
    excerpt: 'How we are optimizing our supply chain to reduce carbon footprint and improve efficiency.',
    date: 'March 5, 2026',
    author: 'Logistics Expert',
    image: 'https://picsum.photos/seed/logistics/800/400'
  },
  {
    id: 3,
    title: 'GreenCycle: Transforming Waste into Value',
    slug: 'greencycle-waste-to-value',
    excerpt: 'Our initiative to promote circular economy through responsible scrapping and recycling.',
    date: 'February 28, 2026',
    author: 'Sustainability Lead',
    image: 'https://picsum.photos/seed/recycling/800/400'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Helmet>
        <title>Industrial Scrap & Recycling Blog | RecoverX Technologies</title>
        <meta name="description" content="Stay updated with the latest news and insights on industrial scrap management, e-waste recycling, and sustainable logistics from RecoverX Technologies." />
        <link rel="canonical" href="https://gorecoverx.com/blog" />
        <meta property="og:title" content="Industrial Scrap & Recycling Blog | RecoverX Technologies" />
        <meta property="og:description" content="Stay updated with the latest news and insights on industrial scrap management, e-waste recycling, and sustainable logistics from RecoverX Technologies." />
        <meta property="og:url" content="https://gorecoverx.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://drive.google.com/thumbnail?id=1y0sfg4Lw2ycxe_yxJgrxipJOMRaxLxB8&sz=w1000" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,
               "name":"Home","item":"https://gorecoverx.com/"},
              {"@type":"ListItem","position":2,
               "name":"Blog","item":"https://gorecoverx.com/blog"}
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-white border-b border-gray-100">
        <Breadcrumb items={[{label:'Blog', path:'/blog'}]} />
      </div>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights, news, and updates from the world of EV recovery, logistics, and sustainability.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-brand-blue font-bold hover:text-sky-600 transition-colors"
                >
                  Read More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

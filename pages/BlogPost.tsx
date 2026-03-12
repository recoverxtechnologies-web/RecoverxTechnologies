import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of EV Recovery in India',
    slug: 'future-of-ev-recovery',
    content: `
      <p>As electric vehicles become more common, our recovery methods must evolve. Discover how RecoverX is leading the way.</p>
      <p>The transition to electric mobility is not just about changing the engines; it's about rethinking the entire infrastructure that supports vehicles. One of the most critical, yet often overlooked, aspects is vehicle recovery and roadside assistance.</p>
      <h2>Why EV Recovery is Different</h2>
      <p>Recovering an electric vehicle requires specialized knowledge and equipment. High-voltage systems, battery safety protocols, and the unique weight distribution of EVs all play a role in how they should be handled during a breakdown or accident.</p>
      <p>At RecoverX, we've invested heavily in training our technicians and equipping our fleet with the latest technology to ensure that every EV recovery is performed safely and efficiently.</p>
      <h2>The Road Ahead</h2>
      <p>As the number of EVs on Indian roads continues to grow, the demand for specialized recovery services will only increase. We are committed to staying at the forefront of this evolution, providing the peace of mind that EV owners and fleet managers need.</p>
    `,
    date: 'March 10, 2026',
    author: 'RecoverX Team',
    image: 'https://picsum.photos/seed/ev-recovery/1200/600'
  },
  {
    id: 2,
    title: 'Sustainable Logistics: More Than Just Delivery',
    slug: 'sustainable-logistics',
    content: `
      <p>How we are optimizing our supply chain to reduce carbon footprint and improve efficiency.</p>
      <p>Logistics is the backbone of the modern economy, but it also has a significant environmental impact. At RecoverX, we believe that efficiency and sustainability go hand in hand.</p>
      <h2>Optimizing the Last Mile</h2>
      <p>The last mile is often the most complex and carbon-intensive part of the delivery process. By using smart routing algorithms and a fleet of electric delivery vehicles, we're able to reduce emissions while improving delivery times.</p>
      <h2>A Holistic Approach</h2>
      <p>Sustainability in logistics isn't just about the vehicles we use. It's also about how we manage our warehouses, optimize our packaging, and work with our partners to create a more circular supply chain.</p>
    `,
    date: 'March 5, 2026',
    author: 'Logistics Expert',
    image: 'https://picsum.photos/seed/logistics/1200/600'
  }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-brand-blue font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      <Helmet>
        <title>{post.title} | RecoverX Blog</title>
        <link rel="canonical" href={`https://gorecoverx.com/blog/${post.slug}`} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.title, // Using title as fallback for metaDescription
            "image": `https://gorecoverx.com/blog/${post.slug}.webp`,
            "author": {
              "@type": "Organization",
              "name": "RecoverX Technologies"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RecoverX Technologies",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gorecoverx.com/logo.webp"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://gorecoverx.com/blog/${post.slug}`
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {"@type":"ListItem","position":1,
               "name":"Home","item":"https://gorecoverx.com/"},
              {"@type":"ListItem","position":2,
               "name":"Blog","item":"https://gorecoverx.com/blog"},
              {"@type":"ListItem","position":3,
               "name": post.title,
               "item": `https://gorecoverx.com/blog/${post.slug}`}
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-white border-b border-gray-100">
        <Breadcrumb items={[{label:'Blog', path:'/blog'}, {label: post.title, path: ''}]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center text-slate-600 hover:text-brand-blue mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>
        
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[400px] object-cover rounded-3xl shadow-xl mb-10"
          referrerPolicy="no-referrer"
        />

        <div className="flex items-center space-x-6 text-slate-500 mb-6">
          <span className="flex items-center"><Calendar size={18} className="mr-2" /> {post.date}</span>
          <span className="flex items-center"><User size={18} className="mr-2" /> {post.author}</span>
          <button className="flex items-center hover:text-brand-blue transition-colors"><Share2 size={18} className="mr-2" /> Share</button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div 
          className="prose prose-lg max-w-none text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogPost;


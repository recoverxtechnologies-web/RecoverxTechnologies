import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-2 text-sm">
      <Link 
        to="/" 
        className="text-[#888888] hover:underline transition-colors"
      >
        Home
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <ChevronRight size={14} className="text-gray-300 flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="text-[#212121] font-medium truncate">
                {item.label}
              </span>
            ) : (
              <Link 
                to={item.path} 
                className="text-[#888888] hover:underline transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValueProp {
  title: string;
  description: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'GreenCycle', path: '/greencycle' },
  { label: 'Contact', path: '/contact' },
];
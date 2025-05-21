import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRoutes } from './hooks/useRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { COMPANY_NAME } from './constants';

function App() {
  const routes = useRoutes();
  const navbarProps = {
    logo: COMPANY_NAME,
    menuItems: [
      { label: 'Features', href: '/features' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'FAQ', href: '/faq' }
    ],
    ctaText: 'Book a Call',
    ctaHref: '/calendar'
  };

  const footerProps = {
    logo: COMPANY_NAME,
    description: 'Helping businesses streamline operations and boost productivity since 2020.',
    socialLinks: [
      { icon: 'Facebook', href: '#' },
      { icon: 'Twitter', href: '#' },
      { icon: 'Linkedin', href: '#' },
      { icon: 'Instagram', href: '#' }
    ],
    sections: [
      {
        title: 'Solutions',
        links: [
          { label: 'Workflow Automation', href: '/solutions/workflow' },
          { label: 'Analytics Dashboard', href: '/solutions/analytics' },
          { label: 'Customer Management', href: '/solutions/customers' },
          { label: 'Sales Optimization', href: '/solutions/sales' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Blog', href: '/blog' },
          { label: 'Customer Stories', href: '/testimonials' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', href: '/help' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' }
        ]
      }
    ],
    copyright: `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`,
    policies: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar {...navbarProps} />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
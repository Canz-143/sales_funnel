import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CTASection from '../components/CTASection';
import SocialProofSection from '../components/SocialProofSection';
import FAQSection from '../components/FAQSection';
import CalendlySection from '../components/CalendlySection';
import { COMPANY_NAME, PROBLEMS, FEATURES, TESTIMONIALS, FAQS } from '../constants';

export default function HomePage() {
  const heroProps = {
    title: 'Transform Your Business Operations Today',
    subtitle: `${COMPANY_NAME} helps businesses eliminate inefficiency, boost productivity, and increase revenue with our all-in-one solution.`,
    primaryCTA: {
      text: 'Book a Free Demo',
      href: '/calendar'
    },
    secondaryCTA: {
      text: 'Explore Features',
      href: '/features'
    },
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Business team achieving success',
    trustedBy: ['ACME Inc.', 'TechCorp', 'GrowthBiz']
  };

  const problemSectionProps = {
    title: 'The Challenges Businesses Face Today',
    subtitle: "In today's fast-paced business environment, these common problems can significantly impact your growth and profitability.",
    problems: PROBLEMS,
    ctaText: 'Discover the Solution',
    ctaHref: '/solution',
    statsText: 'These challenges cost businesses an average of $250,000 annually in lost revenue and opportunities.'
  };

  const solutionSectionProps = {
    title: 'Streamlined Solutions for Business Growth',
    subtitle: 'Our comprehensive platform addresses these challenges with powerful yet easy-to-use features.',
    features: FEATURES,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Our platform in action',
    stats: {
      value: '98%',
      label: 'Customer Satisfaction'
    }
  };

  const socialProofProps = {
    title: 'What Do Our Clients Say',
    subtitle: "Don't just take our word for it. Hear from the businesses that have transformed their operations with our platform.",
    testimonials: TESTIMONIALS,
    trustedCompanies: ['ACME Inc.', 'TechCorp', 'GrowthBiz', 'InnovateNow', 'FutureTech'],
    satisfactionRate: {
      value: '97%',
      label: 'Customer Satisfaction Rate'
    }
  };

  const faqProps = {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our platform and services.',
    faqs: FAQS,
    ctaTitle: 'Still have questions?',
    ctaText: 'Talk to Our Team',
    ctaHref: '/calendar'
  };

  const calendlyProps = {
    title: 'Schedule a Free Consultation',
    subtitle: 'Choose a convenient time for a 30-minute call with one of our product specialists who will walk you through our platform and answer any questions.',
    features: [
      {
        icon: 'Calendar',
        title: 'What to expect',
        description: 'A 30-minute personalized walkthrough of our platform tailored to your business needs.'
      },
      {
        icon: 'Phone',
        title: 'Direct line',
        description: 'Call us directly at (555) 123-4567 if you prefer to speak immediately.'
      },
      {
        icon: 'Mail',
        title: 'Email us',
        description: 'Send your questions to info@bluesolutions.com and we\'ll respond within 24 hours.'
      }
    ],
    statsBox: {
      title: 'Join over 1,000+ businesses',
      description: 'who have streamlined their operations and increased productivity with our platform.'
    }
  };

  return (
    <>
      <HeroSection {...heroProps} />
      <ProblemSection {...problemSectionProps} />
      <CTASection
        variant="primary"
        title="Ready to transform your business operations?"
        subtitle={`Join hundreds of companies that have streamlined their workflow and boosted productivity with ${COMPANY_NAME}.`}
        ctaText="Schedule Your Demo"
        ctaHref="/calendar"
      />
      <SolutionSection {...solutionSectionProps} />
      <CTASection
        variant="secondary"
        title="See the difference for yourself"
        subtitle="Our clients typically see results within the first 30 days."
        ctaText="Book Your Demo"
        ctaHref="/calendar"
        benefits={[
          "Increase efficiency by up to 40%",
          "Reduce operational costs by 25-30%",
          "Boost customer satisfaction by 50%",
          "30-day money-back guarantee"
        ]}
      />
      <SocialProofSection {...socialProofProps} />
      <FAQSection {...faqProps} />
      <CTASection
        variant="final"
        title="Start Optimizing Your Business Today"
        subtitle="Join the thousands of successful businesses that have transformed their operations with our platform."
        ctaText="Book Your Free Consultation"
        ctaHref="/calendar"
        benefits={[
          "Increase efficiency by up to 40%",
          "Reduce operational costs by 25-30%",
          "Boost customer satisfaction by 50%",
          "30-day money-back guarantee"
        ]}
      />
      <CalendlySection {...calendlyProps} />
    </>
  );
}

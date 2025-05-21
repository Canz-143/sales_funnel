import { TestimonialType, FAQItemType, FeatureType, ProblemType } from '../types';

export const COMPANY_NAME = "BlueSolutions";

export const PROBLEMS: ProblemType[] = [
  {
    id: 1,
    title: "Wasted Time and Resources",
    description: "Businesses lose countless hours and resources on inefficient processes that could be automated.",
    icon: "Clock",
  },
  {
    id: 2,
    title: "Missed Opportunities",
    description: "Without proper systems in place, valuable opportunities slip through the cracks, hurting your bottom line.",
    icon: "Target",
  },
  {
    id: 3,
    title: "Customer Dissatisfaction",
    description: "Poor customer experiences lead to negative reviews and lost business that's difficult to recover.",
    icon: "Frown",
  },
];

export const FEATURES: FeatureType[] = [
  {
    id: 1,
    title: "Streamlined Workflows",
    description: "Our intelligent automation tools eliminate repetitive tasks and streamline your entire workflow.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Real-time Analytics",
    description: "Gain valuable insights with our comprehensive dashboard showing real-time performance metrics.",
    icon: "BarChart2",
  },
  {
    id: 3,
    title: "Customer-First Approach",
    description: "Our platform puts your customers at the center, enhancing satisfaction and loyalty.",
    icon: "Heart",
  },
  {
    id: 4,
    title: "Enterprise Security",
    description: "Bank-level security ensures your data remains protected at all times.",
    icon: "Shield",
  },
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "BlueSolutions transformed our marketing workflow. We've increased productivity by 43% and our campaigns are performing better than ever.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Innovate Partners",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The ROI we've seen since implementing BlueSolutions has been remarkable. What used to take days now takes hours.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Rivera",
    role: "CEO",
    company: "Growth Ventures",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "As a CEO, I needed a solution that would scale with our growth. BlueSolutions delivered beyond our expectations.",
    rating: 4,
  },
];

export const FAQS: FAQItemType[] = [
  {
    id: 1,
    question: "How quickly can we implement your solution?",
    answer: "Most clients are up and running within 7 days. Our onboarding team works directly with you to ensure a smooth transition and proper team training.",
  },
  {
    id: 2,
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 priority support for all clients. This includes email, live chat, and phone support, as well as access to our comprehensive knowledge base.",
  },
  {
    id: 3,
    question: "Is there a long-term contract required?",
    answer: "No long-term contracts required. We offer monthly and annual plans with significant savings for annual commitments, but you're free to cancel anytime.",
  },
  {
    id: 4,
    question: "Can your solution integrate with our existing tools?",
    answer: "Yes, we offer seamless integration with over 100+ popular business tools including CRM systems, marketing platforms, and accounting software.",
  },
  {
    id: 5,
    question: "What makes you different from competitors?",
    answer: "Unlike competitors, we offer a truly all-in-one solution with dedicated onboarding, ongoing training, and a customer success manager assigned to your account.",
  },
];
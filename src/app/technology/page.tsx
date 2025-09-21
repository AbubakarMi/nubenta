"use client";

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowDown, Code, Cpu, Cloud, Shield, Database,
  Smartphone, Globe, Zap, Award, Users, TrendingUp,
  CheckCircle, Star, ArrowRight, Lightbulb, Rocket,
  Brain, Layers, Settings, Monitor, Lock, GitBranch,
  Target, BarChart3, Infinity, Clock, DollarSign,
  Factory, Building, Briefcase, GraduationCap, Heart,
  Truck, ShoppingCart, Banknote, Activity, Wifi,
  Search, Eye, Headphones, MessageSquare, FileCheck,
  Calendar, PieChart, LineChart, Gauge, Sparkles,
  ChevronRight, Play, Quote, ChevronDown, MapPin,
  Mail, Phone, ExternalLink, Download, Share2
} from 'lucide-react';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { TechHeader } from '@/components/technology/tech-header';
import { TechFooter } from '@/components/technology/tech-footer';

// Comprehensive Services with Deep Technical Details
const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description: "Enterprise-grade AI solutions that transform raw data into intelligent business decisions, powered by cutting-edge algorithms and deep learning frameworks.",
    detailedDescription: "Our AI division specializes in developing sophisticated machine learning models, neural networks, and cognitive computing systems that revolutionize how businesses operate. We leverage advanced frameworks like TensorFlow, PyTorch, and custom-built algorithms to deliver solutions that continuously learn and adapt.",
    features: [
      "Deep Learning & Neural Networks",
      "Computer Vision & Image Recognition",
      "Natural Language Processing (NLP)",
      "Predictive Analytics & Forecasting",
      "Recommendation Systems",
      "Automated Decision Making",
      "Real-time Data Processing",
      "MLOps & Model Deployment"
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "BERT", "GPT", "Apache Spark", "Kubernetes"],
    useCases: [
      "Fraud Detection Systems for Financial Services",
      "Personalized Recommendation Engines",
      "Automated Quality Control in Manufacturing",
      "Intelligent Customer Service Chatbots",
      "Predictive Maintenance Solutions"
    ],
    metrics: {
      accuracy: "99.7%",
      processing: "10M+",
      reduction: "85%"
    },
    gradient: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]",
    category: "AI/ML"
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud Architecture",
    description: "Scalable, resilient cloud infrastructure designed for global enterprises, featuring multi-cloud strategies, containerization, and automated scaling.",
    detailedDescription: "We architect and implement world-class cloud solutions that enable businesses to scale globally while maintaining security, performance, and cost-efficiency. Our expertise spans across all major cloud providers with deep specialization in hybrid and multi-cloud strategies.",
    features: [
      "Multi-Cloud Architecture Design",
      "Kubernetes Orchestration",
      "Serverless Computing Solutions",
      "DevOps & CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Cloud Security & Compliance",
      "Auto-scaling & Load Balancing",
      "Disaster Recovery Planning"
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Jenkins", "Prometheus"],
    useCases: [
      "Global E-commerce Platform Migration",
      "Microservices Architecture Implementation",
      "Real-time Data Processing Pipelines",
      "High-Availability Banking Systems",
      "IoT Device Management Platforms"
    ],
    metrics: {
      uptime: "99.99%",
      scaling: "Auto",
      cost: "40%"
    },
    gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]",
    category: "Cloud"
  },
  {
    icon: Layers,
    title: "Custom Software Engineering",
    description: "End-to-end software development services creating bespoke applications that perfectly align with your business objectives and scale with your growth.",
    detailedDescription: "Our software engineering team delivers custom applications using modern frameworks and methodologies. We follow agile development practices, ensuring rapid delivery without compromising quality, security, or performance.",
    features: [
      "Full-Stack Web Development",
      "Mobile App Development (iOS/Android)",
      "Progressive Web Applications",
      "API Design & Integration",
      "Database Architecture",
      "Real-time Applications",
      "Cross-Platform Solutions",
      "Legacy System Modernization"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "Swift", "Kotlin", "PostgreSQL", "MongoDB"],
    useCases: [
      "Enterprise Resource Planning (ERP) Systems",
      "Customer Relationship Management (CRM)",
      "Financial Trading Platforms",
      "Healthcare Management Systems",
      "Supply Chain Optimization Tools"
    ],
    metrics: {
      delivery: "100%",
      performance: "95%",
      satisfaction: "99.8%"
    },
    gradient: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]",
    category: "Development"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security frameworks protecting enterprise assets with advanced threat detection, vulnerability assessment, and regulatory compliance solutions.",
    detailedDescription: "Our cybersecurity practice provides end-to-end protection for digital assets, implementing defense-in-depth strategies that safeguard against evolving threats while ensuring compliance with international standards.",
    features: [
      "Advanced Threat Detection",
      "Penetration Testing & Red Team",
      "Security Architecture Design",
      "Compliance Management (SOC2, ISO27001)",
      "Incident Response & Forensics",
      "Identity & Access Management",
      "Zero Trust Security Models",
      "Security Awareness Training"
    ],
    technologies: ["SIEM", "SOAR", "Splunk", "CrowdStrike", "Okta", "HashiCorp Vault", "Nessus", "Metasploit"],
    useCases: [
      "Financial Services Security Hardening",
      "Healthcare HIPAA Compliance",
      "Government Security Clearance Systems",
      "E-commerce Fraud Prevention",
      "Industrial IoT Security"
    ],
    metrics: {
      threats: "0",
      compliance: "100%",
      response: "15min"
    },
    gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]",
    category: "Security"
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Robust data infrastructure and advanced analytics platforms that transform raw information into strategic business intelligence and actionable insights.",
    detailedDescription: "We design and implement enterprise data architectures that handle massive volumes of structured and unstructured data, enabling real-time analytics, business intelligence, and data-driven decision making.",
    features: [
      "Big Data Processing Pipelines",
      "Real-time Stream Processing",
      "Data Warehouse & Lake Design",
      "Business Intelligence Dashboards",
      "ETL/ELT Pipeline Development",
      "Data Quality & Governance",
      "Advanced Analytics & Visualization",
      "Machine Learning Integration"
    ],
    technologies: ["Apache Spark", "Kafka", "Snowflake", "Databricks", "Power BI", "Tableau", "Airflow", "dbt"],
    useCases: [
      "Real-time Fraud Detection Systems",
      "Customer 360° Analytics Platforms",
      "Supply Chain Optimization",
      "Marketing Attribution Analysis",
      "Operational Performance Dashboards"
    ],
    metrics: {
      processing: "1TB+",
      latency: "<100ms",
      accuracy: "99.9%"
    },
    gradient: "from-[hsl(15_85%_65%)] to-[hsl(160_85%_45%)]",
    category: "Data"
  },
  {
    icon: Settings,
    title: "Digital Transformation Consulting",
    description: "Strategic technology leadership guiding organizations through comprehensive digital modernization, process optimization, and cultural transformation.",
    detailedDescription: "Our digital transformation consultants work alongside leadership teams to develop and execute comprehensive digitization strategies that modernize operations, enhance customer experiences, and drive sustainable growth.",
    features: [
      "Digital Strategy Development",
      "Legacy System Modernization",
      "Process Automation & RPA",
      "Change Management",
      "Technology Roadmap Planning",
      "Organizational Design",
      "Training & Adoption Programs",
      "Performance Optimization"
    ],
    technologies: ["UiPath", "Microsoft Power Platform", "Salesforce", "ServiceNow", "Slack", "Microsoft 365", "Zoom", "Miro"],
    useCases: [
      "Enterprise-wide Digital Overhaul",
      "Remote Work Infrastructure",
      "Customer Experience Transformation",
      "Operational Excellence Programs",
      "Innovation Lab Establishment"
    ],
    metrics: {
      efficiency: "65%",
      adoption: "95%",
      roi: "300%"
    },
    gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]",
    category: "Consulting"
  }
];

// Comprehensive Technology Stack
const technologies = [
  { name: "Python", level: 98, category: "Backend", description: "AI/ML, Data Science, Web Development" },
  { name: "React", level: 96, category: "Frontend", description: "Modern UI/UX, SPA Development" },
  { name: "AWS", level: 94, category: "Cloud", description: "Cloud Infrastructure, DevOps" },
  { name: "TypeScript", level: 97, category: "Language", description: "Type-safe JavaScript Development" },
  { name: "Node.js", level: 95, category: "Backend", description: "Server-side JavaScript, APIs" },
  { name: "TensorFlow", level: 92, category: "AI/ML", description: "Machine Learning, Deep Learning" },
  { name: "Kubernetes", level: 90, category: "DevOps", description: "Container Orchestration" },
  { name: "PostgreSQL", level: 93, category: "Database", description: "Relational Database Management" },
  { name: "Docker", level: 91, category: "DevOps", description: "Containerization, Deployment" },
  { name: "Next.js", level: 95, category: "Framework", description: "Full-stack React Applications" },
  { name: "Apache Spark", level: 89, category: "Big Data", description: "Large-scale Data Processing" },
  { name: "GraphQL", level: 88, category: "API", description: "Efficient Data Fetching" }
];

// Comprehensive Case Studies
const projects = [
  {
    title: "Global Banking AI Fraud Detection System",
    description: "Revolutionary machine learning platform that processes 50M+ transactions daily, detecting fraud with 99.97% accuracy and reducing false positives by 85%.",
    longDescription: "Developed a sophisticated AI-powered fraud detection system for a multinational bank serving 12 countries. The system combines real-time transaction analysis, behavioral pattern recognition, and advanced anomaly detection to identify fraudulent activities within milliseconds of transaction initiation.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    category: "AI & Machine Learning",
    client: "International Banking Group",
    industry: "Financial Services",
    duration: "18 months",
    team: "25 specialists",
    technologies: ["TensorFlow", "Apache Kafka", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
    challenges: [
      "Processing 50M+ transactions per day with <100ms latency",
      "Reducing false positive rate from 45% to 7%",
      "Compliance with PCI DSS and regional banking regulations",
      "Integration with legacy banking systems across 12 countries"
    ],
    solutions: [
      "Implemented ensemble ML models with real-time feature engineering",
      "Designed distributed architecture using Apache Kafka and Redis",
      "Created adaptive learning system that improves with new fraud patterns",
      "Built comprehensive monitoring and alerting dashboard"
    ],
    results: [
      "99.97% fraud detection accuracy",
      "85% reduction in false positives",
      "$50M+ annual savings in fraud prevention",
      "0.02% performance impact on transaction processing"
    ],
    stats: {
      transactions: "50M+/day",
      accuracy: "99.97%",
      savings: "$50M+",
      latency: "<100ms"
    },
    testimonial: {
      quote: "Nubenta's AI fraud detection system has transformed our security posture. The dramatic reduction in false positives alone has saved us millions in operational costs.",
      author: "Sarah Chen",
      position: "Chief Technology Officer",
      company: "Global Bank Corp"
    }
  },
  {
    title: "Enterprise Cloud Migration & Modernization",
    description: "Complete digital transformation of a Fortune 500 manufacturing company, migrating 200+ applications to multi-cloud architecture with 99.99% uptime.",
    longDescription: "Led the comprehensive cloud transformation of a global manufacturing giant, modernizing their entire IT infrastructure from on-premises legacy systems to a hybrid multi-cloud architecture spanning AWS, Azure, and Google Cloud.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    category: "Cloud Architecture",
    client: "Fortune 500 Manufacturing Corp",
    industry: "Manufacturing",
    duration: "24 months",
    team: "45 engineers",
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Jenkins", "Docker"],
    challenges: [
      "Migrating 200+ mission-critical applications with zero downtime",
      "Ensuring compliance with industry regulations across 15 countries",
      "Optimizing costs while improving performance and scalability",
      "Training 500+ employees on new cloud-native workflows"
    ],
    solutions: [
      "Designed phased migration strategy with automated rollback capabilities",
      "Implemented Infrastructure as Code using Terraform and GitOps",
      "Created comprehensive disaster recovery and business continuity plans",
      "Established cloud governance frameworks and cost optimization policies"
    ],
    results: [
      "99.99% system uptime during and after migration",
      "60% reduction in infrastructure costs",
      "300% improvement in deployment speed",
      "Zero security incidents during transition"
    ],
    stats: {
      applications: "200+",
      uptime: "99.99%",
      cost_reduction: "60%",
      countries: "15"
    },
    testimonial: {
      quote: "The cloud transformation exceeded all our expectations. Not only did we achieve significant cost savings, but our operational efficiency has improved dramatically.",
      author: "Michael Rodriguez",
      position: "Head of Infrastructure",
      company: "Global Manufacturing Inc"
    }
  },
  {
    title: "Healthcare Data Analytics Platform",
    description: "HIPAA-compliant analytics platform processing patient data from 500+ hospitals, enabling predictive healthcare insights and improving patient outcomes by 35%.",
    longDescription: "Developed a comprehensive healthcare analytics platform that aggregates and analyzes patient data from multiple sources to provide actionable insights for healthcare providers, improving patient care quality and operational efficiency.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    category: "Data Engineering",
    client: "Healthcare Consortium",
    industry: "Healthcare",
    duration: "20 months",
    team: "35 specialists",
    technologies: ["Apache Spark", "Snowflake", "Tableau", "Python", "FHIR", "HL7", "MongoDB"],
    challenges: [
      "Ensuring HIPAA compliance and patient data privacy",
      "Integrating diverse data sources and legacy systems",
      "Processing 100TB+ of patient data daily",
      "Providing real-time insights for critical care decisions"
    ],
    solutions: [
      "Implemented end-to-end encryption and audit trails",
      "Built unified data lake with automated ETL pipelines",
      "Created machine learning models for predictive analytics",
      "Developed intuitive dashboards for healthcare professionals"
    ],
    results: [
      "35% improvement in patient outcomes",
      "50% reduction in diagnostic errors",
      "40% increase in operational efficiency",
      "100% HIPAA compliance maintained"
    ],
    stats: {
      hospitals: "500+",
      data_processed: "100TB+",
      improvement: "35%",
      compliance: "100%"
    },
    testimonial: {
      quote: "This platform has revolutionized how we approach patient care. The predictive insights have enabled us to prevent complications and save lives.",
      author: "Dr. Amanda Foster",
      position: "Chief Medical Officer",
      company: "Regional Health Network"
    }
  },
  {
    title: "E-commerce Personalization Engine",
    description: "AI-powered recommendation system serving 10M+ users across 25 countries, increasing conversion rates by 45% and average order value by 30%.",
    longDescription: "Built a sophisticated machine learning-based personalization engine that analyzes user behavior, preferences, and contextual data to deliver hyper-personalized shopping experiences in real-time.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "AI & Machine Learning",
    client: "Global E-commerce Platform",
    industry: "Retail & E-commerce",
    duration: "15 months",
    team: "28 engineers",
    technologies: ["TensorFlow", "Redis", "Apache Kafka", "Elasticsearch", "React", "Node.js"],
    challenges: [
      "Processing 10M+ user interactions per hour",
      "Delivering personalized recommendations in <50ms",
      "Supporting multiple languages and currencies",
      "Handling seasonal traffic spikes (10x during holidays)"
    ],
    solutions: [
      "Implemented distributed machine learning pipeline",
      "Created real-time feature engineering system",
      "Built scalable recommendation serving infrastructure",
      "Developed A/B testing framework for continuous optimization"
    ],
    results: [
      "45% increase in conversion rates",
      "30% growth in average order value",
      "60% improvement in customer engagement",
      "25% reduction in cart abandonment"
    ],
    stats: {
      users: "10M+",
      conversion: "+45%",
      order_value: "+30%",
      countries: "25"
    },
    testimonial: {
      quote: "The personalization engine has transformed our customer experience. We've seen unprecedented engagement and revenue growth since implementation.",
      author: "Lisa Park",
      position: "VP of Digital Experience",
      company: "E-commerce Global"
    }
  },
  {
    title: "Smart City IoT Management Platform",
    description: "Comprehensive IoT platform managing 100,000+ connected devices across urban infrastructure, optimizing energy consumption by 40% and improving city services.",
    longDescription: "Designed and implemented a large-scale IoT management platform for smart city initiatives, integrating traffic management, energy optimization, waste management, and environmental monitoring systems.",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=500&fit=crop",
    category: "IoT & Smart Systems",
    client: "Metropolitan City Council",
    industry: "Government & Public Sector",
    duration: "30 months",
    team: "40 specialists",
    technologies: ["Azure IoT", "Apache Kafka", "InfluxDB", "Grafana", "Python", "React", "5G"],
    challenges: [
      "Managing 100,000+ IoT devices across the city",
      "Ensuring 99.9% uptime for critical infrastructure",
      "Processing 1TB+ of sensor data daily",
      "Integrating with legacy city management systems"
    ],
    solutions: [
      "Built scalable IoT device management platform",
      "Implemented real-time data processing and analytics",
      "Created predictive maintenance algorithms",
      "Developed citizen-facing mobile applications"
    ],
    results: [
      "40% reduction in energy consumption",
      "30% improvement in traffic flow",
      "50% faster emergency response times",
      "25% reduction in operational costs"
    ],
    stats: {
      devices: "100K+",
      energy_savings: "40%",
      response_time: "+50%",
      data_processed: "1TB+/day"
    },
    testimonial: {
      quote: "This smart city platform has transformed how we manage urban services. The efficiency gains and citizen satisfaction improvements have been remarkable.",
      author: "Robert Kim",
      position: "City Technology Director",
      company: "Metro City Council"
    }
  },
  {
    title: "Financial Trading Platform Modernization",
    description: "High-frequency trading platform processing 1M+ trades per second with microsecond latency, handling $10B+ in daily trading volume with 99.999% reliability.",
    longDescription: "Completely rebuilt a legacy financial trading system to support high-frequency trading with ultra-low latency requirements, implementing cutting-edge technology stack for real-time market data processing and trade execution.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
    category: "Fintech",
    client: "Investment Banking Firm",
    industry: "Financial Services",
    duration: "22 months",
    team: "50 engineers",
    technologies: ["C++", "Java", "Apache Kafka", "Redis", "FIX Protocol", "FPGA", "Linux"],
    challenges: [
      "Achieving microsecond latency for trade execution",
      "Processing 1M+ trades per second during peak hours",
      "Ensuring regulatory compliance across multiple jurisdictions",
      "Maintaining 99.999% system availability"
    ],
    solutions: [
      "Implemented ultra-low latency architecture with FPGA acceleration",
      "Built high-performance messaging system using custom protocols",
      "Created real-time risk management and compliance monitoring",
      "Developed comprehensive testing and simulation frameworks"
    ],
    results: [
      "10x improvement in trade execution speed",
      "99.999% system reliability achieved",
      "$10B+ daily trading volume supported",
      "Zero regulatory compliance violations"
    ],
    stats: {
      trades_per_second: "1M+",
      latency: "μsec",
      volume: "$10B+/day",
      uptime: "99.999%"
    },
    testimonial: {
      quote: "The new trading platform has given us a significant competitive advantage. The performance improvements have directly translated to increased profitability.",
      author: "James Thompson",
      position: "Head of Electronic Trading",
      company: "Global Investment Bank"
    }
  }
];

// Industry Expertise
const industries = [
  {
    name: "Financial Services",
    icon: Banknote,
    description: "Banking, Insurance, Investment Management, Fintech",
    projects: "150+",
    gradient: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]"
  },
  {
    name: "Healthcare & Life Sciences",
    icon: Heart,
    description: "Hospitals, Pharmaceutical, Medical Devices, Telemedicine",
    projects: "120+",
    gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  },
  {
    name: "Manufacturing & Industrial",
    icon: Factory,
    description: "Automotive, Aerospace, Industrial IoT, Supply Chain",
    projects: "100+",
    gradient: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]"
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Online Retail, Omnichannel, Customer Experience, Logistics",
    projects: "90+",
    gradient: "from-[hsl(220_85%_55%)] to-[hsl(15_85%_65%)]"
  },
  {
    name: "Government & Public Sector",
    icon: Building,
    description: "Smart Cities, Digital Government, Public Safety, Education",
    projects: "80+",
    gradient: "from-[hsl(15_85%_65%)] to-[hsl(160_85%_45%)]"
  },
  {
    name: "Energy & Utilities",
    icon: Zap,
    description: "Smart Grid, Renewable Energy, Oil & Gas, Utilities Management",
    projects: "70+",
    gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
  }
];

// Client Testimonials
const testimonials = [
  {
    quote: "Nubenta Technology has been instrumental in our digital transformation journey. Their expertise in AI and cloud architecture helped us achieve a 300% improvement in operational efficiency.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "Fortune 500 Manufacturing",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Enterprise Cloud Migration"
  },
  {
    quote: "The fraud detection system delivered by Nubenta has saved our organization millions of dollars. Their machine learning expertise is truly world-class.",
    author: "Michael Chen",
    position: "Head of Security",
    company: "Global Banking Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "AI Fraud Detection System"
  },
  {
    quote: "Working with Nubenta's team was exceptional. They delivered a complex healthcare analytics platform that exceeded all our expectations and compliance requirements.",
    author: "Dr. Emily Rodriguez",
    position: "Chief Medical Officer",
    company: "Regional Health Network",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    project: "Healthcare Analytics Platform"
  }
];

// Team Leadership
const leadership = [
  {
    name: "Dr. Aminu Abdullahi",
    position: "Chief Technology Officer",
    specialization: "AI/ML, Enterprise Architecture",
    experience: "15+ years",
    education: "PhD Computer Science, MIT",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Leading technology innovation with expertise in artificial intelligence, machine learning, and large-scale distributed systems.",
    achievements: [
      "Led 200+ successful enterprise transformations",
      "Published 50+ research papers in AI/ML",
      "Former Principal Architect at Microsoft",
      "AWS Certified Solutions Architect"
    ]
  },
  {
    name: "Sarah Okafor",
    position: "Head of Engineering",
    specialization: "Software Architecture, DevOps",
    experience: "12+ years",
    education: "MS Software Engineering, Stanford",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=300&fit=crop&crop=face",
    bio: "Expert in building scalable software systems and leading high-performance engineering teams across multiple continents.",
    achievements: [
      "Built engineering teams of 100+ developers",
      "Architect of systems serving 100M+ users",
      "Former Engineering Director at Google",
      "Kubernetes Certified Administrator"
    ]
  },
  {
    name: "Ibrahim Hassan",
    position: "Director of Cybersecurity",
    specialization: "Information Security, Compliance",
    experience: "18+ years",
    education: "MS Cybersecurity, Carnegie Mellon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Cybersecurity expert with extensive experience in protecting enterprise infrastructure and ensuring regulatory compliance.",
    achievements: [
      "Secured $50B+ in digital assets",
      "Zero security breaches in 10+ years",
      "Former CISO at Fortune 100 company",
      "CISSP, CISM, CISA certified"
    ]
  }
];

export default function TechnologyPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  return (
    <div className="min-h-screen">
      <TechHeader />
      {/* World-Class Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />

          <motion.div
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, hsl(220 85% 55% / 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, hsl(160 85% 45% / 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, hsl(45 85% 75% / 0.06) 0%, transparent 50%)
              `
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Optimized Floating Tech Particles */}
          {[...Array(isMobile ? 8 : 16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: `${5 + i * 4.5}%`,
                top: `${10 + (i % 5) * 18}%`,
              }}
              animate={{
                y: [0, -80, 0],
                x: [0, 30, 0],
                opacity: [0.1, 0.9, 0.1],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 18 + i * 1.5,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
              }}
            >
              <div className={`w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full bg-gradient-to-r ${
                i % 4 === 0 ? 'from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]' :
                i % 4 === 1 ? 'from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]' :
                i % 4 === 2 ? 'from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]' :
                'from-[hsl(15_85%_65%)] to-[hsl(160_85%_45%)]'
              } shadow-2xl backdrop-blur-sm`} />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl text-center">
          <ScrollReveal>
            {/* Enhanced Premium Icon */}
            <motion.div
              className="relative inline-block mb-16"
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div
                className="absolute inset-0 -m-12 bg-gradient-to-r from-[hsl(220_85%_55%_/_0.4)] via-[hsl(160_85%_45%_/_0.3)] to-[hsl(45_85%_75%_/_0.4)] rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0.9, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 -m-6 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.2)] to-[hsl(45_85%_75%_/_0.2)] rounded-3xl blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [360, 0, 360]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 p-10 rounded-3xl bg-gradient-to-br from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] shadow-2xl">
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code className="h-24 w-24 text-white mx-auto" />
                </motion.div>
              </div>
            </motion.div>

            {/* World-Class Title */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-6 md:mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <span className="relative block">
                <motion.span
                  className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(210_25%_98%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  World-Class
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-[hsl(160_85%_45%)] via-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Technology
                </motion.span>
              </span>
            </motion.h1>

            {/* Premium Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto mb-8 md:mb-12 px-4"
              style={{ color: "hsl(210 25% 90%)" }}
            >
              Engineering the future with
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent font-bold"> cutting-edge AI, cloud solutions, </span>
              and enterprise-grade software that transforms businesses globally.
            </motion.p>

            {/* Premium CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] hover:from-[hsl(220_85%_60%)] hover:to-[hsl(160_85%_50%)] text-white rounded-full px-10 py-6 text-lg font-bold shadow-2xl border-0"
                >
                  <Link href="#services" className="flex items-center gap-3">
                    Explore Our Services
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowDown className="h-6 w-6" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[hsl(160_85%_45%)] text-[hsl(160_85%_45%)] hover:bg-[hsl(160_85%_45%)] hover:text-white rounded-full px-10 py-6 text-lg font-bold"
                >
                  <Link href="#projects" className="flex items-center gap-3">
                    View Our Work
                    <Rocket className="h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* World-Class Stats */}
          <ScrollReveal delay={1200} className="mt-16 md:mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "1000+", label: "Projects Delivered", icon: Rocket, gradient: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]" },
                { number: "500+", label: "Enterprise Clients", icon: Users, gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]" },
                { number: "25+", label: "Countries Served", icon: Globe, gradient: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]" },
                { number: "99.8%", label: "Success Rate", icon: Award, gradient: "from-[hsl(220_85%_55%)] to-[hsl(45_85%_75%)]" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.15 }}
                  whileHover={{
                    scale: 1.15,
                    y: -20,
                    rotateY: 15,
                    rotateX: 5
                  }}
                  className="text-center p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 group cursor-pointer"
                >
                  <motion.div
                    className="mb-6"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                  >
                    <stat.icon className={`h-12 w-12 mx-auto bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                  </motion.div>

                  <motion.div
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.15 }}
                  >
                    {stat.number}
                  </motion.div>

                  <div className="group-hover:text-white transition-colors text-sm md:text-lg font-semibold" style={{ color: "hsl(210 25% 80%)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* World-Class Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_8%)] via-[hsl(220_20%_10%)] to-[hsl(220_25%_8%)]" />
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, hsl(160 85% 45% / 0.1) 0%, transparent 60%),
                radial-gradient(circle at 70% 70%, hsl(45 85% 75% / 0.08) 0%, transparent 60%)
              `
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          {/* Services Header */}
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                Our Services
              </span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "hsl(210 25% 85%)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Comprehensive technology solutions that drive innovation and deliver measurable business results.
            </motion.p>
          </ScrollReveal>

          {/* Enhanced Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <motion.div
                  className="relative group h-full"
                  onMouseMove={isMobile ? undefined : (e) => handleMouseMove(e, index)}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 overflow-hidden shadow-2xl">

                    {/* Enhanced Mouse Follow Glow - Desktop Only */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: hoveredService === index
                            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(160 85% 45% / 0.3), hsl(45 85% 75% / 0.15), transparent)`
                            : 'transparent'
                        }}
                      />
                    )}

                    {/* Additional Animated Background */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 20%, hsl(160 85% 45% / 0.1), transparent 70%)",
                          "radial-gradient(circle at 80% 80%, hsl(45 85% 75% / 0.1), transparent 70%)",
                          "radial-gradient(circle at 20% 20%, hsl(160 85% 45% / 0.1), transparent 70%)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          className={`p-6 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl`}
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                          animate={{
                            boxShadow: [
                              "0 0 30px rgba(100,200,255,0.3)",
                              "0 0 50px rgba(255,200,100,0.4)",
                              "0 0 30px rgba(100,200,255,0.3)"
                            ]
                          }}
                        >
                          <service.icon className="h-10 w-10 text-white" />
                        </motion.div>

                        <motion.div
                          className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] px-3 py-1 rounded-full"
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-xs font-bold text-[hsl(220_25%_6%)]">
                            {service.category}
                          </span>
                        </motion.div>
                      </div>

                      {/* Service Content */}
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: "hsl(210 25% 98%)" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6" style={{ color: "hsl(210 25% 85%)" }}>
                        {service.description}
                      </p>

                      {/* Key Features (First 4) */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <CheckCircle className="h-4 w-4 text-[hsl(160_85%_45%)]" />
                            <span className="text-sm font-medium" style={{ color: "hsl(210 25% 90%)" }}>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                        {service.features.length > 4 && (
                          <motion.div
                            className="text-xs text-[hsl(160_85%_45%)] font-medium mt-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            +{service.features.length - 4} more capabilities
                          </motion.div>
                        )}
                      </div>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6">
                        {Object.entries(service.metrics).map(([key, value], idx) => (
                          <motion.div
                            key={key}
                            className="text-center p-1.5 md:p-2 rounded-lg bg-white/5 border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                          >
                            <div className="text-xs md:text-sm font-bold bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                              {value}
                            </div>
                            <div className="text-xs capitalize leading-tight" style={{ color: "hsl(210 25% 70%)" }}>
                              {key}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Enhanced Interactive CTA */}
                      <motion.div
                        className="group/cta flex items-center justify-between p-4 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.1)] to-[hsl(45_85%_75%_/_0.1)] rounded-xl border border-[hsl(160_85%_45%_/_0.3)] cursor-pointer overflow-hidden relative"
                        whileHover={{
                          backgroundColor: "hsl(160 85% 45% / 0.25)",
                          scale: 1.03,
                          borderColor: "hsl(160 85% 45% / 0.6)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[hsl(160_85%_45%_/_0.0)] via-[hsl(160_85%_45%_/_0.1)] to-[hsl(160_85%_45%_/_0.0)] -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"
                        />
                        <motion.span
                          className="font-semibold relative z-10"
                          style={{ color: "hsl(160 85% 45%)" }}
                          whileHover={{ x: 3 }}
                        >
                          Explore Service
                        </motion.span>
                        <motion.div
                          whileHover={{ x: 12, scale: 1.3, rotate: 5 }}
                          transition={{ duration: 0.2, type: "spring" }}
                          className="relative z-10"
                        >
                          <ArrowRight className="h-5 w-5" style={{ color: "hsl(160 85% 45%)" }} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                About Our Technology Division
              </span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "hsl(210 25% 85%)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              We are a world-class technology division dedicated to engineering innovative solutions that transform businesses globally.
            </motion.p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To engineer cutting-edge technology solutions that empower businesses to achieve unprecedented growth and innovation.",
                icon: Rocket,
                gradient: "from-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)]"
              },
              {
                title: "Our Vision",
                description: "To be the global leader in technology innovation, setting new standards for excellence in software development and digital transformation.",
                icon: Globe,
                gradient: "from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
              },
              {
                title: "Our Values",
                description: "Excellence, innovation, integrity, and client success drive everything we do. We believe in delivering world-class solutions.",
                icon: Award,
                gradient: "from-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)]"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <motion.div
                  className="relative group h-full"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 overflow-hidden shadow-2xl">
                    <motion.div
                      className={`p-6 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-2xl mb-6 inline-block`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="h-10 w-10 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(210 25% 98%)" }}>
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "hsl(210 25% 85%)" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_8%)] via-[hsl(220_20%_10%)] to-[hsl(220_25%_8%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(160_85%_45%)] via-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Industry Expertise
              </span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "hsl(210 25% 85%)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Deep domain expertise across critical industry verticals, delivering specialized solutions that understand unique business challenges.
            </motion.p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 overflow-hidden shadow-2xl">
                    <motion.div
                      className={`p-6 rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-2xl mb-6 inline-block`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <industry.icon className="h-10 w-10 text-white" />
                    </motion.div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold" style={{ color: "hsl(210 25% 98%)" }}>
                        {industry.name}
                      </h3>
                      <motion.div
                        className="bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] px-3 py-1 rounded-full"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xs font-bold text-[hsl(220_25%_6%)]">
                          {industry.projects} Projects
                        </span>
                      </motion.div>
                    </div>

                    <p className="text-lg leading-relaxed" style={{ color: "hsl(210 25% 85%)" }}>
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section id="technologies" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(160_85%_45%)] via-[hsl(45_85%_75%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </motion.h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <motion.div
                  className="relative group"
                  onHoverStart={() => setHoveredTech(index)}
                  onHoverEnd={() => setHoveredTech(null)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/15 group-hover:border-[hsl(160_85%_45%_/_0.3)] transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-bold" style={{ color: "hsl(210 25% 95%)" }}>
                          {tech.name}
                        </h3>
                        <span className="text-xs bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent font-semibold">
                          {tech.category}
                        </span>
                      </div>
                      <motion.span
                        className="text-xl font-black bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent"
                        animate={{
                          scale: hoveredTech === index ? [1, 1.2, 1] : 1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {tech.level}%
                      </motion.span>
                    </div>

                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "hsl(210 25% 75%)" }}>
                      {tech.description}
                    </p>

                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] rounded-full relative"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        >
                          <motion.div
                            className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 rounded-full"
                            animate={{
                              opacity: hoveredTech === index ? [0.5, 1, 0.5] : 0.5
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies Showcase */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_8%)] via-[hsl(220_20%_10%)] to-[hsl(220_25%_8%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(220_85%_55%)] to-[hsl(160_85%_45%)] bg-clip-text text-transparent">
                Case Studies
              </span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "hsl(210 25% 85%)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Real-world success stories showcasing measurable impact and transformational results for global enterprises.
            </motion.p>
          </ScrollReveal>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <motion.div
                  className="relative group"
                  onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/20 cursor-pointer">
                    {/* Project Image */}
                    <div className="relative">
                      <div className="aspect-video relative overflow-hidden rounded-2xl">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] text-white px-4 py-2 rounded-full text-sm font-semibold"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {project.category}
                        </motion.div>

                        {/* Play Button for Details */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                            <ChevronDown
                              className={`h-8 w-8 text-white transition-transform duration-300 ${
                                selectedProject === index ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Project Metrics */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                          <motion.div
                            key={key}
                            className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                          >
                            <div className="text-2xl font-black bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                              {value}
                            </div>
                            <div className="text-sm capitalize font-medium" style={{ color: "hsl(210 25% 75%)" }}>
                              {key.replace('_', ' ')}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)]"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-sm font-semibold bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                            {project.client} • {project.industry}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4" style={{ color: "hsl(210 25% 98%)" }}>
                          {project.title}
                        </h3>

                        <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "hsl(210 25% 85%)" }}>
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-6">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[hsl(160_85%_45%)]" />
                            <span className="text-sm" style={{ color: "hsl(210 25% 80%)" }}>
                              {project.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-[hsl(160_85%_45%)]" />
                            <span className="text-sm" style={{ color: "hsl(210 25% 80%)" }}>
                              {project.team}
                            </span>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20"
                              style={{ color: "hsl(210 25% 90%)" }}
                              whileHover={{ scale: 1.05, backgroundColor: "hsl(160 85% 45% / 0.1)" }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] text-white rounded-full text-xs font-bold">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Client Testimonial Preview */}
                      {project.testimonial && (
                        <motion.div
                          className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
                          whileHover={{ scale: 1.02 }}
                        >
                          <Quote className="h-8 w-8 text-[hsl(160_85%_45%)] mb-4" />
                          <p className="text-lg italic mb-4" style={{ color: "hsl(210 25% 90%)" }}>
                            "{project.testimonial.quote}"
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] flex items-center justify-center">
                              <span className="text-sm font-bold text-white">
                                {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold" style={{ color: "hsl(210 25% 95%)" }}>
                                {project.testimonial.author}
                              </div>
                              <div className="text-sm" style={{ color: "hsl(210 25% 75%)" }}>
                                {project.testimonial.position}, {project.testimonial.company}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedProject === index ? "auto" : 0,
                      opacity: selectedProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {selectedProject === index && (
                      <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/15">
                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Challenges */}
                          <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "hsl(210 25% 98%)" }}>
                              <Target className="h-5 w-5 text-[hsl(220_85%_55%)]" />
                              Challenges
                            </h4>
                            <ul className="space-y-3">
                              {project.challenges.map((challenge, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm"
                                  style={{ color: "hsl(210 25% 85%)" }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-[hsl(220_85%_55%)] mt-2 flex-shrink-0" />
                                  {challenge}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Solutions */}
                          <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "hsl(210 25% 98%)" }}>
                              <Lightbulb className="h-5 w-5 text-[hsl(160_85%_45%)]" />
                              Solutions
                            </h4>
                            <ul className="space-y-3">
                              {project.solutions.map((solution, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm"
                                  style={{ color: "hsl(210 25% 85%)" }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-[hsl(160_85%_45%)] mt-2 flex-shrink-0" />
                                  {solution}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "hsl(210 25% 98%)" }}>
                              <TrendingUp className="h-5 w-5 text-[hsl(45_85%_75%)]" />
                              Results
                            </h4>
                            <ul className="space-y-3">
                              {project.results.map((result, idx) => (
                                <motion.li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm"
                                  style={{ color: "hsl(210 25% 85%)" }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-[hsl(45_85%_75%)] mt-2 flex-shrink-0" />
                                  {result}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_6%)] via-[hsl(220_20%_8%)] to-[hsl(220_25%_6%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(220_85%_55%)] via-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </motion.h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 p-6 md:p-8 overflow-hidden shadow-2xl">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                          <Star className="h-5 w-5 fill-[hsl(45_85%_75%)] text-[hsl(45_85%_75%)]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="h-10 w-10 text-[hsl(160_85%_45%)] mb-6" />
                    <p className="text-lg italic leading-relaxed mb-8" style={{ color: "hsl(210 25% 90%)" }}>
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.author} - ${testimonial.position}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg" style={{ color: "hsl(210 25% 98%)" }}>
                          {testimonial.author}
                        </div>
                        <div className="text-sm" style={{ color: "hsl(210 25% 75%)" }}>
                          {testimonial.position}
                        </div>
                        <div className="text-sm font-semibold bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Project Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] px-3 py-1 rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold text-[hsl(220_25%_6%)]">
                        {testimonial.project}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_25%_8%)] via-[hsl(220_20%_10%)] to-[hsl(220_25%_8%)]" />
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-7xl">
          <ScrollReveal className="text-center mb-20">
            <motion.h2
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <span className="bg-gradient-to-r from-[hsl(45_85%_75%)] via-[hsl(160_85%_45%)] to-[hsl(220_85%_55%)] bg-clip-text text-transparent">
                Leadership Team
              </span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "hsl(210 25% 85%)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              World-class technology leaders with proven track records at top-tier companies and institutions.
            </motion.p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 overflow-hidden shadow-2xl text-center">
                    {/* Profile Image */}
                    <motion.div
                      className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(160_85%_45%_/_0.3)] to-transparent" />
                    </motion.div>

                    {/* Leader Info */}
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "hsl(210 25% 98%)" }}>
                      {leader.name}
                    </h3>
                    <p className="text-lg font-semibold mb-4 bg-gradient-to-r from-[hsl(160_85%_45%)] to-[hsl(45_85%_75%)] bg-clip-text text-transparent">
                      {leader.position}
                    </p>

                    <div className="flex justify-center gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-sm font-bold" style={{ color: "hsl(210 25% 95%)" }}>
                          {leader.experience}
                        </div>
                        <div className="text-xs" style={{ color: "hsl(210 25% 70%)" }}>
                          Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold" style={{ color: "hsl(210 25% 95%)" }}>
                          {leader.specialization.split(',')[0]}
                        </div>
                        <div className="text-xs" style={{ color: "hsl(210 25% 70%)" }}>
                          Specialty
                        </div>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed mb-6" style={{ color: "hsl(210 25% 85%)" }}>
                      {leader.bio}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {leader.achievements.slice(0, 2).map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "hsl(210 25% 80%)" }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-[hsl(160_85%_45%)]" />
                          {achievement}
                        </motion.div>
                      ))}
                    </div>

                    {/* Education Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(45_85%_75%)] to-[hsl(160_85%_45%)] px-3 py-1 rounded-full"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold text-[hsl(220_25%_6%)]">
                        {leader.education.split(',')[0]}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TechFooter />
    </div>
  );
}

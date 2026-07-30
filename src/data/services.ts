import {
  Code2,
  Globe,
  ShoppingCart,
  Settings,
  Wrench,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";


export const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Scalable business websites, web applications, portals, and custom software solutions built for performance and growth.",
    href: "/services#web-development",
  },
  {
    icon: BarChart3,
    title: "Dashboard  Development",
    description:
      "Interactive admin dashboards, real-time analytics, reports, and data visualization solutions for smarter business decisions.",
    href: "/services#dashboard-development",
  },

  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Conversion-focused online stores with secure payments, inventory management, and seamless shopping experiences.",
    href: "/services#ecommerce",
  },

  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "SEO-friendly business websites, landing pages, blogs, and CMS solutions that are fast, secure, and easy to manage.",
    href: "/services#wordpress",
  },

  {
    icon: BriefcaseBusiness,
    title: "Business Software Development",
    description:
      "Custom CRM, ERP, HRMS, inventory, and business management systems designed to automate workflows and boost productivity.",
    href: "/services#business-software",
  },

  {
    icon: Settings,
    title: "Support & Maintenance",
    description:
      "Ongoing updates, security monitoring, performance optimization, bug fixes, and reliable technical support.",
    href: "/services#support",
  },
];


export const servicesDetails = [
  {
    id:'web-development',
    icon: Code2,
    image: "/projects/custome_web.webp",
    title: "Custom Web Development",
    description:
      "Build scalable, secure, and high-performance web applications tailored to your business goals and workflows.",

    features: [
      "Business Websites",
      "Admin Dashboards",
      "CRM & ERP Systems",
      "Custom Portals",
    ],

    href: "/contact",
  },

  {
    id: "dashboard-development",
    icon: BarChart3,
    image: "/projects/dashboard_iot.jpeg",

    title: "Dashboard & Analytics Development",

    description:
      "Develop interactive dashboards and real-time analytics platforms that help businesses monitor performance, visualize data, and make informed decisions.",

    features: [
      "Admin Dashboards",
      "Analytics & Reports",
      "Real-Time Charts",
      "Role-Based Access",
    ],

    href: "/contact",
  },

  {
    id:'wordpress',
    icon: Globe,
    image: "/projects/home_web.jpg",
    title: "WordPress Development",
    description:
      "Modern WordPress websites designed with SEO, performance, and easy content management in mind.",

    features: [
      "Corporate Websites",
      "Landing Pages",
      "Blog & CMS",
      "SEO Optimization",
    ],

    href: "/contact",
  },

  {
    id:'ecommerce',
    icon: ShoppingCart,
    image: "/projects/service_ecommerce.jpeg",
    title: "E-Commerce Development",
    description:
      "Launch conversion-focused online stores with secure payments, inventory management, and seamless shopping experiences.",

    features: [
      "Online Store",
      "Payment Gateway",
      "Inventory System",
      "Order Management",
    ],

    href: "/contact",
  },

  {
    id: "business-software",
    icon: BriefcaseBusiness,
    image: "/projects/attendanceapp.webp",

    title: "Business Software & CRM Development",

    description:
      "Build custom CRM, ERP, HRMS, inventory, and business management systems that automate workflows and improve operational efficiency.",

    features: [
      "CRM & ERP Systems",
      "Lead Management",
      "Inventory Management",
      "Business Automation",
    ],

    href: "/contact",
  },

  {
    id:'support',
    icon: Wrench,
    image: "/projects/web_hosting.jpg",
    title: "Support & Maintenance",
    description:
      "Keep your website secure, updated, optimized, and running smoothly with ongoing maintenance and technical support.",

    features: [
      "Bug Fixes",
      "Performance Optimization",
      "Feature Updates",
      "Security Monitoring",
    ],

    href: "/contact",
  },
];
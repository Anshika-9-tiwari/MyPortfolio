import {
  Code2,
  Globe,
  ShoppingCart,
  Settings,
  Wrench,
} from "lucide-react";


export const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Scalable websites, business portals, admin dashboards, and custom web applications tailored to your business.",
    href: "/services#web-development",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "SEO-friendly business websites, landing pages, and CMS solutions built for performance and easy management.",
    href: "/services#wordpress",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "High-converting online stores with secure payment gateways, inventory management, &  shopping experiences.",
    href: "/services#ecommerce",
  },
  {
    icon: Settings,
    title: "Support & Maintenance",
    description:
      "Continuous monitoring, updates, bug fixes, and optimization to keep your website secure and running smoothly.",
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
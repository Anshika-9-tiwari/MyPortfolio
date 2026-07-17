import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import OfficeLocation from '@/components/contact/OfficeLocation';
import { createMetadata } from '@/lib/metadata';
import React from 'react';

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with UMAKAN Technologies for website development, web applications, WordPress solutions, and business inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main >
      <ContactHero/>
      <ContactForm/>
      <OfficeLocation/>
    </main>
  );
}

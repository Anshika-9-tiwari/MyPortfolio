'use client';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import OfficeLocation from '@/components/contact/OfficeLocation';
import React from 'react';

export default function ContactPage() {
  return (
    <main >
      <ContactHero/>
      <ContactForm/>
      <OfficeLocation/>
    </main>
  );
}

"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
} from "lucide-react";

const officeInfo = [
  {
    icon: MapPin,
    title: "Office",
    value: "Remote friendly",
    href: "https://maps.google.com/?q=Tehkhand+Village+Mavi+Mohalla+Okhla+Phase+1+New+Delhi+110020",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 95408 38797",
    href: "tel:+919540838797",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@umakan.in",
    href: "mailto:contact@umakan.in",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919540838797",
  },
];

export default function OfficeLocation() {
  return (
    <section className="bg-[#0B0F19] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-5 gap-10 items-stretch">

          {/* Google Map */}

          <div className="lg:col-span-3 rounded-[30px] overflow-hidden border border-white/10">

            <iframe
              src="https://www.google.com/maps?q=Tehkhand%20Village%2C%20Mavi%20Mohalla%2C%20Okhla%20Phase%201%2C%20New%20Delhi%20110020&z=16&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full min-h-[500px] rounded-[30px]"
            ></iframe>

          </div>

          {/* Office Details */}

          <div className="lg:col-span-2 rounded-[30px] border border-white/10 bg-[#111827] p-8">

            <span className="text-[#ff7900] font-medium">
              📍Let's Connect
            </span>

            <h2 className="text-3xl font-semibold text-white mt-4">
               Based in New Delhi, serving clients across India and worldwide through remote collaboration and on-site consultations when required.
            </h2>

            <p className="text-gray-300 leading-8 mt-5">
              Whether you have a project idea, need a consultation,
              or simply want to discuss your business goals,
              we'd love to hear from you.
            </p>

            <div className="space-y-5 flex flex-col mt-10">

              {officeInfo.map((item) => {

                const Icon = item.icon;

                const content = (
                  <div className="flex  items-start  gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#ff7900]/30 transition">

                    <div className="w-12 h-12 rounded-xl bg-[#ff7900]/10 flex items-center justify-center shrink-0">

                      <Icon
                        size={22}
                        className="text-[#ff7900]"
                      />

                    </div>

                    <div>

                      <h4 className="text-white font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-gray-400 mt-1 text-sm leading-6">
                        {item.value}
                      </p>

                    </div>

                  </div>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
import ThankYouPage from "@/components/contact/Thank-you";

export const metadata = {
  title: "Thank You | UMAKAN Technologies",
  description:
    "Your inquiry has been submitted successfully.",
};

export default function ThankYou() {
  return (
    <section>
      <ThankYouPage/>
    </section>
  );
}

// Privacy policy
// export const metadata = createMetadata({
//   title: "Privacy Policy",
//   description:
//     "Read UMAKAN Technologies' Privacy Policy to understand how we collect, use, and protect your personal information.",
//   path: "/privacy-policy",
// });

// terms and conditons

// export const metadata = createMetadata({
//   title: "Terms & Conditions",
//   description:
//     "Review the Terms & Conditions for using UMAKAN Technologies' website and services.",
//   path: "/terms-and-conditions",
// });
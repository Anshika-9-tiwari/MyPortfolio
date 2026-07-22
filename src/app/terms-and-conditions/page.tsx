import TermsContent from '@/components/legal/TermsContent'
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions governing the use of UMAKAN Technologies' website, digital services, projects, payments, intellectual property, and support.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return <TermsContent />;
}
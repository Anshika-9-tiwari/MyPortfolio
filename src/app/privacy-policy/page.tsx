import PrivacyContent from "@/components/legal/PrivacyContent";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy | UMAKAN Technologies",
  description:
    "Learn how UMAKAN Technologies collects, uses, stores, and protects personal information submitted through our website and services.",
  path: "https://www.umakantechnologies.in/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
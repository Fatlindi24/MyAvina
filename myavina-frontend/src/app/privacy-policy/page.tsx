// app/privacy-policy/page.tsx
"use client";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 md:mt-12">
      <h2 className="text-[18px] md:text-[24px] font-normal text-black mb-4">
        {title}
      </h2>
      <div className="text-[14px] md:text-[18px] leading-7 text-black font-light">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-10 md:py-16">
      {/* Header */}
      <header>
        <h1 className="text-[32px] md:text-[48px] font-medium text-black">
          MyAvina Privacy Policy
        </h1>
        <p className="mt-2 text-md text-[#828282]  font-light">
          Last Updated: August 31, 2025
        </p>

        <p className="mt-6 max-w-[820px] text-[14px] md:text-[15px] leading-7 text-black/80">
          At MyAvina, your privacy is our priority. We are committed to
          protecting your personal and health information and being transparent
          about how we collect, use, and safeguard it.
        </p>

        <hr className="mt-8 border-t border-black/10" />
      </header>

      {/* Content (single column, left aligned) */}
      <main className="max-w-[820px]">
        <Section title="Information We Collect">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Personal Information: name, email, phone number, date of birth.
            </li>
            <li>
              Health Information: details you provide in quizzes, consultations,
              and medical history (protected under HIPAA).
            </li>
            <li>
              Payment Information: billing details processed securely by our
              payment providers.
            </li>
            <li>
              Technical Information: device data, browser type, IP address, and
              cookies for site functionality.
            </li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>To provide telehealth services and deliver treatments.</li>
            <li>To connect you with licensed physicians.</li>
            <li>To process payments and ship prescriptions.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>
              To send important updates, reminders, and health-related
              communications.
            </li>
          </ul>
        </Section>

        <Section title="How We Share Information">
          <p className="mb-3">We only share information when necessary:</p>
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>With physicians for treatment purposes.</li>
            <li>
              With pharmacies and shipping partners to fulfill prescriptions.
            </li>
            <li>With payment processors to complete transactions.</li>
            <li>When required by law or to protect patient safety.</li>
          </ul>
          <p className="mt-4 font-light">
            We never sell your personal or health information.
          </p>
        </Section>

        <Section title="Data Security">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>HIPAA-compliant systems.</li>
            <li>Encrypted communications and secure storage.</li>
            <li>Access limited to authorized personnel only.</li>
          </ul>
        </Section>

        <Section title="Your Rights">
          <p className="mb-3">
            Depending on your location, you may have the right to:
          </p>
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>Access and request a copy of your data.</li>
            <li>Correct or update your information.</li>
            <li>
              Request deletion of your account and data (subject to medical
              record-keeping laws).
            </li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </Section>

        <Section title="Cookies & Tracking">
          <p>
            We use cookies to improve your browsing experience, remember
            preferences, and analyze site traffic. You can manage cookies
            through your browser settings.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            Our platform integrates with secure third-party providers (e.g.,
            payment processors, pharmacies). These providers follow strict
            privacy standards.
          </p>
        </Section>

        <Section title="Children’s Privacy">
          <p>
            MyAvina is intended for adults 18+. We do not knowingly collect
            information from children.
          </p>
        </Section>

        <Section title="Updates to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted here with a revised effective date.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have questions about this policy or your information, contact
            us at:
          </p>
          <a href="mailto:support@myavina.com" className="mt-2 font-normal">
            support@myavina.com
          </a>
        </Section>
      </main>
    </div>
  );
}

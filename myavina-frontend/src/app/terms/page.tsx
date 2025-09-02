// app/terms/page.tsx
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

export default function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-10 md:py-16">
      {/* Header */}
      <header>
        <h1 className="text-[32px] md:text-[48px] font-medium text-black">
          Terms of Service
        </h1>
        <p className="mt-2 text-md text-[#828282]  font-light">
          Last Updated: August 31, 2025
        </p>

        <p className="mt-6 max-w-[820px] text-[14px] md:text-[15px] leading-7 text-black/80">
          DO NOT USE THE SERVICES IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY:
          Call 911 or go to the nearest emergency room immediately.
        </p>

        <hr className="mt-8 border-t border-black/10" />
      </header>

      {/* Content */}
      <main className="max-w-[820px]">
        <Section title="Introduction">
          <p>
            These Terms of Service (“Terms”) govern your access to and use of
            the MyAvina website, mobile applications, and related services (the
            “Services”). By accessing or using the Services, you agree to be
            bound by these Terms. If you do not agree, you may not use the
            Services.
          </p>
        </Section>

        <Section title="Basic Terms">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              MyAvina is not a medical provider. All medical services are
              delivered by licensed healthcare professionals.
            </li>
            <li>
              You must be 18 years or older to use the Services, and located in
              a state where MyAvina operates.
            </li>
            <li>
              You must provide accurate, current, and complete information when
              registering an account.
            </li>
          </ul>
        </Section>

        <Section title="Eligibility to Use the Services">
          <p>
            The Services are available only to individuals located within the
            United States and legally eligible to receive care. You may not use
            the Services if you are barred under applicable law or not
            physically located in a state where we operate.
          </p>
        </Section>

        <Section title="Account Registration">
          <p>
            To access many features, you must create an account and provide
            accurate, complete information (including identity verification).
            You are responsible for safeguarding your password and account.
          </p>
        </Section>

        <Section title="Fees, Purchases & Subscriptions">
          <p>
            All fees are displayed prior to checkout. Fees are non-refundable
            unless required by law. Subscription billing will continue until you
            cancel. By submitting payment information, you authorize us to
            charge applicable fees.
          </p>
        </Section>

        <Section title="Ownership; License to Use">
          <p>
            We grant you a limited, non-exclusive, non-transferable license to
            access and use the Services for personal, non-commercial purposes.
            All rights not expressly granted are reserved by MyAvina.
          </p>
        </Section>

        <Section title="Acceptable Use">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>You may not use the Services for any unlawful purpose.</li>
            <li>
              You may not attempt to gain unauthorized access to the Services.
            </li>
            <li>
              You may not use the Services to harass, threaten, abuse, or harm
              others.
            </li>
          </ul>
        </Section>

        <Section title="Termination">
          <p>
            We may suspend or terminate your account at any time for violation
            of these Terms. You may terminate your account by contacting
            support@myavina.com.
          </p>
        </Section>

        <Section title="Disclaimers; Limitation of Liability">
          <p>
            The Services are provided “AS IS” without warranties of any kind.
            MyAvina disclaims all liability for damages arising from your use of
            the Services to the fullest extent permitted by law.
          </p>
        </Section>

        <Section title="Dispute Resolution & Arbitration">
          <p>
            Any disputes will be resolved through binding arbitration, not in
            court, except where prohibited by law. By using the Services, you
            agree to waive your right to a jury trial or class action.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>If you have questions about these Terms, contact us at:</p>
          <p className="mt-2 font-medium">
            support@myavina.com, +1&nbsp;234&nbsp;567&nbsp;890
          </p>
        </Section>
      </main>
    </div>
  );
}

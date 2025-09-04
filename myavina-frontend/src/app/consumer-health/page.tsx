// app/consumer-health/page.tsx
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

export default function ConsumerHealthPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-10 md:py-16">
      {/* Header */}
      <header>
        <h1 className="text-[32px] md:text-[48px] font-medium text-black">
          Consumer Health Data Privacy Policy
        </h1>
        <p className="mt-2 text-md text-[#828282] font-light">
          Last Updated: August 31, 2025
        </p>

        <p className="mt-6 max-w-[820px] text-[14px] md:text-[15px] leading-7 text-black/80">
          Thank you for using MyAvina, Inc. (“MyAvina”) via our website and
          mobile/online applications and services (the “Services”). This policy
          explains how we collect, use, disclose, and protect Consumer Health
          Data as defined by applicable laws (including Washington’s My Health
          My Data Act and Nevada’s CHDP law). It applies to Consumer Health Data
          we handle about individuals who visit the Site, use the Services, or
          otherwise interact with us. Health information handled by independent
          physicians or pharmacies during medical care is governed by their own
          legal obligations (e.g., HIPAA); this policy does not replace those
          duties.
        </p>

        <hr className="mt-8 border-t border-black/10" />
      </header>

      {/* Content */}
      <main className="max-w-[820px]">
        <Section title="Introduction">
          <p>
            If you interact with us on behalf of someone else (e.g., referring a
            friend), you must have authority or consent to share their Consumer
            Health Data. We may update this policy from time to time; the “Last
            Updated” date above reflects the latest version.
          </p>
        </Section>

        <Section title="Sources of Consumer Health Data">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              You directly – when you create an account, complete health
              quizzes, place or customize orders, contact support, sign up for
              newsletters, or participate in webinars/surveys.
            </li>
            <li>
              Automatically – via cookies, pixels, SDKs, session replay tools,
              and similar technologies when you use the Services (see “Cookies
              &amp; Tracking”).
            </li>
            <li>
              Third parties – such as service providers, analytics and payment
              partners, affiliated companies, pharmacies, and social media
              platforms.
            </li>
            <li>
              Public sources – such as publicly available websites and profiles.
            </li>
          </ul>
          <p className="mt-3">
            We may combine information from these sources for the purposes
            described in this policy.
          </p>
        </Section>

        <Section title="Types of Consumer Health Data We Collect">
          <p className="mb-3">
            Depending on how you use the Services, we may collect:
          </p>
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Symptoms, conditions, treatments, diagnoses, and care preferences
              you share with us through forms, quizzes, or communications with
              MyAvina.
            </li>
            <li>
              Inferences about health derived from interactions with the
              Services.
            </li>
            <li>
              Related identifiers and device/usage data (e.g., IP address,
              device ID, cookie ID) to the extent they indicate health-related
              interest or activity.
            </li>
          </ul>
        </Section>

        <Section title="How We Use Consumer Health Data">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Provide and operate the Services – register/verify your account,
              fulfill and ship orders, process payments, provide support, and
              enable secure messaging and reminders.
            </li>
            <li>
              Run our business – operations, accounting, recordkeeping,
              auditing, reporting, and IT security/administration.
            </li>
            <li>
              Improve and develop – maintain quality and safety, debug and
              repair errors, analyze usage, and design new features, products,
              and experiences.
            </li>
            <li>
              Protect integrity and security – prevent, detect, and investigate
              fraud/abuse, or security incidents; manage risk.
            </li>
            <li>
              Corporate transactions – mergers, acquisitions, financings, or
              asset transfers.
            </li>
            <li>
              Marketing (with required permissions) – personalize content and
              offers; send newsletters or promotions; measure effectiveness. You
              may unsubscribe from marketing emails anytime (see “Your
              Choices”).
            </li>
          </ul>
          <p className="mt-3">
            We may use de-identified, aggregated, or anonymized information for
            any purpose permitted by law.
          </p>
        </Section>

        <Section title="How We Disclose Consumer Health Data">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Medical professionals &amp; pharmacies providing services to you
              through the Services (as necessary to deliver care or fulfill
              prescriptions).
            </li>
            <li>
              Service providers performing functions on our behalf (e.g.,
              hosting, analytics, payment processing, customer support,
              email/SMS, security, session-replay, fulfillment, logistics).
            </li>
            <li>Professional advisors (e.g., lawyers, auditors).</li>
            <li>
              Transaction parties in connection with a merger, acquisition,
              financing, or sale/transfer of assets.
            </li>
            <li>
              Legal, safety, or security recipients (e.g., law enforcement) when
              required/permitted by law or to protect rights/safety.
            </li>
            <li>
              The public when you choose to make content public (e.g., product
              reviews, blog comments).
            </li>
            <li>Others with your direction or consent.</li>
          </ul>
          <p className="mt-3">
            Sale/targeted advertising: We do not sell Consumer Health Data as
            defined by WA/NV law, and we do not disclose Consumer Health Data
            for targeted advertising without your opt-in consent where required.
          </p>
        </Section>

        <Section title="International Users">
          <p>
            Our Services are intended for users in the United States. If you
            access the Services from outside the U.S., you understand your data
            may be processed in the U.S., where laws may differ from those in
            your jurisdiction.
          </p>
        </Section>

        <Section title="Your Choices">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Marketing emails: You can unsubscribe using the link in our
              emails.
            </li>
            <li>
              Cookies &amp; tracking: Control through your browser settings or
              device permissions.
            </li>
            <li>
              Access, correction, deletion: Contact us (see below) to exercise
              your rights under applicable laws.
            </li>
          </ul>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this policy periodically. Material changes will be
            posted on this page with an updated “Last Updated” date. Your
            continued use of the Services after changes become effective means
            you acknowledge the updated policy.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have questions about this policy or your information, contact
            us at:
          </p>
          <p className="mt-2 font-medium">privacy@myavina.com</p>
        </Section>
      </main>
    </div>
  );
}

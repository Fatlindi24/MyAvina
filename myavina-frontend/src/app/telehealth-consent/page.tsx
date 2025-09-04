// app/telehealth-consent/page.tsx
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

export default function TelehealthConsentPage() {
  return (
    <div className="container mx-auto px-6 py-10 md:py-16">
      {/* Header */}
      <header>
        <h1 className="text-[32px] md:text-[48px] font-medium text-black">
          Telehealth Consent & Terms of Care
        </h1>
        <p className="mt-2 text-md text-black font-light">
          Last Updated: August 31, 2025
        </p>

        <div className="mt-6 max-w-[820px] text-[14px] md:text-[15px] leading-7 text-black/80">
          <p>Provider Entity: MyAvina-affiliated physician practice(s)</p>
          <p className="mt-1">
            Emergency: If you are having a medical emergency, call 911 or go to
            the nearest emergency room. Do not use the Services for emergencies.
          </p>
        </div>

        <hr className="mt-8 border-t border-black/10" />
      </header>

      {/* Content */}
      <main className="max-w-[820px]">
        <Section title="Who We Are & How the Platform Works">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              MyAvina, Inc. operates the technology platform and provides
              non-clinical support. MyAvina is not a health-care provider and
              does not give medical advice.
            </li>
            <li>
              Medical services are provided by independent, licensed clinicians
              employed by or contracted with the medical group(s) (“Medical
              Group”).
            </li>
          </ul>
        </Section>

        <Section title="Eligibility & Location">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>You must be 18+ and able to enter a binding contract.</li>
            <li>
              You must be physically located in a U.S. state where our
              clinicians are licensed at the time of your visit. We may verify
              your location and identity; if we cannot, we may be unable to
              treat you.
            </li>
          </ul>
        </Section>

        <Section title="Consent to Care & Telehealth">
          <p className="mb-3">
            By clicking “I agree” or using the Services, you consent to:
          </p>
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Diagnosis, treatment, and follow-up by licensed clinicians using
              telehealth technologies (video, audio, chat, asynchronous
              messaging, device data).
            </li>
            <li>
              Benefits may include easier access, convenience, and specialist
              input; risks may include delays due to tech issues, incomplete
              data transmission, or a need for in-person care.
            </li>
            <li>
              Alternatives: You can seek in-person care at any time. Either you
              or your clinician may end a telehealth visit if technology is
              inadequate.
            </li>
            <li>
              No recording: You may not record or capture visits without written
              consent.
            </li>
            <li>
              Prescriptions: Controlled substances will not be prescribed. A
              prescription is not guaranteed.
            </li>
          </ul>
          <p className="mt-3">
            You can withdraw telehealth consent at any time; however, we may be
            unable to continue care through MyAvina if you do.
          </p>
        </Section>

        <Section title="Payment & Insurance">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Some Services may be offered on a subscription or fee-for-service
              basis. You agree to pay all fees shown at checkout.
            </li>
            <li>
              We do not accept or bill commercial insurance or government
              programs (e.g., Medicare/Medicaid). You agree not to submit claims
              to such programs.
            </li>
            <li>
              FSA/HSA use may be possible depending on your plan (check with
              your administrator).
            </li>
            <li>
              Fees do not include outside or excluded services (e.g., ER/urgent
              care, specialists, labs, imaging, procedures) unless listed as
              included.
            </li>
          </ul>
        </Section>

        <Section title="Health Information & Communications">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              You authorize the Medical Group to use and disclose your health
              information as permitted by law for treatment, payment, and
              health-care operations (including scheduling, billing, pharmacy
              fulfillment, and coordination with other providers).
            </li>
            <li>
              You consent to receive calls, emails, texts, and in-app messages
              about your care, which may include health information. Unencrypted
              communications carry some risk of unauthorized access.
            </li>
          </ul>
        </Section>

        <Section title="Disclaimer & Limitation of Liability">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Services are available only where we operate and where clinicians
              are licensed.
            </li>
            <li className="uppercase tracking-wide">
              To the maximum extent permitted by law, we and our affiliates are
              not liable for indirect, special, incidental, consequential, or
              punitive damages. Our total liability will not exceed the greater
              of $100 or the amount you paid in the prior 6 months.
            </li>
          </ul>
        </Section>

        <Section title="Dispute Resolution & Arbitration (Class Action Waiver)">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Before filing a claim, please email legal@myavina.com so we can
              try to resolve it within 30 days.
            </li>
            <li>
              Except for small-claims matters and IP/injunctive relief, all
              disputes will be resolved by binding, individual arbitration
              administered by the AAA under its Consumer Arbitration Rules; the
              Federal Arbitration Act applies.
            </li>
            <li>
              No class actions: You and MyAvina may bring claims only
              individually.
            </li>
            <li>
              Opt-out: You may opt out of arbitration by emailing
              legal@myavina.com within 30 days of first accepting these Terms.
            </li>
          </ul>
        </Section>

        <Section title="Miscellaneous">
          <ul className="ml-4 md:ml-5 list-disc marker:text-black/40 space-y-1.5">
            <li>
              Governing Law & Venue: [Choose one U.S. state]; exclusive courts
              in [County, State] for any non-arbitrable claims.
            </li>
            <li>
              Severability/Survival: If a provision is unenforceable, the rest
              remains in effect; provisions that logically survive do so.
            </li>
            <li>
              Changes: We may update these Terms; continued use means you accept
              the updated version.
            </li>
          </ul>
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

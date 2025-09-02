// app/contact/page.tsx
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ChevronDown,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);

    try {
      // TODO: hook up to your API route / 3rd party (e.g., Formspree)
      console.log("Contact form:", data);
      alert("Thanks! We received your message.");
      form.reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[32px] md:text-[48px] font-medium">Contact Us</h1>
        <p className="mt-2 text-black text-md md:text-xl">
          Have a question about your care, treatment, or account?
          <br className="hidden md:block" />
          Our team is ready to help.
        </p>
        <hr className="mt-10 md:mt-15 border-[#d3d3d3]" />
      </div>

      {/* Grid */}
      <div className="mt-10 md:mt-15 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Ways to Reach Us */}
        <aside className="md:col-span-1">
          <h2 className="text-[24px] font-normal mb-6">Ways to Reach Us</h2>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 md:h-20 w-12 md:w-20 items-center justify-center rounded-full bg-[#C49FEB]">
              <Mail className="md:h-12 md:w-12 text-white" strokeWidth={1.4} />
            </div>
            <div>
              <p className="text-black font-medium text-[16px] md:text-[18px]">
                Email
              </p>
              <p className="text-black text-md md:text-lg font-normal">
                support@myavina.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex h-12 md:h-20 w-12 md:w-20 items-center justify-center rounded-full bg-[#C49FEB]">
              <Phone
                className="h-6 md:h-12 w-6 md:w-12 text-white"
                strokeWidth={1.4}
              />
            </div>
            <div>
              <p className="text-black font-medium">Phone</p>
              <p className="text-black text-md md:text-lg font-normal">
                +1-234-567-8900
              </p>
            </div>
          </div>

          <p className="text-black text-md md:text-lg font-normal max-w-md">
            Connect with us directly on Instagram or Facebook—send us a message
            anytime!
          </p>

          <div className="flex items-center mt-4 gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#C49FEB] hover:bg-[#eadff5] transition"
            >
              <Facebook className="h-6 w-6 text-white" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#C49FEB] hover:bg-[#eadff5] transition"
            >
              <Instagram className="h-6 w-6 text-white" />
            </a>
          </div>
        </aside>

        {/* Right: Form */}
        <form onSubmit={onSubmit} className="md:col-span-2 ">
          <h2 className="text-[24px] font-normal mb-6">Send Us a Message</h2>

          {/* Subject */}

          <label className="block text-lg text-black mb-2">
            Choose subject
          </label>
          <div className="relative mb-5">
            <select
              name="subject"
              className="appearance-none w-full rounded-md border border-gray-200 bg-[#F6F6F6] px-4 py-3 pr-10 text-black/80 outline-none focus:ring-2 focus:ring-[#C49FEB66]"
              defaultValue="How it works"
            >
              <option>How it works</option>
              <option>Appointments</option>
              <option>Orders & Shipping</option>
              <option>Payments & Billing</option>
              <option>Account Help</option>
              <option>Other</option>
            </select>
            {/* Custom dropdown arrow */}
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/50 pointer-events-none" />
          </div>

          {/* Email */}
          <label className="block text-lg text-black mb-2">Email Address</label>
          <input
            required
            type="email"
            name="email"
            placeholder="name@gmail.com"
            className="mb-5 w-full rounded-md border border-gray-200 bg-[#F6F6F6] px-4 py-3 text-black/80 outline-none focus:ring-2 focus:ring-[#C49FEB66]"
          />

          {/* Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-lg text-black mb-2">Name</label>
              <input
                required
                name="name"
                placeholder="Name"
                className="w-full rounded-md border border-gray-200 bg-[#F6F6F6] px-4 py-3 text-black/80 outline-none focus:ring-2 focus:ring-[#C49FEB66]"
              />
            </div>
            <div>
              <label className="block text-lg text-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+123456789"
                className="w-full rounded-md border border-gray-200 bg-[#F6F6F6] px-4 py-3 text-black/80 outline-none focus:ring-2 focus:ring-[#C49FEB66]"
              />
            </div>
          </div>

          {/* Message */}
          <label className="block text-lg text-black mb-2">Message</label>
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Write a message here..."
            className="w-full rounded-md border border-gray-200 bg-[#F6F6F6] px-4 py-3 text-black/80 outline-none focus:ring-2 focus:ring-[#C49FEB66]"
          />

          {/* Submit */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-black px-12 py-3 text-white text-[15px] md:text-[16px] font-light btn disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

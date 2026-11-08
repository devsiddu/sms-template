import { ArrowRight, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useSchool } from "../context/SchoolContext";

export default function ContactCTA() {
  const { schoolInfo } = useSchool();
  return (
    <section className="bg-background px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-4xl bg-primary px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-35 border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-45 border-white/5" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.4fr_0.8fr]">
            {/* Main Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#f5d9a9]">
                <MessageCircle size={16} />
                Get in Touch
              </span>

              <h2 className="mt-6 max-w-2xl font-['Fraunces'] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's Build a
                <span className="block text-[#e8ad57]">Brighter Future</span>
                Together.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                Have questions about admissions, school activities, or our
                educational journey? We are always happy to connect with parents
                and our community.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#c47b27]"
                >
                  Contact Our School
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn About Us
                </a>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm sm:p-8">
              <h3 className="font-['Fraunces'] text-2xl font-semibold text-white">
                Visit Our School
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/65">
                We welcome parents, visitors, and community members.
              </p>

              <div className="mt-8 space-y-7">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Our Location
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      {schoolInfo.location}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">Call Us</p>
                    <p className="mt-1 text-sm text-white/65">
                      {schoolInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">Email Us</p>
                    <p className="mt-1 text-sm text-white/65">
                      {schoolInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-xs leading-6 text-white/50">
                  {schoolInfo.fullname}
                  <br />
                  Learning Today, Leading Tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

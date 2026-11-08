import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  MessageCircle,
  CheckCircle2,
  School,
  ExternalLink,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "School Address",
    value: "Yogisiddeshwar Tot, Jokanatti, Karnataka, India",
    link: null,
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "Add school contact number",
    link: null,
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "Add school email address",
    link: null,
  },
  {
    icon: Clock3,
    title: "School Hours",
    value: "Monday – Saturday | School working hours",
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      // Replace this endpoint with your actual form service endpoint.
      const response = await fetch("YOUR_WEB3FORMS_ACCESS_KEY_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div className="container relative z-10">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
              <MessageCircle size={15} />
              Get in Touch
            </div>

            <h1 className="font-heading text-5xl font-semibold leading-tight md:text-7xl">
              Let's Start a
              <span className="block text-accent">Conversation.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Have a question, suggestion, or want to know more about our
              school? We would be glad to hear from you.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-white/10" />
      </section>

      {/* Contact section */}
      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Contact information */}
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact Information
              </span>

              <h2 className="section-heading mt-3">
                We'd Like to Hear From You
              </h2>

              <p className="section-description mt-4">
                Whether you are a parent, student, former student, or visitor,
                feel free to contact our school.
              </p>

              <div className="mt-10 space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/30"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-text">
                          {item.title}
                        </h3>
                        <p className="mt-1 wrap-break-word text-sm leading-6 text-text-secondary">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl bg-primary p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <School size={22} className="text-accent" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold">KHPS</h3>
                    <p className="text-xs text-white/65">
                      Yogisiddeshwar Tot, Jokanatti
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/75">
                  Education, growth, and a better future for every child in our
                  community.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm md:p-10">
              <div className="mb-8">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Send a Message
                </span>

                <h2 className="mt-3 font-heading text-3xl font-semibold text-text md:text-4xl">
                  Contact Our School
                </h2>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  Fill out the form below and we will get back to you.
                </p>
              </div>

              {status === "success" ? (
                <div className="rounded-2xl bg-primary-light p-8 text-center">
                  <CheckCircle2 size={48} className="mx-auto text-primary" />

                  <h3 className="mt-4 font-heading text-2xl font-semibold text-primary">
                    Message Sent Successfully
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    Thank you for contacting KHPS. Your message has been
                    submitted.
                  </p>

                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-semibold text-primary underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        pattern="[0-9+\-\s()]{7,20}"
                        title="Enter a valid phone number"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Subject *
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                      >
                        <option value="">Select a subject</option>
                        <option value="Admission Enquiry">
                          Admission Enquiry
                        </option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="School Information">
                          School Information
                        </option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-text"
                    >
                      Your Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      minLength={10}
                      maxLength={2000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm leading-7 text-text outline-none transition placeholder:text-text-light focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />

                    <p className="mt-2 text-right text-xs text-text-light">
                      {formData.message.length}/2000 characters
                    </p>
                  </div>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
                    >
                      Your message could not be sent. Please try again later or
                      contact the school directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={17} />
                      </>
                    )}
                  </button>

                  <p className="text-xs leading-6 text-text-light">
                    Your information will be used only to respond to your
                    enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="pb-20">
        <div className="container">
          <div className="mb-7">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Find Us
            </span>

            <h2 className="section-heading mt-3">Visit Our School</h2>

            <p className="section-description mt-3">
              We welcome parents, visitors, and members of our community.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="flex min-h-75 flex-col items-center justify-center bg-surface-muted px-6 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
                <MapPin size={30} />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold text-text">
                KHPS – Yogisiddeshwar Tot
              </h3>

              <p className="mt-2 max-w-md text-sm leading-7 text-text-secondary">
                Jokanatti, Karnataka, India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Yogisiddeshwar+Tot+Jokanatti+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Get Directions
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="container pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Contact;

import { Link } from "react-router-dom";

const Footer = ({
  name,
  shortname,
  location,
}: {
  name: string;
  shortname: string;
  location: string;
}) => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* School identity */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white font-heading text-xl font-semibold text-primary">
              K
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold">
                {shortname}
              </h2>
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/70">
            Building a brighter future through education, values, knowledge and
            opportunities for every child.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-white">
                News & Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold">Contact</h3>

          <ul className="space-y-3 text-sm leading-6 text-white/70">
            <li>{location}</li>
            <li>{name}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} KHPS. All rights reserved.</p>

          <p className="flex flex-wrap items-center gap-3">
            <span>Designed & Developed by</span>

            <a
              href="https://spirestack.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/85 transition hover:text-accent"
            >
              Siddu Mokhasi
            </a>

            <span className="text-white/30">|</span>

            <a
              href="https://www.linkedin.com/in/siddudev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>

            <span className="text-white/30">|</span>

            <a
              href="https://spirestack.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              Portfolio
            </a>
          </p>

          <p>Built with care for education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TopBar from "./TabBar";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "News", path: "/news" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = ({ name, shortname }: { name: string; shortname: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-text-secondary hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <TopBar name={name} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-heading text-xl font-semibold text-white">
            K
          </div>

          <div>
            <p className="font-heading text-lg font-semibold leading-tight text-text">
              {shortname}
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark md:inline-flex"
        >
          Get in Touch
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-lg border border-border p-2 text-text md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        hidden={!menuOpen}
        className="border-t border-border bg-background px-4 py-4 md:hidden"
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

/**
 * Editorial Modernism Design: Newspaper-style header with serif masthead
 * Typography: Georgia serif for title, Inter sans for navigation
 * Layout: Clean horizontal navigation with subtle border separator
 */

import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/articles", label: "Articles" },
    { path: "/taxonomy", label: "Taxonomy" },
    { path: "/decision-engine", label: "Decision Engine" },
    { path: "/cognitive-models", label: "Cognitive Models" },
    { path: "/prompts", label: "Prompts" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Masthead - Editorial serif title */}
          <Link href="/">
            <h1 className="serif text-3xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer m-0">
              The AI Capability Atlas
            </h1>
          </Link>

          {/* Navigation - Sans serif links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`sans text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - placeholder */}
          <button className="md:hidden text-foreground hover:text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

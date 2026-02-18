/**
 * Editorial Modernism Design: Minimal footer with metadata styling
 * Typography: Inter sans-serif for footer content
 * Layout: Simple centered layout with subtle top border
 */

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h4 className="serif text-lg font-semibold mb-3">About the Atlas</h4>
            <p className="sans text-sm text-muted-foreground leading-relaxed">
              A comprehensive taxonomy of AI capabilities designed to bridge the
              gap between what AI can do and what people know it can do.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="serif text-lg font-semibold mb-3">Explore</h4>
            <ul className="sans text-sm space-y-2">
              <li>
                <a href="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Investigative Articles
                </a>
              </li>
              <li>
                <a href="/taxonomy" className="text-muted-foreground hover:text-primary transition-colors">
                  Capability Taxonomy
                </a>
              </li>
              <li>
                <a href="/decision-engine" className="text-muted-foreground hover:text-primary transition-colors">
                  Decision Engine
                </a>
              </li>
              <li>
                <a href="/cognitive-models" className="text-muted-foreground hover:text-primary transition-colors">
                  Cognitive Models
                </a>
              </li>
            </ul>
          </div>

          {/* Metadata */}
          <div>
            <h4 className="serif text-lg font-semibold mb-3">Project Info</h4>
            <p className="sans text-sm text-muted-foreground">
              Version 2.0
              <br />
              Created: February 2026
              <br />
              71 Capabilities Documented
              <br />
              500+ Example Prompts
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="sans text-xs text-muted-foreground">
            © 2026 The AI Capability Atlas. Serious investigative journalism on AI literacy.
          </p>
        </div>
      </div>
    </footer>
  );
}

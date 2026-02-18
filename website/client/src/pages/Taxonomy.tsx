export default function Taxonomy() {
  const domains = [
    {
      name: "Knowledge & Learning",
      color: "bg-blue-50 border-blue-200",
      categories: ["Learn New Things", "Research & Analyze", "Evaluate Information"],
    },
    {
      name: "Creativity & Content",
      color: "bg-green-50 border-green-200",
      categories: ["Create Things", "Transform Content", "Improve Work"],
    },
    {
      name: "Analysis & Problem Solving",
      color: "bg-orange-50 border-orange-200",
      categories: ["Make Decisions", "Solve Problems", "Analyze Systems"],
    },
    {
      name: "Everyday Life",
      color: "bg-purple-50 border-purple-200",
      categories: ["Practical Skills", "Social & Emotional", "Personal Wellness", "Entertainment"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted border-b border-border">
        <div className="container py-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            6-Layer Taxonomy
          </div>
          <h1 className="serif text-5xl font-bold text-foreground mb-4">
            AI Capability Taxonomy
          </h1>
          <p className="sans text-xl text-muted-foreground max-w-3xl">
            A comprehensive 6-layer hierarchy documenting 71 distinct capabilities across 4 major domains, with 500+ example prompts and cognitive skill mappings.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="editorial-card p-8 mb-12">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/MblNSUQohPHlkTcE.png"
            alt="AI Capability Taxonomy: A Hierarchical View"
            className="w-full h-auto"
          />
          <p className="sans text-sm text-muted-foreground mt-4 italic text-center">
            Figure 1: Complete taxonomy hierarchy from domains to use cases
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {domains.map((domain, i) => (
            <div key={i} className={`editorial-card p-6 border-2 ${domain.color}`}>
              <h3 className="serif text-2xl font-bold text-foreground mb-4">
                {domain.name}
              </h3>
              <ul className="space-y-2">
                {domain.categories.map((cat, j) => (
                  <li key={j} className="sans text-base text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="editorial-card p-8">
          <h2 className="serif text-3xl font-bold text-foreground mb-6">
            Taxonomy Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { layer: "Layer 1", name: "Major Domains", count: "4" },
              { layer: "Layer 2", name: "Functional Categories", count: "13" },
              { layer: "Layer 3", name: "Tactical Capabilities", count: "71" },
              { layer: "Layer 4", name: "Specific Use Cases", count: "150+" },
              { layer: "Layer 5", name: "Example Prompts", count: "500+" },
              { layer: "Layer 6", name: "Cognitive Skills", count: "Hierarchical" },
            ].map((layer, i) => (
              <div key={i} className="border border-border p-4 rounded">
                <div className="sans text-xs font-semibold text-muted-foreground mb-1">
                  {layer.layer}
                </div>
                <div className="serif text-lg font-bold text-foreground mb-1">
                  {layer.name}
                </div>
                <div className="sans text-2xl font-bold text-primary">
                  {layer.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted border-b border-border">
        <div className="container py-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Project Overview
          </div>
          <h1 className="serif text-5xl font-bold text-foreground mb-4">
            About the Atlas
          </h1>
          <p className="sans text-xl text-muted-foreground max-w-3xl">
            A comprehensive taxonomy of AI capabilities designed to bridge the gap between what AI can do and what people know it can do.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="editorial-card p-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              Project Mission
            </h2>
            <div className="sans text-base text-foreground leading-relaxed space-y-4">
              <p>
                The AI Capability Atlas represents a comprehensive effort to document, organize, and make accessible the full range of AI capabilities for everyday users. Through serious investigative journalism and rigorous taxonomy development, we address the critical knowledge gap that prevents most people from effectively leveraging AI tools.
              </p>
              <p>
                Our research reveals that the barrier to AI adoption isn't lack of interest or intelligence—it's the absence of coherent frameworks that help people understand what's possible and how to get there. The Atlas provides that framework through a 6-layer taxonomy, cognitive integration, and decision support systems.
              </p>
            </div>
          </div>

          <div className="editorial-card p-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              What's Inside
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "71 Capabilities",
                  description: "Documented across 4 major domains with detailed use cases and cognitive requirements",
                },
                {
                  title: "500+ Example Prompts",
                  description: "Ready-to-use prompts for each use case with thinking frameworks and metacognitive check-ins",
                },
                {
                  title: "6-Layer Taxonomy",
                  description: "From broad domains to specific cognitive skills, organized for progressive learning",
                },
                {
                  title: "Decision Engine",
                  description: "Navigate from high-level goals to specific capabilities in maximum 3 clicks",
                },
                {
                  title: "Cognitive Models",
                  description: "Skill ladder progression and mental models for effective AI interaction",
                },
                {
                  title: "Investigative Articles",
                  description: "Four in-depth articles exploring AI literacy, thinking skills, and problem decomposition",
                },
              ].map((item, i) => (
                <div key={i} className="border border-border p-4 rounded">
                  <h3 className="serif text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="sans text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-card p-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              Methodology
            </h2>
            <div className="sans text-base text-foreground leading-relaxed space-y-4">
              <p>
                The Atlas was developed through a rigorous process combining literature review, user research, and iterative taxonomy development. We analyzed hundreds of AI use cases, interviewed users at different skill levels, and synthesized findings into a coherent framework.
              </p>
              <p>
                Each capability is documented with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clear definition and when to use it</li>
                <li>Cognitive skills required (foundational to advanced)</li>
                <li>Thinking prompts and metacognitive check-ins</li>
                <li>Common pitfalls and how to avoid them</li>
                <li>Example prompts with cognitive load guidance</li>
              </ul>
              <p>
                The cognitive integration ensures that users don't just learn what AI can do, but develop the thinking skills necessary to use it effectively.
              </p>
            </div>
          </div>

          <div className="editorial-card p-8 bg-primary/5 border-primary">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              Core Principles
            </h2>
            <div className="space-y-4">
              {[
                {
                  principle: "Structural Solutions Over Individual Effort",
                  explanation: "The knowledge gap is structural, not personal. We provide frameworks that make AI literacy achievable for everyone.",
                },
                {
                  principle: "Thinking Skills Over Prompt Formulas",
                  explanation: "True mastery comes from structured thinking, not memorizing perfect prompts. We teach the cognitive skills that transfer across all AI interactions.",
                },
                {
                  principle: "Amplification Over Replacement",
                  explanation: "AI serves best as a cognitive amplifier, extending human capabilities while preserving agency and judgment.",
                },
                {
                  principle: "Decomposition as Master Skill",
                  explanation: "Breaking complex problems into manageable components is the fundamental skill that unlocks all others.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="serif text-lg font-bold text-foreground mb-2">
                    {item.principle}
                  </h3>
                  <p className="sans text-sm text-muted-foreground">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-card p-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              Version History
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <div className="sans text-sm font-semibold text-primary mb-1">
                  Version 2.0 — February 2026
                </div>
                <p className="sans text-sm text-foreground">
                  Complete 6-layer taxonomy with cognitive integration, decision engine, and investigative articles. 71 capabilities, 500+ example prompts.
                </p>
              </div>
              <div className="border-l-4 border-muted-foreground pl-4">
                <div className="sans text-sm font-semibold text-muted-foreground mb-1">
                  Version 1.0 — Initial Release
                </div>
                <p className="sans text-sm text-muted-foreground">
                  Basic taxonomy structure with domains and categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Streamdown } from "streamdown";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Why People Don't Know What AI Can Do",
      subtitle: "The Knowledge Gap That's Holding Us Back",
      excerpt: "The public's limited understanding of AI capabilities stems not from lack of interest, but from structural barriers: overwhelming complexity, misleading hype cycles, and the absence of coherent frameworks for everyday tasks.",
    },
    {
      id: 2,
      title: "The Skill Gap Isn't Prompting — It's Thinking",
      subtitle: "Beyond the Formulaic Approach",
      excerpt: "True AI literacy requires structured thinking skills, not prompt formulas. The cognitive model shows that effective AI use progresses through distinct skill levels with different thinking patterns.",
    },
    {
      id: 3,
      title: "AI as Cognitive Amplifier, Not Replacement",
      subtitle: "Reframing the Augmentation Debate",
      excerpt: "AI functions most effectively as a cognitive amplifier, augmenting human capabilities in pattern recognition, information synthesis, and idea generation while leaving judgment to humans.",
    },
    {
      id: 4,
      title: "From Overwhelm to Decomposition",
      subtitle: "The Core Skill for AI Literacy",
      excerpt: "Problem decomposition—breaking complex challenges into manageable components—is the fundamental skill that bridges the gap between overwhelm and actionable steps.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted border-b border-border">
        <div className="container py-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Investigative Journalism
          </div>
          <h1 className="serif text-5xl font-bold text-foreground mb-4">
            Editorial Articles
          </h1>
          <p className="sans text-xl text-muted-foreground max-w-3xl">
            Serious investigative journalism on AI literacy and everyday capabilities. Four in-depth articles exploring the knowledge gap, thinking skills, cognitive amplification, and problem decomposition.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article) => (
            <article key={article.id} className="editorial-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="serif text-sm font-semibold text-muted-foreground">
                  Article {article.id}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="sans text-sm text-muted-foreground">
                  {10 + article.id * 2} min read
                </span>
              </div>
              <h2 className="serif text-3xl font-bold text-foreground mb-3">
                {article.title}
              </h2>
              <h3 className="sans text-lg font-semibold text-muted-foreground mb-4">
                {article.subtitle}
              </h3>
              <p className="sans text-base text-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Editorial Modernism Design: Newspaper homepage with clear hierarchy
 * Typography: Georgia serif headlines, Inter sans body text
 * Layout: Asymmetric hero with grid-based feature sections
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric editorial layout */}
      <section className="bg-muted border-b border-border">
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
                Investigative Journalism
              </div>
              <h1 className="serif text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                The AI Capability Atlas
              </h1>
              <p className="sans text-xl text-muted-foreground mb-8 leading-relaxed">
                Serious investigative journalism on AI literacy and everyday
                capabilities. A comprehensive 6-layer taxonomy documenting 71
                capabilities, 500+ example prompts, and cognitive frameworks for
                effective AI use.
              </p>
              <div className="flex gap-4">
                <Link href="/taxonomy">
                  <Button size="lg" className="sans font-medium">
                    Explore Taxonomy
                  </Button>
                </Link>
                <Link href="/prompts">
                  <Button size="lg" variant="outline" className="sans font-medium">
                    Browse Prompts
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Featured Infographic */}
            <div className="editorial-card p-6">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/MblNSUQohPHlkTcE.png"
                alt="AI Capability Taxonomy: A Hierarchical View showing four layers from broad domains to specific use cases"
                className="w-full h-auto"
              />
              <p className="sans text-sm text-muted-foreground mt-4 italic">
                Figure 1.1: The complete capability taxonomy hierarchy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="serif text-4xl font-bold text-foreground mb-4">
            Key Findings
          </h2>
          <p className="sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Our investigative research reveals critical insights about the AI
            literacy gap and how to bridge it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "71",
                  label: "Capabilities",
                  description: "Documented across 6 major domains",
                },
                {
                  number: "110+",
                  label: "Example Prompts",
                  description: "Ready-to-use across 22 use cases",
                },
            {
              number: "3 Clicks",
              label: "To Find Help",
              description: "Maximum navigation depth",
            },
            {
              number: "6 Layers",
              label: "Taxonomy Depth",
              description: "From domains to cognitive skills",
            },
          ].map((stat, i) => (
            <div key={i} className="editorial-card p-6 text-center">
              <div className="serif text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="sans text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="sans text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-muted border-y border-border py-20">
        <div className="container">
          <h2 className="serif text-4xl font-bold text-foreground mb-12">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Why People Don't Know What AI Can Do",
                subtitle: "The Knowledge Gap That's Holding Us Back",
                excerpt:
                  "The public's limited understanding of AI capabilities stems not from lack of interest, but from structural barriers: overwhelming complexity, misleading hype cycles, and the absence of coherent frameworks.",
              },
              {
                title: "The Skill Gap Isn't Prompting — It's Thinking",
                subtitle: "Beyond the Formulaic Approach",
                excerpt:
                  "True AI literacy requires structured thinking skills, not prompt formulas. The cognitive model shows that effective AI use progresses through distinct skill levels with different thinking patterns.",
              },
              {
                title: "AI as Cognitive Amplifier, Not Replacement",
                subtitle: "Reframing the Augmentation Debate",
                excerpt:
                  "AI functions most effectively as a cognitive amplifier, augmenting human capabilities in pattern recognition, information synthesis, and idea generation while leaving judgment to humans.",
              },
              {
                title: "From Overwhelm to Decomposition",
                subtitle: "The Core Skill for AI Literacy",
                excerpt:
                  "Problem decomposition—breaking complex challenges into manageable components—is the fundamental skill that bridges the gap between overwhelm and actionable steps.",
              },
            ].map((article, i) => (
              <div key={i} className="editorial-card p-8">
                <h3 className="serif text-2xl font-bold text-foreground mb-2">
                  {article.title}
                </h3>
                <h4 className="sans text-lg font-semibold text-muted-foreground mb-4">
                  {article.subtitle}
                </h4>
                <p className="sans text-base text-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link href="/articles">
                  <Button variant="outline" className="sans">
                    Read Full Article →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="container py-20">
        <h2 className="serif text-4xl font-bold text-foreground mb-12 text-center">
          Interactive Tools
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Decision Engine */}
          <div className="editorial-card p-8">
            <div className="mb-6">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/dswAeLAUBgJqxjFH.png"
                alt="Decision Engine flowchart showing maximum 3 clicks to a recommendation"
                className="w-full h-auto"
              />
            </div>
            <h3 className="serif text-2xl font-bold text-foreground mb-3">
              Decision Engine
            </h3>
            <p className="sans text-base text-muted-foreground mb-6">
              Find the right AI capability for your task in maximum 3 clicks.
              Navigate from high-level goals to specific, actionable guidance.
            </p>
            <Link href="/decision-engine">
              <Button className="sans font-medium w-full">
                Try Decision Engine →
              </Button>
            </Link>
          </div>

          {/* Cognitive Models */}
          <div className="editorial-card p-8">
            <div className="mb-6">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/GyFKcjflINoEXSqg.png"
                alt="Cognitive models showing skill ladder and mental models for AI interaction"
                className="w-full h-auto"
              />
            </div>
            <h3 className="serif text-2xl font-bold text-foreground mb-3">
              Cognitive Models
            </h3>
            <p className="sans text-base text-muted-foreground mb-6">
              Understand the thinking frameworks and skill progression from
              novice to proficient AI user through structured mental models.
            </p>
            <Link href="/cognitive-models">
              <Button className="sans font-medium w-full">
                Explore Models →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h2 className="serif text-4xl font-bold mb-6">
            Bridge the AI Literacy Gap
          </h2>
          <p className="sans text-xl mb-8 max-w-3xl mx-auto opacity-90">
            The gap between what AI can do and what people know it can do is
            real, but it's not inevitable. With structured frameworks like the
            Atlas, we can build the bridges that turn overwhelming possibility
            into practical capability.
          </p>
          <Link href="/taxonomy">
            <Button
              size="lg"
              variant="secondary"
              className="sans font-semibold text-lg"
            >
              Start Exploring
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

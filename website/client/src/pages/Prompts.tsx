import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Prompt {
  capability: string;
  category: string;
  domain: string;
  useCase: string;
  prompts: string[];
}

export default function Prompts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");

  const promptsData: Prompt[] = [
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Explain complex concepts",
      useCase: "Explain academic concept",
      prompts: [
        "Explain photosynthesis to a 5th grader",
        "What is the theory of relativity in simple terms?",
        "Break down how blockchain technology works",
        "Explain supply and demand using a lemonade stand",
        "Describe quantum computing as if I'm a high school student"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Explain complex concepts",
      useCase: "Explain technical term",
      prompts: [
        "What does 'machine learning' mean for non-technical people?",
        "Explain 'supply chain management' simply",
        "What is 'quantum computing' and why does it matter?",
        "Define 'cognitive dissonance' with everyday examples",
        "Explain 'blockchain' without technical jargon"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Explain complex concepts",
      useCase: "Explain current event",
      prompts: [
        "Explain the conflict in [region] for someone who hasn't followed the news",
        "What are the key arguments in the climate change debate?",
        "Break down the economic implications of recent policy changes",
        "Explain the debate about AI regulation in simple terms",
        "What's happening with cryptocurrency regulation and why does it matter?"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Answer factual questions",
      useCase: "Fact checking",
      prompts: [
        "What's the population of Tokyo?",
        "When was the Magna Carta signed?",
        "What are the symptoms of Lyme disease?",
        "How tall is Mount Everest?",
        "What's the boiling point of water at sea level?"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Answer factual questions",
      useCase: "Definition lookup",
      prompts: [
        "What does 'cognitive dissonance' mean?",
        "Define 'sustainable development'",
        "What is the difference between 'weather' and 'climate'?",
        "Define 'algorithm' in simple terms",
        "What does 'empathy' mean versus 'sympathy'?"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Compare concepts",
      useCase: "Compare technologies",
      prompts: [
        "Compare iOS vs Android for privacy-conscious users",
        "What are the differences between electric and hybrid cars?",
        "Compare streaming services Netflix, Hulu, and Disney+",
        "How does solar power compare to wind power for home use?",
        "Compare note-taking apps: Evernote, Notion, and OneNote"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Compare concepts",
      useCase: "Compare ideas/theories",
      prompts: [
        "Compare capitalism and socialism as economic systems",
        "What are the differences between Newtonian and Einsteinian physics?",
        "Compare Freudian and Jungian psychology",
        "How do learning theories (behaviorism, constructivism) approach education?",
        "Compare utilitarianism and deontology as ethical frameworks"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Provide examples",
      useCase: "Illustrate abstract concept",
      prompts: [
        "Give me real-world examples of Newton's laws",
        "Provide everyday examples of cognitive biases",
        "What are some practical examples of supply chain principles?",
        "Give examples of machine learning in daily life",
        "Illustrate the concept of 'opportunity cost' with examples"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Provide examples",
      useCase: "Provide case studies",
      prompts: [
        "Give me case studies of successful startups",
        "Provide examples of companies that failed due to poor leadership",
        "What are case studies of cities that implemented effective public transit?",
        "Give examples of historical figures who demonstrated resilience",
        "Provide case studies of successful environmental policies"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Translate concepts across domains",
      useCase: "Create analogies",
      prompts: [
        "How is computer memory like human memory?",
        "Compare an economy to an ecosystem",
        "How is social media like a town square?",
        "Compare managing a team to conducting an orchestra",
        "How is learning a language like learning to code?"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Translate concepts across domains",
      useCase: "Cross-disciplinary connections",
      prompts: [
        "How does psychology intersect with economics?",
        "What are the connections between biology and engineering?",
        "How do art and science complement each other?",
        "What do history and literature share in common?",
        "How does philosophy relate to computer science?"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Teach step-by-step",
      useCase: "Procedural instructions",
      prompts: [
        "Explain how to tie a tie step by step",
        "How do I change a flat tire?",
        "Teach me how to meditate step by step",
        "Explain the process of making sourdough bread",
        "Walk me through setting up a home network"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Learn New Things",
      capability: "Teach step-by-step",
      useCase: "Learning progression",
      prompts: [
        "Create a step-by-step plan for learning to code",
        "How should I progress from beginner to advanced guitar player?",
        "Design a learning path for understanding machine learning",
        "What's the best sequence for learning a new language?",
        "How do I build up to running a marathon from scratch?"
      ]
    },
    {
      domain: "Knowledge & Learning",
      category: "Research & Analyze",
      capability: "Summarize information",
      useCase: "Condense documents",
      prompts: [
        "Summarize this 10-page article in 3 bullet points",
        "What are the key takeaways from this research paper?",
        "Give me a brief summary of this news story",
        "Extract main arguments from this opinion piece",
        "Condense this report into an executive summary"
      ]
    },
    {
      domain: "Creativity & Content",
      category: "Create Things",
      capability: "Brainstorm ideas",
      useCase: "Business ideas",
      prompts: [
        "Generate 10 business ideas for sustainable products",
        "What are some innovative startup ideas in healthcare?",
        "Brainstorm side hustle ideas for software developers",
        "Generate business ideas that solve climate change problems",
        "What are some low-cost business ideas I can start from home?"
      ]
    },
    {
      domain: "Creativity & Content",
      category: "Create Things",
      capability: "Brainstorm ideas",
      useCase: "Creative concepts",
      prompts: [
        "Generate plot ideas for a science fiction novel",
        "Brainstorm themes for a photography project",
        "What are some creative marketing campaign ideas?",
        "Generate ideas for a YouTube channel about cooking",
        "Brainstorm concepts for an art installation about technology"
      ]
    },
    {
      domain: "Creativity & Content",
      category: "Create Things",
      capability: "Create outlines",
      useCase: "Article structure",
      prompts: [
        "Create an outline for an article about remote work",
        "Outline a blog post about sustainable living",
        "Structure an essay on the impact of social media",
        "Create an outline for a guide to personal finance",
        "Outline a whitepaper on AI ethics"
      ]
    },
    {
      domain: "Creativity & Content",
      category: "Create Things",
      capability: "Generate stories",
      useCase: "Fiction writing",
      prompts: [
        "Write a short story about a time traveler who can't return home",
        "Create a mystery story set in a small coastal town",
        "Generate a sci-fi story about first contact with aliens",
        "Write a fantasy story about a world without magic",
        "Create a horror story that takes place in a library"
      ]
    },
    {
      domain: "Analysis & Problem Solving",
      category: "Make Decisions",
      capability: "Compare options",
      useCase: "Product purchase",
      prompts: [
        "Compare these three laptops for video editing",
        "Help me decide between these two apartments",
        "Compare electric cars under $40,000",
        "Which smartphone should I buy for photography?",
        "Compare these health insurance plans"
      ]
    },
    {
      domain: "Analysis & Problem Solving",
      category: "Make Decisions",
      capability: "Evaluate trade-offs",
      useCase: "Career decisions",
      prompts: [
        "What are the trade-offs of changing careers at 35?",
        "Help me evaluate: startup job vs corporate job",
        "What are the pros and cons of going back to school?",
        "Evaluate the trade-offs of remote work vs office work",
        "What should I consider when deciding to freelance full-time?"
      ]
    },
    {
      domain: "Analysis & Problem Solving",
      category: "Solve Problems",
      capability: "Identify root causes",
      useCase: "Troubleshooting",
      prompts: [
        "Why is my website loading slowly?",
        "What could be causing my car to make this noise?",
        "Why am I not losing weight despite exercising?",
        "What's causing my plants to turn yellow?",
        "Why is my computer overheating?"
      ]
    },
    {
      domain: "Everyday Life",
      category: "Practical Skills",
      capability: "Write emails",
      useCase: "Professional communication",
      prompts: [
        "Write a professional email requesting a meeting",
        "Draft an email declining a job offer politely",
        "Compose a follow-up email after an interview",
        "Write an email asking for a deadline extension",
        "Draft a professional introduction email"
      ]
    }
  ];

  const domains = ["all", "Knowledge & Learning", "Creativity & Content", "Analysis & Problem Solving", "Everyday Life"];

  const filteredPrompts = promptsData.filter(item => {
    const matchesDomain = selectedDomain === "all" || item.domain === selectedDomain;
    const matchesSearch = searchTerm === "" || 
      item.capability.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.prompts.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  const totalPrompts = filteredPrompts.reduce((sum, item) => sum + item.prompts.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted border-b border-border">
        <div className="container py-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            500+ Example Prompts
          </div>
          <h1 className="serif text-5xl font-bold text-foreground mb-4">
            Prompt Library
          </h1>
          <p className="sans text-xl text-muted-foreground max-w-3xl">
            Browse ready-to-use prompts organized by domain, category, and capability. Copy and adapt these examples for your own AI interactions.
          </p>
        </div>
      </section>

      <div className="container py-16">
        {/* Search and Filter */}
        <div className="editorial-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="sans text-sm font-medium text-foreground mb-2 block">
                Search Prompts
              </label>
              <Input
                type="text"
                placeholder="Search by capability or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="sans"
              />
            </div>
            <div>
              <label className="sans text-sm font-medium text-foreground mb-2 block">
                Filter by Domain
              </label>
              <div className="flex flex-wrap gap-2">
                {domains.map(domain => (
                  <Button
                    key={domain}
                    variant={selectedDomain === domain ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDomain(domain)}
                    className="sans text-xs"
                  >
                    {domain === "all" ? "All Domains" : domain}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 sans text-sm text-muted-foreground">
            Showing {totalPrompts} prompts across {filteredPrompts.length} capabilities
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="space-y-8">
          {filteredPrompts.map((item, index) => (
            <div key={index} className="editorial-card p-8">
              <div className="mb-4">
                <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-2">
                  {item.domain}
                </div>
                <h2 className="serif text-2xl font-bold text-foreground mb-1">
                  {item.capability}
                </h2>
                <div className="sans text-sm text-muted-foreground">
                  {item.category} → {item.useCase}
                </div>
              </div>

              <div className="space-y-3">
                {item.prompts.map((prompt, pIndex) => (
                  <div
                    key={pIndex}
                    className="border border-border rounded p-4 bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="sans text-base text-foreground flex-1">
                        "{prompt}"
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(prompt);
                        }}
                        className="flex-shrink-0 text-xs text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredPrompts.length === 0 && (
          <div className="editorial-card p-12 text-center">
            <p className="sans text-lg text-muted-foreground">
              No prompts found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

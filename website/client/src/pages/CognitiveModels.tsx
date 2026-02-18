export default function CognitiveModels() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted border-b border-border">
        <div className="container py-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Thinking Frameworks
          </div>
          <h1 className="serif text-5xl font-bold text-foreground mb-4">
            Cognitive Models
          </h1>
          <p className="sans text-xl text-muted-foreground max-w-3xl">
            Understand the thinking frameworks and skill progression from novice to proficient AI user through structured mental models.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="editorial-card p-8 mb-12">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/GyFKcjflINoEXSqg.png"
            alt="Cognitive models showing skill ladder and mental models"
            className="w-full h-auto"
          />
          <p className="sans text-sm text-muted-foreground mt-4 italic text-center">
            Figure 3: Skill ladder progression and mental models for effective AI interaction
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="editorial-card p-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              Skill Ladder
            </h2>
            <div className="space-y-6">
              {[
                {
                  level: "Novice",
                  color: "bg-blue-100 text-blue-900",
                  traits: ["Rule-based thinking", "Follows instructions", "Uses example prompts verbatim", "Seeks certainty"],
                },
                {
                  level: "Competent",
                  color: "bg-blue-300 text-blue-900",
                  traits: ["Understands principles", "Adapts prompts to context", "Handles multi-step tasks", "Tolerates ambiguity"],
                },
                {
                  level: "Proficient",
                  color: "bg-blue-600 text-white",
                  traits: ["Strategic thinking", "Intuitive prompt design", "Teaches others", "Evaluates critically"],
                },
              ].map((skill) => (
                <div key={skill.level} className={`p-6 rounded ${skill.color}`}>
                  <h3 className="serif text-2xl font-bold mb-3">{skill.level}</h3>
                  <ul className="space-y-2">
                    {skill.traits.map((trait, i) => (
                      <li key={i} className="sans text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-card p-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              Mental Models
            </h2>
            <div className="space-y-6">
              {[
                {
                  name: "AI as a Thinking Partner",
                  description: "Collaborator that extends your cognitive abilities",
                  color: "bg-blue-50",
                },
                {
                  name: "Capability Stack",
                  description: "Layered capabilities from foundation to strategy",
                  color: "bg-green-50",
                },
                {
                  name: "Prompt-as-Specification",
                  description: "Prompt as a specification for cognitive process",
                  color: "bg-orange-50",
                },
                {
                  name: "Iterative Refinement",
                  description: "AI interaction is a dialogue, not one-shot command",
                  color: "bg-purple-50",
                },
              ].map((model) => (
                <div key={model.name} className={`p-6 rounded border border-border ${model.color}`}>
                  <h3 className="serif text-xl font-bold text-foreground mb-2">
                    {model.name}
                  </h3>
                  <p className="sans text-sm text-muted-foreground">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="editorial-card p-8 mb-12">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/pfyPEumsLtVDzeUH.png"
            alt="AI vs Human Strengths: A Comparative Analysis"
            className="w-full h-auto"
          />
          <p className="sans text-sm text-muted-foreground mt-4 italic text-center">
            Figure 4: Comparative analysis of AI and human cognitive strengths
          </p>
        </div>

        <div className="editorial-card p-8">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/pnuvnBNTqgqlJBuf.png"
            alt="Problem Decomposition: From Overwhelm to Action"
            className="w-full h-auto"
          />
          <p className="sans text-sm text-muted-foreground mt-4 italic text-center">
            Figure 5: Four-step problem decomposition methodology
          </p>
        </div>
      </div>
    </div>
  );
}

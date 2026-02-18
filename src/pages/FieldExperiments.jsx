import './FieldExperiments.css'

const FieldExperiments = () => {
  const experiments = [
    {
      id: 1,
      category: "Learning",
      title: "Explain It Like I'm Five",
      description: "Pick a complex topic and ask AI to explain it at different levels",
      prompt: "Explain [complex topic] as if I'm 5 years old, then as if I'm in high school, then as if I'm an expert",
      skill: "Abstraction, Simplification"
    },
    {
      id: 2,
      category: "Creativity",
      title: "Idea Multiplication",
      description: "Generate 10 variations of a single idea",
      prompt: "I have this idea: [your idea]. Generate 10 creative variations, each taking it in a different direction",
      skill: "Divergent thinking, Brainstorming"
    },
    {
      id: 3,
      category: "Analysis",
      title: "Compare and Contrast",
      description: "Analyze differences between two similar concepts",
      prompt: "Compare and contrast [concept A] and [concept B]. Create a table showing similarities, differences, and use cases for each",
      skill: "Analytical thinking, Pattern recognition"
    },
    {
      id: 4,
      category: "Writing",
      title: "Style Shifting",
      description: "Rewrite the same content in different styles",
      prompt: "Rewrite this paragraph in 3 different styles: formal academic, casual conversational, and persuasive marketing",
      skill: "Tone adaptation, Audience awareness"
    },
    {
      id: 5,
      category: "Problem Solving",
      title: "Reverse Engineering",
      description: "Work backwards from a desired outcome",
      prompt: "I want to achieve [goal]. Work backwards: what are the steps I need to take, starting from the end result?",
      skill: "Backward planning, Decomposition"
    },
    {
      id: 6,
      category: "Research",
      title: "Question Generator",
      description: "Generate research questions about a topic",
      prompt: "I'm researching [topic]. Generate 10 thought-provoking questions I should investigate, ranging from basic to advanced",
      skill: "Inquiry, Critical thinking"
    },
    {
      id: 7,
      category: "Decision Making",
      title: "Pros and Cons Matrix",
      description: "Evaluate options systematically",
      prompt: "I'm deciding between [option A] and [option B]. Create a detailed pros and cons analysis for each, considering short-term and long-term impacts",
      skill: "Evaluation, Trade-off analysis"
    },
    {
      id: 8,
      category: "Learning",
      title: "Analogy Builder",
      description: "Create analogies to understand new concepts",
      prompt: "Explain [new concept] using 3 different analogies from everyday life",
      skill: "Analogy formation, Connection making"
    },
    {
      id: 9,
      category: "Creativity",
      title: "Constraint Challenge",
      description: "Generate ideas with specific constraints",
      prompt: "Generate 5 ideas for [project] with these constraints: [list constraints]. Show how each idea works within the limits",
      skill: "Creative constraint, Innovation"
    },
    {
      id: 10,
      category: "Communication",
      title: "Audience Adapter",
      description: "Adapt message for different audiences",
      prompt: "Explain [message] to three different audiences: a child, a busy executive, and a technical expert. Adjust language and detail for each",
      skill: "Audience analysis, Communication"
    }
  ]

  const copyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="page field-experiments">
      <h1>⚗️ Field Experiments</h1>
      <p className="intro">
        Clickable micro-experiments, prompt drills, and "try this now" exercises to build confidence through practice.
        Each experiment targets a specific cognitive skill and can be completed in 5-10 minutes.
      </p>

      <div className="experiment-stats">
        <div className="stat">
          <h3>{experiments.length}</h3>
          <p>Quick Experiments</p>
        </div>
        <div className="stat">
          <h3>5-10</h3>
          <p>Minutes Each</p>
        </div>
        <div className="stat">
          <h3>10</h3>
          <p>Cognitive Skills</p>
        </div>
      </div>

      <div className="instructions">
        <h2>How to Use These Experiments</h2>
        <ol>
          <li><strong>Pick an experiment</strong> that interests you or targets a skill you want to develop</li>
          <li><strong>Copy the prompt template</strong> by clicking the copy button</li>
          <li><strong>Fill in the blanks</strong> with your specific topic or content</li>
          <li><strong>Try it in your AI tool</strong> (ChatGPT, Claude, Gemini, etc.)</li>
          <li><strong>Reflect on the results</strong> and try variations</li>
        </ol>
      </div>

      <div className="experiments-grid">
        {experiments.map((exp) => (
          <div key={exp.id} className="experiment-card">
            <div className="exp-header">
              <span className="exp-category">{exp.category}</span>
              <span className="exp-number">#{exp.id}</span>
            </div>
            <h3>{exp.title}</h3>
            <p className="exp-description">{exp.description}</p>
            
            <div className="exp-prompt">
              <h4>Prompt Template:</h4>
              <div className="prompt-box">
                <p>"{exp.prompt}"</p>
                <button className="copy-btn" onClick={() => copyPrompt(exp.prompt)}>
                  📋 Copy
                </button>
              </div>
            </div>

            <div className="exp-skill">
              <strong>Cognitive Skill:</strong> {exp.skill}
            </div>
          </div>
        ))}
      </div>

      <div className="advanced-section">
        <h2>🚀 Advanced Practice</h2>
        <p>Once you've tried the basic experiments, challenge yourself:</p>
        <div className="advanced-tips">
          <div className="tip">
            <h4>Combine Experiments</h4>
            <p>Try chaining multiple experiments together (e.g., brainstorm ideas, then compare them, then refine the best one)</p>
          </div>
          <div className="tip">
            <h4>Create Your Own</h4>
            <p>Design new experiment templates based on your specific needs and share them with others</p>
          </div>
          <div className="tip">
            <h4>Track Progress</h4>
            <p>Keep a log of experiments you've tried and what you learned from each</p>
          </div>
          <div className="tip">
            <h4>Iterate Deeply</h4>
            <p>Don't stop at the first result—refine your prompts and explore variations</p>
          </div>
        </div>
      </div>

      <div className="next-steps">
        <h2>Continue Building Skills</h2>
        <div className="next-links">
          <a href="/ai-capability-atlas-newspaper/decomposition-lab">
            🔬 Practice problem decomposition in the Lab
          </a>
          <a href="/ai-capability-atlas-newspaper/cognitive-model">
            🧠 Learn more about cognitive frameworks
          </a>
          <a href="/ai-capability-atlas-newspaper/taxonomy">
            📚 Explore all 71 AI capabilities
          </a>
        </div>
      </div>
    </div>
  )
}

export default FieldExperiments

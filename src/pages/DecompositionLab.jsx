import { useState } from 'react'
import './DecompositionLab.css'

const scenarios = [
  {
    id: 1,
    title: '📊 Create a Budget Plan',
    description: 'You want to create a monthly budget for your household expenses.',
    steps: [
      {
        step: 1,
        title: 'Identify the Goal',
        question: 'What specific outcome do you want?',
        hint: 'A comprehensive monthly budget that tracks income and expenses',
        example: 'Create a detailed monthly budget spreadsheet that categorizes all household income and expenses'
      },
      {
        step: 2,
        title: 'Break into Subtasks',
        question: 'What are the distinct steps needed?',
        hint: 'Think about data collection, categorization, calculation, visualization',
        example: '1. List all income sources\n2. Categorize expenses (fixed vs variable)\n3. Calculate totals and differences\n4. Create visual representations\n5. Set up tracking system'
      },
      {
        step: 3,
        title: 'Match to Capabilities',
        question: 'Which AI capabilities fit each subtask?',
        hint: 'Consider: generate templates, suggest categories, calculate formulas, create visualizations',
        example: '• Generate budget template → "Create structured content"\n• Suggest expense categories → "Brainstorm ideas"\n• Calculate formulas → "Perform calculations"\n• Visualize data → "Explain how to create charts"'
      },
      {
        step: 4,
        title: 'Sequence & Iterate',
        question: 'In what order? What needs refinement?',
        hint: 'Start with structure, then populate, then refine',
        example: '1. Get template structure\n2. Customize categories for your needs\n3. Add formulas\n4. Test with sample data\n5. Refine and finalize'
      },
      {
        step: 5,
        title: 'Synthesize',
        question: 'How do you combine the outputs?',
        hint: 'Bring all pieces together into a working system',
        example: 'Combine the template, categories, formulas, and tracking method into one cohesive budget system that you can update monthly'
      }
    ]
  },
  {
    id: 2,
    title: '📝 Write a Blog Post',
    description: 'You want to write an engaging blog post about a recent trip.',
    steps: [
      {
        step: 1,
        title: 'Identify the Goal',
        question: 'What specific outcome do you want?',
        hint: 'An engaging, well-structured blog post',
        example: 'Write a 1000-word blog post about my trip to Iceland that captures the adventure and provides useful travel tips'
      },
      {
        step: 2,
        title: 'Break into Subtasks',
        question: 'What are the distinct steps needed?',
        hint: 'Think about structure, content, style, editing',
        example: '1. Create outline/structure\n2. Write opening hook\n3. Develop main sections (experiences, tips, reflections)\n4. Add transitions\n5. Write conclusion\n6. Edit and polish'
      },
      {
        step: 3,
        title: 'Match to Capabilities',
        question: 'Which AI capabilities fit each subtask?',
        hint: 'Consider: brainstorm, write in style, refine tone, suggest improvements',
        example: '• Outline → "Generate structured content"\n• Hook → "Write engaging openings"\n• Main content → "Write in specific style"\n• Transitions → "Improve flow"\n• Edit → "Refine and polish text"'
      },
      {
        step: 4,
        title: 'Sequence & Iterate',
        question: 'In what order? What needs refinement?',
        hint: 'Build from structure to content to polish',
        example: '1. Get outline\n2. Draft each section\n3. Review tone and voice\n4. Add personal anecdotes\n5. Polish transitions\n6. Final edit'
      },
      {
        step: 5,
        title: 'Synthesize',
        question: 'How do you combine the outputs?',
        hint: 'Weave all parts into a cohesive narrative',
        example: 'Combine all sections, ensure consistent voice throughout, add your personal touch and specific details AI can\'t know, finalize formatting'
      }
    ]
  },
  {
    id: 3,
    title: '🎓 Learn a New Topic',
    description: 'You want to understand quantum computing basics.',
    steps: [
      {
        step: 1,
        title: 'Identify the Goal',
        question: 'What specific outcome do you want?',
        hint: 'Clear understanding at a specific level',
        example: 'Understand the fundamental concepts of quantum computing well enough to explain them to a friend'
      },
      {
        step: 2,
        title: 'Break into Subtasks',
        question: 'What are the distinct steps needed?',
        hint: 'Think about progression from basics to deeper concepts',
        example: '1. Learn basic terminology\n2. Understand core principles (superposition, entanglement)\n3. Learn how it differs from classical computing\n4. Explore real-world applications\n5. Test understanding'
      },
      {
        step: 3,
        title: 'Match to Capabilities',
        question: 'Which AI capabilities fit each subtask?',
        hint: 'Consider: explain concepts, provide analogies, test knowledge, suggest resources',
        example: '• Terminology → "Define technical terms simply"\n• Core principles → "Explain complex concepts with analogies"\n• Differences → "Compare and contrast"\n• Applications → "Provide real-world examples"\n• Test → "Generate quiz questions"'
      },
      {
        step: 4,
        title: 'Sequence & Iterate',
        question: 'In what order? What needs refinement?',
        hint: 'Build knowledge progressively',
        example: '1. Start with ELI5 explanation\n2. Gradually increase complexity\n3. Ask clarifying questions\n4. Get analogies for confusing parts\n5. Test with quiz\n6. Fill gaps'
      },
      {
        step: 5,
        title: 'Synthesize',
        question: 'How do you combine the outputs?',
        hint: 'Create your own mental model',
        example: 'Combine all explanations, analogies, and examples into your own understanding. Create a summary in your own words to solidify learning'
      }
    ]
  },
  {
    id: 4,
    title: '💼 Prepare for Interview',
    description: 'You want to prepare for a job interview in a new field.',
    steps: [
      {
        step: 1,
        title: 'Identify the Goal',
        question: 'What specific outcome do you want?',
        hint: 'Be ready to confidently answer questions and demonstrate fit',
        example: 'Be fully prepared to interview for a Product Manager role at a tech startup, including technical knowledge, behavioral examples, and company research'
      },
      {
        step: 2,
        title: 'Break into Subtasks',
        question: 'What are the distinct steps needed?',
        hint: 'Think about research, practice, preparation materials',
        example: '1. Research company and role\n2. Prepare STAR method examples\n3. Study technical concepts\n4. Prepare questions to ask\n5. Practice common questions\n6. Plan logistics'
      },
      {
        step: 3,
        title: 'Match to Capabilities',
        question: 'Which AI capabilities fit each subtask?',
        hint: 'Consider: research, generate examples, explain concepts, simulate practice',
        example: '• Research → "Summarize information"\n• STAR examples → "Structure experiences"\n• Technical concepts → "Explain industry terms"\n• Questions → "Generate thoughtful questions"\n• Practice → "Simulate interview scenarios"'
      },
      {
        step: 4,
        title: 'Sequence & Iterate',
        question: 'In what order? What needs refinement?',
        hint: 'Start broad, then get specific, then practice',
        example: '1. Company research first\n2. Role requirements analysis\n3. Prepare tailored examples\n4. Study technical gaps\n5. Mock interview practice\n6. Refine weak areas'
      },
      {
        step: 5,
        title: 'Synthesize',
        question: 'How do you combine the outputs?',
        hint: 'Create a comprehensive prep package',
        example: 'Compile all research, examples, and practice into a prep document. Practice delivering answers naturally. Combine technical knowledge with personal stories'
      }
    ]
  },
  {
    id: 5,
    title: '🏠 Plan a Renovation',
    description: 'You want to plan a kitchen renovation project.',
    steps: [
      {
        step: 1,
        title: 'Identify the Goal',
        question: 'What specific outcome do you want?',
        hint: 'Detailed renovation plan with budget and timeline',
        example: 'Create a comprehensive kitchen renovation plan including design choices, contractor requirements, budget breakdown, and 3-month timeline'
      },
      {
        step: 2,
        title: 'Break into Subtasks',
        question: 'What are the distinct steps needed?',
        hint: 'Think about design, budgeting, scheduling, vendor selection',
        example: '1. Define design vision and requirements\n2. Research costs and options\n3. Create budget breakdown\n4. Develop timeline\n5. List contractor needs\n6. Plan for contingencies'
      },
      {
        step: 3,
        title: 'Match to Capabilities',
        question: 'Which AI capabilities fit each subtask?',
        hint: 'Consider: brainstorm ideas, research options, calculate costs, organize info',
        example: '• Design vision → "Brainstorm ideas and styles"\n• Research → "Summarize options and pros/cons"\n• Budget → "Create structured breakdown"\n• Timeline → "Suggest project phases"\n• Contractors → "Generate requirements checklist"'
      },
      {
        step: 4,
        title: 'Sequence & Iterate',
        question: 'In what order? What needs refinement?',
        hint: 'Vision first, then practical details, then refinement',
        example: '1. Clarify design vision\n2. Research realistic options\n3. Get cost estimates\n4. Adjust based on budget\n5. Create detailed timeline\n6. Finalize plan'
      },
      {
        step: 5,
        title: 'Synthesize',
        question: 'How do you combine the outputs?',
        hint: 'Create one master renovation plan',
        example: 'Combine design vision, budget, timeline, and contractor requirements into one comprehensive renovation plan document you can use to guide the project'
      }
    ]
  },
  {
    id: 6,
    title: '📚 Research a Topic',
    description: 'You want to research the history of artificial intelligence.',
    steps: [
      {
        step: 1,
        title: 'Identify the Goal',
        question: 'What specific outcome do you want?',
        hint: 'Clear research objective with scope',
        example: 'Create a comprehensive overview of AI history from 1950s to present, covering major milestones, key figures, and paradigm shifts'
      },
      {
        step: 2,
        title: 'Break into Subtasks',
        question: 'What are the distinct steps needed?',
        hint: 'Think about timeline, themes, sources, organization',
        example: '1. Define time periods/eras\n2. Identify key milestones per era\n3. Research major contributors\n4. Understand paradigm shifts\n5. Organize chronologically\n6. Synthesize themes'
      },
      {
        step: 3,
        title: 'Match to Capabilities',
        question: 'Which AI capabilities fit each subtask?',
        hint: 'Consider: summarize, explain, organize, connect ideas',
        example: '• Timeline → "Create structured outline"\n• Milestones → "Summarize key events"\n• Contributors → "Explain significance"\n• Paradigm shifts → "Compare and contrast approaches"\n• Organization → "Create chronological structure"'
      },
      {
        step: 4,
        title: 'Sequence & Iterate',
        question: 'In what order? What needs refinement?',
        hint: 'Build chronologically, then thematically',
        example: '1. Get broad timeline\n2. Deep dive each era\n3. Identify connections\n4. Fill knowledge gaps\n5. Organize themes\n6. Create narrative flow'
      },
      {
        step: 5,
        title: 'Synthesize',
        question: 'How do you combine the outputs?',
        hint: 'Weave into coherent historical narrative',
        example: 'Combine chronological facts, key figures, and thematic analysis into a cohesive narrative that tells the story of AI\'s evolution'
      }
    ]
  }
]

const DecompositionLab = () => {
  const [selectedScenario, setSelectedScenario] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const handleStartScenario = (scenario) => {
    setSelectedScenario(scenario)
    setCurrentStep(0)
    setShowHint(false)
  }

  const handleNextStep = () => {
    if (currentStep < selectedScenario.steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowHint(false)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowHint(false)
    }
  }

  const handleReset = () => {
    setSelectedScenario(null)
    setCurrentStep(0)
    setShowHint(false)
  }

  // Practice mode - working through a scenario
  if (selectedScenario) {
    const step = selectedScenario.steps[currentStep]
    const progress = ((currentStep + 1) / selectedScenario.steps.length) * 100

    return (
      <div className="page decomposition-lab practice-mode">
        <div className="practice-header">
          <button className="back-btn" onClick={handleReset}>← Back to Scenarios</button>
          <h2>{selectedScenario.title}</h2>
          <p className="scenario-desc">{selectedScenario.description}</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          <span className="progress-text">Step {currentStep + 1} of {selectedScenario.steps.length}</span>
        </div>

        <div className="step-container">
          <div className="step-header">
            <div className="step-number-large">{step.step}</div>
            <h3>{step.title}</h3>
          </div>

          <div className="step-content">
            <div className="question-section">
              <h4>🤔 Your Task:</h4>
              <p className="question">{step.question}</p>
            </div>

            <div className="hint-section">
              <button className="hint-btn" onClick={() => setShowHint(!showHint)}>
                {showHint ? '🔒 Hide Hint' : '💡 Show Hint'}
              </button>
              {showHint && (
                <div className="hint-content">
                  <p><strong>Hint:</strong> {step.hint}</p>
                </div>
              )}
            </div>

            <div className="example-section">
              <h4>✅ Example Answer:</h4>
              <div className="example-box">
                <pre>{step.example}</pre>
              </div>
            </div>
          </div>

          <div className="step-navigation">
            <button 
              className="nav-btn prev" 
              onClick={handlePrevStep}
              disabled={currentStep === 0}
            >
              ← Previous Step
            </button>
            
            {currentStep < selectedScenario.steps.length - 1 ? (
              <button className="nav-btn next" onClick={handleNextStep}>
                Next Step →
              </button>
            ) : (
              <button className="nav-btn complete" onClick={handleReset}>
                ✓ Complete & Try Another
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Overview mode - scenario selection
  return (
    <div className="page decomposition-lab">
      <h1>🔬 Decomposition Lab</h1>
      <p className="intro">
        Step-by-step problem breakdown trainer. Learn to decompose complex tasks into AI-solvable components 
        through interactive exercises and guided practice.
      </p>

      <div className="lab-visual">
        <img src="/ai-capability-atlas-newspaper/assets/images/problem-decomposition.png" alt="Problem Decomposition Framework" />
        <p className="caption">The 5-step problem decomposition framework</p>
      </div>

      <div className="framework-section">
        <h2>The 5-Step Decomposition Framework</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Identify the Goal</h3>
            <p>What outcome do you want? Be specific about the end result.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Break into Subtasks</h3>
            <p>What are the distinct steps needed to reach that goal?</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Match to Capabilities</h3>
            <p>Which AI capabilities fit each subtask?</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Sequence & Iterate</h3>
            <p>In what order? What needs refinement?</p>
          </div>

          <div className="step-card">
            <div className="step-number">5</div>
            <h3>Synthesize</h3>
            <p>How do you combine outputs into the final result?</p>
          </div>
        </div>
      </div>

      <div className="practice-section">
        <h2>Interactive Practice Scenarios</h2>
        <p>Try decomposing these common tasks using the 5-step framework. Click any scenario to start:</p>

        <div className="scenarios-grid">
          {scenarios.map((scenario) => (
            <div key={scenario.id} className="scenario-card">
              <h4>{scenario.title}</h4>
              <p>{scenario.description}</p>
              <button className="practice-btn" onClick={() => handleStartScenario(scenario)}>
                Start Practice →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="tips-section">
        <h2>💡 Decomposition Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Start Broad, Then Narrow</h4>
            <p>Begin with high-level steps, then break each into smaller pieces.</p>
          </div>
          <div className="tip-card">
            <h4>Look for Natural Boundaries</h4>
            <p>Tasks often have natural breakpoints—use them to your advantage.</p>
          </div>
          <div className="tip-card">
            <h4>Think in Verbs</h4>
            <p>Each subtask should be an action: analyze, generate, compare, refine, etc.</p>
          </div>
          <div className="tip-card">
            <h4>Embrace Iteration</h4>
            <p>Your first decomposition won't be perfect—refine as you go.</p>
          </div>
        </div>
      </div>

      <div className="next-steps">
        <h2>Continue Learning</h2>
        <div className="next-links">
          <a href="/ai-capability-atlas-newspaper/cognitive-model">
            🧠 Learn more about structured thinking frameworks
          </a>
          <a href="/ai-capability-atlas-newspaper/taxonomy">
            📚 Explore all AI capabilities for decomposition
          </a>
          <a href="/ai-capability-atlas-newspaper/articles">
            📰 Read "From Overwhelm to Decomposition" article
          </a>
        </div>
      </div>
    </div>
  )
}

export default DecompositionLab

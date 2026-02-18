import './Quiz.css'
import { useState } from 'react'

const Quiz = () => {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      section: "Section 1: AI Awareness",
      questions: [
        {
          id: 1,
          text: "When you think about AI, you mostly see it as:",
          options: [
            { value: 'explorer', text: "A chatbot that answers questions", level: 'A' },
            { value: 'strategist', text: "A system that can perform different types of cognitive work if structured correctly", level: 'B' },
            { value: 'builder', text: "A tool that helps me write or brainstorm", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 2,
          text: "If AI gives you a weak answer, you usually:",
          options: [
            { value: 'builder', text: "Rephrase your question once", level: 'A' },
            { value: 'explorer', text: "Assume AI isn't good at that task", level: 'B' },
            { value: 'strategist', text: "Break the task into smaller parts and guide it step-by-step", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 3,
          text: "Which statement feels most accurate?",
          options: [
            { value: 'strategist', text: "AI performs specific cognitive functions depending on structure and constraints", level: 'A' },
            { value: 'explorer', text: "AI is smart but unpredictable", level: 'B' },
            { value: 'builder', text: "AI is powerful if prompted clearly", level: 'C' }
          ],
          correctAnswer: 'strategist'
        }
      ]
    },
    {
      section: "Section 2: Problem Translation",
      questions: [
        {
          id: 4,
          text: "You have a messy problem at work. What do you do first?",
          options: [
            { value: 'explorer', text: 'Ask AI: "How do I fix this?"', level: 'A' },
            { value: 'strategist', text: "Identify the type of task this is (analysis, generation, classification, planning) before prompting", level: 'B' },
            { value: 'builder', text: "Explain the situation in detail and ask for advice", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 5,
          text: "Which of these prompts is strongest?",
          options: [
            { value: 'builder', text: '"Create a plan for improving team communication."', level: 'A' },
            { value: 'strategist', text: '"Act as an operations analyst. Diagnose breakdown points in our team communication using root cause analysis and propose 3 structured interventions."', level: 'B' },
            { value: 'explorer', text: '"Help me with my project."', level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 6,
          text: "If a task feels complex, you:",
          options: [
            { value: 'strategist', text: "Decompose the problem yourself before involving AI", level: 'A' },
            { value: 'builder', text: "Ask AI for steps", level: 'B' },
            { value: 'explorer', text: "Ask AI to do it all at once", level: 'C' }
          ],
          correctAnswer: 'strategist'
        }
      ]
    },
    {
      section: "Section 3: Cognitive Control",
      questions: [
        {
          id: 7,
          text: "When should you NOT rely on AI?",
          options: [
            { value: 'builder', text: "When accuracy matters", level: 'A' },
            { value: 'explorer', text: "When it seems unsure", level: 'B' },
            { value: 'strategist', text: "When the task requires domain verification, external validation, or ethical judgment", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 8,
          text: "What improves AI output most?",
          options: [
            { value: 'strategist', text: "Clear structure, constraints, role definition, and output format", level: 'A' },
            { value: 'explorer', text: "Longer prompts", level: 'B' },
            { value: 'builder', text: "Clearer prompts", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 9,
          text: "Which mindset fits you best?",
          options: [
            { value: 'explorer', text: '"AI, surprise me."', level: 'A' },
            { value: 'strategist', text: '"AI, operate within this framework."', level: 'B' },
            { value: 'builder', text: '"AI, help me think."', level: 'C' }
          ],
          correctAnswer: 'strategist'
        }
      ]
    },
    {
      section: "Section 4: Applied Scenario",
      questions: [
        {
          id: 10,
          text: "You want AI to help you design a new training program. What is your first move?",
          options: [
            { value: 'builder', text: "Provide audience details and ask for a curriculum", level: 'A' },
            { value: 'explorer', text: 'Ask: "Create a training program about AI."', level: 'B' },
            { value: 'strategist', text: "Define learning outcomes, cognitive level, delivery constraints, and evaluation metrics before prompting", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 11,
          text: "AI gives you a confident but wrong answer. You:",
          options: [
            { value: 'strategist', text: "Cross-validate with another source or tool", level: 'A' },
            { value: 'builder', text: "Ask it to double-check", level: 'B' },
            { value: 'explorer', text: "Feel frustrated", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 12,
          text: "When using AI regularly, your goal is:",
          options: [
            { value: 'explorer', text: "Save time", level: 'A' },
            { value: 'strategist', text: "Develop a repeatable thinking system", level: 'B' },
            { value: 'builder', text: "Improve quality", level: 'C' }
          ],
          correctAnswer: 'strategist'
        }
      ]
    }
  ]

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const calculateResults = () => {
    const counts = { explorer: 0, builder: 0, strategist: 0 }
    Object.values(answers).forEach(answer => {
      counts[answer] = (counts[answer] || 0) + 1
    })
    return counts
  }

  const getResult = () => {
    const counts = calculateResults()
    const max = Math.max(counts.explorer, counts.builder, counts.strategist)
    
    if (counts.strategist === max) return 'strategist'
    if (counts.builder === max) return 'builder'
    return 'explorer'
  }

  const handleSubmit = () => {
    if (Object.keys(answers).length < 12) {
      alert('Please answer all questions before submitting.')
      return
    }
    setShowResults(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const resetQuiz = () => {
    setAnswers({})
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const results = {
    explorer: {
      emoji: '🌱',
      title: 'Explorer',
      subtitle: 'Curious Experimenter',
      description: "You're experimenting with AI but haven't developed structured approaches yet. You see AI as a tool to try out, but you're still learning how to get consistent, high-quality results.",
      strength: 'Curiosity and willingness to experiment',
      growthEdge: 'Learn decomposition and task typing',
      nextLevel: 'Understand capability categories and how to structure prompts',
      color: '#10b981',
      image: '/assets/images/quiz-explorer.png',
      skillsToWorkOn: [
        {
          skill: 'Task Decomposition',
          description: 'Break complex problems into smaller, manageable parts',
          practicePrompts: [
            'Take a complex task like "improve customer satisfaction" and break it into 5 specific sub-tasks',
            'Identify the type of each sub-task (analysis, generation, classification, etc.)',
            'Create a step-by-step workflow for a multi-stage project'
          ]
        },
        {
          skill: 'Capability Recognition',
          description: 'Understand what AI can and cannot do well',
          practicePrompts: [
            'List 5 tasks AI excels at and 5 tasks where human judgment is essential',
            'Identify which AI capability category fits your current project (Knowledge, Creation, Analysis, etc.)',
            'Explore the Capability Taxonomy to discover new use cases'
          ]
        },
        {
          skill: 'Iterative Refinement',
          description: 'Learn to guide AI through multiple rounds of improvement',
          practicePrompts: [
            'Start with a basic prompt, then add context in 3 iterations to improve the output',
            'When AI gives a weak answer, identify what information was missing and add it',
            'Practice the pattern: Initial prompt → Review output → Add constraints → Refine'
          ]
        }
      ]
    },
    builder: {
      emoji: '🧠',
      title: 'Builder',
      subtitle: 'Applied Practitioner',
      description: 'You understand that prompting matters and actively work to improve your results. You provide context, refine outputs, and see AI as a collaborative partner in your work.',
      strength: 'Applied usage and contextual thinking',
      growthEdge: 'Develop structured frameworks and systematic approaches',
      nextLevel: 'Design systems and frameworks, not just individual prompts',
      color: '#3b82f6',
      image: '/assets/images/quiz-builder.png',
      skillsToWorkOn: [
        {
          skill: 'Framework Design',
          description: 'Create reusable templates and structured approaches',
          practicePrompts: [
            'Design a prompt template for your most common work task that you can reuse',
            'Create a checklist of elements every good prompt should include (role, context, constraints, format)',
            'Build a decision tree for when to use different AI capabilities'
          ]
        },
        {
          skill: 'Constraint Definition',
          description: 'Learn to set clear boundaries and output specifications',
          practicePrompts: [
            'Rewrite a vague prompt by adding 3 specific constraints (length, tone, format)',
            'Define the exact output format you want before prompting (bullet points, table, narrative, etc.)',
            'Practice specifying what NOT to include in responses'
          ]
        },
        {
          skill: 'Verification Systems',
          description: 'Develop methods to validate and cross-check AI outputs',
          practicePrompts: [
            'Create a 3-step verification process for AI-generated content in your domain',
            'Identify which outputs require external validation vs. which can be used directly',
            'Practice cross-referencing AI outputs with authoritative sources'
          ]
        }
      ]
    },
    strategist: {
      emoji: '🧭',
      title: 'Strategist',
      subtitle: 'Cognitive Architect',
      description: 'You understand AI as a cognitive engine and control structure, constraints, and verification. You design systems for human-AI collaboration and think strategically about capability deployment.',
      strength: 'Strategic control and systematic thinking',
      growthEdge: 'Scale your approach and teach others',
      nextLevel: 'System architecture and organizational AI capability development',
      color: '#8b5cf6',
      image: '/assets/images/quiz-strategist.png',
      skillsToWorkOn: [
        {
          skill: 'System Architecture',
          description: 'Design multi-agent workflows and complex AI systems',
          practicePrompts: [
            'Map out a multi-stage AI workflow for a complex project with 5+ steps',
            'Design a system where multiple AI capabilities work together (analysis → generation → verification)',
            'Create an architecture diagram showing how AI fits into your team\'s processes'
          ]
        },
        {
          skill: 'Knowledge Transfer',
          description: 'Document and teach your AI frameworks to others',
          practicePrompts: [
            'Write a one-page guide teaching someone your framework for a specific task',
            'Create a training module on task decomposition for your team',
            'Document your best prompt templates with explanations of why each element matters'
          ]
        },
        {
          skill: 'Capability Orchestration',
          description: 'Coordinate multiple AI tools and capabilities strategically',
          practicePrompts: [
            'Design a workflow that uses 3 different AI capabilities in sequence',
            'Create a decision matrix for when to use which AI tool or approach',
            'Build a governance framework for AI use in your organization (when to use, when not to, verification requirements)'
          ]
        }
      ]
    }
  }

  const currentResult = showResults ? results[getResult()] : null
  const counts = showResults ? calculateResults() : null

  const copyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
    alert('Prompt copied to clipboard!')
  }

  return (
    <div className="page quiz-page">
      <div className="quiz-header">
        <h1>🧠 AI Skill Progression Diagnostic</h1>
        <p className="quiz-instructions">
          Choose the answer that best reflects what you would <strong>actually do</strong>, not what sounds smartest.
        </p>
      </div>

      {showResults ? (
        <div className="quiz-results">
          <div className="result-card" style={{ borderColor: currentResult.color }}>
            <img src={currentResult.image} alt={currentResult.title} className="result-image" />
            
            <div className="result-header">
              <div className="result-emoji">{currentResult.emoji}</div>
              <div>
                <h2 className="result-title">{currentResult.title}</h2>
                <p className="result-subtitle">{currentResult.subtitle}</p>
              </div>
            </div>
            
            <p className="result-description">{currentResult.description}</p>
            
            <div className="result-details">
              <div className="result-detail">
                <strong>💪 Strength:</strong> {currentResult.strength}
              </div>
              <div className="result-detail">
                <strong>🌱 Growth Edge:</strong> {currentResult.growthEdge}
              </div>
              <div className="result-detail">
                <strong>🎯 Next Level:</strong> {currentResult.nextLevel}
              </div>
            </div>

            <div className="score-breakdown">
              <h3>Your Score Breakdown</h3>
              <div className="score-bars">
                <div className="score-bar">
                  <span className="score-label">🌱 Explorer:</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${(counts.explorer / 12) * 100}%`, background: '#10b981' }}></div>
                  </div>
                  <span className="score-count">{counts.explorer}</span>
                </div>
                <div className="score-bar">
                  <span className="score-label">🧠 Builder:</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${(counts.builder / 12) * 100}%`, background: '#3b82f6' }}></div>
                  </div>
                  <span className="score-count">{counts.builder}</span>
                </div>
                <div className="score-bar">
                  <span className="score-label">🧭 Strategist:</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${(counts.strategist / 12) * 100}%`, background: '#8b5cf6' }}></div>
                  </div>
                  <span className="score-count">{counts.strategist}</span>
                </div>
              </div>
            </div>

            <div className="skills-development">
              <h3>🎯 Skills to Work On</h3>
              <p className="skills-intro">Based on your results, here are the key areas to focus on for growth:</p>
              
              {currentResult.skillsToWorkOn.map((skillArea, index) => (
                <div key={index} className="skill-area">
                  <h4>{skillArea.skill}</h4>
                  <p className="skill-description">{skillArea.description}</p>
                  <div className="practice-prompts">
                    <strong>Practice Prompts:</strong>
                    <ul>
                      {skillArea.practicePrompts.map((prompt, pIndex) => (
                        <li key={pIndex}>
                          {prompt}
                          <button 
                            className="copy-prompt-btn"
                            onClick={() => copyPrompt(prompt)}
                            title="Copy to clipboard"
                          >
                            📋
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <button className="reset-button" onClick={resetQuiz}>
              Take Quiz Again
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-content">
          {questions.map((section, sectionIndex) => (
            <div key={sectionIndex} className="quiz-section">
              <h2 className="section-title">{section.section}</h2>
              {section.questions.map((question) => (
                <div key={question.id} className="question-block">
                  <p className="question-text">
                    <span className="question-number">{question.id}.</span> {question.text}
                  </p>
                  <div className="options-group">
                    {question.options.map((option, index) => (
                      <label
                        key={index}
                        className={`option-label ${answers[question.id] === option.value ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => handleAnswerChange(question.id, option.value)}
                        />
                        <span className="option-value">{option.level}</span>
                        <span className="option-text">{option.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="quiz-submit">
            <button className="submit-button" onClick={handleSubmit}>
              See My Results
            </button>
            <p className="progress-text">
              {Object.keys(answers).length} of 12 questions answered
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Quiz

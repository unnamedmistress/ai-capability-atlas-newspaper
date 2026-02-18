import './Quiz.css'
import { useState } from 'react'

const Quiz = () => {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [bonusAnswer, setBonusAnswer] = useState('')

  const questions = [
    {
      section: "Section 1: AI Awareness",
      questions: [
        {
          id: 1,
          text: "When you think about AI, you mostly see it as:",
          options: [
            { value: 'explorer', text: "A chatbot that answers questions", level: 'A' },
            { value: 'strategist', text: "A system that can perform different types of cognitive work if structured correctly", level: 'C' },
            { value: 'builder', text: "A tool that helps me write or brainstorm", level: 'B' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 2,
          text: "If AI gives you a weak answer, you usually:",
          options: [
            { value: 'builder', text: "Rephrase your question once", level: 'B' },
            { value: 'explorer', text: "Assume AI isn't good at that task", level: 'A' },
            { value: 'strategist', text: "Break the task into smaller parts and guide it step-by-step", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 3,
          text: "Which statement feels most accurate?",
          options: [
            { value: 'strategist', text: "AI performs specific cognitive functions depending on structure and constraints", level: 'C' },
            { value: 'explorer', text: "AI is smart but unpredictable", level: 'A' },
            { value: 'builder', text: "AI is powerful if prompted clearly", level: 'B' }
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
            { value: 'strategist', text: "Identify the type of task this is (analysis, generation, classification, planning) before prompting", level: 'C' },
            { value: 'builder', text: "Explain the situation in detail and ask for advice", level: 'B' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 5,
          text: "Which of these prompts is strongest?",
          options: [
            { value: 'builder', text: '"Create a plan for improving team communication."', level: 'B' },
            { value: 'strategist', text: '"Act as an operations analyst. Diagnose breakdown points in our team communication using root cause analysis and propose 3 structured interventions."', level: 'C' },
            { value: 'explorer', text: '"Help me with my project."', level: 'A' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 6,
          text: "If a task feels complex, you:",
          options: [
            { value: 'strategist', text: "Decompose the problem yourself before involving AI", level: 'C' },
            { value: 'builder', text: "Ask AI for steps", level: 'B' },
            { value: 'explorer', text: "Ask AI to do it all at once", level: 'A' }
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
            { value: 'builder', text: "When accuracy matters", level: 'B' },
            { value: 'explorer', text: "When it seems unsure", level: 'A' },
            { value: 'strategist', text: "When the task requires domain verification, external validation, or ethical judgment", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 8,
          text: "What improves AI output most?",
          options: [
            { value: 'strategist', text: "Clear structure, constraints, role definition, and output format", level: 'C' },
            { value: 'explorer', text: "Longer prompts", level: 'A' },
            { value: 'builder', text: "Clearer prompts", level: 'B' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 9,
          text: "Which mindset fits you best?",
          options: [
            { value: 'explorer', text: '"AI, surprise me."', level: 'A' },
            { value: 'strategist', text: '"AI, operate within this framework."', level: 'C' },
            { value: 'builder', text: '"AI, help me think."', level: 'B' }
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
            { value: 'builder', text: "Provide audience details and ask for a curriculum", level: 'B' },
            { value: 'explorer', text: 'Ask: "Create a training program about AI."', level: 'A' },
            { value: 'strategist', text: "Define learning outcomes, cognitive level, delivery constraints, and evaluation metrics before prompting", level: 'C' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 11,
          text: "AI gives you a confident but wrong answer. You:",
          options: [
            { value: 'strategist', text: "Cross-validate with another source or tool", level: 'C' },
            { value: 'builder', text: "Ask it to double-check", level: 'B' },
            { value: 'explorer', text: "Feel frustrated", level: 'A' }
          ],
          correctAnswer: 'strategist'
        },
        {
          id: 12,
          text: "When using AI regularly, your goal is:",
          options: [
            { value: 'explorer', text: "Save time", level: 'A' },
            { value: 'strategist', text: "Develop a repeatable thinking system", level: 'C' },
            { value: 'builder', text: "Improve quality", level: 'B' }
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
    setBonusAnswer('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const results = {
    explorer: {
      emoji: '🌱',
      title: 'Explorer',
      subtitle: 'You use AI as a tool.',
      description: "You're experimenting but not structuring yet.",
      strength: 'Curiosity',
      growthEdge: 'Learn decomposition and task typing',
      nextLevel: 'Understand capability categories',
      color: '#10b981'
    },
    builder: {
      emoji: '🧠',
      title: 'Builder',
      subtitle: 'You understand prompting matters.',
      description: 'You give context and refine outputs.',
      strength: 'Applied usage',
      growthEdge: 'Develop structured frameworks',
      nextLevel: 'Design systems, not prompts',
      color: '#3b82f6'
    },
    strategist: {
      emoji: '🧭',
      title: 'Strategist',
      subtitle: 'You understand AI as a cognitive engine.',
      description: 'You control structure, constraints, and verification.',
      strength: 'Strategic control',
      growthEdge: 'Scale and teach others',
      nextLevel: 'System architecture & human-AI collaboration design',
      color: '#8b5cf6'
    }
  }

  const currentResult = showResults ? results[getResult()] : null
  const counts = showResults ? calculateResults() : null

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
            <div className="result-emoji">{currentResult.emoji}</div>
            <h2 className="result-title">{currentResult.title}</h2>
            <p className="result-subtitle">{currentResult.subtitle}</p>
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

            <div className="bonus-section">
              <h3>🎁 Bonus Question (Reveals True Depth)</h3>
              <p className="bonus-prompt">
                Describe how you would decompose:<br />
                <em>"Improve my organization's internal knowledge sharing."</em>
              </p>
              <textarea
                className="bonus-textarea"
                value={bonusAnswer}
                onChange={(e) => setBonusAnswer(e.target.value)}
                placeholder="Type your approach here..."
                rows="6"
              />
              <div className="bonus-guide">
                <p><strong>Interpretation Guide:</strong></p>
                <ul>
                  <li><strong>🌱 Explorer:</strong> Ask AI directly</li>
                  <li><strong>🧠 Builder:</strong> Provide context and ask for ideas</li>
                  <li><strong>🧭 Strategist:</strong> Break it into capability categories (analysis, taxonomy, workflow design, feedback loops, governance)</li>
                </ul>
              </div>
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

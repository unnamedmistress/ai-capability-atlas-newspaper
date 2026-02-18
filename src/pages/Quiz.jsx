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
            { value: 'A', text: "A chatbot that answers questions" },
            { value: 'B', text: "A tool that helps me write or brainstorm" },
            { value: 'C', text: "A system that can perform different types of cognitive work if structured correctly" }
          ]
        },
        {
          id: 2,
          text: "If AI gives you a weak answer, you usually:",
          options: [
            { value: 'A', text: "Assume AI isn't good at that task" },
            { value: 'B', text: "Rephrase your question once" },
            { value: 'C', text: "Break the task into smaller parts and guide it step-by-step" }
          ]
        },
        {
          id: 3,
          text: "Which statement feels most accurate?",
          options: [
            { value: 'A', text: "AI is smart but unpredictable" },
            { value: 'B', text: "AI is powerful if prompted clearly" },
            { value: 'C', text: "AI performs specific cognitive functions depending on structure and constraints" }
          ]
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
            { value: 'A', text: 'Ask AI: "How do I fix this?"' },
            { value: 'B', text: "Explain the situation in detail and ask for advice" },
            { value: 'C', text: "Identify the type of task this is (analysis, generation, classification, planning) before prompting" }
          ]
        },
        {
          id: 5,
          text: "Which of these prompts is strongest?",
          options: [
            { value: 'A', text: '"Help me with my project."' },
            { value: 'B', text: '"Create a plan for improving team communication."' },
            { value: 'C', text: '"Act as an operations analyst. Diagnose breakdown points in our team communication using root cause analysis and propose 3 structured interventions."' }
          ]
        },
        {
          id: 6,
          text: "If a task feels complex, you:",
          options: [
            { value: 'A', text: "Ask AI to do it all at once" },
            { value: 'B', text: "Ask AI for steps" },
            { value: 'C', text: "Decompose the problem yourself before involving AI" }
          ]
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
            { value: 'A', text: "When it seems unsure" },
            { value: 'B', text: "When accuracy matters" },
            { value: 'C', text: "When the task requires domain verification, external validation, or ethical judgment" }
          ]
        },
        {
          id: 8,
          text: "What improves AI output most?",
          options: [
            { value: 'A', text: "Longer prompts" },
            { value: 'B', text: "Clearer prompts" },
            { value: 'C', text: "Clear structure, constraints, role definition, and output format" }
          ]
        },
        {
          id: 9,
          text: "Which mindset fits you best?",
          options: [
            { value: 'A', text: '"AI, surprise me."' },
            { value: 'B', text: '"AI, help me think."' },
            { value: 'C', text: '"AI, operate within this framework."' }
          ]
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
            { value: 'A', text: 'Ask: "Create a training program about AI."' },
            { value: 'B', text: "Provide audience details and ask for a curriculum" },
            { value: 'C', text: "Define learning outcomes, cognitive level, delivery constraints, and evaluation metrics before prompting" }
          ]
        },
        {
          id: 11,
          text: "AI gives you a confident but wrong answer. You:",
          options: [
            { value: 'A', text: "Feel frustrated" },
            { value: 'B', text: "Ask it to double-check" },
            { value: 'C', text: "Cross-validate with another source or tool" }
          ]
        },
        {
          id: 12,
          text: "When using AI regularly, your goal is:",
          options: [
            { value: 'A', text: "Save time" },
            { value: 'B', text: "Improve quality" },
            { value: 'C', text: "Develop a repeatable thinking system" }
          ]
        }
      ]
    }
  ]

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const calculateResults = () => {
    const counts = { A: 0, B: 0, C: 0 }
    Object.values(answers).forEach(answer => {
      counts[answer] = (counts[answer] || 0) + 1
    })
    return counts
  }

  const getResult = () => {
    const counts = calculateResults()
    const max = Math.max(counts.A, counts.B, counts.C)
    
    if (counts.C === max) return 'strategist'
    if (counts.B === max) return 'builder'
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
                  <span className="score-label">A (Explorer):</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${(counts.A / 12) * 100}%`, background: '#10b981' }}></div>
                  </div>
                  <span className="score-count">{counts.A}</span>
                </div>
                <div className="score-bar">
                  <span className="score-label">B (Builder):</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${(counts.B / 12) * 100}%`, background: '#3b82f6' }}></div>
                  </div>
                  <span className="score-count">{counts.B}</span>
                </div>
                <div className="score-bar">
                  <span className="score-label">C (Strategist):</span>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: `${(counts.C / 12) * 100}%`, background: '#8b5cf6' }}></div>
                  </div>
                  <span className="score-count">{counts.C}</span>
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
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className={`option-label ${answers[question.id] === option.value ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => handleAnswerChange(question.id, option.value)}
                        />
                        <span className="option-value">{option.value}</span>
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

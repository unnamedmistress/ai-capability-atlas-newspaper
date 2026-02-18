import { useState } from 'react'
import './DecisionEngine.css'
import decisionData from '../data/decision-tree.json'

const DecisionEngine = () => {
  const [currentNode, setCurrentNode] = useState(decisionData.nodes[decisionData.root_node_id])
  const [path, setPath] = useState([])

  const handleOptionClick = (option) => {
    const nextNode = decisionData.nodes[option.next_node_id]
    setPath([...path, { question: currentNode.question, answer: option.label }])
    setCurrentNode(nextNode)
  }

  const handleReset = () => {
    setCurrentNode(decisionData.nodes[decisionData.root_node_id])
    setPath([])
  }

  const handleBack = () => {
    if (path.length > 0) {
      const newPath = [...path]
      newPath.pop()
      setPath(newPath)
      // Navigate back to previous node (simplified - would need proper state management for full implementation)
      setCurrentNode(decisionData.nodes[decisionData.root_node_id])
    }
  }

  return (
    <div className="page decision-engine">
      <h1>Decision Engine</h1>
      <p className="intro">
        Interactive wizard to find relevant AI capabilities for your specific needs in 3 clicks or fewer.
        Answer a few questions to get personalized capability recommendations.
      </p>

      <div className="decision-visual">
        <img src="/ai-capability-atlas-newspaper/assets/images/decision-tree.png" alt="Decision Tree Visualization" />
        <p className="caption">Complete decision tree structure with all paths</p>
      </div>

      {path.length > 0 && (
        <div className="breadcrumb-path">
          <h4>Your Path:</h4>
          {path.map((step, idx) => (
            <div key={idx} className="path-step">
              <strong>Q{idx + 1}:</strong> {step.question} → <em>{step.answer}</em>
            </div>
          ))}
        </div>
      )}

      <div className="decision-card">
        {currentNode.type === 'question' && (
          <>
            <h2>{currentNode.question}</h2>
            {currentNode.description && <p className="node-description">{currentNode.description}</p>}
            
            <div className="options-grid">
              {currentNode.options.map((option) => (
                <button
                  key={option.id}
                  className="option-btn"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        )}

        {currentNode.type === 'capability_select' && (
          <div className="result-view">
            <h2>Recommended Capabilities</h2>
            <p>{currentNode.description}</p>
            
            {currentNode.capabilities && (
              <div className="capabilities-list">
                {currentNode.capabilities.map((cap, idx) => (
                  <div key={idx} className="capability-result">
                    <h4>{cap.name}</h4>
                    <p>{cap.description}</p>
                    {cap.example_prompts && (
                      <div className="example-prompts">
                        <strong>Try this:</strong>
                        <ul>
                          {cap.example_prompts.slice(0, 3).map((prompt, pidx) => (
                            <li key={pidx}>"{prompt}"</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="navigation-buttons">
          {path.length > 0 && (
            <button className="nav-btn back-btn" onClick={handleBack}>
              ← Back
            </button>
          )}
          <button className="nav-btn reset-btn" onClick={handleReset}>
            🔄 Start Over
          </button>
        </div>
      </div>

      <div className="engine-info">
        <h3>About the Decision Engine</h3>
        <p>
          This interactive wizard uses a decision tree optimized for <strong>3 clicks maximum</strong> to 
          help you find relevant AI capabilities. It maps from high-level goals → categories → specific capabilities 
          with example prompts you can try immediately.
        </p>
        <p>
          The complete decision tree contains {Object.keys(decisionData.nodes).length} nodes covering all 71 capabilities 
          in the taxonomy.
        </p>
      </div>
    </div>
  )
}

export default DecisionEngine

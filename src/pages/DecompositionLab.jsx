import './DecompositionLab.css'

const DecompositionLab = () => {
  return (
    <div className="page decomposition-lab">
      <h1>🔬 Decomposition Lab</h1>
      <p className="intro">
        Step-by-step problem breakdown trainer. Learn to decompose complex tasks into AI-solvable components 
        through interactive exercises and guided practice.
      </p>

      <div className="lab-visual">
        <img src="/ai-capability-atlas-newspaper/assets/images/problem-decomposition.png" alt="Problem Decomposition Framework" />
        <p className="caption">The problem decomposition framework in action</p>
      </div>

      <div className="framework-section">
        <h2>The 5-Step Decomposition Framework</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Identify the Goal</h3>
            <p>What outcome do you want? Be specific about the end result.</p>
            <div className="example">
              <strong>Example:</strong> "I want to write a professional email declining a meeting invitation"
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Break into Subtasks</h3>
            <p>What are the distinct steps needed to reach that goal?</p>
            <div className="example">
              <strong>Example:</strong>
              <ul>
                <li>Draft a polite opening</li>
                <li>Explain reason for declining</li>
                <li>Suggest alternative</li>
                <li>Close professionally</li>
              </ul>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Match to Capabilities</h3>
            <p>Which AI capabilities fit each subtask?</p>
            <div className="example">
              <strong>Example:</strong>
              <ul>
                <li>Generate text in specific style (professional tone)</li>
                <li>Provide alternative suggestions</li>
                <li>Refine and edit draft</li>
              </ul>
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Sequence & Iterate</h3>
            <p>In what order? What needs refinement?</p>
            <div className="example">
              <strong>Example:</strong> Draft → Review → Refine tone → Add specifics → Final polish
            </div>
          </div>

          <div className="step-card">
            <div className="step-number">5</div>
            <h3>Synthesize</h3>
            <p>How do you combine outputs into the final result?</p>
            <div className="example">
              <strong>Example:</strong> Combine all parts, ensure consistency, add personal touch
            </div>
          </div>
        </div>
      </div>

      <div className="practice-section">
        <h2>Practice Scenarios</h2>
        <p>Try decomposing these common tasks using the 5-step framework:</p>

        <div className="scenarios-grid">
          <div className="scenario-card">
            <h4>📊 Create a Budget Plan</h4>
            <p>You want to create a monthly budget for your household expenses.</p>
            <button className="practice-btn">Try Decomposing →</button>
          </div>

          <div className="scenario-card">
            <h4>📝 Write a Blog Post</h4>
            <p>You want to write an engaging blog post about a recent trip.</p>
            <button className="practice-btn">Try Decomposing →</button>
          </div>

          <div className="scenario-card">
            <h4>🎓 Learn a New Topic</h4>
            <p>You want to understand quantum computing basics.</p>
            <button className="practice-btn">Try Decomposing →</button>
          </div>

          <div className="scenario-card">
            <h4>💼 Prepare for Interview</h4>
            <p>You want to prepare for a job interview in a new field.</p>
            <button className="practice-btn">Try Decomposing →</button>
          </div>

          <div className="scenario-card">
            <h4>🏠 Plan a Renovation</h4>
            <p>You want to plan a kitchen renovation project.</p>
            <button className="practice-btn">Try Decomposing →</button>
          </div>

          <div className="scenario-card">
            <h4>📚 Research a Topic</h4>
            <p>You want to research the history of artificial intelligence.</p>
            <button className="practice-btn">Try Decomposing →</button>
          </div>
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

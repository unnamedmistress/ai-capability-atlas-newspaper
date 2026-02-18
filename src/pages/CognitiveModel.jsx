import './CognitiveModel.css'
import cognitiveData from '../data/cognitive-model.json'

const CognitiveModel = () => {
  return (
    <div className="page cognitive-model">
      <h1>Cognitive Model for AI Literacy</h1>
      <p className="intro">
        Understanding how to think about AI use—mental models, skill progression, and structured thinking frameworks 
        for effective human-AI collaboration.
      </p>

      <div className="visual-section">
        <img src="/ai-capability-atlas-newspaper/assets/images/cognitive-model.png" alt="Cognitive Model Visualization" />
        <p className="caption">Complete cognitive model showing mental models, skill ladder, and thinking frameworks</p>
      </div>

      <div className="mental-models-section">
        <h2>🧠 Mental Models</h2>
        <p>Conceptual frameworks for understanding what AI can and cannot do:</p>
        
        <div className="models-grid">
          {cognitiveData.mental_models.map((model) => (
            <div key={model.id} className="model-card">
              <h3>{model.name}</h3>
              <p className="model-description">{model.description}</p>
              
              <div className="model-section">
                <h4>✅ Strengths</h4>
                <ul>
                  {model.strengths.map((strength, idx) => (
                    <li key={idx}>{strength}</li>
                  ))}
                </ul>
              </div>

              <div className="model-section">
                <h4>⚠️ Limitations</h4>
                <ul>
                  {model.limitations.map((limitation, idx) => (
                    <li key={idx}>{limitation}</li>
                  ))}
                </ul>
              </div>

              <div className="model-section">
                <h4>🎯 When to Use</h4>
                <ul>
                  {model.when_to_use.map((use, idx) => (
                    <li key={idx}>{use}</li>
                  ))}
                </ul>
              </div>

              <div className="model-section">
                <h4>🚫 When NOT to Use</h4>
                <ul>
                  {model.when_not_to_use.map((notUse, idx) => (
                    <li key={idx}>{notUse}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-ladder-section">
        <h2>📊 Skill Ladder: Progressive Development</h2>
        <p>Three stages of AI literacy development, from first steps to mastery:</p>

        <div className="visual-ladder">
          <img src="/ai-capability-atlas-newspaper/assets/images/skill-ladder.png" alt="Skill Ladder Visualization" />
        </div>

        <div className="ladder-stages">
          <div className="stage novice">
            <div className="stage-header">
              <h3>1. Novice</h3>
              <span className="stage-badge">Getting Started</span>
            </div>
            <div className="stage-content">
              <div className="stage-goal">
                <h4>Goal</h4>
                <p>{cognitiveData.skill_ladder.novice.goal}</p>
              </div>
              <div className="stage-skills">
                <h4>Key Skills</h4>
                <ul>
                  {cognitiveData.skill_ladder.novice.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="stage-capabilities">
                <h4>Typical Capabilities</h4>
                <ul>
                  {cognitiveData.skill_ladder.novice.capabilities.map((cap, idx) => (
                    <li key={idx}>{cap}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="stage competent">
            <div className="stage-header">
              <h3>2. Competent</h3>
              <span className="stage-badge">Systematic Use</span>
            </div>
            <div className="stage-content">
              <div className="stage-goal">
                <h4>Goal</h4>
                <p>{cognitiveData.skill_ladder.competent.goal}</p>
              </div>
              <div className="stage-skills">
                <h4>Key Skills</h4>
                <ul>
                  {cognitiveData.skill_ladder.competent.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="stage-capabilities">
                <h4>Typical Capabilities</h4>
                <ul>
                  {cognitiveData.skill_ladder.competent.capabilities.map((cap, idx) => (
                    <li key={idx}>{cap}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="stage proficient">
            <div className="stage-header">
              <h3>3. Proficient</h3>
              <span className="stage-badge">Strategic Mastery</span>
            </div>
            <div className="stage-content">
              <div className="stage-goal">
                <h4>Goal</h4>
                <p>{cognitiveData.skill_ladder.proficient.goal}</p>
              </div>
              <div className="stage-skills">
                <h4>Key Skills</h4>
                <ul>
                  {cognitiveData.skill_ladder.proficient.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="stage-capabilities">
                <h4>Typical Capabilities</h4>
                <ul>
                  {cognitiveData.skill_ladder.proficient.capabilities.map((cap, idx) => (
                    <li key={idx}>{cap}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ai-vs-human-section">
        <h2>🤝 AI vs Human Strengths</h2>
        <p>Understanding complementary capabilities for effective collaboration:</p>
        <img src="/ai-capability-atlas-newspaper/assets/images/ai-vs-human-strengths.png" alt="AI vs Human Strengths Comparison" />
      </div>

      <div className="thinking-frameworks">
        <h2>💭 Structured Thinking Frameworks</h2>
        
        <div className="framework-card">
          <h3>Problem Decomposition Framework</h3>
          <p>Break complex tasks into AI-solvable components:</p>
          <ol>
            <li><strong>Identify the Goal:</strong> What outcome do you want?</li>
            <li><strong>Break into Subtasks:</strong> What are the distinct steps?</li>
            <li><strong>Match to Capabilities:</strong> Which AI capabilities fit each subtask?</li>
            <li><strong>Sequence & Iterate:</strong> What order? What needs refinement?</li>
            <li><strong>Synthesize:</strong> How do you combine outputs into the final result?</li>
          </ol>
          <img src="/ai-capability-atlas-newspaper/assets/images/problem-decomposition.png" alt="Problem Decomposition Diagram" />
        </div>

        <div className="framework-card">
          <h3>Prompt-as-Specification</h3>
          <p>Think of prompts as specifications, not commands:</p>
          <ul>
            <li><strong>Context:</strong> What background information does the AI need?</li>
            <li><strong>Task:</strong> What specific action should it perform?</li>
            <li><strong>Constraints:</strong> What rules or limitations apply?</li>
            <li><strong>Format:</strong> How should the output be structured?</li>
            <li><strong>Examples:</strong> Can you provide a sample of what you want?</li>
          </ul>
        </div>

        <div className="framework-card">
          <h3>Iterative Refinement Loop</h3>
          <p>AI use is rarely one-shot—embrace iteration:</p>
          <ol>
            <li><strong>Initial Prompt:</strong> Start with your best attempt</li>
            <li><strong>Evaluate Output:</strong> What's good? What's missing?</li>
            <li><strong>Refine Prompt:</strong> Add specificity, examples, or constraints</li>
            <li><strong>Re-run:</strong> Generate new output</li>
            <li><strong>Repeat:</strong> Continue until satisfied</li>
          </ol>
        </div>
      </div>

      <div className="next-steps">
        <h2>🚀 Apply This Knowledge</h2>
        <div className="next-steps-grid">
          <div className="next-step-card">
            <h4>📚 Explore Taxonomy</h4>
            <p>See how cognitive skills map to specific AI capabilities</p>
            <a href="/ai-capability-atlas-newspaper/taxonomy">Browse Taxonomy →</a>
          </div>
          <div className="next-step-card">
            <h4>🔬 Practice Decomposition</h4>
            <p>Use the Decomposition Lab to practice breaking down problems</p>
            <a href="/ai-capability-atlas-newspaper/decomposition-lab">Enter Lab →</a>
          </div>
          <div className="next-step-card">
            <h4>📰 Read Articles</h4>
            <p>Deep-dive into thinking skills and cognitive frameworks</p>
            <a href="/ai-capability-atlas-newspaper/articles">Read Articles →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CognitiveModel

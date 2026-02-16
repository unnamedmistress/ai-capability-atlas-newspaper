import './Taxonomy.css'
import { Link } from 'react-router-dom'

const Taxonomy = () => {
  return (
    <div className="page taxonomy">
      <h1>Capability Taxonomy</h1>
      
      <div className="taxonomy-overview">
        <p className="overview-text">
          A comprehensive 6-layer hierarchy of 71 AI capabilities for everyday users, organized by domains, categories, and cognitive skill levels.
        </p>
        
        <div className="taxonomy-stats">
          <div className="stat">
            <h3>3</h3>
            <p>Domains</p>
          </div>
          <div className="stat">
            <h3>5</h3>
            <p>Categories</p>
          </div>
          <div className="stat">
            <h3>71</h3>
            <p>Capabilities</p>
          </div>
          <div className="stat">
            <h3>22</h3>
            <p>Cognitive skills</p>
          </div>
        </div>
      </div>

      <div className="domains-section">
        <h2>Domains</h2>
        
        <div className="domain-cards">
          <div className="domain-card">
            <h3>Knowledge & Learning</h3>
            <p className="domain-description">Understanding, explaining, and acquiring new information.</p>
            <p className="thinking-lens"><strong>Thinking Lens:</strong> Understanding Mode – Focus on comprehension, explanation, and information processing.</p>
            <div className="domain-stats">
              <span className="stat-tag">14 capabilities</span>
              <span className="stat-tag">Learn New Things</span>
              <span className="stat-tag">Research & Analyze</span>
            </div>
            <p className="examples">
              <strong>Examples:</strong> Explain complex concepts, answer factual questions, summarize articles, synthesize research.
            </p>
          </div>
          
          <div className="domain-card">
            <h3>Creativity & Content</h3>
            <p className="domain-description">Generating, structuring, and refining ideas and content.</p>
            <p className="thinking-lens"><strong>Thinking Lens:</strong> Generative Mode – Focus on idea generation, structuring, and refinement.</p>
            <div className="domain-stats">
              <span className="stat-tag">19 capabilities</span>
              <span className="stat-tag">Create Things</span>
              <span className="stat-tag">Improve Work</span>
            </div>
            <p className="examples">
              <strong>Examples:</strong> Brainstorm ideas, write in different styles, generate visual concepts, edit and refine content.
            </p>
          </div>
          
          <div className="domain-card">
            <h3>Problem Solving & Analysis</h3>
            <p className="domain-description">Decision-making, comparison, and systematic evaluation.</p>
            <p className="thinking-lens"><strong>Thinking Lens:</strong> Analytical Mode – Focus on decision-making, comparison, and systematic evaluation.</p>
            <div className="domain-stats">
              <span className="stat-tag">16 capabilities</span>
              <span className="stat-tag">Decide & Choose</span>
              <span className="stat-tag">Solve Problems</span>
            </div>
            <p className="examples">
              <strong>Examples:</strong> Compare options, analyze trade-offs, debug issues, plan projects, evaluate alternatives.
            </p>
          </div>
        </div>
      </div>

      <div className="taxonomy-notes">
        <h2>About the Taxonomy</h2>
        <p>
          This taxonomy was developed through 9 rounds of adversarial refinement, with each capability:
        </p>
        <ul>
          <li>Mapped to specific cognitive skills (foundational → intermediate → advanced)</li>
          <li>Linked to concrete use cases with example prompts</li>
          <li>Designed to support progressive skill development</li>
          <li>Focused exclusively on everyday user tasks (no developer/API capabilities)</li>
        </ul>
        
        <div className="data-notes">
          <p>
            <strong>Complete dataset available:</strong> The full 172KB taxonomy with all capabilities, 
            cognitive integration, and 500+ example prompts is available in the project repository.
          </p>
          <p className="repo-link">
            <a href="https://github.com/unnamedmistress/ai-capability-atlas-newspaper/tree/main/public/docs" target="_blank" rel="noopener noreferrer">
              View taxonomy files on GitHub →
            </a>
          </p>
        </div>
        
        <div className="navigation-links">
          <Link to="/decision-engine" className="nav-link">
            Use Decision Engine to find relevant capabilities →
          </Link>
          <Link to="/cognitive-model" className="nav-link">
            Learn cognitive frameworks for using these capabilities →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Taxonomy

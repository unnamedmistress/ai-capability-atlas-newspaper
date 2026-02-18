import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page home">
      <div className="hero-section">
        <h1>The AI Capability Atlas</h1>
        <p className="tagline">
          An investigative interactive digital newspaper
        </p>
        <p className="lead">
          Answering: "What can AI actually do for everyday people? How do you translate real-world problems into AI tasks?"
        </p>
      </div>

      <div className="page-content">
        <div className="intro-section">
          <h2>About This Project</h2>
          <p>
            The AI Capability Atlas is a comprehensive mapping of everyday AI capabilities, 
            created through a 9-round adversarial refinement process using the <strong>OpenClaw orchestration framework</strong>. 
            It provides structured frameworks for thinking about AI tasks, not just prompt formulas.
          </p>
          <p>
            Built through multi-agent collaboration with <strong>Level 4 adversarial critique</strong>, 
            this project documents what general users can actually do with modern AI chat tools—no coding, 
            APIs, or special access required.
          </p>
        </div>

        <div className="key-stats">
          <div className="stat">
            <h3>71</h3>
            <p>Tactical AI Capabilities</p>
          </div>
          <div className="stat">
            <h3>6</h3>
            <p>Layer Taxonomy Hierarchy</p>
          </div>
          <div className="stat">
            <h3>4</h3>
            <p>Investigative Articles</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Example Prompts</p>
          </div>
        </div>

        <div className="featured-visuals">
          <h2>Visual Overview</h2>
          <div className="visual-grid">
            <div className="visual-item">
              <img src="/ai-capability-atlas-newspaper/assets/images/ai-vs-human-strengths.png" alt="AI vs Human Strengths Chart" />
              <p>AI vs Human Strengths</p>
            </div>
            <div className="visual-item">
              <img src="/ai-capability-atlas-newspaper/assets/images/heatmap.png" alt="Capability Heatmap" />
              <p>Capability Heatmap</p>
            </div>
          </div>
        </div>

        <div className="navigation-cards">
          <h2>Explore the Atlas</h2>
          <div className="card-grid">
            <div className="nav-card">
              <Link to="/taxonomy">
                <div className="card-icon">📚</div>
                <h3>Capability Taxonomy</h3>
                <p>Explore 71 AI capabilities organized across 4 major domains, 13 categories, with cognitive skill mappings and 500+ example prompts.</p>
                <span className="card-cta">Browse Taxonomy →</span>
              </Link>
            </div>
            
            <div className="nav-card">
              <Link to="/decision-engine">
                <div className="card-icon">🎯</div>
                <h3>Decision Engine</h3>
                <p>Interactive wizard to find relevant AI capabilities for your specific needs in 3 clicks or fewer. Problem-to-capability mapping.</p>
                <span className="card-cta">Start Wizard →</span>
              </Link>
            </div>
            
            <div className="nav-card">
              <Link to="/cognitive-model">
                <div className="card-icon">🧠</div>
                <h3>Cognitive Model</h3>
                <p>Learn structured thinking frameworks, mental models, skill ladder (Novice → Proficient), and thinking lenses for AI use.</p>
                <span className="card-cta">View Model →</span>
              </Link>
            </div>
            
            <div className="nav-card">
              <Link to="/decomposition-lab">
                <div className="card-icon">🔬</div>
                <h3>Decomposition Lab</h3>
                <p>Step-by-step problem breakdown trainer. Learn to decompose complex tasks into AI-solvable components.</p>
                <span className="card-cta">Enter Lab →</span>
              </Link>
            </div>
            
            <div className="nav-card">
              <Link to="/field-experiments">
                <div className="card-icon">⚗️</div>
                <h3>Field Experiments</h3>
                <p>Clickable micro-experiments, prompt drills, and "try this now" exercises to build confidence through practice.</p>
                <span className="card-cta">Try Experiments →</span>
              </Link>
            </div>
            
            <div className="nav-card">
              <Link to="/articles">
                <div className="card-icon">📰</div>
                <h3>Investigative Articles</h3>
                <p>Serious investigative journalism on AI literacy, skills gaps, cognitive amplification, and problem decomposition (7,247 words).</p>
                <span className="card-cta">Read Articles →</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="principles-section">
          <h2>Core Principles</h2>
          <div className="principles-grid">
            <div className="principle">
              <h4>🚫 No Technical Barriers</h4>
              <p>No APIs, coding, or special access required. Focus on what everyday users can do with consumer AI tools.</p>
            </div>
            <div className="principle">
              <h4>🧩 Structured Thinking</h4>
              <p>Teach problem decomposition and cognitive frameworks, not just prompt formulas or feature lists.</p>
            </div>
            <div className="principle">
              <h4>📉 Reduce Overwhelm</h4>
              <p>Clear taxonomy, decision trees, and progressive disclosure to make AI capabilities navigable and actionable.</p>
            </div>
            <div className="principle">
              <h4>🔍 Investigative Rigor</h4>
              <p>Built through adversarial critique, evidence-based analysis, and transparent process documentation.</p>
            </div>
          </div>
        </div>

        <div className="project-status">
          <h2>OpenClaw Orchestration Complete</h2>
          <p>
            This project was created through a <strong>9-phase adversarial refinement process</strong> with specialized agent personas:
          </p>
          <div className="phases-completed">
            <div className="phase">✅ Phase 0: Project Setup</div>
            <div className="phase">✅ Phase 1: Initial Architecture (Content Architect)</div>
            <div className="phase">✅ Phase 2: Adversarial Critique Round 1 (Skeptical Analyst - Level 4)</div>
            <div className="phase">✅ Phase 3: Revision & Refinement</div>
            <div className="phase">✅ Phase 4: Cognitive Optimization (Educational Psychologist)</div>
            <div className="phase">✅ Phase 5: Decision & Navigation Design (Decision Architect)</div>
            <div className="phase">✅ Phase 6: Adversarial Critique Round 2 (Skeptical Analyst - Level 4)</div>
            <div className="phase">✅ Phase 7: Visual & Interaction Design</div>
            <div className="phase">✅ Phase 8: Content Creation (Investigative Editor)</div>
          </div>
          <p className="repo-link">
            <a href="https://github.com/unnamedmistress/ai-capability-atlas-newspaper" target="_blank" rel="noopener noreferrer">
              View complete process documentation on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page home">
      <h1>The AI Capability Atlas</h1>
      <div className="page-content">
        <p className="lead">
          <strong>An investigative interactive digital newspaper</strong> answering: 
          "What can AI actually do for everyday people? How do you translate real-world problems into AI tasks?"
        </p>

        <div className="project-overview">
          <h2>About This Project</h2>
          <p>
            The AI Capability Atlas is a comprehensive mapping of everyday AI capabilities, 
            created through a 9-round adversarial refinement process. It provides structured 
            frameworks for thinking about AI tasks, not just prompt formulas.
          </p>
          <div className="key-stats">
            <div className="stat">
              <h3>71</h3>
              <p>Distinct AI capabilities documented</p>
            </div>
            <div className="stat">
              <h3>6</h3>
              <p>Layer taxonomy hierarchy</p>
            </div>
            <div className="stat">
              <h3>4</h3>
              <p>Investigative articles</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Example prompts</p>
            </div>
          </div>
        </div>

        <div className="navigation-cards">
          <h2>Explore the Atlas</h2>
          <div className="card-grid">
            <div className="card">
              <Link to="/taxonomy">
                <h3>Capability Taxonomy</h3>
                <p>Explore 71 AI capabilities organized into domains, categories, and cognitive skill levels.</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/decision-engine">
                <h3>Decision Engine</h3>
                <p>Interactive wizard to find relevant AI capabilities for your specific needs in 3 clicks or fewer.</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/cognitive-model">
                <h3>Cognitive Model</h3>
                <p>Learn structured thinking frameworks, mental models, and skill progression pathways.</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/articles">
                <h3>Investigative Articles</h3>
                <p>Read serious investigative journalism on AI literacy, skills gaps, and cognitive amplification.</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="project-notes">
          <h2>Project Status</h2>
          <p>
            <strong>Phase 1 Complete:</strong> All 9 rounds of adversarial refinement executed, 
            with complete taxonomy, decision engine, cognitive model, visual specifications, 
            and investigative articles published.
          </p>
          <p>
            <strong>Next Phase:</strong> Interactive components implementation based on the 
            detailed interaction specification.
          </p>
          <p className="repo-link">
            <a href="https://github.com/unnamedmistress/ai-capability-atlas-newspaper" target="_blank" rel="noopener noreferrer">
              View project repository on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

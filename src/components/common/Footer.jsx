import './Footer.css'

const Footer = () => {
  return (
    <footer className="newspaper-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>The AI Capability Atlas</h3>
          <p>A serious investigative digital newspaper exploring what AI can actually do for everyday people.</p>
        </div>
        
        <div className="footer-section">
          <h3>Core Mission</h3>
          <p>Teaching structured thinking skills, not just prompt formulas. Reducing overwhelm, building experimentation confidence.</p>
        </div>
        
        <div className="footer-section">
          <h3>About This Project</h3>
          <p>Created through adversarial multi-agent refinement. No APIs, coding, or special access required for end users.</p>
          <p className="footer-note">
            <a href="https://github.com/ai-capability-atlas-newspaper" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} AI Capability Atlas Project. Content available under Creative Commons Attribution 4.0.</p>
          <p className="footer-disclaimer">This publication presents analysis and educational materials, not investment or professional advice.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

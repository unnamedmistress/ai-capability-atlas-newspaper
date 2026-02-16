import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="newspaper-header">
      <div className="header-container">
        <h1 className="newspaper-title">
          <Link to="/">The AI Capability Atlas</Link>
        </h1>
        <p className="newspaper-subtitle">Investigative Interactive Digital Newspaper</p>
        
        <nav className="main-navigation">
          <ul>
            <li><Link to="/">Front Page</Link></li>
            <li><Link to="/taxonomy">Capability Taxonomy</Link></li>
            <li><Link to="/decision-engine">Decision Engine</Link></li>
            <li><Link to="/decomposition-lab">Decomposition Lab</Link></li>
            <li><Link to="/cognitive-model">Cognitive Model</Link></li>
            <li><Link to="/field-experiments">Field Experiments</Link></li>
            <li><Link to="/articles">Investigative Articles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

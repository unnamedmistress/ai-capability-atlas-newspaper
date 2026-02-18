import './Home.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const stats = [
    { number: '71', label: 'AI Capabilities', icon: '⚡' },
    { number: '6', label: 'Layer Taxonomy', icon: '🗂️' },
    { number: '405', label: 'Example Prompts', icon: '💬' },
    { number: '4', label: 'Deep-Dive Articles', icon: '📰' }
  ]

  const features = [
    {
      to: '/taxonomy',
      icon: '📚',
      title: 'Capability Taxonomy',
      description: 'Navigate 71 AI capabilities across 6 hierarchical layers with 405 ready-to-use prompts',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      to: '/decision-engine',
      icon: '🎯',
      title: 'Decision Engine',
      description: 'Interactive wizard that maps your problems to AI capabilities in 3 clicks or less',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      to: '/cognitive-model',
      icon: '🧠',
      title: 'Cognitive Model',
      description: 'Master structured thinking frameworks and mental models for effective AI use',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      to: '/decomposition-lab',
      icon: '🔬',
      title: 'Decomposition Lab',
      description: 'Interactive trainer for breaking complex tasks into AI-solvable components',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      to: '/field-experiments',
      icon: '⚗️',
      title: 'Field Experiments',
      description: 'Hands-on micro-experiments and prompt drills to build practical confidence',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      to: '/articles',
      icon: '📰',
      title: 'Investigative Articles',
      description: '7,247 words of serious journalism on AI literacy and cognitive amplification',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ]

  const principles = [
    {
      icon: '🚫',
      title: 'No Technical Barriers',
      description: 'No APIs, coding, or special access. Built for everyday users with consumer AI tools.'
    },
    {
      icon: '🧩',
      title: 'Structured Thinking',
      description: 'Learn problem decomposition and cognitive frameworks, not just prompt formulas.'
    },
    {
      icon: '📉',
      title: 'Reduce Overwhelm',
      description: 'Clear taxonomy and progressive disclosure make AI capabilities navigable.'
    },
    {
      icon: '🔍',
      title: 'Investigative Rigor',
      description: 'Built through adversarial critique and evidence-based analysis.'
    }
  ]

  return (
    <div className="page home-redesign">
      {/* Hero Section with Parallax */}
      <div className="hero-modern" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-content">
          <div className="hero-badge">Investigative Interactive Digital Newspaper</div>
          <h1 className="hero-title">
            The AI Capability
            <span className="gradient-text"> Atlas</span>
          </h1>
          <p className="hero-subtitle">
            What can AI <em>actually</em> do for everyday people?<br />
            How do you translate real-world problems into AI tasks?
          </p>
          <div className="hero-cta-group">
            <Link to="/taxonomy" className="cta-primary">
              Explore Capabilities
              <span className="arrow">→</span>
            </Link>
            <Link to="/articles" className="cta-secondary">
              Read the Investigation
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="card-emoji">💡</span>
            <span className="card-text">Explain Concepts</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-emoji">✍️</span>
            <span className="card-text">Write Content</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-emoji">🔍</span>
            <span className="card-text">Analyze Data</span>
          </div>
          <div className="floating-card card-4">
            <span className="card-emoji">🎨</span>
            <span className="card-text">Create Visuals</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-modern">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="about-modern">
        <div className="section-badge">About This Project</div>
        <h2 className="section-title">
          A Comprehensive Mapping of <span className="highlight">Everyday AI Capabilities</span>
        </h2>
        <p className="section-description">
          Created through a <strong>9-phase adversarial refinement process</strong> using the OpenClaw orchestration framework. 
          This isn't a prompt library—it's a structured framework for <em>thinking</em> about AI tasks.
        </p>
        <div className="about-features">
          <div className="about-feature">
            <div className="feature-icon">🤖</div>
            <div className="feature-content">
              <h4>Multi-Agent Collaboration</h4>
              <p>Built with Level 4 adversarial critique from specialized agent personas</p>
            </div>
          </div>
          <div className="about-feature">
            <div className="feature-icon">🎯</div>
            <div className="feature-content">
              <h4>Everyday Users Focus</h4>
              <p>Documents what you can do with modern AI chat tools—no coding required</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="features-modern">
        <div className="section-badge">Explore the Atlas</div>
        <h2 className="section-title">Six Interactive Sections</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.to}
              className={`feature-card ${activeCard === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-gradient" style={{ background: feature.gradient }}></div>
              <div className="feature-icon-large">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Principles Section */}
      <div className="principles-modern">
        <div className="section-badge">Core Principles</div>
        <h2 className="section-title">Built on Four Foundations</h2>
        <div className="principles-grid-modern">
          {principles.map((principle, index) => (
            <div key={index} className="principle-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="principle-icon-circle">{principle.icon}</div>
              <h4 className="principle-title">{principle.title}</h4>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="visual-showcase">
        <div className="section-badge">Visual Overview</div>
        <h2 className="section-title">Data-Driven Insights</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <img src="/ai-capability-atlas-newspaper/assets/images/ai-vs-human-strengths.png" alt="AI vs Human Strengths" />
            <div className="showcase-overlay">
              <h4>AI vs Human Strengths</h4>
              <p>Understanding complementary capabilities</p>
            </div>
          </div>
          <div className="showcase-item">
            <img src="/ai-capability-atlas-newspaper/assets/images/heatmap.png" alt="Capability Heatmap" />
            <div className="showcase-overlay">
              <h4>Capability Distribution</h4>
              <p>71 capabilities mapped across domains</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-modern">
        <div className="section-badge">OpenClaw Orchestration</div>
        <h2 className="section-title">9-Phase Adversarial Refinement</h2>
        <div className="process-timeline">
          {[
            'Project Setup',
            'Initial Architecture',
            'Adversarial Critique Round 1',
            'Revision & Refinement',
            'Cognitive Optimization',
            'Decision & Navigation Design',
            'Adversarial Critique Round 2',
            'Visual & Interaction Design',
            'Content Creation'
          ].map((phase, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="timeline-number">{index}</div>
              <div className="timeline-content">
                <div className="timeline-check">✓</div>
                <span className="timeline-text">{phase}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="github-link-modern">
          <a href="https://github.com/unnamedmistress/ai-capability-atlas-newspaper" target="_blank" rel="noopener noreferrer">
            <span>View Complete Process Documentation</span>
            <span className="external-icon">↗</span>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Explore?</h2>
        <p>Start with the interactive taxonomy or dive into the investigative articles</p>
        <div className="cta-buttons">
          <Link to="/taxonomy" className="cta-large cta-primary">
            Browse 71 Capabilities →
          </Link>
          <Link to="/articles" className="cta-large cta-secondary">
            Read 7,247 Words of Investigation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

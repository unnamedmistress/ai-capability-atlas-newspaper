import { useState } from 'react'
import './Taxonomy.css'
import taxonomyData from '../data/taxonomy.json'

const Taxonomy = () => {
  const [selectedDomain, setSelectedDomain] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedCapability, setSelectedCapability] = useState(null)
  const [selectedUseCase, setSelectedUseCase] = useState(null)

  const resetSelection = () => {
    setSelectedDomain(null)
    setSelectedCategory(null)
    setSelectedCapability(null)
    setSelectedUseCase(null)
  }

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain)
    setSelectedCategory(null)
    setSelectedCapability(null)
    setSelectedUseCase(null)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setSelectedCapability(null)
    setSelectedUseCase(null)
  }

  const handleCapabilityClick = (capability) => {
    setSelectedCapability(capability)
    setSelectedUseCase(null)
  }

  const handleUseCaseClick = (useCase) => {
    setSelectedUseCase(useCase)
  }

  // Count total capabilities
  const totalCapabilities = taxonomyData.domains.reduce((sum, domain) => {
    return sum + domain.categories.reduce((catSum, category) => {
      return catSum + category.capabilities.length
    }, 0)
  }, 0)

  // Count total use cases
  const totalUseCases = taxonomyData.domains.reduce((sum, domain) => {
    return sum + domain.categories.reduce((catSum, category) => {
      return catSum + category.capabilities.reduce((capSum, capability) => {
        return capSum + capability.use_cases.length
      }, 0)
    }, 0)
  }, 0)

  // Count total prompts
  const totalPrompts = taxonomyData.domains.reduce((sum, domain) => {
    return sum + domain.categories.reduce((catSum, category) => {
      return catSum + category.capabilities.reduce((capSum, capability) => {
        return capSum + capability.use_cases.reduce((ucSum, useCase) => {
          return ucSum + (useCase.example_prompts?.length || 0)
        }, 0)
      }, 0)
    }, 0)
  }, 0)

  // Overview mode - no selection
  if (!selectedDomain) {
    return (
      <div className="page taxonomy">
        <h1>AI Capability Taxonomy</h1>
        <p className="taxonomy-intro">
          A comprehensive 6-layer hierarchical mapping of {totalCapabilities} AI capabilities for everyday users with {totalPrompts} copy-to-clipboard example prompts. 
          Navigate through domains, categories, capabilities, use cases, and example prompts—all 
          integrated with cognitive frameworks and thinking lenses.
        </p>

        <div className="taxonomy-stats">
          <div className="stat-box">
            <h3>{taxonomyData.domains.length}</h3>
            <p>Domains</p>
          </div>
          <div className="stat-box">
            <h3>{taxonomyData.domains.reduce((sum, d) => sum + d.categories.length, 0)}</h3>
            <p>Categories</p>
          </div>
          <div className="stat-box">
            <h3>{totalCapabilities}</h3>
            <p>Capabilities</p>
          </div>
          <div className="stat-box">
            <h3>{totalUseCases}</h3>
            <p>Use Cases</p>
          </div>
          <div className="stat-box">
            <h3>{totalPrompts}</h3>
            <p>Example Prompts</p>
          </div>
        </div>

        <div className="taxonomy-visual">
          <img src="/ai-capability-atlas-newspaper/assets/images/taxonomy-map.png" alt="Taxonomy Map Visualization" />
          <p className="caption">Visual map of the complete 6-layer taxonomy structure</p>
        </div>

        <div className="domain-grid">
          {taxonomyData.domains.map((domain) => (
            <div key={domain.id} className="domain-card" onClick={() => handleDomainClick(domain)}>
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
              <div className="domain-stats">
                <span>{domain.categories.length} categories</span>
                <span>•</span>
                <span>
                  {domain.categories.reduce((sum, cat) => sum + cat.capabilities.length, 0)} capabilities
                </span>
              </div>
              <button className="explore-btn">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="page taxonomy taxonomy-explorer">
      <div className="breadcrumb">
        <span onClick={resetSelection} className="breadcrumb-item clickable">Taxonomy</span>
        {selectedDomain && (
          <>
            <span className="separator">›</span>
            <span className="breadcrumb-item">{selectedDomain.name}</span>
          </>
        )}
        {selectedCategory && (
          <>
            <span className="separator">›</span>
            <span className="breadcrumb-item">{selectedCategory.name}</span>
          </>
        )}
        {selectedCapability && (
          <>
            <span className="separator">›</span>
            <span className="breadcrumb-item">{selectedCapability.name}</span>
          </>
        )}
        {selectedUseCase && (
          <>
            <span className="separator">›</span>
            <span className="breadcrumb-item">{selectedUseCase.name}</span>
          </>
        )}
      </div>

      {selectedDomain && !selectedCategory && (
        <div className="domain-view">
          <h2>{selectedDomain.name}</h2>
          <p className="description">{selectedDomain.description}</p>
          
          <div className="thinking-lens">
            <h4>🎯 Thinking Lens</h4>
            <p>{selectedDomain.thinking_lens}</p>
          </div>

          <div className="skill-ladder">
            <h4>📊 Skill Ladder Mapping</h4>
            <div className="skill-levels">
              <div className="skill-level">
                <strong>Novice:</strong> {selectedDomain.skill_ladder_mapping.novice}
              </div>
              <div className="skill-level">
                <strong>Competent:</strong> {selectedDomain.skill_ladder_mapping.competent}
              </div>
              <div className="skill-level">
                <strong>Proficient:</strong> {selectedDomain.skill_ladder_mapping.proficient}
              </div>
            </div>
          </div>

          <div className="mental-models">
            <h4>🧠 Mental Models</h4>
            <div className="model-tags">
              {selectedDomain.mental_models.map((model, idx) => (
                <span key={idx} className="model-tag">{model}</span>
              ))}
            </div>
          </div>

          <h3>Categories ({selectedDomain.categories.length})</h3>
          <div className="category-list">
            {selectedDomain.categories.map((category) => (
              <div key={category.id} className="category-card" onClick={() => handleCategoryClick(category)}>
                <h4>{category.name}</h4>
                <p>{category.description}</p>
                <div className="capability-count">
                  {category.capabilities.length} capabilities
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory && !selectedCapability && (
        <div className="category-view">
          <h2>{selectedCategory.name}</h2>
          <p className="description">{selectedCategory.description}</p>

          {selectedCategory.cognitive_toolkit && (
            <div className="cognitive-toolkit">
              <h4>🛠️ Cognitive Toolkit</h4>
              <div className="toolkit-tags">
                {selectedCategory.cognitive_toolkit.map((tool, idx) => (
                  <span key={idx} className="toolkit-tag">{tool}</span>
                ))}
              </div>
            </div>
          )}

          {selectedCategory.cognitive_load_analysis && (
            <div className="cognitive-load">
              <h4>⚖️ Cognitive Load Analysis</h4>
              <p>{selectedCategory.cognitive_load_analysis}</p>
            </div>
          )}

          {selectedCategory.support_strategies && (
            <div className="support-strategies">
              <h4>💡 Support Strategies</h4>
              <p>{selectedCategory.support_strategies}</p>
            </div>
          )}

          <h3>Capabilities ({selectedCategory.capabilities.length})</h3>
          <div className="capability-list">
            {selectedCategory.capabilities.map((capability) => (
              <div key={capability.id} className="capability-card" onClick={() => handleCapabilityClick(capability)}>
                <h4>{capability.name}</h4>
                <p><strong>What it is:</strong> {capability.what_it_is}</p>
                <p><strong>When to use:</strong> {capability.when_to_use}</p>
                <div className="use-case-count">
                  {capability.use_cases.length} use cases
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCapability && !selectedUseCase && (
        <div className="capability-view">
          <h2>{selectedCapability.name}</h2>
          <div className="capability-details">
            <div className="detail-section">
              <h4>What it is</h4>
              <p>{selectedCapability.what_it_is}</p>
            </div>
            <div className="detail-section">
              <h4>When to use</h4>
              <p>{selectedCapability.when_to_use}</p>
            </div>
          </div>

          {selectedCapability.cognitive_skills && (
            <div className="cognitive-skills">
              <h4>🧩 Cognitive Skills Required</h4>
              {selectedCapability.cognitive_skills.map((skillLevel, idx) => (
                <div key={idx} className="skill-level-group">
                  <strong>{skillLevel.level}:</strong>
                  <ul>
                    {skillLevel.skills.map((skill, sidx) => (
                      <li key={sidx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {selectedCapability.thinking_prompts && (
            <div className="thinking-prompts">
              <h4>💭 Thinking Prompts</h4>
              <ul>
                {selectedCapability.thinking_prompts.map((prompt, idx) => (
                  <li key={idx}>{prompt}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedCapability.common_pitfalls && (
            <div className="common-pitfalls">
              <h4>⚠️ Common Pitfalls</h4>
              <ul>
                {selectedCapability.common_pitfalls.map((pitfall, idx) => (
                  <li key={idx}>{pitfall}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedCapability.metacognitive_checkins && (
            <div className="metacognitive-checkins">
              <h4>✅ Metacognitive Check-ins</h4>
              <ul>
                {selectedCapability.metacognitive_checkins.map((checkin, idx) => (
                  <li key={idx}>{checkin}</li>
                ))}
              </ul>
            </div>
          )}

          <h3>Use Cases ({selectedCapability.use_cases.length})</h3>
          <div className="use-case-list">
            {selectedCapability.use_cases.map((useCase) => (
              <div key={useCase.id} className="use-case-card" onClick={() => handleUseCaseClick(useCase)}>
                <h4>{useCase.name}</h4>
                <p>{useCase.description}</p>
                {useCase.cognitive_load_rating && (
                  <span className={`load-badge ${useCase.cognitive_load_rating}`}>
                    {useCase.cognitive_load_rating} cognitive load
                  </span>
                )}
                <div className="prompt-count">
                  {useCase.example_prompts?.length || 0} example prompts
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedUseCase && (
        <div className="use-case-view">
          <h2>{selectedUseCase.name}</h2>
          <p className="description">{selectedUseCase.description}</p>

          {selectedUseCase.cognitive_load_rating && (
            <div className="load-indicator">
              <strong>Cognitive Load:</strong>
              <span className={`load-badge ${selectedUseCase.cognitive_load_rating}`}>
                {selectedUseCase.cognitive_load_rating}
              </span>
            </div>
          )}

          {selectedUseCase.zpd_guidance && (
            <div className="zpd-guidance">
              <h4>🎯 Zone of Proximal Development Guidance</h4>
              <p>{selectedUseCase.zpd_guidance}</p>
            </div>
          )}

          {selectedUseCase.thinking_steps && (
            <div className="thinking-steps">
              <h4>🪜 Thinking Steps</h4>
              <ol>
                {selectedUseCase.thinking_steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {selectedUseCase.example_prompts && selectedUseCase.example_prompts.length > 0 && (
            <div className="example-prompts">
              <h4>📝 Example Prompts ({selectedUseCase.example_prompts.length})</h4>
              <div className="prompt-list">
                {selectedUseCase.example_prompts.map((prompt, idx) => (
                  <div key={idx} className="prompt-item">
                    <span className="prompt-number">{idx + 1}</span>
                    <span className="prompt-text">"{prompt}"</span>
                    <button className="copy-btn" onClick={(e) => {
                      e.stopPropagation()
                      navigator.clipboard.writeText(prompt)
                    }}>
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Taxonomy

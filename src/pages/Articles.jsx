import { useState, useEffect } from 'react'
import './Articles.css'
import articlesData from '../data/articles.json'

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [articleContent, setArticleContent] = useState('')
  const [loading, setLoading] = useState(false)

  const loadArticle = async (article) => {
    setLoading(true)
    setSelectedArticle(article)
    
    try {
      // Fetch the markdown file
      const response = await fetch(article.source_file)
      const text = await response.text()
      setArticleContent(text)
    } catch (error) {
      console.error('Error loading article:', error)
      setArticleContent('# Error Loading Article\n\nSorry, this article could not be loaded.')
    } finally {
      setLoading(false)
    }
  }

  // Simple markdown to HTML converter for basic formatting
  const renderMarkdown = (markdown) => {
    if (!markdown) return ''
    
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p>')
      // Line breaks
      .replace(/\n/g, '<br>')
    
    return `<p>${html}</p>`
  }

  if (selectedArticle && articleContent) {
    return (
      <div className="page articles article-view">
        <button className="back-button" onClick={() => setSelectedArticle(null)}>
          ← Back to Articles
        </button>
        <article className="article-content">
          {loading ? (
            <p>Loading article...</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(articleContent) }} />
          )}
        </article>
        <div className="article-footer">
          <p><strong>Published:</strong> {selectedArticle.published_date}</p>
          <p><strong>Word Count:</strong> {selectedArticle.word_count.toLocaleString()}</p>
          <p><strong>Topics:</strong> {selectedArticle.topics.join(', ')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page articles">
      <h1>Investigative Articles</h1>
      <p className="section-intro">
        Deep-dive investigative journalism exploring AI literacy, cognitive skills, and the future of human-AI collaboration.
        All articles written in serious investigative journalism style with evidence-based analysis.
      </p>
      
      <div className="articles-grid">
        {articlesData.articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-header">
              <h2>{article.title}</h2>
              <span className="article-meta">{article.word_count.toLocaleString()} words • {article.published_date}</span>
            </div>
            <p className="article-summary">{article.summary}</p>
            <div className="article-topics">
              {article.topics.slice(0, 3).map((topic, idx) => (
                <span key={idx} className="topic-tag">{topic}</span>
              ))}
            </div>
            <button 
              className="read-article-btn"
              onClick={() => loadArticle(article)}
            >
              Read Article →
            </button>
          </div>
        ))}
      </div>

      <div className="articles-stats">
        <h3>About These Articles</h3>
        <p>
          <strong>{articlesData.total_articles} articles</strong> • 
          <strong> {articlesData.total_word_count.toLocaleString()} total words</strong> • 
          Created through OpenClaw orchestration (Phase 8: Content Creation)
        </p>
        <p className="articles-note">{articlesData.note}</p>
      </div>
    </div>
  )
}

export default Articles

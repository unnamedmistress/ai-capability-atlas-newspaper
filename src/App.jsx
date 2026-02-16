import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './pages/Home'
import Taxonomy from './pages/Taxonomy'
import DecisionEngine from './pages/DecisionEngine'
import DecompositionLab from './pages/DecompositionLab'
import CognitiveModel from './pages/CognitiveModel'
import FieldExperiments from './pages/FieldExperiments'
import Articles from './pages/Articles'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taxonomy" element={<Taxonomy />} />
        <Route path="/decision-engine" element={<DecisionEngine />} />
        <Route path="/decomposition-lab" element={<DecompositionLab />} />
        <Route path="/cognitive-model" element={<CognitiveModel />} />
        <Route path="/field-experiments" element={<FieldExperiments />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Layout>
  )
}

export default App

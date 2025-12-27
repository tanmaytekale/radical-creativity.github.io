import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gramophone from './components/Gramophone';
import Home from './pages/Home';
import TheEmergence from './pages/TheEmergence';
import IntelligenceSingularity from './pages/IntelligenceSingularity';
import CollapseOfCapitalism from './pages/CollapseOfCapitalism';
import styles from './App.module.css';

function App() {
  return (
    /* Add the basename property here */
    <Router basename="/radical-creativity.github.io">
      <div className={styles.appWrapper}>
        {/* Gramophone persists OUTSIDE the Routes */}
        <Gramophone />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-emergence" element={<TheEmergence />} />
          <Route path="/intelligence-singularity" element={<IntelligenceSingularity />} />
          <Route path="/collapse-of-capitalism" element={<CollapseOfCapitalism />} />
        </Routes>
      </div>
    </Router>
  );
}

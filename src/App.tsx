import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gramophone from './components/Gramophone';
import Home from './pages/Home';
import TheEmergence from './pages/TheEmergence';
import IntelligenceSingularity from './pages/IntelligenceSingularity';
import CollapseOfCapitalism from './pages/CollapseOfCapitalism';
import styles from './App.module.css';

function App() {
  return (
<<<<<<< HEAD
    <Router basename={import.meta.env.BASE_URL}>
=======
    /* Add the basename property here */
    <Router basename="/radical-creativity.github.io">
>>>>>>> bb24cb6ad46c3e6eb8e65bc1af29e5ee340fbaf6
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

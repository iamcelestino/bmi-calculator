import Recomendations from './components/Recomendations'
import BmiLimitations from './components/BmiLimitations'
import './App.css'
import ResultMeans from './components/ResultMeans'


function App() {
  return (
    <>
      <ResultMeans />
      <div>
        <Recomendations />
      </div>
      <section>
        <div>
          <BmiLimitations />
        </div>
      </section>
    </>
  )
}

export default App

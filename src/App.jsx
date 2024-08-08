import Recomendations from './components/Recomendations'
import BmiLimitations from './components/BmiLimitations'
import './App.css'


function App() {
  return (
    <>
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

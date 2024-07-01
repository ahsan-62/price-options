
import './App.css'
import ChartShow from './components/ChartShow/ChartShow'
import Navbar from './components/Navbar/Navbar'
import Prices from './components/Prices/Prices'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
    <main>
      <Prices></Prices>
      <ChartShow></ChartShow>
    </main>
    </>
  )
}

export default App

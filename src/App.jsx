
import './App.css'
import ChartShow from './components/ChartShow/ChartShow'
import Navbar from './components/Navbar/Navbar'
import Prices from './components/Prices/Prices'
import Phones from './components/Phones/Phones'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
    <main>
      <Prices></Prices>
      <ChartShow></ChartShow>
      <Phones> </Phones>
    </main>
    </>
  )
}

export default App

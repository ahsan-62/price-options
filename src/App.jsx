
import './App.css'
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
    </main>
    </>
  )
}

export default App

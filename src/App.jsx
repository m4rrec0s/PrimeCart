import './styles/App.css'
import Header from './components/header'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header></Header>
      <div className='container-center'>
        <Home />
      </div>
    </>
  )
}

export default App

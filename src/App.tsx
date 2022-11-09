import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Home} from './pages/Home'
import {Store} from './pages/Store'
import {About} from './pages/About'
import {Navbar} from "./components/Navbar"
import {Checkout} from "./pages/Checkout";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <Container>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/store' element={<Store/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
            </Container>
        </>
    )
}

export default App

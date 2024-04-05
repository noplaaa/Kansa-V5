import "./index.css"
// import React from 'react'
import Login from './views/login/index'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./views/user/dashboard"

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App

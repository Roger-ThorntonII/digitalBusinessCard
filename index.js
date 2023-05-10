import React from "react"
import ReactDOM from 'react-dom'
import Photo from './components/Photo.js'
import TopContainer from "./components/TopContainer"
import Footer from './components/Footer.js'
import Button from './components/Button.js'
import Main from "./components/Main"






function App() {
    return (
        <div className="container">
            <Photo/>
            <TopContainer />
            <Button />
            <Main />
            <Footer/>
        </div>
    )
    
}
ReactDOM.render(<App/>, document.getElementById('root'))
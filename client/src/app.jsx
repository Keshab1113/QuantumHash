import { useState } from 'preact/hooks'
import './app.css'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Innovation from './components/Innovation/Innovation'
import Intro from './components/Intro/Intro'
import Footer from './components/Footer/Footer'

export function App() {

  return (
    <>
    <Header/>
    <Landing/>
    <Innovation/>
    <Intro/>
    <Footer/>
    </>
  )
}

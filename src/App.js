import React from 'react'
import './App.css'
import GradientBackground from './components/GradientBackground'
import CardDetailsView from './components/CardDetailsView'
import CardCvcView from './components/CardCvcView'
import CardInfoForm from './components/CardInfoForm'

function App() {
  return (
    <>
    <GradientBackground />
    <CardDetailsView />
    <CardCvcView />
    <CardInfoForm />
    </>
  )
}

export default App

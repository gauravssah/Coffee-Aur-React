import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {

  const tagsObj = {
    winters: "winter",
    travels: "travel",
    photographys: "photography",
    Mountainss: "Mountains",
    Beachess: "Beaches",
    Wildlifes: "Wildlife"
  }

  return (
    <>
      <h1>Welcome To TailwindCss with Props</h1>
      <Card userName="GauravsSah" tags={tagsObj} />
      <Card userName="Sah" tags={tagsObj} />
    </>
  )
}

export default App;

// 3.48

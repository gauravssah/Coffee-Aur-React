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
      {/* <Card userName="GauravsSah" tags={tagsObj} /> */}
      <Card imgUrl="https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg?auto=compress&cs=tinysrgb&w=600" userName="GauravsSah" tag1="winter" tag2="Summer" tag3="Travel" />

      <Card imgUrl="https://images.pexels.com/photos/3998365/pexels-photo-3998365.png?auto=compress&cs=tinysrgb&w=600" userName="GauravsSah" tag1="fun" tag2="time" tag3="Travel" />

      <Card imgUrl="https://images.pexels.com/photos/1133502/pexels-photo-1133502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" userName="GauravsSah" tag1="fun" tag2="time" tag3="Travel" />

    </>
  )
}

export default App;

// 3.48

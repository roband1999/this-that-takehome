import { useState } from 'react'
import { ApiProvider } from './context/ApiContext'

import './App.css'
import SuggestionDropDown from './components/SuggestionDropDown'

function App() {

  return (
    <>
      <h1>MARVEL EMERGENCY CONTACTS</h1>
      <ApiProvider>
        <SuggestionDropDown />
      </ApiProvider>
    </>
  )
}

export default App

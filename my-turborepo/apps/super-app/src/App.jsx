import { useState } from 'react'
import { ApiProvider } from './context/ApiContext'

import './App.css'

function App() {

  return (
    <ApiProvider>
      <SuggestionDropDown />
    </ApiProvider>
  )
}

export default App

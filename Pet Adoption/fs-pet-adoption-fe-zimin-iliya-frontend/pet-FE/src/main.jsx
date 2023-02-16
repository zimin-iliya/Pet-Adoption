import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserContextProvider from './Context/Usercontext'
import PetContextProvider from './Context/PetContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <UserContextProvider>
      <PetContextProvider>
      <App />
      </PetContextProvider>
    </UserContextProvider>
  // </React.StrictMode>,
)

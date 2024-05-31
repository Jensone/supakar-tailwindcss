import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './output.css' // On importe le fichier Tailwind CSS final
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

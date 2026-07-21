import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const element = (
  <a href="https://bharatpg.site" target='_blank'>Visit Best Pg in KGP</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://bharatpg.site', target: '_blank'},
  'click Me to visit'
)

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)

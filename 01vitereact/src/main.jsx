import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>Aryan Wankhede</div>
  )
}


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
)

createRoot(document.getElementById('root')).render(
  // MyApp() Aise hota hain but nhi karna
  reactElement
)

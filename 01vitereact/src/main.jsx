import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target : "_blank"
//   },
//   children : 'Click me to visit google'
// }

const anotherElement = (
  <a href="http://www.google.com" target="_blank">Visit google</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target : '_blank' },
  'click me to visit google ',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

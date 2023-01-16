import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    Hello, I'm Meggy.
  </div>
`

setupCounter(document.querySelector('#counter'))

import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <h3>
    Hello, I'm Meggy.Nice to meet you, and wish you a good day!🐣
  </h3>
`;

setupCounter(document.querySelector('#counter'));

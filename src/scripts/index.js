/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/style.scss';
import './views/slide-images/slideImg';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

import App from './views/app';

const app = new App({
  button: document.querySelector('#btnHamburger'),
  drawer: document.querySelector('#drawerNav'),
  content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const dom = require('dominant');

const HelloWorld = () => dom.el('h1', { class: 'container' }, ['Hello World, Dominant!']);

document.head.append(dom.el('link', { rel: 'stylesheet', href: '/src/App.css' }));
document.body.append(HelloWorld());

window.dom = dom;

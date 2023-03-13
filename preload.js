/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */


window.addEventListener('DOMContentLoaded', () => {
  const dao = require('./dao')
  const {contextBridge} = require('electron')

  const getUtilisateurs = () => {
      return dao.getUtilisateurs();
  }

contextBridge.exposeInMainWorld("api", {
    getUtilisateurs: getUtilisateurs
})

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */


window.addEventListener('DOMContentLoaded', async () => {

  const anime = require('animejs');
  const db = require('./db')
  const { contextBridge } = require('electron')
  var current = null;

  document.querySelector('#identifiant').addEventListener('focus', function (e) {
    if (current) current.pause();
    current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: 0,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '240 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  });
  document.querySelector('#password').addEventListener('focus', function (e) {
    if (current) current.pause();
    current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: -336,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '240 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  });
  document.querySelector('#submit').addEventListener('focus',async function (e) {

    //récupération des inputs du formulaire
    const identifiantInput = document.querySelector('#identifiant');
    const passwordInput = document.querySelector('#password');

    const identifiantInputValue = identifiantInput.value;
    const passwordInputValue = passwordInput.value;

    if (!identifiantInputValue) {
      identifiantInput.placeholder = "identifiant invalide";
    } 
    else {
      identifiantInput.placeholder = "";
    }

    if (!passwordInputValue) {
      passwordInput.placeholder = "mot de passe invalide";
    } 
    else {
      passwordInput.placeholder = "";
    }
    
    if(identifiantInputValue != "" && passwordInputValue != "")
    {
        var users = await db.getUtilisateurs();
        if(users.find( s => s[1] == identifiantInputValue && s[3] == passwordInputValue))
        {
          console.log("Connected")
        }
    }


    if (current) current.pause();
    current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: -730,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '530 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  });

  const getUtilisateurs = () => {
    return db.getUtilisateurs();
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




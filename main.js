// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      nodeIntegration: true
    },
    icon: path.join(__dirname, '1666012731609.png' )
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  mainWindow.setFullScreen(true)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


// Récupère le bouton "Accéder au menu"
//const menuButton = document.getElementById('submit');

// Ajoute un écouteur d'événement "click" sur le bouton
//menuButton.addEventListener('click', (event) => {
  // Empêche la soumission du formulaire par défaut
  //event.preventDefault();

  // Ferme la fenêtre actuelle
  //const { remote } = require('electron');
  //const window = remote.getCurrentWindow();
  //window.close();

  // Charge la page "menu.html" dans une nouvelle fenêtre
  //const { BrowserWindow } = require('electron');
  //const win = new BrowserWindow({
    //width: 800,
    //height: 600,
    //webPreferences: {
      //nodeIntegration: true
    //}
  //});
  //win.loadFile('menu.html');
//});


//function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.currentTarget.appendChild(document.getElementById(data));
// }

// function createTask(){
//   var x = document.getElementById("inprogress");
//   var y = document.getElementById("done");
//   var z = document.getElementById("create-new-task-block");
//   if (x.style.display === "none") {
//       x.style.display = "block";
//       y.style.display = "block";
//       z.style.display = "none";
//   } else {
//       x.style.display = "none";
//       y.style.display = "none";
//       z.style.display = "flex";
//   }
// }

// function saveTask(){
//   var saveButton = document.getElementById("save-button");
//   var editButton = document.getElementById("edit-button");
//   if (saveButton.style.display === "none") {
//        saveButton.style.display = "block";
//        editButton.style.display = "none";
//    } else{
//        saveButton.style.display = "none";
//        editButton.style.display = "block";
//    }

//   var todo = document.getElementById("todo");
//   var taskName = document.getElementById("task-name").value;
//   todo.innerHTML += `
//   <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
//       <span>${taskName}</span>
//   </div>
//   `
// }

// function editTask(){
//   var saveButton = document.getElementById("save-button");
//   var editButton = document.getElementById("edit-button");
//   if (saveButton.style.display === "none") {
//       saveButton.style.display = "block";
//       editButton.style.display = "none";
//   } else{
//       saveButton.style.display = "none";
//       editButton.style.display = "block";
//   }
//}

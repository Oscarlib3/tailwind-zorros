/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from './lazy'
const minimo = 1;
const maximo = 122;

const random = () => Math.floor(Math.random()*(maximo - minimo)) + minimo;
const createImagen = () =>{
    const container = document.createElement("div");
    const imagen = document.createElement('img');
    imagen.className = "mx-auto p-3" ;
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
    container.appendChild(imagen)
    return container;
}

const mountNode = document.getElementById("images");

const botonImagen = document.getElementById("botonimagenes");

const addImage = () =>{
    const newImage = createImagen();
    mountNode.appendChild(newImage);
    registerImage(newImage);
};
botonImagen.addEventListener("click", addImage);
//console.log("hola mundo");

/**Ejemplo de peticion asíncrona */
function imAsync(){
  return "Hola promesa";
}

let message = setTimeout(imAsync, 2000);

console.log(message);

//CREAR MI PRIMERA PROMESA

//executor: function que recibe la promesa
let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve("hola promesa");
    reject(new Error("Hubo un error")); 
  }, 2000)
});

promise.then(console.log).catch(console.log);


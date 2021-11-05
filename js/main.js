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
    if(confirm("¿Esta promesa se cumplió?"))
      return resolve("hola promesa");
    return reject(new Error("Hubo un error")); 
  }, 2000)
});

//promise.then(console.log).catch(console.log);

//RESPONDER A UNA PROMESA

promise.then(function(resultado){
  console.log(resultado)
}).catch(function(error){
  console.log("Algo salió mal");
  console.log(error);
})
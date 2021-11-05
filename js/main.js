//console.log("hola mundo");

/**Ejemplo de peticion asíncrona */
function imAsync(){
  return "Hola promesa";
}

let message = setTimeout(imAsync, 2000);

console.log(message);

//CREAR MI PRIMERA PROMESA

//executor: function que recibe la promesa
/*
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

//OTRAS FORMAS DE CREAR PROMESAS

function dummy(){
  if(Math.floor(Date.now()/1000) % 2 == 0)
    return Promise.resolve("hola mundo");
  return Promise.reject("Error");
}

dummy().then(console.log).catch(console.log);
*/

//PROMESAS CON AJAX

function GET(url){
  return new Promise(function(resolve, reject){
    let ajaxCall = new XMLHttpRequest();

    ajaxCall.open('GET', url);

    ajaxCall.onload = function(){
      if(ajaxCall.status == 200) return resolve(ajaxCall.response);

      reject(Error(ajaxCall.status));
    };

    ajaxCall.onerror = function(error){
      reject(error);
    }

    ajaxCall.send();
  })
}

function getUserInfo(username){
  return GET(`https://api.github.com/users/${username}`);
}

function getRepos(repos_url){
  return GET(repos_url);
}

//Promesas anidadas

let getUserPromise = getUserInfo("codigofacilito");

let getReposPromise = getUserInfo("codigofacilito").then( response => {
  return getRepos(JSON.parse(response).repos_url);
}).catch(console.log);

getReposPromise.then(console.log).catch(console.log);

/*const myH1 = document.querySelector("h1");

try {
  if (!myH1) {
    throw new Error("no h1");
  }
  console.log(`there is an h1`);
} catch (err) {
  console.log(err);
}

//

/*try {
if (myH1.innerText !=== "Friyay") {
throw new Error("h1 inner text was not Friyay");
}
console.log("inner text was Friyay");  
} catch (err) { 
    console.log(err)
}
*/

const testP = document.querySelector("p");

try {
  if (!testP) {
    throw new Error("pity the fool");
  }
  console.log("its all gravy baby");
} catch (err) {
  console.log(err);
}

try {
  if (!p.classList.contains("breakfast")) {
    throw new Error("there is no breakfast on p");
  }
  console.log("its all gravy baby");
} catch (err) {
  console.log(err);
}

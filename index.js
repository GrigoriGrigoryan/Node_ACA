const obj = {
    name: "Jhon",
    country: {
     name: "Armenia",
     code: 374
    }
  };

let reseveObject = {}

  function printKeys(object, resObj) {
    for (let key in object) {

        if (typeof object[key] !== 'object' && !Array.isArray(object[key]) && object[key] !== null) {
            resObj[object[key]] = key
        }
        if(typeof object[key] === 'object' ) {
           resObj[key] =  printKeys(object[key], {})
        }
    }
    return resObj;
}

 console.log( printKeys(obj, reseveObject)); 
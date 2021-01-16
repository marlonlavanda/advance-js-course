//
// function taggedTemplate(strings, value) {
//   console.log(strings, value);
// }

// taggedTemplate`Hola mundo ${'mundo'} ${'!'}`

//rest operator

function taggedTemplate(strings, ...dynamicValues) {
  // console.log(strings, dynamicValues);
  let newContent = ''
  strings.forEach( (string, index) => {
    // let strong = ''
    // if (dynamicValues[index]){
    //   strong = `<strong>${dynamicValues[index]}</strong>`;

    // Condicional utilizando ternarios 
    const strong = dynamicValues[index] ? `<strong>${dynamicValues[index]}</strong>` : ''
    // console.log(dynamicValues[index]);
    // console.log(string);
  // }

  // newContent = newContent + string + strong

  // Otra forma de devolver el contemnido de la variable newConten 
  newContent += `${string} ${strong}`

  })
  
  return `<p>${newContent}</p>`;
  // console.log(newContent);
}

const message = taggedTemplate`El ${'trabajo duro'} supera al ${'talento natural'}`
document.body.innerHTML =  message
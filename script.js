/* F - Uso do id e classes (aplicado ao javascript)*/
const totalCars =  document.getElementById('total-cars');
totalCars.innerText = 5;

const allContainer = document.querySelectorAll('.container');
allContainer.forEach((container) => {
  container.style.borderBottom = '1px solid red'
  container.style.borderTop = '1px solid blue'
})

/* G - scope */
function scope() {
  if( typeof totalCars !== undefined ){
    console.log('Tenho acesso ao totalCars pois foi declarado globalmente')
  } 
  let Value = 500;
}

typeof Value !== 'undefined' 
  ? console.log("Tenho acesso a letValue")
  : console.log("Não tenho acesso a letValue pois foi declarado no escopo de função scope")

scope();


/* H - função addSix */
function fn(number) {
  return (value) => number + value;
}

var addSix = fn(6)
console.log(addSix(10))
console.log(addSix(21))

/* I - função duplicate */
function duplicate(arr) {
  return [...arr, ...arr]
}

array = [1,2,3,4,5]
console.log(duplicate(array))

/* J - converter texto em objeto */
const stringObject = document.getElementById('string-object');
const stringResult = document.getElementById('string-result');
const user = JSON.parse(stringObject.innerText);
stringResult.innerText = `Meu nome é ${user.name}. Tenho ${user.age} anos e meço ${user.height}m`
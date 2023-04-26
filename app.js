/* Caja principal */
let centralBox = document.querySelector('#centralBox')

/* capturando las propiedades de los input range */
let inputHorizontalOffset = document.querySelector('#horizontalOffset')
let inputVerticalOffset = document.querySelector('#verticalOffset')
let inputBlurRadius = document.querySelector('#blur')
let inputSpreadRadius = document.querySelector('#spread')
let inputWidth = document.querySelector('#width')
let inputHeight = document.querySelector('#height')
let inputBorderRadius = document.querySelector('#border')
let inputShadowColor = document.querySelector('#shadowColor')
let inputBoxColor = document.querySelector('#boxColor')

//* COPY 
const copyBtn = document.querySelector('#copy')
const textToCopy = document.querySelector('#shadowStyle')



inputHorizontalOffset.value = '0';
inputVerticalOffset.value = '0';
inputBlurRadius.value = '0';
inputSpreadRadius.value = '0';
inputWidth.value = '150px';
inputHeight.value = '150px';
inputBorderRadius.value = '0';
/* document.getElementById("myDIV").style.boxShadow = "10px 20px 30px blue";  => línea para modificar los valores de las propiedades del box shadow*/
let hShadow = 0
let vShadow = 0
let blurRadius = 0
let sRadius = 0
let shadowColor = 'black';




hShadow = 0
vShadow = 0
blurRadius = 0
sRadius = 0
shadowColor = 'black';



/* centralBox.style.boxShadow = `${hShadow}px ${vShadow}px ${blur}px ${sRadius}px ${shadowColor}`;  */

/* event => horizontal offset */
inputHorizontalOffset.addEventListener('input', (e) => {
  hShadow = e.target.value;
  /* console.log(hShadow, vShadow, blurRadius, sRadius, shadowColor) */
  centralBox.style.boxShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`
  shadowStyle.textContent = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px black`;
})

/* event => vertical offset */
inputVerticalOffset.addEventListener('input', (e) => {
  vShadow = e.target.value;

  centralBox.style.boxShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;
  shadowStyle.textContent = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;
})
/* event => blur radius */
inputBlurRadius.addEventListener('input', (e) => {
  blurRadius = e.target.value;

  centralBox.style.boxShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;

  shadowStyle.textContent = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;
})
/* event => spread radius */
inputSpreadRadius.addEventListener('input', (e) => {
  sRadius = e.target.value;

  centralBox.style.boxShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;

  shadowStyle.textContent = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;
})


/* event => shadow color */
inputShadowColor.addEventListener('input', (e) => {
  shadowColor = e.target.value;
  console.log(shadowColor)
  centralBox.style.boxShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;
  shadowStyle.textContent = `${hShadow}px ${vShadow}px ${blurRadius}px ${sRadius}px ${shadowColor}`;
}, false)




/* Control de los eventos para manipular las propiedades del BOX */
inputHeight.addEventListener('input', (e) => {
  centralBox.style.height = `${e.target.value}px`;
})

inputWidth.addEventListener('input', (e) => {
  centralBox.style.width = `${e.target.value}px`;
})

inputBorderRadius.addEventListener('input', (e) => {
  centralBox.style.borderRadius = `${e.target.value}px`;
})

inputBoxColor.addEventListener('change', (e) => {
  centralBox.style.backgroundColor = e.target.value;
}, false)



console.log('asdasd',textToCopy);
//? COPY box shadow
copyBtn.addEventListener('click', function () {
  
  console.log('asdasd',textToCopy);
  navigator.clipboard.writeText(textToCopy.textContent)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
})
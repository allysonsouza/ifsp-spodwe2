/**
 * Recebe uma cor de fundo (hexadecimal, colorname, etc.)
 * e define a cor de fundo do body (body.style.background).
 *  
 */
function trocarBackground(event) {
    console.log(event.target.value);
    const body = document.querySelector('body');

    body.style.background = event.target.value;
}

/**
 * Recebe a url de uma imagem e troca o atributo src dos logotipos,
 * tanto no cabeçalho quanto no rodapé.
 * 
 * @param {string} logoSrc 
 */
function trocarLogo(logoSrc) {
    const headerLogo = document.querySelector('header .logo');
    const footerLogo = document.querySelector('footer .logo');
    headerLogo.setAttribute('src', logoSrc);
    footerLogo.setAttribute('src', logoSrc);
}

/**
 * Recebe uma string com o font-family e aplica-o ao corpo de texto
 * e títulos da página.
 * 
 * @param {string} fontFamily 
 */
function trocarFontFamily(fontFamily) {
    const fontSelect = document.querySelector("#font-family");
    const body = document.querySelector('body');

    body.style.fontFamily = fontSelect.value;
}

/**
 * Recebe uma string com o tamanho da fonte para aplicar ao corpo de texto
 * e títulos da página.
 * 
 * @param {string} fontSize 
 */
function trocarFontSize(fontSize) {
    const body = document.querySelector('body');
    
    // Método para definir variáveis CSS
    body.style.setProperty('--size', fontSize);
}



/**
 * Eventos
 */

// Armazena referência ao <input id="bg-color" />
const inputBgColor = document.getElementById('bg-color');

inputBgColor.addEventListener("change", trocarBackground);
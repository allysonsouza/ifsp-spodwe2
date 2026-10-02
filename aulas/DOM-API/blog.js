export const trocarBackground = (bgColor) => {
    const body = document.querySelector('body');
    body.style.background = bgColor;
};
    
export const trocarLogo = (logoSrc) => {
        const headerLogo = document.querySelector('header .logo');
        const footerLogo = document.querySelector('footer .logo');
        headerLogo.setAttribute('src', logoSrc);
        footerLogo.setAttribute('src', logoSrc);
};


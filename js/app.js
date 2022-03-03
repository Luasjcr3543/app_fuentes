
listeners();

function listeners() {

    document.querySelector('.fa-bars').addEventListener('click', (e) => {
        document.querySelector('.menu').classList.remove('ocultar');
        document.querySelector('.menu').animate([
        // keyframes
        { transform: 'translateX(-300px)' },
        { transform: 'translateX(0px)' },
    ], {
        // timing options
        duration: 250,
        iterations: 1
    });
    });
    document.querySelector('.fa-xmark').addEventListener('click', () => {
        document.querySelector('.menu').classList.add('ocultar');
         document.querySelector('.menu').animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-200px)' },
    ], {
        // timing options
        duration: 800,
        iterations: 1
    });
    });
    document.querySelector('main').addEventListener('click', () => {document.querySelector('.menu').classList.add('ocultar'); });

}

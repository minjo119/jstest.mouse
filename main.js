const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')


// addEventListener('load, function'(){
// })


addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeigth = targetRect.height / 2;

    document.addEventListener('mousemove', (e) => {
        const X = e.clientX;
        const y = e.clientY;
        console.log(`${X} ${y}`);

        vertical.style.transform = `translateX(${X}px)`;
        horizontal.style.transform = `translateY(${y}px)`;

        target.style.transform = `translate(${X - targetHalfWidth}px, ${y-targetHalfHeigth}px)`;
        tag.style.transform = `translate(${X}px, ${y}px)`;
        // tag.innerHTML = `${X}px ${y}px`;



    });


})
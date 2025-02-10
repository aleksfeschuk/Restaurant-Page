// utils.js
export function updateContent(contentFunction) {
    const content = document.getElementById('content');
    const header = content.querySelector('h1');

    if(header) {
        header.classList.remove('typing');
    }

    content.classList.add('fade-out');

    setTimeout(() => {
        content.innerHTML = '';
        content.appendChild(contentFunction());

        const newHeader = content.querySelector('h1');
        if (newHeader) {
            newHeader.classList.add('typing');
        }

        setTimeout(() => 
            newHeader.classList.remove('typing'), 2000);

        content.classList.remove('fade-out');
        content.classList.add('fade-in');
    }, 300);
}

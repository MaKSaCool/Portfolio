export function scrollSmooth(anchor) {
    const links = document.querySelectorAll(anchor);
    links.forEach(item => {

        item.addEventListener('click', (e) => {
            e.preventDefault();

            const blockID = item.getAttribute('href').substr(1);
            const achorItem = document.getElementById(blockID);
            const offsetPosition = achorItem.getBoundingClientRect().top - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}
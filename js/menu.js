export default class Menu {
    constructor(openBtn, menu, closeBtn, overlay) {
        this.openBtn = document.querySelector(openBtn);
        this.closeBtn = document.querySelector(closeBtn);
        this.menu = document.querySelector(menu);
        this.overlay = document.querySelector(overlay);
    }
    closeModal() {
        this.menu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    init() {

        this.openBtn.addEventListener('click', () => {
            this.menu.classList.add('active');
            document.body.style.overflow = 'hidden';
        
        });
        
        this.closeBtn.addEventListener('click', () => {
            this.closeModal();
        });

        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay ) {
                this.closeModal();
            }
        });

        this.menu.addEventListener('click', (e) => {
            if(e.target && e.target.tagName == 'A') {
                this.closeModal();
            }
        });
    }
}
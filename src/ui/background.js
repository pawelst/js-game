export class Background {
    draw() {
        this.background = document.getElementById('stars');
        this.background.style.boxShadow = this.generateStars();
    }
     generateStars() {
        let stars = "";
        for (let i = 0; i < 300; i++) {
            let x = Math.floor(Math.random() * 2000);
            let y = Math.floor(Math.random() * 2000);
            let blur = Math.floor(Math.random() * 100) + 10;
            let spread = Math.floor(Math.random() * 10) + 1;
            stars += `${x}px ${y}px ${blur}px ${spread}px #FFF, `;
        }
        return stars.slice(0, -2);  // Remove trailing comma and space
    }
}
class MechanicalEyeEngine {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);

        this.size = 360;
        this.center = { x: 0, y: 0 };

        this.svg = null;

        this.layers = {};
    }

    init() {
        this.createSVG();
        this.createLayers();
        this.drawBaseIris();

        this.mount();

        console.log("[Engine] Steampunk Mechanical Eye Engine v0.1 initialized");
    }

    createSVG() {
        const svgNS = "http://www.w3.org/2000/svg";

        this.svg = document.createElementNS(svgNS, "svg");

        this.svg.setAttribute("viewBox", "-180 -180 360 360");
        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
    }

    createLayers() {
        const svgNS = "http://www.w3.org/2000/svg";

        const names = [
            "background",
            "rings",
            "blades",
            "iris",
            "glow"
        ];

        names.forEach(name => {
            const g = document.createElementNS(svgNS, "g");
            g.setAttribute("id", name);
            this.svg.appendChild(g);
            this.layers[name] = g;
        });
    }

    drawBaseIris() {
        const svgNS = "http://www.w3.org/2000/svg";

        const iris = document.createElementNS(svgNS, "circle");

        iris.setAttribute("cx", 0);
        iris.setAttribute("cy", 0);
        iris.setAttribute("r", 70);

        iris.setAttribute("fill", "url(#irisGradient)");
        iris.setAttribute("opacity", "0.9");

        this.layers.iris.appendChild(iris);
    }

    mount() {
        this.container.appendChild(this.svg);
    }
}

/* =========================
   BOOTSTRAP DU MOTEUR
========================= */

window.addEventListener("DOMContentLoaded", () => {
    const engine = new MechanicalEyeEngine("#eye-container");
    engine.init();
});

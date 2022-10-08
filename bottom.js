class holaMundo extends HTMLElement{
    constructor(){
        super();
    }


    connectedCallback(){
        this.innerHTML =  `<div> 
        <h1>hola ${this.name} ${this.subname}</h1>
        <p>Esto es un web component</p>
        </div>`;
        this.style.color = "orange";
        this.style.fontFamily= "sans-serif"
    }
}

window.customElements.define("hola-mundo", holaMundo)
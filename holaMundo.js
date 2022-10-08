class holaMundo extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.subname;
    }

    static get observedAttributes(){
        return ["name", "subname"];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch (nameAtr) {
            case 'name':
                this.name = newValue;
                break;
            case 'subname':
                this.subname = newValue;
                break;
        
            default:
                break;
        }
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
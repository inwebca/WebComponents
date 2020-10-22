import { LitElement, html, css } from 'lit-element';

//pour cette exemple, le helper doit utiliser le shadowDOM
//pas de  
//createRenderRoot() {
//return this;
// }

class Boite extends LitElement {

    static get properties() {
        return {
            
        };
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
            .header{
                background-color:red;
            }
          `;
    } 

    render() {
        return html`
            <div>
                <slot name="header"></slot>
                <slot name="content"></slot>
            </div>
        `;
    }

    firstUpdated() {
       
    }

   
}

customElements.define('designsystem-boite', Boite);

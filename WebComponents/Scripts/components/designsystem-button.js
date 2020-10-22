import { LitElement, html } from 'lit-element';

/**
 * Exemple bouton
 * @element designsystem-button
 *
 * @example <designsystem-button texte="test11112"></designsystem-button>
 * @example
 * // selectionner objet via javascript
 * var monBouton = document.querySelector("designsystem-button");
 *
 * @fires surClick - Retourne un objet Event1
 *
 * @attr {String} texte - Texte du bouton
 *
 */

class Button extends LitElement {

    static get properties() {
        return {
            button: { type: Object },
            texte: { reflect: true },
        };
    }

    constructor() {
        super();
        this.addEventListener('click', this.onclick);
    }

    render() {
        return html`
        <a id="designsystem-button">${this.texte}</a>
        `;
    }

    firstUpdated() {
        this.button = this.querySelector("#designsystem-button");
        $(this.button).kendoButton();
    }

    /**
    * @ignore
    * */
    createRenderRoot() {
        return this;
    }

    onclick() {
        let event = new CustomEvent('surClick', {
            detail: {
                message: 'il y a eu un click sur l\'\element'
            }
        });
        this.dispatchEvent(event);
    }

}

customElements.define('designsystem-button', Button);

import { LitElement, html } from 'lit-element';

/**
 * Voici la description du datepicker.
 * @element designsystem-datepicker
 * 
 * @example <designsystem-datepicker></designsystem-datepicker>
 * @example
 * // selectionner objet via javascript
 *  var monDatePicker = document.querySelector("designsystem-datepicker");
 *
 * @property {function} ds._fonction1 - Fonction 1
 * @property {function} ds_fonction2 - Fonction 2
 */

class DatePicker extends LitElement {

    static get properties() {
        return {
            id: { type: String },
            datepicker: { type: Object },
            datepickerKendo: {type: Object}
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <input id="designsystem-datepicker" />
        `;
    }

    firstUpdated() {
        this.datepicker = this.querySelector('#designsystem-datepicker');
        $(this.datepicker).kendoDatePicker();
        this.datepickerKendo = $(this.datepicker).data("kendoDatePicker");
    }

    /**
     @ignore
     */
    createRenderRoot() {
        return this;
    }

    element() {
        var obj = $(this.datepicker).data("kendoDatePicker");
        obj.ds = {
            fonction1: this._fonction1,
            fonction2: this._fonction2,
        };
        return obj;
    }

    _fonction1() {
        console.log("test");
    }

    _fonction2() {
        console.log("test2");
    }

}

customElements.define('designsystem-datepicker', DatePicker);

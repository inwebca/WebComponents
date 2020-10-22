import { LitElement, html } from 'lit-element';

class DesignSystemMultiSelect extends LitElement {

    static get properties() {
        return {
            multiselect: { type: Object }
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <select id="designsystem-multiselect" multiple="multiple" data-placeholder="Select attendees...">
            <option>Steven White</option>
            <option>Nancy King</option>
            <option>Nancy Davolio</option>
        </select>
        `;
    }

    firstUpdated() {
        this.multiselect = this.querySelector('#designsystem-multiselect');
        $(this.multiselect).kendoMultiSelect();
    }

    createRenderRoot() {
        return this;
    }

}

customElements.define('designsystem-multiselect', DesignSystemMultiSelect);

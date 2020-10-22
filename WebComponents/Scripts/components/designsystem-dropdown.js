/**
 * Voici la description du dropdown.
 * @element designsystem-dropdown
 * 
 * @example <designsystem-dropdown data-id="test" data-url="/api/doc"></designsystem-dropdown>
 * @example 
 * // selectionner objet via javascript
 * var monDropdown = document.querySelector("designsystem-dropdown");
 * monDropdown.exempleFunction1();
 * 
 * 
 * @attr {string} data-id - Le id
 * @attr {string} data-url - L'url appelé pour populer les options du dropdown. Si non fourni, le data sera un Array avec 
 * 
 * @property {number} obj.Id - Le id de l'option
 * @property {string} obj.Nom - Le nom de l'option
 * @property {Array.<obj>} data - Objet data dans le dropdown
 * 
 */
class DesignSystemDropdown extends HTMLElement {
    constructor() {
        super();

        //propriétés
        this._url = null;
        this._appelApiComplete = false;
        this._apiPresent = false;
        this._id = this.getAttribute("data-id");
        this._data = [
            {
                "Id": 1,
                "Nom" : "Test"
            },
            {
                "Id": 2,
                "Nom": "Test2"
            }
        ];
        //element du dom
        this._$designsystemdropdown = null;
        //shadow root
        this._root = this.attachShadow({ "mode": "open" });

    }

    connectedCallback() {
        this._root.innerHTML = `
            <style >
                .designsystem-dropdown{
                    display: block;
                    front-size:16px;
                    color: #444;
                    background-color:blue;
                    width:50%;
                    border: 1px solid #aaa;
                    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
                    border-radius: .5em;
                    background-color: #fff;
                }
            .designsystem-dropdown-1{
                    background-color:red;
                }
            .designsystem-dropdown-100{
                    width:100%;
                }
            </style>
            <select class="designsystem-dropdown"></select>
        `;
        //element du dom
        this._$designsystemdropdown = this._root.querySelector("select.designsystem-dropdown");

        //attacher les evenements
        /**
         *  @fire change - Levé lorsqu'une selection est fait
         */
        this._$designsystemdropdown.addEventListener("change", (event) => {
            this._$designsystemdropdown.classList.add("designsystem-dropdown-1");
        })
        this._$designsystemdropdown.addEventListener("obtenirData", (event) => {
            console.log("valeur1: " + event.detail.value1);
            console.log("valeur2: " + event.detail.value2);
        })
        this._$designsystemdropdown.addEventListener("agrandir", (event) => {
            this._$designsystemdropdown.classList.add("designsystem-dropdown-100");
        })

        //si le composant possèede l'attribut data-url, on appelle l'api
        if (this.getAttribute("data-url")) {
            this._url = this.getAttribute("data-url");
            this._apiPresent = true;
            this._obtenirData();
        }

        //apeller fonctions
        this._render();
    }

    _obtenirData() {
        return new Promise((res, rej) => {
            fetch(this._url)
                .then(data => data.json())
                .then((json) => {
                    this._data = json;
                    this._genererOptions();
                    res();
                })
                .catch((error) => rej(error));
        })
    }

    _render() {
        if (this._$designsystemdropdown !== null) {
            this._$designsystemdropdown.setAttribute("id", this._id);
        }
        if (!this._apiPresent) {
            this._genererOptions();
        }
    }

    _genererOptions() {

        const data = this._data;

        data.forEach(element =>
            this._$designsystemdropdown.innerHTML += "<option value='" + element.Id + "'>" + element.Nom + "</option>"
        );
        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("Attribut modifié", name, oldValue, newValue);
    }

    disconnectedCallback() {
        console.log("disconnectedCallback");
    }

    /**
    * Affiche une alerte.
    */
    exempleFunction1() {
        alert("test");
    }

    /**
    * Leve un trigger 'obtenirData'
    */
    exempleFunctionTrigger() {
        var event = new CustomEvent('obtenirData', {
            'detail': {
                "value1": 1,
                "value2": 2,
            }
        });
        this._$designsystemdropdown.dispatchEvent(event);
    }

    /**
    * Leve un trigger 'agrandir' qui ajoute une classe css au dropdown
    */
    exempleFunctionAgrandir() {
        var event = new CustomEvent('agrandir');
        this._$designsystemdropdown.dispatchEvent(event);
    }
}

window.customElements.define("designsystem-dropdown", DesignSystemDropdown);
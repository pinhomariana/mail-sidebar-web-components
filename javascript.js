const appSideBarButtonTemplate = document.createElement("template");
appSideBarButtonTemplate.innerHTML = `
<style>
.sidebar-menu__buttons {
    padding: 8px;
    border-radius: 0 20px 20px 0;
    padding-left: 30px;
    display: flex;
    gap: 20px;
}


.sidebar-menu__buttons:hover {
    background-color: #dfe0fb;
    cursor: pointer;
}
</style>

<div class="sidebar-menu__buttons">
    <slot name="icon"></slot>
    <span name="text" ></span> 
    <span class="unreadCount"></span>
</div>
`

class appSideBarButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open"});
    }    

    connectedCallback() {   
        this.shadowRoot.append(appSideBarButtonTemplate.content.cloneNode(true));

        const text = this.getAttribute("text");
        this.shadowRoot.querySelector("span").innerText = text;

        const unreadCount = this.getAttribute("unreadCount");
        this.shadowRoot.querySelector(".unreadCount").innerText = unreadCount;

        if (unreadCount > 0) {
            this.style = "font-weight: bold;"
        }

        this.addEventListener("click", function() {
            (this.style = "font-weight: bold;")
        })
    }
}

window.customElements.define("app-side-bar-button", appSideBarButton);


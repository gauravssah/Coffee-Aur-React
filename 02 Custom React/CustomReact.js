const container = document.querySelector("#root");

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children: "Click to visit google"
};

function customReact(reactElement, container) {
    const Element = document.createElement(reactElement.type);
    Element.setAttribute("href", reactElement.props.href);
    Element.setAttribute("target", reactElement.props.target);
    Element.innerHTML = reactElement.children;
    container.appendChild(Element);
};

customReact(reactElement, container);
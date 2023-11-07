export function createElement(className, element = 'div') {
    let newItem = document.createElement(element);
    newItem.classList.add(className);
    return newItem;
}
export function appendTo(where, what) {
    let item = document.querySelector(where);
    item.append(what);
    return item;
}
export function appendToObj(where, what) {
    where.append(what);
    return what;
}
export function putInnerHtml(where, what) {
    let item = where.innerHTML = what;
    return item;
}
export function putTextContent(where, what) {
    document.querySelector(where).textContent = what;
}
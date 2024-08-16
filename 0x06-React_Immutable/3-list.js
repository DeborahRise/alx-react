import { List } from "immutable";

export function getListObject(array) {
    List(array);
}

export function addElementToList(list, element) {
    return list.push(element);
}

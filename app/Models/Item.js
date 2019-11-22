import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name
  }
  get Template() {
    return `
    <dt class= "justify-content-between">${this.name}</dt>
    <i class="far fa-trash-alt" onclick="app.listController.removeItem('${this.listId}','${this.id}')" id="trashcan"></i>`
  }
}
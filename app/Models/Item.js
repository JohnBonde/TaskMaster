import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name
  }
  get Template() {
    return `
    <div class="col-12 stuff">
    <dt>${this.name}</dt>
    <i class="far fa-trash-alt" onclick="app.listController.removeItem('${this.listId}','${this.id}')" id="trashcan"></i>
    </div>`
  }
}
import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name
  }
  get Template() {
    return `
    <dt>${this.name}</dt>
    <button class="btn btn-outline btn-dark" onclick="app.listController.removeItem('${this.listId}','${this.id}')">X</button>`
  }
}
import { generateId } from "../utils.js";
import Item from "../Models/Item.js"

export default class List {
  constructor({ id = generateId(), name, item = [] }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)

    this.id = id || generateId();
    this.name = name;
    this.item = item.map(i => new Item(i));
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return `
      <div class="col-4 m-3 p-3 rounded bg-warning">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <form class="form-group" onsubmit="app.listController.addItem(event, '${this.id}')">
          <label for="item">Task</label>
          <input type="text" id="item" class="form-control" placeholder="Enter Task">
          <button type="submit" class="btn btn-danger mt-2">Submit</button>
          <button type="button" class="btn btn-dark mt-2" onclick="app.listController.removeList('${this.id}')">Delete</button>
      </form>
      </div>
      `
  }
  get TemplateItem() {
    return `
    <div class="col-4 m-3 p-3 rounded bg-warning">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <dl class="ml-5">
      ${this.itemTemplate}
      </dl>
      <form class="form-group" onsubmit="app.listController.addItem(event, '${this.id}')">
          <label for="name">Task</label>
          <input type="text" id="name" class="form-control" placeholder="Enter Task">
          <button type="submit" class="btn btn-danger mt-2">Submit</button>
          <button type="button" class="btn btn-dark mt-2" onclick="app.listController.removeList('${this.id}')">Delete</button>
      </form>
      </div>
    `
  }
  get listTemplate() {
    let template = '';
    this.name.forEach(name => {
      template += name.Template;
    });
    return template
  }
  get itemTemplate() {
    let template = '';
    this.item.forEach(item => {
      template += item.Template;
    })
    return template
  }
}

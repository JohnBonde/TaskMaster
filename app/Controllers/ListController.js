import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listsTemplate = "";
  let lists = store.Lists;
  lists.forEach(list => {
    listsTemplate += list.TemplateItem
  });
  document.querySelector("#lists").innerHTML = listsTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  removeList(listId) {
    ListService.removeList(listId);
    _drawLists();
  }
  addList(event) {
    debugger;
    event.preventDefault();
    let formData = event.target;
    let newList = {
      name: formData.name.value
    }
    ListService.addList(newList);
    formData.reset();
    _drawLists();
  }
  addItem(event, lId) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      name: formData.name.value,
      listId: lId
    };
    ListService.addItem(newItem);
    formData.reset();
    _drawLists();
  }
}

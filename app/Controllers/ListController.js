import ListService from "../Services/ListService.js";
import store from "../store.js";
import Item from "../Models/Item.js";

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        ListService.removeList(listId);
        _drawLists();
        Swal.fire(
          'Deleted!',
          'Your list has been deleted.',
          'success'
        )
      }
    })
  }
  removeItem(listId, itemId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        ListService.removeItem(listId, itemId);
        _drawLists();
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
      }
    })
  }
  addList(event) {
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

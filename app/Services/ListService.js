import List from "../Models/List.js";
import store from "../store.js";
import Item from "../Models/Item.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(newList) {
    let list = new List(newList);
    store.State.lists.push(list);
    store.saveState()
  }
  removeList(listId) {
    let listRemove = store.State.lists.findIndex(l => l.id == listId);
    store.State.lists.splice(listRemove, 1)
    store.saveState();
  }
  addItem(newItem) {
    let item = new Item(newItem);
    let list = store.State.lists.find(l => l.id == item.listId);
    list.item.push(item);
    store.saveState();
  }

}

const SERVICE = new ListService();
export default SERVICE;

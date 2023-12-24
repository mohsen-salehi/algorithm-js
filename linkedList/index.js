class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newElement = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newElement;
    }

    this.tail = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  prepend(value) {
    const newElement = { value: value, next: this.head };

    this.head = newElement;

    if (!this.tail) {
      this.tail = newElement;
    }
  }

  delete(value) {
    if (!this.head) return;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentElement = this.head;

    while (currentElement.next) {
      if (currentElement.next.value === value) {
        currentElement.next = currentElement.next.next;
      } else {
        currentElement = currentElement.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentElement;
    }
  }


  insertAfter (value , afterValue) {
    const existingElement = this.find(afterValue)
    if(existingElement){
      const newElement = {value : value , next : existingElement.value}

      existingElement.next = newElement
    }
  }


  find(value) {
    if (!this.head) {
      return;
    }

    let currentElement = this.head

    while(currentElement){
      if(currentElement.value === value){
        return currentElement
      }
      currentElement = currentElement.next
    }

    return


  }

  toArray() {
    const elements = [];

    let curentElement = this.head;

    while (curentElement) {
      elements.push(curentElement);
      curentElement = curentElement.next;
    }

    return elements;
  }
}

const linkedList = new LinkedList();

linkedList.append(2);
linkedList.append("mohsen");
linkedList.append("mohsen");
linkedList.append(true);
linkedList.prepend("FirstValue");
linkedList.prepend("FirstValue");

linkedList.delete("mohsen");
linkedList.delete("FirstValue");
linkedList.delete(true);
console.log(linkedList.toArray());

console.log(linkedList.find("mohsen"));
console.log(linkedList.find(2 ));


linkedList.insertAfter("new value " , 2)
console.log(linkedList.toArray());
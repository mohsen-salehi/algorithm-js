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

linkedList.append(2)
linkedList.append("mohsen")
linkedList.append(true)


console.log(linkedList.toArray());
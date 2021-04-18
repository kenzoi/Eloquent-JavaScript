class Group {
  constructor () {
    this.collection = [];
  }

  add (value) {
    if (this.collection.indexOf(value) === -1) this.collection.push(value);
  }
  delete (value) {
    const index = this.collection.indexOf(value);
    if (index !== -1) this.collection.splice(index, 1);
  }
  has (value) {
    return this.collection.indexOf(value) !== -1;
  }
  static from (iterable) {
    let newGroup = new Group();
    for (let element of iterable) {
      newGroup.add(element);
    }
    return newGroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


console.log(Group.from([1, 2]));
export default class Item {

    static Id = 0;

    constructor(text) {
        this.text = text;
        this.done = false;
        this.id = Item.Id++;
    }
}
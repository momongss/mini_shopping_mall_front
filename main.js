'use strict';

class Clothes {
    constructor(kind, size, color, sex){
        this.kind = kind;
        this.size = size;
        this.color = color;
        this.sex = sex;
    }

    getDomElement() {
        let newDiv = document.createElement("button");
        newDiv.setAttribute("class", "item");
        newDiv.appendChild(this.getImageElement());
        newDiv.appendChild(this.getTextElement());
        return newDiv;
    }

    getTextElement() {
        let newText = document.createElement("span");
        newText.innerHTML = `${this.sex}, ${this.size} size`
        return newText;
    }

    getImageElement() {
        let newImage = document.createElement("img");
        newImage.src = `img/${this.color}_${this.kind.slice(0, 1)}.png`;
        return newImage;
    }
}

class ShoppingMall {
    constructor() {
        this.classes = {
            'kind': ['pants', 'skirt', 'tshirt'],
            'size': ['large', 'small'],
            'color': ['blue', 'pink', 'yellow'],
            'sex': ['male', 'female']
        };

        let total = [[]]
        let newTotal = []
        for (let kind of this.classes['kind']){
            let tmp = [...total];
            for (let t of tmp){
                t.push(kind);
            }
            newTotal.push(tmp[0]);
        }

        this.kind = new Set();
    }

    getAllClothes() {
        
    }
}

let Closet = new ShoppingMall();

let testClothes = new Clothes('pants', 'large', 'blue', 'male');
let testClothes2 = new Clothes('skirt', 'small', 'blue', 'female');

let items = document.getElementById('shelf');

items.appendChild(testClothes.getDomElement());
items.appendChild(testClothes2.getDomElement());
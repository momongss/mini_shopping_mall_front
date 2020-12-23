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

        this.AllClothes = [];

        for (let kind of this.classes['kind']){
            for (let size of this.classes['size']){
                for (let color of this.classes['color']){
                    for (let sex of this.classes['sex']){
                        this.AllClothes.push(new Clothes(kind, size, color, sex));
                    }
                }
            }
        }
    }

    getAllClothes() {
        return this.AllClothes;
    }

    getFilteredClothes(_kind, _size, _color, _sex){
        let FilteredClothes = [];
        for (let kind of this.classes['kind']){
            if (_kind !== 'all' && kind !== _kind) continue;
            for (let size of this.classes['size']){
                if (_size !== 'all' && size !== _size) continue;
                for (let color of this.classes['color']){
                    if (_color !== 'all' && color !== _color) continue;
                    for (let sex of this.classes['sex']){
                        if (_sex !== 'all' && sex !== _sex) continue;
                        FilteredClothes.push(new Clothes(kind, size, color, sex));
                    }
                }
            }
        }
        return FilteredClothes;
    }
}

let Closet = new ShoppingMall();

let All = Closet.getAllClothes();
let items = document.getElementById('shelf');

for (let clothes of All){
    items.appendChild(clothes.getDomElement());
}

function filterBtn(){
    if (this.id.includes('kind')){
        while (items.hasChildNodes()){
            items.removeChild(items.lastChild);
        }
        let FilteredClothes = Closet.getFilteredClothes(this.id.slice(9), 'all', 'all', 'all');
        for (let clothes of FilteredClothes){
            items.appendChild(clothes.getDomElement());
        }
    }
    else if (this.id.includes('color')){
        while (items.hasChildNodes()){
            items.removeChild(items.lastChild);
        }
        console.log(this.id.slice(9));
        let FilteredClothes = Closet.getFilteredClothes('all', 'all', this.id.slice(10), 'all');
        for (let clothes of FilteredClothes){
            items.appendChild(clothes.getDomElement());
        }
    }
}

document.getElementById('btn_kind_tshirt').onclick = filterBtn;
document.getElementById('btn_kind_pants').onclick = filterBtn;
document.getElementById('btn_kind_skirt').onclick = filterBtn;

document.getElementById('btn_color_blue').onclick = filterBtn;
document.getElementById('btn_color_yellow').onclick = filterBtn;
document.getElementById('btn_color_pink').onclick = filterBtn;
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

const all = 'all';

class ShoppingMall {
    constructor() {
        this.filter = {'kind': all, 'size': all, 'color': all, 'sex': all};

        this.classes = {
            'kind': ['pants', 'skirt', 'tshirt'],
            'size': ['large', 'small'],
            'color': ['blue', 'pink', 'yellow'],
            'sex': ['male', 'female']
        };
    }

    getClothes(Changes){
        if (Changes) this.setFilter(Changes);
        return this.getFilteredClothes();
    }

    setFilter(Changes){
        for (let key in Changes){
            this.filter[key] = Changes[key];
        }
    }

    getFilteredClothes(){
        let FilteredClothes = [];
        for (let kind of this.classes['kind']){
            if (this._filtered('kind', kind)) continue;
            for (let size of this.classes['size']){
                if (this._filtered('size', size)) continue;
                for (let color of this.classes['color']){
                    if (this._filtered('color', color)) continue;
                    for (let sex of this.classes['sex']){
                        if (this._filtered('sex', sex)) continue;
                        FilteredClothes.push(new Clothes(kind, size, color, sex));
                    }
                }
            }
        }
        return FilteredClothes;
    }

    _filtered(type, target){
        return this.filter[type] !== all && target !== this.filter[type];
    }
}

let shoppingMall = new ShoppingMall();

let items = document.getElementById('shelf');

for (let clothes of shoppingMall.getClothes()){
    items.appendChild(clothes.getDomElement());
}

function filterBtn(){
    // this는 뭐지?? 
    // The object that is executing the current function.
    // ==> JS에서 함수의 this는 현재 함수를 부른 객체를 가리킴.
    // 이 경우 이벤트가 발생한 button이 this가 된다. 그래서 돌아가고 있다..
    if (this.id.includes('kind')){
        // 문제 : items는 함수 밖에서 전역선언된 변수.. 파라미터로 전달받는게 더 좋을텐데...
        // 지금 내가 짠 방식으론 파라미터 전달이 힘듦...
        while (items.hasChildNodes()){
            items.removeChild(items.lastChild);
        }
        let FilteredClothes = shoppingMall.getClothes({'kind': this.id.slice(9)});
        for (let clothes of FilteredClothes){
            items.appendChild(clothes.getDomElement());
        }
    }
    else if (this.id.includes('color')){
        while (items.hasChildNodes()){
            items.removeChild(items.lastChild);
        }
        let FilteredClothes = shoppingMall.getClothes({'color': this.id.slice(10)});
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
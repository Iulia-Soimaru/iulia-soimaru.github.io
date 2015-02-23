//As a user, I want to add item to the shopping list
//As a user, I want to delete item from the shopping list
//As a user, I want to see the total number of items in shopping list
//As a user I want to be able to delete all items from the shopping list

//1)Create a function that will take text from input and move it to Shopping list on click of "add" button
//2)Create a counter to see the total number of items in shopping list
//3)Create a function that will delete item on click of "delete" button
//4)Create a function where we will be able to delete all items from shopping list

window.onload=function(){

    var item = document.getElementById('itemName');
    var itemValue = document.getElementById("addItem");
    var shopping = document.getElementById("shopping");
    var deleteAll = document.getElementById("deleteAll");

    var counterSpan = document.getElementById("count");

    item.onclick=function() {
        this.value="";
    };

    itemValue.onclick = function(){
        var ul = document.createElement('UL');
        ul.setAttribute("class","product");
        shopping.appendChild(ul);

        var li1 = document.createElement('LI');
        var paragraph = document.createElement('P');
        var text = document.createTextNode(item.value)
        paragraph.appendChild(text);
        li1.appendChild(paragraph);
        ul.appendChild(li1);

        item.value = "add item here";

        var li2 = document.createElement('LI');
        var button = document.createElement('BUTTON');
        button.setAttribute("onClick", "this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); document.getElementById('count').innerHTML = document.getElementsByClassName('product').length");
        buttonText = document.createTextNode("Delete");
        button.appendChild(buttonText);
        li2.appendChild(button);
        ul.appendChild(li2);

        counterSpan.innerHTML = document.getElementsByClassName('product').length;
    };

    deleteAll.onclick = function(){
        shopping.innerHTML = "";
        counterSpan.innerHTML = document.getElementsByClassName('product').length;
    };
};


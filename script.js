//Week 10 Lab:
//Question 6:
//Create a grocery list application where users can add and remove items from a list. The list should be displayed as a bulleted unordered list
let shoppingList=[];

function showList(){
    let ul=document.getElementById("list");
    ul.innerHTML="";//reset list so that removals have effect
    for (i=0;i<shoppingList.length;i++){
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(shoppingList[i]));
        ul.appendChild(li);
    }
}

function addToList(){
    let newItem=prompt("What do we need from the shops?");
    shoppingList.push(newItem);//add to list
    showList();
    //for(i=0;i<1;i++){
       // shoppingList[i]=prompt("What do we need from the shops?");
    //}       
}

function removeFromList(){
    alert("Removing "+shoppingList.pop());
    showList();
}

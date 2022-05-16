let todos = [
    'Clean room',
    'brush teeth',
    'exercise',
    'study'
]

for(let i = 0; i < todos.length; i++) {
    todos[i] += '!';
} 
let count = 10;
do {
    console.log(count);
    count--;
} while (count > 0);

todos.forEach( (i) => console.log(i));

let btn = document.querySelector("#enter");
let input = document.querySelector('#userInput');
let ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement(){
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.classList.add('del');
    delBtn.appendChild(document.createTextNode("Del"));
    li.appendChild(document.createTextNode(input.value));
    li.append(delBtn);
    ul.appendChild(li);
    input.value = '';

}

function doneTask(event) {
    if (event.target.nodeName === 'LI'){
        event.target.classList.toggle("crossed");
    }
}

function handle_ul_Click(event) {
    doneTask(event);
    if(event.target.nodeName === "BUTTON"){
        event.target.parentElement.remove();
    };
}

btn.addEventListener("click", () => {
    if (inputLength() <= 0) return;
    createListElement();
});

input.addEventListener("keypress", (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
});

ul.addEventListener("click", handle_ul_Click);
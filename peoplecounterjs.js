
let count = 0;
let str = document.getElementById("save-data").innerText

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count
}

function decrement() {
    if (count>0){
        count --;
        document.getElementById("count-el").innerText = count
    }
}

function show_hide(){
    if (document.getElementById("show/hide-btn").innerText == "Hide"){
        document.getElementById("show/hide-btn").innerText = "Show"
        document.getElementById("save-data").innerText = ""
    }

    else{
        document.getElementById("show/hide-btn").innerText = "Hide"
        document.getElementById("save-data").innerText = str
    }
}

function save(){
    str = str + count + " - "
    document.getElementById("save-data").textContent = str
    document.getElementById("show/hide-btn").innerText = "Hide"
}

function reset(){
    count=0
    document.getElementById("count-el").innerText = count
}
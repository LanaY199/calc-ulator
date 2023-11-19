let memory = document.getElementById('memory');

function calculator(v){
    para = document.createElement('p');
    data = v + "=" + eval(v);
    para.innerText = data;
    memory.appendChild(para);
    return eval(v);
}

function backspace(b){
    return b.slice(0, -1);
}
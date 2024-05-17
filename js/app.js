const btn = document.querySelector('#btn');
btn.addEventListener('click', createNewTask);

const btnRefresh = document.querySelector('#btn-Refresh');
btnRefresh.addEventListener('click', function(){
    location.reload();
})


function createNewTask(){
    let task = document.querySelector('#inputText');
    let taskContainer = document.querySelector('#taskContainer');
    
    const p = createPElement();
    
    taskContainer.appendChild(p);
    p.innerHTML = task.value;
    taskContainer.appendChild(p);

    const delBtn = createDeleteButton();
    p.appendChild(delBtn);
    delBtn.addEventListener('click', function(){
        taskContainer.removeChild(p);
    })

    p.addEventListener('click', function(){
        p.style.textDecoration = 'line-through';
    })

    task.value = '';
}

function createDeleteButton(){
    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.classList.add('delBtnStyle');
    return delBtn;
}

function createPElement(){
    let p = document.createElement('p');
    p.classList.add('p-Task');
    return p;
}




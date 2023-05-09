window.addEventListener('load', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('#new-task-input');
    const tasks = document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
      const Task = input.value;
        // document.write(newTask);
        if(!Task){
            alert("Please input a task");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);
        // task_content_el.innerText = Task;

        ///////////////////////
       const actions= document.createElement('div');
        actions.classList.add('actions');

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "Edit"

       

        const del = document.createElement('button');
        del.classList.add('delete');
        del.innerHTML = "Delete";

        actions.appendChild(edit);
        actions.appendChild(del);

        task_el.appendChild(actions);

///////////////////////////////////////////////////
        del.addEventListener('click', ()=>{
            tasks.removeChild(task_el);
        })
        edit.addEventListener('click', ()=>{
            if(edit.innerHTML=='Edit'){
                edit.innerHTML = "Save";
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
            }else{
                edit.innerHTML = "Edit";
                task_input_el.setAttribute('readonly','readonly');
                task_input_el.blur();
                
            }
        })

       


        /////////////////////

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = Task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        tasks.appendChild(task_el);
        ///////////////////////////////////////////////////////////

        
        input.value='';



    })

})
const input = document.querySelector('.inputin'); 
const button = document.querySelector('.btn');
const list = document.querySelector('.list'); 

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    const value = input.value.trim();

    if (!value) {
        alert("Ma'lumot kiriting"); 
        return; 
    }

   
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

 
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            newInput.style.textDecoration = "line-through";
        } else {
            newInput.style.textDecoration = "none"; 
        }
    });

    const newInput = document.createElement('input');
    newInput.value = value; 
    newInput.classList.add('input2'); 
    newInput.setAttribute('readonly', true);  

    const edit = document.createElement('i');
    edit.classList.add('fa-solid', 'fa-pen-to-square'); 
    edit.classList.add('editbtn');

    edit.addEventListener('click', () => {
        if (edit.classList.contains('editbtn')) {
            newInput.removeAttribute('readonly');  
            newInput.focus();  
            edit.classList.remove('fa-pen-to-square', 'editbtn'); 
            edit.classList.add('fa-save', 'savebtn'); 
        } else if (edit.classList.contains('savebtn')) {
            newInput.setAttribute('readonly', true);  
            edit.classList.remove('fa-save', 'savebtn'); 
            edit.classList.add('fa-pen-to-square', 'editbtn'); 
        }
    });

    const delete2 = document.createElement('i');
    delete2.classList.add('fa-solid', 'fa-delete-left'); 
    delete2.addEventListener('click', () => {
        delete2.parentElement.remove();
    });

    const li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(newInput);
    li.appendChild(edit);
    li.appendChild(delete2);
    list.appendChild(li); 

    input.value = '';  
});

document.querySelector('.deleteAll').addEventListener('click', () => {
    list.innerHTML = ''; 
});

function searchItem() {
    let search1 = document.querySelector(".searchin");
    let searchText = search1.value.toLowerCase();
    let items = document.querySelectorAll('.list li');
    for (let i = 0; i < items.length; i++) {
        let filterText = items[i].querySelector('input');
        let textValue = filterText.value || filterText.innerText;
        if (textValue.toLowerCase().indexOf(searchText) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }   
    }  
}
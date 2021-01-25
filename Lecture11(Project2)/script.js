let ulTasks=$('#ulTasks');
let btnAdd=$('#btnAdd');
let btnReset=$('#btnReset');
let btnSort=$('#btnSort');
let btnCleanup=$('#btnCleanup');
let inpNewTask=$('#inpNewTask');

let addItem=function(){
    let listItem=$('<li>').text(inpNewTask.val()).addClass('list-group-item');
    ulTasks.append(listItem);
    inpNewTask.val('');
    listItem.click(()=>{
        listItem.toggleClass('done');
        toggleInputButtons();
    });
    toggleInputButtons();

};

let clearDone=function(){
    $('#ulTasks li.done').remove();
    toggleInputButtons();
}

function sortTasks(){
    ulTasks.append($('#ulTasks li.done'));
    toggleInputButtons();
}

btnAdd.click(addItem);
inpNewTask.keypress((e)=>{
    if(e.which==13)
        addItem();
})

btnCleanup.click(clearDone);


btnSort.click(sortTasks);



btnReset.click(()=>{
    inpNewTask.val('');
    toggleInputButtons();
});


function toggleInputButtons(){
    btnReset.attr('disabled',inpNewTask.val()=='');
    btnAdd.attr('disabled',inpNewTask.val()=='');
    btnSort.attr('disabled',$('#ulTasks li.done').length==0);
    btnCleanup.attr('disabled',$('#ulTasks li.done').length==0);
}

inpNewTask.on('input',toggleInputButtons);



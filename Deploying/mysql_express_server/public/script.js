$(()=>{
    let inp_name=$('#name');
    let inp_age=$('#age');
    let inp_city=$('#city');
    let btn_submit=$('#submit');
    let tbl_persons=$('#persons');

    function refreshPersonTable(persons){
        tbl_persons.empty();
        tbl_persons.append(`
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
        
        `);
        for(let person of persons){
            tbl_persons.append(`
            <tr>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.city}</td>
            </tr>

            `)
        }

    }
    $.get("/api/persons",function(persons){
        console.log(persons);
        refreshPersonTable(persons);
    })

    btn_submit.click(()=>{
        $.post('api/add',{
            name:inp_name.val(),
            age:inp_age.val(),
            city:inp_city.val()
        },function(persons){
            refreshPersonTable(persons);
            inp_name.val('');
            inp_age.val('');
            inp_city.val('');
        })
    })

    
})
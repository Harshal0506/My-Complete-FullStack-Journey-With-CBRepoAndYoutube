//ajax --> asynchronous javascript and xml
//AJAX help us with is that if we dont want to reload  to relaod the page i want to keep my current page open on my brwser and at the same time i want to make some request to an api to get data to update some data on my website.

$(()=>{
    page=1
    $('#fetch').click(()=>{
        $.get(`https://reqres.in/api/users?page=${page}`,(data)=>{
            console.log(data);
            page++;
            for(let person of data.data){
                console.log(person);
                $('#people').append(
                    $(`<li> ${person.first_name} ${person.last_name} <img width="100" src="${person.avatar}"></li>`)

                )
                
            }

        })
    })





})

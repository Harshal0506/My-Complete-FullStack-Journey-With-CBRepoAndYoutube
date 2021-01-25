// console.log($("#list"));  //loaded before  the html
$(()=>{
    // console.log("Inside dollar function "); //loaded after the window has been loaded
    // console.log($("#list"));
    $("#prepend").click(()=>{
        let text=$("#item").val();
        // console.log("Hii "+text);
        $("#list").prepend($("<li>").html(`<b>${text}</b>`));
        $("#item").val('');
    })

    $("#append").click(()=>{
        let text=$("#item").val();
        // console.log("Hii "+text);
        $("#list").append($("<li>").html(`<b>${text}</b>`));
        $("#item").val('');
    })
})

//we should not call $('#item') or $('#list') as it will affect the perfomace so its better to store it in a variable as it will reduce the time of runing $("list") or anything like that.So itsbetter to do things like this.

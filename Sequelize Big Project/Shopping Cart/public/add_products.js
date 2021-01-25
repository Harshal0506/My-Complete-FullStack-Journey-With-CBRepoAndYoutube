$(()=>{
    let productName=$('#productName');
    let productManufacturer=$('#productManufacturer')
    let productPrice=$('#productPrice');

    $('#btnProductAdd').click(()=>{
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct){
                alert(`Added ${addedProduct.name} to Database`)
            }
        )
    })
})
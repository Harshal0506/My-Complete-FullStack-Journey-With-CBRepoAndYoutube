let socket=io();

$('#loginBox').show()
$('#chatBox').hide()

$('#btnStart').click(() => {
    socket.emit('login', {
    
      username: $('#inpUsername').val(),
      password: $('#inpPassword').val()
    })
})

socket.on('logged_in', () => {
    $('#loginBox').hide()
    $('#chatBox').show()
  })

$('#btnSendMsg').click(() => {
    socket.emit('msg_send', {
      to: $('#inpToUser').val(),
      msg: $('#inpNewMsg').val()
    })
    $('#inpToUser').val('');
    $('#inpNewMsg').val('');


    
    
})

socket.on('login_failed',()=>{
  alert('Username or Password wrong');
})

socket.on('msg_rcvd',(data)=>{
    
    $('#ulMsgList').append($('<li>').text(`${data.from}:${data.msg}`));

})
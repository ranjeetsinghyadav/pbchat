
$(function(){

	var id = Math.floor(Math.random() * 999999) + 100000  

	var socket = io();
	
	//var name = "Kapil Gola", email = "kapilg@policybazaar.com";	

	socket.on('connect', function(){
		socket.emit('load', id);
	});
	
	/*socket.on('disconnect', function(){
		socket.emit('leave', id);
	});*/
	
	
	$('#btnSend').click(function(){
		if ($('#m').val() != '') {
			socket.emit('sendMessage', $('#m').val());
			$('#m').val('');
		}
		return false;
	});
	
	socket.on('sendMessage', function(msg){
		$('#messages').append($('<li>').text(msg));
	});
	

});

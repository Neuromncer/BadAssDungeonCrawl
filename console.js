
var CommandConsole = {

	update: function(keyPressed) {
		var command = jQuery('#command-input').val();
		var cursor = '<div id="cursor" class="input-cursor"></div>';
		
		//Do checks for enter and backspace
		if(keyPressed == 13)
		{
			//Pass Command to Input Handler
			this.clear();
			InputHandler.interpret(command);
			return;
		}
		else if(keyPressed == 8)
		{
			if(command.length > 0)
			{
				command = command.substring(0, command.length - 1);
			}
		}
		else
		{
			command += String.fromCharCode(keyPressed);
		}

		jQuery('#command-input').html(command + cursor);
		jQuery('#command-input').val(command); 

	},

	clear: function() {
		var cursor = '<div id="cursor" class="input-cursor"></div>';

		jQuery('#command-input').html(cursor);
		jQuery('#command-input').val('');

	}
}

$(document).ready(function() {
    $(this).keydown(function(e) {
    	e.preventDefault();
    	CommandConsole.update(e.keyCode);
    });
});
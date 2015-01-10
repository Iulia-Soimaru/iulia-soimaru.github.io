//1.When user click at input, I need it to be clean
$(document).ready(function() {
	$(".add #addItem").click(function () {
		$(this).val('');
	});
//2.When click button Add, it should add list-item to div main todo, and clear text in input
	$('.add input[type="submit"]').click(function () {
		var customerValue = $(this).parent().find("#addItem").val();
		var listItem = '<li>' +
							'<input type="checkbox" class="checkbox">' +
							'<p>'+customerValue+'</p>' +
							'<input type="submit" value="Edit" class="edit">' +
							'<input type="submit" value="Delete" class="delete">' +
				  		'</li>'

		$('.todo .line').append(listItem);
		$('.add input[type="text"]').val('add item');

//3.in todo div, when click checkbox, list-item should go to completed
		$('.todo input[type="checkbox"]').click(function () {
			var currentListItem = $(this).parent();
			$('.completed .line').append(currentListItem);
			currentListItem.addClass("itemCompleted");
		});

//4.in completed, when click checkbox item should be back to todo div
		$('.itemCompleted input[type="checkbox"]').click(function () {
			var currentListItem = $(this).parent();
			currentListItem.hide();
			$('.todo .line').append(currentListItem);


		});
	
	//5.When click edit, list-item should become input, to edit text
		$('.edit').click(function() {
			var currentListItem = $(this).parent();
			var inputChange = '<li>' +
							'<input type="text" value="">'+
							'<input type="submit" value="Edit" class="edit">' +
				  		'</li>'
			currentListItem.replaceWith(inputChange);
		});
	//6.When click edit again, it should be back to normal <li> with <p>
		/*$('.edit').click(function() {
			var currentListItem = $(this).parent();
			var newValue = $(this).find("li .input[type="text"]").val();
			var inputNew = '<li>' +
						'<input type="checkbox" class="checkbox">' +
						'<p>'+ newValue +'</p>' +
						'<input type="submit" value="Edit" class="edit">' +
						'<input type="submit" value="Delete" class="delete">' +
			  		'</li>'
			currentListItem.replaceWith(inputNew);
		}); */

		
	//7.When clcik delete, list-item shoud desappear
		$('.delete').click(function() {
			var currentListItem = $(this).parent();
			currentListItem.hide();
		});
	});

});
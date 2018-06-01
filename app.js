$(document).ready(function() {
	$('.setData').on('click', function(event){
		let $textFieldValue = $('.textField').val();
		$('.debug').text($textFieldValue);

		localStorage.setItem("myFormTextData", $textFieldValue);
	});

	$('.getData').on('click', function(event){
		let retrieved = localStorage.getItem("myFormTextData");
		$('.debug').text(retrieved);
	});

	// $('.textField').on('keyup', function(event){
	// 	let $textFieldValue = $('.textField').val();
	// 	$('.debug').text($textFieldValue);
	// });

}); // close document ready
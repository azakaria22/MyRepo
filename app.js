$(document).ready(function() {
	$('.setData').on('click', function(){
		let formData = $('form').serializeArray();
		localStorage.setItem(formData[0].value, formData[1].value);
	});

	$('.getData').on('click', function(event) {
		let retrievedSnippets = $('.retrievedSnippets');
		retrievedSnippets.empty();
		let numberOfSnippets = localStorage.length;
		for(let i = 0; i < numberOfSnippets; i++) {
			let snippetName = localStorage.key(i);
			let snippet = localStorage.getItem(snippetName);
			let snippetContainer = $('<div></div>').addClass("snippet");
			$('<h4></h4>').html(snippetName)
			.appendTo(snippetContainer);
			$('<code></code>').html(snippet)
			.appendTo(snippetContainer);
			snippetContainer.appendTo(retrievedSnippets);
			event.preventDefault();
		}
		retrievedSnippets.toggle('slow', function() {
			if ($('.getData').html() === "Display all snippets") {
				$('.getData').html("Hide snippets");
			} else {
				$('.getData').html("Display all snippets");
			}
		});
	});

	$('.searchData').on('click', function(event) {
		let searchedSnippetNameField = $("#searchSnippetName");
		let snippetName = searchedSnippetNameField.val();
		searchedSnippetNameField.val(''); // clear search field
		let snippet = localStorage.getItem(snippetName);
		let searchedSnippet = $('.searchedSnippet');
		searchedSnippet.empty();
		if (snippet == null) {
			$('<p></p>').addClass("error")
			.html("Could not find a snippet with that name. Try searching again.")
			.appendTo(searchedSnippet);
		} else {
			let snippetContainer = $('<div></div>').addClass("snippet");
			$('<h4></h4>').html(snippetName)
			.appendTo(snippetContainer);
			$('<code></code>').html(snippet)
			.appendTo(snippetContainer);
			snippetContainer.appendTo(searchedSnippet);
		}
		event.preventDefault();
	});
	// $('.textField').on('keyup', function(event){
	// 	let $textFieldValue = $('.textField').val();
	// 	$('.debug').text($textFieldValue);
	// });

}); // close document ready
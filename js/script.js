const render = data => {
	let content = '';
	let header = '<h1>Персональный план работы</h1>';
	let methodsList = [];
	var methodsSet = new Set();


	for (score in data){
		for (method in methods[data[score]]){
			if (!methodsSet.has(methods[data[score]][method])){
			var card = `<li>${methods[data[score]][method]}</li>`
			methodsSet.add(methods[data[score]][method])
			content += card}

	}
	}
	$(header).appendTo('.test-result-header');
	$(content).appendTo('.test-result-list');
}

$(document).on('ready', function(event) {
	console.log('dghffgn');
});
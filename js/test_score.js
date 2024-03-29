
function counter(){
	let avoidanceScore = 0;
	let ruminationScore = 0;
	let emotionalMaskingScore = 0;
	let shortTermScore = 0;
	let responcePersistenceScore = 0;
	let aggressionScore = 0;
	let negAppraisalScore = 0;

	$("input[type='radio']").each(function(){


		if ($(this).is(':checked')){

			if ($(this).attr('name').slice(-1) === '1'){
				avoidanceScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '2'){
				ruminationScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '3'){
				emotionalMaskingScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '4'){
				shortTermScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '5'){
				responcePersistenceScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '6'){
				aggressionScore += Number($(this).val())

			}else if($(this).attr('name').slice(-1) === '7'){
				negAppraisalScore += Number($(this).val())
			}	
		}
	})

	return {'avoidanceScore': avoidanceScore, 
			'ruminationScore': ruminationScore, 
			'emotionalMaskingScore': emotionalMaskingScore, 
			'shortTermScore': shortTermScore, 
			'responcePersistenceScore': responcePersistenceScore,
			'aggressionScore': aggressionScore,
			'negAppraisalScore': negAppraisalScore}

}


let methods = {
	'shortTermScore': ['Values in action'],
	'ruminationScore': ['Mindfulness', 'Defusion'],
	'avoidanceScore' : ['Mindfulness', 'Doing the Opposite', 'Imagery-Based Emotion Exposure', 'Interoceptive emotion Exposure', 'Situational Emotion Exposure'],
	'negAppraisalScore': ['Defusion', 'Cognitive Felxibility Trening'],
	'responcePersistenceScore': ['Self-Soothing', 'Doing the Opposite', 'Interpersonal Effectiveness'],
	'aggressionScore': ['Interpersonal Effectiveness'],
	'emotionalMaskingScore': ['Imagery-Based Emotion Exposure']

}


button = $('#test-btn').on('click', function () {

	scores = counter()
	scoresSorted = Object.keys(scores).sort(function(a, b){return scores[b] - scores[a]})
	render(scoresSorted)
	
	return scoresSorted

	// console.log(`avoidanceScore: ${avoidanceScore}, 
	// 	ruminationScore: ${ruminationScore}, 
	// 	emotionalMaskingScore:${emotionalMaskingScore},
	// 	shortTermScore:${shortTermScore}, 
	// 	responcePersistenceScore: ${responcePersistenceScore}, 
	// 	aggressionScore: ${aggressionScore}, 
	// 	negAppraisalScore: ${negAppraisalScore}`)
	
});
$(document).ready(function() {

//back-end logic


var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
console.log(consonants);
var emptyArray = [];
console.log($("#englishInput").val());

	var combineResult = function(inputArray){
	for (var i = 0; i <= inputArray.length; i++) {
		 if (consonants.includes(inputArray[0]) === true) {
			emptyArray.push(inputArray.shift());


		} else if (consonants.includes(inputArray[0]) === false) {
		break;

	};

};
	if (vowels.includes(inputArray[0]) === true) {
		emptyArray.push("a", "y");
};
	return inputArray.concat(emptyArray);

		// if (vowels.includes(inputArray[0]) === true); {
		// 	result.push("a", "y");
	// }
// 	if (vowels.includes(inputArray[0]) === true); {
// 		result.push("a", "y");
// }
};



//front-end logic
	$("form#pig-latin").submit(function(event){
		event.preventDefault();
		var inputArray = $("#englishInput").val().toLowerCase().split("");
		var outputString = combineResult(inputArray);
			console.log(outputString.join(""));
});
});

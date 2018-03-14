function displayStuff(){
alert("name of process associated is "+formulaire.INTERVENTIONS_EN_COURS_CONDITION.value);
} 
window.onload = function(field){

	var beginTime = performance.now();
	displayStuff();
	var fnTime = performance.now();
	console.log("time taken to execute display function:"+(fntime - begintime)+"milliseconds");
	neocase.form.event.bind('preinit', displayStuff);
	var preinitTime = performance.now();
	console.log("time taken to execute preinit event:"+(preinitTime - begintime)+"milliseconds");
	neocase.form.event.bind('init', displayStuff);
	var initTime = performance.now();
	console.log("time taken to execute display event:"+(initTime - begintime)+"milliseconds");
	neocase.form.event.bind('loadcomplete', displayStuff);
	var loadcompleteTime = performance.now();
	console.log("time taken to execute loadcomplete event:"+(loadcompleteTime - begintime)+"milliseconds");
	
};

function displayStuff(){
alert("Welcome ! name of process associated is "+formulaire.INTERVENTIONS_EN_COURS_CONDITION.value);
} 
var beginTime=performance.now();
window.onload = function(){
		displayStuff();
		var fnTime = performance.now();
		console.log("time taken to execute display function:"+(fntime - begintime)+"milliseconds");	
};

neocase.form.event.bind('preinit', onload);
var preinitTime = performance.now();
console.log("time taken to execute preinit event:"+(preinitTime - begintime)+"milliseconds");
neocase.form.event.bind('init', onload);
var initTime = performance.now();
console.log("time taken to execute display event:"+(initTime - begintime)+"milliseconds");
neocase.form.event.bind('loadcomplete', onload);
var loadcompleteTime = performance.now();
console.log("time taken to execute loadcomplete event:"+(loadcompleteTime - begintime)+"milliseconds");
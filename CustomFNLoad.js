var startDate = new Date();
var startTime = startDate.getTime();
window.onPreInitFunctions = function(){
    console.log("executing preinit");
	var difference = (new Date()).getTime() - startTime; 
	console.warn("Preinit : "+difference); 
};
neocase.form.event.bind("preinit",onPreInitFunctions);
window.onInitFunctions = function(){
    console.log("executing init");
	var difference = (new Date()).getTime() - startTime; 
	console.warn("Init : "+difference); 
};
neocase.form.event.bind("init",onInitFunctions);
window.onLoadCompleteFunctions = function(){
    console.log("executing loadcomplete");
	var difference = (new Date()).getTime() - startTime; 
	console.warn("Loadcomplete : "+difference); 
};
neocase.form.event.bind("loadcomplete",onLoadCompleteFunctions);





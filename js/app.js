function outer(inner){
	inner();
	console.log("Hi! from outer function"); // outer function console output
};

function inner(){
	console.log("Hello world! from inner function"); // inner function console output
}

outer(inner); // call outer function, passing inner function as an argument
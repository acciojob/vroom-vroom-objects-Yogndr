// Complete the js code
function Car(make, model) {

	get getMakeModel(){
		return (this.make, this.model);
	}
}

function SportsCar(make, model, topSpeed) {
	this.make=make;
	this.model=model;
	this.topSpeed=topSpeed;

	get getTopSpeed(){
		return this.topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

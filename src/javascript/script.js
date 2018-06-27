var batwing={
		status:"ready",
		rescueBatman:function(){
			document.write("locating his transponder...");
		}
}
/*
if (batwing.status==="ready"){
	batwing.rescueBatman();
}
*/
var utilities={
		printAllMembers:function(targetobject){
			for (i in targetobject){
				document.write("<br/>"+targetobject[i]);
			}
		}
}
//utilities.printAllMembers(batwing);
//var empty=[];
//utilities.printAllMembers(empty);
var planet={
		id:34,
		name:"nax",
		faction:{
	factionId:24,
		name:"red",
		notification:function(){
			document.write("alliance...");
		}
		},
cities:[
	{locationId:15 , name:"charlot"},
	{locationId:23,name:"harry"}]
};
//planet.faction.notification();
//document.write(planet.cities[1].name);
/*
document.write("<br/>"+planet.name);
planet.name="arsh";
document.write("<br/>"+planet.name);
*/
//if(typeof planet.defense==="undefined"){
//	planet.defense="ion canon";
//}
/*
document.write(planet.defense);

for (member in planet){
	document.write("<br/>"+member+"==>"+planet[member]);
	*/
function car(make, model,year){
	this.make = make;
	this.model = model;
	this.year = year;
	}
var myCar=new car("Eagle","tsi",1990);
var othercar=new car("Dodge","Dart",1987);
alert(myCar.model);
alert(othercar.model);
document.write(myCar.year);

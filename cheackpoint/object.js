const obj1 = [{
    FName : "John",
    LName : "Doe",
    Age : "99",
},{
    FName : "nintyfive",
    LName : "Doe",
    Age : "95",
}];


for(let i = 0 ; i<obj1.length ; i++){

  if(obj1[i].Age === "95"){
    console.log(obj1[i]["FName"]);} 
}

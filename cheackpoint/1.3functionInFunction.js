function square (x){
    return x*x;
  }
  function cube (x){
    return x*x*x;
  }
  function sumofsquere(a ,b ,fn){
    const val1 = fn (a);
    const val2 = fn (b);
  
    return val1 + val2;
  }
  
  console.log(sumofsquere(2,2, cube));
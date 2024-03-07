const input =[1,2,3,4,5,6,7,8,9,10,11];

function transform (i){
    if(i%2==0){
        return true
    }else{
        return false
    }


}



const ans = input.filter(transform);
console.log(ans);
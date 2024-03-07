const express = require("express");
const bodyParser = require("body-parser");
const port = 3000

const app = express();
app.use(bodyParser.json());



function calculateSum(n){
  let ans = 0;
  for(let i =0 ; i<n ; i++){
    ans += i;
  }
  return ans;
}


app.get("/",function(req , res){
    console.log(req.body);
    const n  = req.query.n;
    console.log("n: "+ n)
    const ans = calculateSum(n);
    res.send(ans.toString());
    console.log("ans: "+ ans)


})

// app.get('/', function(req, res)  {
//   res.json({
//     "name" :"PARAG GAJBHIYE",
//     "age":25,
//     "profession":"Software Developer"
//   })
// })

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})


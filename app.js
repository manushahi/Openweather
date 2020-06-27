const express= require("express");
const https=require("https");
const app= express();


app.get("/",function(req,res){
  https.get("https://api.openweathermap.org/data/2.5/weather?q=almaty&appid=4f31869ba174c46db7f2e2e95f9a86b3&units=metric",function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      // console.log(data);
      const a=JSON.parse(data);
      const temp=a.main.temp
      const weatherdes=weather[0].description
      const icon=weather[0].icon
      const imageURL="https://openweathermap.org/img/wn/" +icon+" @2x.png"
      res.write ("<p>the weather is currently"+weatherdes+"<p>");
      res.write("the temp is"+ temp+"degee cel");
      res.write("<img src="+imageURL+">");
      res.send();
      // console.log(temp);
    })
  })
  // res.send("server is up.")
})






app.listen (3000,function(){
  console.log("server is running oon port 3000");
})

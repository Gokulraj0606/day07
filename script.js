var request=new XMLHttpRequest();
request.open("Get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response);
  

  var res=result.map((ele)=>ele.name)
  res.forEach(ele=>{
    console.log(ele)
  })
  var abc=result.map((ele0)=>ele0.capital)
  abc.forEach(ele0=>{
    console.log(ele0)
  })




  var ret=result.map((ele1)=>ele1.flag)
  ret.forEach(ele1=>{
    console.log(ele1)
  })
  
 
}
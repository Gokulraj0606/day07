var request=new XMLHttpRequest();
request.open("Get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response);

  var res=result.map((ele)=>ele.population).reduce((acc,ele)=>acc+ele);
  console.log(res)
 
 
}
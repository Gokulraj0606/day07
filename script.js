var request=new XMLHttpRequest();
request.open("Get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response);

 var res=result.filter((ele)=>{for (var i=0;i<ele.currencies.length;i++)
{
  if(ele.currencies[i].code==="USD")
  {
    return true;
  }
}
})
 var abc=res.map((ele)=>ele.name)
 console.log(abc)
 
 
}
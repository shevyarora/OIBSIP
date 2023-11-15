function Convert(){
    let result;
    let degree;
    let val1;
    let val2;
   degree=document.getElementById('degrees').value;
   val1=document.getElementById('type').value;
   val2=document.getElementById('type2').value;
  
   let degrees=Number(degree);

   if(val1=="Fahrenheit" && val2== "Fahrenheit"){
     result=degrees;
     document.getElementById('result').value=result+" °F"
   }
   else if(val1=="Celsius" && val2=="Celsius"){
    result=degrees;
    document.getElementById('result').value=result+" °C"
   }
   else if(val1=="Kelvin" && val2=="Kelvin"){
    result=degrees;
    document.getElementById('result').value=result+" °K"
   }
   else if(val1=="Fahrenheit" && val2=="Celsius"){
    result=(degrees - 32)*5/9;
    document.getElementById('result').value=result+" °C"
   }
   else if(val1=="Fahrenheit" && val2=="Kelvin"){
    result=((degrees - 32)*5/9) + 273.16;
    document.getElementById('result').value=result+" °K"
   }
   else if(val1=="Celsius" && val2=="Fahrenheit"){
    result=9/5*(degrees) + 32;
    document.getElementById('result').value=result+" °F"
   }
   else if(val1=="Celsius" && val2=="Kelvin"){
    result=degrees + 273.16;
    document.getElementById('result').value=result+" °K"
   }
   else if(val1=="Kelvin" && val2=="Fahrenheit"){
    result=((degrees - 273.16)*9/5) + 32;
    document.getElementById('result').value=result+" °F"
   }
   else{
    result=(degrees-273.16);
    document.getElementById('result').value=result+" °C"
   }
   

}

console.log('hi');
$(document).ready(function(){

     $('#submitWeather').click(function(){

     	var city=$("#city").val();

     	if(city !=''){

     		$.ajax({

     			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city+"&units=metric"+"&APPID=e2ae96a1a6b48defe6fc4d8ae73edd7b",
     			type:"GET",
     			datatype:"jsonp",
     			success:function(data){
     				console.log(data);
     			}
     		});     

} else{
	$("#error").html('filed cannot be empty');
}
    

     });

});

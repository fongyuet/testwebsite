$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url: 'http://api.weatherstack.com/current',
            data: {
            access_key: '061405da5207c73cb3ea74ce5d8f1679',
            query: 'Calgary, Alberta'
            },
            dataType: 'json',
            success: function(apiResponse) {
                $("#div1").html(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
                console.log();
            }
        });
    });
});
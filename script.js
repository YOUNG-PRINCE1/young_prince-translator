$(document).ready(function () {
    
    $.ajax({
        type: "get",
        url: "https://aibit-translator.p.rapidapi.com/api/v1/translator/support-languages",
        dataType: "json",
        headers: {
            'x-rapidapi-key': '19f1293594msh2a43548bd23c04bp13c891jsn8d348a0842de',
            'x-rapidapi-host': 'aibit-translator.p.rapidapi.com'
        },
        success: function (response) {
            $.each(response, function (index, element) { 
                 let option = `<option value="${element.code}">${element.language}</option>`

                 $("#from").append(option)
                 $("#to").append(option)
            });
            
        }
        
    });
});

// translate

$("button").click(function(){
    let text = $("input").val()
    let languagefrom = $("#from").val()
    let languageto = $("#to").val()


    $.ajax({
        type: "post",
        url: "https://aibit-translator.p.rapidapi.com/api/v1/translator/text",
        dataType: "json",
        data: {from: languagefrom, to: languageto, text: text},
        headers: {
            'x-rapidapi-key': '19f1293594msh2a43548bd23c04bp13c891jsn8d348a0842de',
            'x-rapidapi-host': 'aibit-translator.p.rapidapi.com',
        },
        success: function (response) {
            $("h2").text(response.trans)
            
        },
        error: function(response){
            console.log(err);
            
        }
    });
})
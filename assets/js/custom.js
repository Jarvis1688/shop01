// 访问本地数据
$(document).ready(function(){
    $.getJSON("./in_theaters.json",  
        function (data) {  
           
            data = data["subjects"];
            for(var item in data){
                 var list = '';
                list += "<li class=\"list-group-item\">";
                list +=        "<div class=\"row\">";
                list +=            "<div class=\"col-md-2\"><img src=\""+ data[item].casts[0].avatars.small+"\"></div>";
                list +=            "<div class=\"col-md-10\"><h3>"+ data[item].title +"</h3><p> 类型： "+ data[item].genres +"</p><p> 上映时间： "+ data[item].year +"</p></div>";
                list +=        "</div>" ;
                list += "</li>";
            $("#movie_list").append(list);
                // console.log(list);
            }
        }  
    );

    
});





// 访问远程数据
// $(document).ready(function(){
//    $.getJSON("http://api.douban.com/v2/movie/in_theaters?start=1&count=3&callback=?",  
//         function (data) {  
           
//             data = data["subjects"];
//             for(var item in data){
//                  var list = '';
//                 list += "<li class=\"list-group-item\">";
//                 list +=        "<div class=\"row\">";
//                 list +=            "<div class=\"col-md-2\"><img src=\""+ data[item].casts[0].avatars.small+"\"></div>";
//                 list +=            "<div class=\"col-md-10\"><h3>"+ data[item].title +"</h3><p> 类型： "+ data[item].genres +"</p><p> 上映时间： "+ data[item].year +"</p></div>";
//                 list +=        "</div>" ;
//                 list += "</li>";
//             $("#movie_list").append(list);
//                 // console.log(list);
//             }
//         }  
//     );

    
// });


// 测试github上的豆瓣数据
// $(document).ready(function(){
//     $.getJSON("https://jarvis1688.github.io/shop2016/in_theaters.json",  
//         function (data) {  
//             data = data["subjects"];
//             for(var item in data){
//                 console.log(data[item].title);
//             }
//         }  
//     );

// });





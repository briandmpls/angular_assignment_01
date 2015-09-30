$(function() {
    var winnerBracket = [];
    var winningCanidate = "";

        $.ajax({
            url: "/getRepublicans"
        }).done(function (response) {
            //console.log(response);
            for (var i = 0; i < response.length; i++) {
                //console.log(response[i]);
                winnerBracket[i] = response[i].name;
                //console.log(winnerBracket);
                var $content = $("<li><p>" + response[i].name + "</p></li>");
                $(".republicans").append($content);
            }

        })
            $.ajax({
                url: '/getDemocrats'
            }).done(function (response) {
                //console.log(response);
                for (var i = 0; i < response.length; i++) {
                    //console.log(response[i]);
                    //console.log(winnerBracket);
                    winnerBracket[i+5] = response[i].name;
                    var $content = $("<li><p>" + response[i].name + "</p></li>");
                    $(".democrats").append($content);
                    //console.log(winnerBracket);

                }
                    president();
                    //console.log(president());
            })

                var president = function(){
                    var randNum = Math.floor(Math.random() *(10-1)+1);
                   // console.log(randNum);
                     winningCanidate = winnerBracket[randNum];
                   console.log("this is the winner" + winningCanidate);
        };

            $('.btn-danger').on("click", function (event) {
                $(".showWinner").html(winningCanidate);
            });


            $('.btn-primary').on("click", function (event) {
                $(".republicans").css("visibility", "visible");
                $(".democrats").css("visibility", "visible");
            });
});




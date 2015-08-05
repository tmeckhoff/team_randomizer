var peopleArray = [];
var teamNum;
var num = 1;

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}


$(document).ready(function () {
    //take the data from people.json and push them into peopleArray
    $.ajax({
        url: "/data",
        success: function (data) {
            $.each(data, function () {
                peopleArray.push(this.name);
            });
        }

    });
        //when you click a number button, take the text inside that button and save it to teamNum
    $('body').on('click', '.numberButton', function(){
        teamNum = $(this).text();

    });

    //when you click the randomButton, shuffle the peopleArray, loop to create the correct number of groups based on what the value of teamNum is
    // and append the groups to the DOM
    $('body').on('click', '.randomButton', function(){

       peopleArray = shuffle(peopleArray);

        for (var i = 1; i <= teamNum; i++) {
            $("#cohort").append("<div class='group" + i + "'></div>");
            $(".group" + i).append("<h3>Group " + (i) + "</h3>");

        }
            //loop through the peopleArray, start at group 1 and append each name in the array to each group until the group number is equal
        //to the teamNum value, once that happens, set num back to 1 and start looping again until you reach the end of peopleArray. Each time
        //through the loop, append every name in the array to the .group divs starting with the last(first). Do so with a delayed fadeIn one at a time.
        for (i = 0; i < peopleArray.length; i++) {

            $(".group" + num).append("<p>" + peopleArray[i] + "</p>");
            var peeps = $(".group" + num).children().last();
            peeps.hide().delay(300 * i).fadeIn(200);
            num++;

            if(num > teamNum){
                num = 1;
            }

        }

    });



});//end document ready

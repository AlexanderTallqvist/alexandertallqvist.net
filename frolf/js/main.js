/* MAIN JS */


$(document).ready(function(){
   
   //Global variables for player 1
   var sum0 = 0;
   var average0 = 0;
   var sum0plus = 0;
   
   //Global variables for player 2
   var sum1 = 0;
   var average1 = 0;
   var sum1plus = 0;
   
   //Global variables for player 3
   var sum2 = 0;
   var average2 = 0;
   var sum2plus = 0;
    
   //Global variables for player 4
   var sum3= 0;
   var average3 = 0;
   var sum3plus = 0;
   
   //Global variables for player 5
   var sum4 = 0;
   var average4 = 0;
   var sum4plus = 0;
   
   //Global variables for player 6
   var sum5 = 0;
   var average5 = 0;
   var sum5plus = 0;
   
   //Global variables for player 7
   var sum6 = 0;
   var average6 = 0;
   var sum6plus = 0;
   
   //Variable for the sum of all pars
   var parsum;
   
   //Hide all but the player 00 field by default and reset their values. Also reset course name and hide the error field
   $('#player00').val("");
   $("input[name=rata]").val("");
   $('#player01').hide().val("");
   $('#player02').hide().val("");
   $('#player03').hide().val("");
   $('#player04').hide().val("");
   $('#player05').hide().val("");
   $('#player06').hide().val("");
   $(".error").hide();
   $(".score-table").hide();
   $(".score-container").hide();
   $(".game-container").hide();
   $("#tulokset").hide();
   $("footer").hide();
   
   
   //Show different player fields depending on the selected player amount
   $(document).on('change','.info-player-amount', function(){
      
      var pamount = $(".info-player-amount :selected").val();
      
      //Show and hide different amount of players fields
      if( pamount == 1) {$('#player00').show();$('#player01, #player02, #player03, #player04, #player05, #player06').hide();}
      if( pamount == 2) {$('#player00, #player01').show();$('#player02, #player03, #player04, #player05, #player06').hide();}
      if( pamount == 3) {$('#player00, #player01, #player02').show();$('#player03, #player04, #player05, #player06').hide();}
      if( pamount == 4) {$('#player00, #player01, #player02, #player03').show();$('#player04, #player05, #player06').hide();}
      if( pamount == 5) {$('#player00, #player01, #player02, #player03, #player04').show();$('#player05, #player06').hide();}
      if( pamount == 6) {$('#player00, #player01, #player02, #player03, #player04, #player05').show();$('#player06').hide();}
      if( pamount == 7) {$('#player00, #player01, #player02, #player03, #player04, #player05, #player06').show();}
      
   });
   
   
   //Initiate the game on button click
   $(".submit-button").click(function(){
      
      //Get the data from the different text fields
      var namecheck = $("input[name=rata]").val();
      var player00check = $("input[name=player00]:visible").val();
      var player01check = $("input[name=player01]:visible").val();
      var player02check = $("input[name=player02]:visible").val();
      var player03check = $("input[name=player03]:visible").val();
      var player04check = $("input[name=player04]:visible").val();
      var player05check = $("input[name=player05]:visible").val();
      var player06check = $("input[name=player06]:visible").val();
      
      
      //Check if said fields are empty, return if true
      if(namecheck == "") {$(".error").show();return;}
      if(player00check == "") {$(".error").show();return;}
      if(player01check == "") {$(".error").show();return;}
      if(player02check == "") {$(".error").show();return;}
      if(player03check == "") {$(".error").show();return;}
      if(player04check == "") {$(".error").show();return;}
      if(player05check == "") {$(".error").show();return;}
      if(player06check == "") {$(".error").show();return;}
      
      
      //Hide the game info screen
      $(".rata-info-inner").slideUp(500);
      
      //Show the score table
      $(".score-table").show();
      $(".score-container").show();
      $("footer").show();
      $(".game-container").fadeIn(1000);
      
      //Empty any previous data
      $(".game").empty();
      $(".score").empty();
      $(".error").hide();
      
      
      //Get the course name
      var rata = $("input[name=rata]").val();
      
      
      //Get the amount of tracks
      var vayla = $(".info-vayla :selected").val();
      
      
      //Get the amount of players and set amount - 1
      var playeramount = $(".info-player-amount :selected").val();
      playeramount = playeramount - 1;
      
      
      //Create variables and arrays
      var players = [];  
      var  output, playeroutput = "";
      
      
      //Get the players and put them into the players array
      for(i = 0; i <= playeramount; i++) {
         players[i] = $("input[name=player0" + i + "]").val(); 
      }
      
      
      //Add the course title to the page
      $(".game-heading").append("<h3>" + rata + "</h3>");
      
      
      //The output loop
      for (j = 1; j <= vayla; j++) {
         
         //Add the playeroutput to the normal output
         output ="<div class='rata" + j + " rata-individual'>";
         
         
         //Add the tracks number
         output += "<h3>Väylä " + j + "</h3><br>" ;
         
         
         //For loop to print out player score for each track
         for(k = 0; k < players.length; k++) {

            playeroutput += players[k] + 
            "<div class='individual-player-score'><div class='score-buttons " + "player" + k + "'><button class='sub'>-</button><span>3</span><button class='add'>+</button></div></div>"                   
         }
         
         
         output += "<div class = 'par'>Par"  + "<select class='ratapar'><option value='1'>1</option><option value='2'>2</option><option selected value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option></select></div>" + "<br>"
         
         output+= playeroutput + "</div>";
         
         
         //Print out the ouput for each track
         $(".game").append(output);
         
         
         //Reset the strings
         output = "";
         playeroutput = "";
         
      }
      
      
      //Set the width of the game container
      var gameWidth = $('.rata-individual').width() * vayla;
      
      $('.game').width(gameWidth);
      
   
      //Animate game with the arrow buttons
      var slide = $(".rata-individual").width(),
      amount = $(".game .rata-individual").length,
      slidecount = 0;

      $("#a-left, #a-right").click(function(){

         this.id=="a-right" ? slidecount ++ : slidecount --

         slidecount = slidecount === -1 ? amount-1 : slidecount%amount;

         $(".game").stop().animate({left: -slidecount * slide}, 10);

      });      
      
      
      //Print out the divs that display the players total score
      for(h = 0; h < players.length; h++) {
         $('.score').append("<div class='individual-score' id='sum" + h + "'>" + "<span class='player-name'>" + players[h] + "</span>" + "<br>Tulos: <span class='tulos'>0</span> <br>Keskiarvo : <span class='avg'>0</span></div><br>")
      }
   
   
      //Function for caculating an average value for each player
      function round(value, precision) {
         var multiplier = Math.pow(10, precision || 0);
         return Math.round(value * multiplier) / multiplier;
      }

      //The amount of trackes on the course
      var vaylaamount = $(".info-vayla :selected").val();
      
      
      //Get the par sum
      parsum = vaylaamount * 3;
      
      
      //Get the sum of the total par for the course
      $(document).on('change','.ratapar', function(){
         
         parsum = 0;
         
         //Get the selected amount from each track par
         $('.ratapar :selected').each(function(){

            //Add the numbers upp
            parsum += Number($(this).val());

         });
         
      });
      
      //Add and subtract scores from each player
      $('.add').click(function(){
         var addold = $(this).prev().html();
         var addnew = Number(addold) + 1;
         if (addnew == 10){addnew = 1};
         $(this).prev().empty();
         $(this).prev().html(addnew);
         
         //Printing out the score button
         $("#tulokset").show();
      });

      
      $('.sub').click(function(){
         var subold = $(this).next().html();
         var subnew = Number(subold) - 1;
         if (subnew == 0){subnew = 9};
         $(this).next().empty();
         $(this).next().html(subnew);
         
         //Printing out the score button
         $("#tulokset").show();
         
      });
      
      
      //Change player 1 score
     function uppdate1() {
         
         sum0 = 0;
         average0 = 0;
         sum0plus = 0;

         //Get the selected amount from each input
         $('.player0 span').each(function(){

            //Add the numbers upp
            sum0 += Number($(this).html());

         });
         
         //Calculate an average score
         average0 = sum0 / vaylaamount;

         //Calculate how much +score
         sum0plus = sum0 - parsum;
        
         //Add plus sign to total plus number if needed
         if (sum0plus >= 0) {sum0plus = "<b>(+" + sum0plus + ")</b>"};
         if (sum0plus < 0) {sum0plus = "<b>(" + sum0plus + ")</b>"};

         $("#sum0 .tulos").html(sum0 + " " + sum0plus);

         //Use the average function to return a rounded value
         $("#sum0 .avg").html(round(average0, 1));

      };
      
      //COPY TO REST

      //Change player 2 score
     function uppdate2() {

         sum1 = 0;
         average1 = 0;
         sum1plus = 0;

         $('.player1 span').each(function(){

            sum1 += Number($(this).html());

         });
         
         average1 = sum1 / vaylaamount;

         sum1plus = sum1 - parsum;

         if (sum1plus >= 0) {sum1plus = "<b>(+" + sum1plus + ")</b>"};
         if (sum1plus < 0) {sum1plus = "<b>(" + sum1plus + ")</b>"};         

         $("#sum1 .tulos").html(sum1 + " " + sum1plus);
         
         $("#sum1 .avg").html(round(average1, 1));
      };


      //Change player 3 score
     function uppdate3() {

         sum2 = 0;
         average2 = 0;
         sum2plus = 0;

         $('.player2 span').each(function(){

            sum2 += Number($(this).html());

         });
         
         average2 = sum2 / vaylaamount;

         sum2plus = sum2 - parsum;

         if (sum2plus >= 0) {sum2plus = "<b>(+" + sum2plus + ")</b>"};
         if (sum2plus < 0) {sum2plus = "<b>(" + sum2plus + ")</b>"};         

         $("#sum2 .tulos").html(sum2 + " " + sum2plus);
         
         $("#sum2 .avg").html(round(average2, 1));

      };


      //Change player 4 score
     function uppdate4() {

         sum3 = 0;
         average3 = 0;
         sum3plus = 0;

         $('.player3 span').each(function(){

            sum3 += Number($(this).html());
            
         });
         
         average3 = sum3 / vaylaamount;

         sum3plus = sum3 - parsum;
        

         if (sum3plus >= 0) {sum3plus = "<b>(+" + sum3plus + ")</b>"};
         if (sum3plus < 0) {sum3plus = "<b>(" + sum3plus + ")</b>"};         

         $("#sum3 .tulos").html(sum3 + " " + sum3plus);
         
         $("#sum3 .avg").html(round(average3, 1));

      };
      
      
      //Change player 5 score
     function uppdate5() {
         
         sum4 = 0;
         average4 = 0;
         sum4plus = 0;

         $('.player4 span').each(function(){

            sum4 += Number($(this).html());

         });
         
         average4 = sum4 / vaylaamount;
         
         sum4plus = sum4 - parsum;

         if (sum4plus >= 0) {sum4plus = "<b>(+" + sum4plus + ")</b>"};
         if (sum4plus < 0) {sum4plus = "<b>(" + sum4plus + ")</b>"};         

         $("#sum4 .tulos").html(sum4 + " " + sum4plus);
         
         $("#sum4 .avg").html(round(average4, 1));

      };


      //Change player 6 score
     function uppdate6() {

         sum5 = 0;
         average5 = 0;
         sum5plus = 0;

         $('.player5 span').each(function(){

            sum5 += Number($(this).html());

         });
         
         average5 = sum5 / vaylaamount;

         sum5plus = sum5 - parsum;

         if (sum5plus >= 0) {sum5plus = "<b>(+" + sum5plus + ")</b>"};
         if (sum5plus < 0) {sum5plus = "<b>(" + sum5plus + ")</b>"};         

         $("#sum5 .tulos").html(sum5 + " " + sum5plus);
         
         $("#sum5 .avg").html(round(average5, 1));

      };
      
      
      //Change player 7 score
     function uppdate7() {

         sum6 = 0;
         average6 = 0;
         sum6plus = 0;

         $('.player6 span').each(function(){

            sum6 += Number($(this).html());

         });
         
         average6 = sum6 / vaylaamount;

         sum6plus = sum6 - parsum;

         if (sum6plus >= 0) {sum6plus = "<b>(+" + sum6plus + ")</b>"};
         if (sum6plus < 0) {sum6plus = "<b>(" + sum6plus + ")</b>"};         

         $("#sum6 .tulos").html(sum6 + " " + sum6plus);
         
         $("#sum6 .avg").html(round(average6, 1));

      };
      
      
      //Call the uppdate functions when the score changes
      $('.add').click(function(){
         uppdate1();
         uppdate2();
         uppdate3();
         uppdate4();
         uppdate5();
         uppdate6();
         uppdate7();
      });
                      
      $('.sub').click(function(){
         uppdate1();
         uppdate2();
         uppdate3();
         uppdate4();
         uppdate5();
         uppdate6();
         uppdate7();
      });

      $(document).on('change','.ratapar', function(){
         uppdate1();
         uppdate2();
         uppdate3();
         uppdate4();
         uppdate5();
         uppdate6();
         uppdate7();
      });    
      
   
   });
   
   
   //Print the results into a table
   $("#tulokset").click(function(){
      
      //Get the amount of tracks
      var AmountVayla = $(".info-vayla :selected").val();
      
      
      //Get the amount of players and set amount - 1
      var AmountPlayers = $(".info-player-amount :selected").val();
      AmountPlayers = AmountPlayers - 1;
      
      
      //Create variables and arrays
      var AllPlayers = [],
          ScoreTrack,
          letters = 0;
      
      //The the course name
      var ratanimi = $("input[name=rata]").val();
      
      //Create the table and get the current date
      var date = new Date();
      var curr_date = date.getDate();
      var curr_month = date.getMonth() + 1;
      var curr_year = date.getFullYear();
      var thdate = curr_date + "." + curr_month + "." + curr_year + " | " + ratanimi;     
      
      var table = thdate + "<br>"
      
      table += "<table>" +"<th>Väy.<br>(Par)</th>";
      
      //Get the players and put them into the players array and table header
      for(n = 0; n <= AmountPlayers; n++) {
         var playersname = AllPlayers[n] = $("input[name=player0" + n + "]").val();
         
         
         //Get a suitable number of letters from the player names
         if (AmountPlayers > 4) {letters = 3}
         
         else if (AmountPlayers <= 4 && AmountPlayers >= 3) {letters = 4}

         else if (AmountPlayers <= 2 && AmountPlayers >= 1) {letters = 6}
         
         else {letters = 7}
         
         //Cut the name string and cap. it
         var namestring = playersname.substring(0,letters);
         namestring = namestring.toUpperCase();
         table += "<th>" + namestring + "</th>"
      }
      
      //Get the scores from each track and add them to the table
      for (p = 1; p <= AmountVayla; p++) {
          
         //Get the data from each div with a rata + nr name
         $('.rata' + p).each(function(){
            
            //Get the current par of the current track
            var currentpar = $('.rata' + p + ' .ratapar :selected').val();
            
                   
            //Add väylä and par
            table += "<tr><td>" + p + " | " + "(" + currentpar + ")</td>"
            
            //Select each value from all the divs
            for(b = 0; b <= AmountPlayers; b++){
               
               //Select the value for a specifi player for a specifi track
               ScoreTrack = $('.rata' + p + ' .player' + b + ' span').html();
               
               
               //Add data to table
               if (Number(ScoreTrack) + Number(2) <= Number(currentpar)){table += "<td style='background:#FF00FF;'>" + ScoreTrack + "</td>";}
               else if (Number(ScoreTrack) + Number(1) == Number(currentpar)){table += "<td style='background:#00FFFF;'>" + ScoreTrack + "</td>";}
               else if (Number(ScoreTrack) + Number(0) == Number(currentpar)){table += "<td style='background:#00FF00;'>" + ScoreTrack + "</td>";}
               else if (Number(ScoreTrack) + Number(-1) == Number(currentpar)){table += "<td style='background:yellow;'>" + ScoreTrack + "</td>";}
               else if (Number(ScoreTrack) + Number(-2) == Number(currentpar)){table += "<td style='background:orange;'>" + ScoreTrack + "</td>";}
               else if (Number(ScoreTrack) + Number(-3) >= Number(currentpar)){table += "<td style='background:red;'>" + ScoreTrack + "</td>";}

      
               
               else{table += "<td>" + ScoreTrack + "</td>";}
            }
            
            //Close the row
            table += "</tr>"

         });
      }
      
      //Append score to bottom of table depending on how many players there are
      
      if (AmountPlayers == 6) {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td>" + "<td>" + sum1 + "<br>" + sum1plus + "</td>" + "<td>" + sum2 + "<br>" + sum2plus + "</td>" + "<td>" + sum3 + "<br>" + sum3plus + "</td>" + "<td>" + sum4 + "<br>" + sum4plus + "</td>" + "<td>" + sum5 + "<br>" + sum5plus + "</td>" + "<td>" + sum6 + "<br>" + sum6plus +  "</td></tr>"
      table += "</table>"}
      
      else if (AmountPlayers == 5) {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td>" + "<td>" + sum1 + "<br>" + sum1plus + "</td>" + "<td>" + sum2 + "<br>" + sum2plus + "</td>" + "<td>" + sum3 + "<br>" + sum3plus + "</td>" + "<td>" + sum4 + "<br>" + sum4plus + "</td>" + "<td>" + sum5 + "<br>" + sum5plus + "</td></tr>"
      table += "</table>"}
      
      else if (AmountPlayers == 4) {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td>" + "<td>" + sum1 + "<br>" + sum1plus + "</td>" + "<td>" + sum2 + "<br>" + sum2plus + "</td>" + "<td>" + sum3 + "<br>" + sum3plus + "</td>" + "<td>" + sum4 + "<br>" + sum4plus + "</td></tr>"
      table += "</table>"}
      
      else if (AmountPlayers == 3) {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td>" + "<td>" + sum1 + "<br>" + sum1plus + "</td>" + "<td>" + sum2 + "<br>" + sum2plus + "</td>" + "<td>" + sum3 + "<br>" + sum3plus + "</td></tr>"
      table += "</table>"}
      
      else if (AmountPlayers == 2) {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td>" + "<td>" + sum1 + "<br>" + sum1plus + "</td>" + "<td>" + sum2 + "<br>" + sum2plus + "</td></tr>"
      table += "</table>"}
      
      else if (AmountPlayers == 1) {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td>" + "<td>" + sum1 + "<br>"+ sum1plus + "</td></tr>"
      table += "</table>"}
      
      else {
      
      table += "<tr><td>=" + parsum + "</td>" + "<td>" + sum0 + "<br>" + sum0plus + "</td></tr>"
      table += "</table>"} 
      
      //Empty the old table
      $('.score-table').empty();
      
      //Add the new one
      $('.score-table').append(table);
      
      
   });
   
   
   //Animations and transitions
   $(".submit-new").click(function(){
      
      $(".welcome-screen").addClass('welcome-screen-transition');
      
   });
   

   //Hide and show on button click
   $("#tulokset").click(function(){
      $(".score-container").addClass('show-score');
      $(".game-container").hide();
      $("footer").hide();

   });
   
   
   //Hide and show on button click
   $(".close, .close-bottom").click(function(){
      $(".score-container").removeClass('show-score');
      $(".game-container").show();
      $("footer").show();

   });
   
   
   //Prevent page reload on accident
  window.onbeforeunload = function() {
   return "Are you sure you want to navigate away?";
   }
   
   
});
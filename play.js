var number = Math.floor((Math.random() * 10) + 1);
var choice = 3;


    function check()
    {
        var user_name = localStorage.getItem("name");
        var u_number = document.getElementById("user_number").value;
                    
          if(choice <= 3 && choice > 0)
          {
            if(u_number < number)
            {
                    document.getElementById("output").innerHTML="Entered number is low";
                    document.getElementById("output").style.color= "#f9004d";
                    choice--;
                    if(choice == 0)
                    {
                        document.getElementById("output").innerHTML="Better luck next time " + user_name;
                        document.getElementById("choice_left").innerHTML=choice + " Left";
                    }
                    else
                    {
                        document.getElementById("choice_left").innerHTML=choice + " Left";
                    }
            }
            else if (u_number > number) 
                {
                    document.getElementById("output").innerHTML="Entered number is high";
                    document.getElementById("output").style.color= "#f9004d";
                    choice--;
                    if(choice == 0)
                    {
                        document.getElementById("output").innerHTML="Better luck next time " + user_name;
                        document.getElementById("choice_left").innerHTML=choice + " Left";
                    }
                    else
                    {
                        document.getElementById("choice_left").innerHTML=choice + " Left";
                    }
                } 
                else if (u_number == number)
                {
                    document.getElementById("output").innerHTML="Congratulations " + user_name + " You Predicted Correctly!!!!";
                    document.getElementById("output").style.color= "#f9004d";
                } 
          }
          else if(choice == 0)
          {
            document.getElementById("output").innerHTML="Better luck next time " + user_name;
          }
          
      }

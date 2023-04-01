//Update An Emails For Required Seat Number
function update_emails() {
    console.log("UPDATE AN EMAIL ADDRESS");
    bookingData.forEach((booking,index)=>{
        if(index<n){
            console.log("-->", bookingData[index].seat);
        }
    });
  
    rl.question("Choose Any One Of The Above Seat Number To Update Email : ",(answer)=>{
        console.log(answer);
        let foundBooking = false;
        for (let i = 0; i < n; i++) {
            if (answer === bookingData[i].seat) {
                foundBooking = true;
                if (bookingData[i].bookingid !== "_") {
                    console.log("Email Is Already Exist");
                    rl.question("If You Want To Update Press 'Y': ", (ans) => {
                        if (ans === "Y") {
                        updateEmail(i);
                        } else {
                            menu();
                        }
                    });
                } 
                else {
                    console.log("User Has No Email Address");
                    try{
                        rl.question("Enter An Email Address: ", (em) => {
                            //userData[i].email = em;
                            console.log("Unable To Update")
                            menu()
                        });
                    }
                    catch{
                        console.log("Unable To Update")
                        menu()
                    }
                }
            }
        }
        if(!foundBooking){
            console.log("Invalid Seat Number");
            menu();
        }
    });
}
function updateEmail(index){
    rl.question("Enter New Email :",(e)=>{
        userData[index].email=e;
        menu();
    });
}
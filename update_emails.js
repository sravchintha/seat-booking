//3 UPDATE AN EMAILS
function update_emails() {
    console.log("UPDATE AN EMAIL ADDRESS");
    //Defining BOOKING DATA Into An Array
    bookingData.forEach((data,index)=>{
        i=index;
        if(i<n){
            ID[i]=bookingData[i].bookingid;
            SEAT[i]=bookingData[i].seat;
        }
        console.log(SEAT[i]);
    })
    rl.question("Choose Any One Of The Above Seat Number To Update Email : ",(answer)=>{
        console.log(answer);
        let foundBooking=false;
        for(let i=0;i<n;i++){
            if(answer===SEAT[i]){
                foundBooking=true;
                for(let j=0;j<=m;j++){
                    if(bookingData[i].bookingid==userData[j].bookingid){
                        update_exist_email(j);
                    }
                }
            }
        }
        if(!foundBooking){
            console.log("Invalid Seat Number");
            menu()
        }
    });
}
//Update An Existing Email In User Data
function update_exist_email(j){
    console.log("Email Is Already Exist");
    rl.question("If You Want To Update Press 'Y': ", (ans) => {
        if(ans==="Y"){
            rl.question("Enter New Email :",(e)=>{
                userData[j].email=e
                fs.appendFileSync('user_update.txt',userData[j].bookingid+':'+e+';\n',(err)=>{
                    if(err){
                        console.log("Error At append_user1()")
                    }
                })
            });
        }
    });
    menu()
}
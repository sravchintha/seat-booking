//4 CLEAR BOOKING
function clear_booking(){
    console.log("4. CLEAR BOOKING")
    console.log("WARNING")
    rl.question('You Want To Clear BookingID? Enter : "Y"',(answer)=>{
        if(answer=='Y'){
            //Clear BOOKING ID Data In BOOKING_DATA.TXT
            bookingData.forEach((data,index)=>{
                var i=index
                bookingData[i].bookingid='_'
                if(i<n){
                    fs.appendFileSync(`booked_update.txt`,bookingData[i].seat+":"+bookingData[i].bookingid+";",err=>{
                        if(err){
                            console.log("Unable To Update Clear Booking")
                        }
                        else{
                            console.log(bookingData[i].seat,":",bookingData[i].bookingid)
                        }
                    })
                }
            })
            //Clear BOOKING ID In USER.TXT
            console.log('here::', userData)
            userData.forEach((line,index)=>{
                var i=index
                userData[i].bookingid='_'
                if(i<m){
                    fs.appendFile(`user_update.txt`,userData[i].bookingid+":"+userData[i].email+";",(err)=>{
                        if(err){
                            console.log("Unable To Update Clear Booking")
                        }
                    })
                }
                menu()
            })
        }
        else{
            menu()
        }
    })
}
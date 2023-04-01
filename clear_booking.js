//Clear Booking
function clear_booking(){
    console.log("4. CLEAR BOOKING")
    console.log("WARNING")
    rl.question('You Want To Clear BookingID? Enter : "Y"',(answer)=>{
        if(answer=='Y'){
            bookingData.forEach((data,index)=>{
                bookingData[index].bookingid='_'
            })
            userData.forEach((line,index)=>{
                userData[index].bookingid='_'
            })
            bookingData.forEach((data,index)=>{
                console.log(bookingData[index].seat,bookingData[index].bookingid)
            })
            menu()
        }
        else{
            menu()
        }
    })
}
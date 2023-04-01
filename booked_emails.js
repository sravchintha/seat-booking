//Display All Booked Seats With Their Emails
function booked_emails(){  
    console.log("\nBOOKED SEATS WITH THEIR EMAILS")
    for(i=0;i<m;i++){
        if(userData[i].bookingid!=='_'){
            console.log(userData[i].bookingid, userData[i].email)
        }
    }
    menu()
}
//2 DISPLAY BOOKED SEATS AND THEIR EMAILS
function booked_emails(){
    console.log("\nBOOKED SEATS WITH THEIR EMAILS")
    bookingData.map(x => ({ ...x, userId: x.bookingid})).filter(x => x.userId !== '_').filter(x => !!x.seat).forEach((data,j)=>{
        const userTargetData = userData.find(x => x.bookingid === data.userId)
        console.log(data.seat, userTargetData?.email || '-')
    })
    menu()
}
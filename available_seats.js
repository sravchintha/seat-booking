function available_seats(){
    console.log("\nAVAILABLE SEATS TO BOOK :" )
    for(let i=0;i<n;i++){
        if(bookingData[i].bookingid=='_'){
            console.log(bookingData[i].seat)
        }
    }
    menu()
}
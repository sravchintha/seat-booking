const fs=require('fs')
const readline=require('readline')
bookingData=[]
userData=[]
//Creating An Interface Of Readline
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var n,m           //N,M Variables Used For Find length Of BOOKED.TXT and USER.TXT Files
//Getting Data From BOOKED.TXT File
fs.readFile(`booked.txt`,'utf8',(err,data)=>{
    if(err){
        console.error(err)
    }
    else{
        const lines=data.split(';')
        lines.forEach((line,index)=>{
            const[s,id]=line.split(':')
            bookingData[index]={seat:s,bookingid:id}
        })
        n=bookingData.length-1
    }
})
//Getting Data From USER.TXT File
fs.readFile(`user.txt`,'utf8',(err,data)=>{
    if(err){
        console.error(err)
    }
    else{
        const lines=data.split(';')
        lines.forEach((line,index)=>{
            const[Id,Mail]=line.split(':')
            userData[index]={bookingid:Id,email:Mail}
        })
        m=userData.length-1
    }
})
menu()   //MENU Funtion Calling To Execute For User Requirements
//MENU Function Declaration
function menu() {
    console.log('\nWELCOME TO MY KIOSK :');
    console.log('1. VIEW ALL THE SEATS AVAILABLE TO BOOK');
    console.log('2. VIEW ALL THE BOOKES SEATS WITH EMAIL ADDRESSES');
    console.log('3. UPDATE EMAIL ADDRESS OF THE BOOKING');
    console.log('4. CLEAR BOOKING');
    rl.question('\nPLEASE CHOOSE AN OPTION : ', (answer) => {  //Getting A Key From User
        switch(answer){
            case '1':
                available_seats();
              break;
            case '2':
                booked_emails();
                break;
            case '3':
                update_emails();
                break;
            case '4':
                clear_booking();
                break;
            default:
                console.log('INVALID OPTION');
                process.exit();
        }
    });
}
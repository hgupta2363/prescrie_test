var app=require('express')()
const cors=require('cors')
const bodyParser=require('body-parser');
port=5000;
var firebase = require("firebase");
const Insta = require('instamojo-nodejs');
app.use(cors());
var dets=[]
// var serviceAccount = require('C:/Users/chdno/Desktop/All desktop Files/PresAssignment/my-app/backend/prescribetask-firebase-adminsdk-jh3c7-d97cd99717.json');
app.use(bodyParser.json());
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://speech-f3243.firebaseio.com/"
// });
const config = {
    apiKey: "AIzaSyDrB03c-kX6zU64_joKByPxOw09a6p4kPU",
    authDomain: "speech-f3243.firebaseapp.com",
    databaseURL: "https://speech-f3243.firebaseio.com",
    projectId: "speech-f3243",
    storageBucket: "speech-f3243.appspot.com",
    messagingSenderId: "26831214028",
    appId: "1:26831214028:web:422e25a6b7384009"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database= firebase.database();





// var expressSession=require('express-session')
// app.use(expressSession({secret:'max',saveUninitialised:false,re save:false}))
// app.get('/',(req,res,next)=>{
//     usersRef.ref()on('value',snap=>{
//       res.send(snap.val())
//     })
// })
app.get("/final",(req,res,next)=>{
    Insta.setKeys('test_26d6db7fdb9cf8319c5413c8454', 'test_5c2bc0dd788ecd74e17052e5541');

	const data = new Insta.PaymentData();
    Insta.isSandboxMode(true);
    data.purpose =  "just check";
	data.amount =10;
	data.buyer_name ="Himashu ";
	data.redirect_url =  `http://localhost:3000/payment_status`;
	data.phone="8118853410"
	data.send_email =  false;
	data.webhook= 'http://www.example.com/webhook/';
	data.send_sms= false;
    data.allow_repeated_payments =  false;
    Insta.createPayment(data, function(error, response) {
		if (error) {
		console.log(error)
		} else {
			// Payment redirection link at response.payment_request.longurl
            const responseData = JSON.parse( response );
            console.log(responseData)
			const redirectUrl = responseData.payment_request.longurl;
			console.log( redirectUrl );

			res.status( 200 ).json( redirectUrl );
		}
	});


})
app.get("/callack",(req,res,next)=>{
    let url_parts = url.parse( req.url, true),
    responseData = url_parts.query;
    if ( responseData.payment_id ) {

        return res.redirect('http://localhost:3000/payment_status'+'/'+responseData.payment_id );

    }


})
app.post('/patientDetail',(req,res,next)=>{
    const user_id=database.ref('/patients_data').push().key
    const HospitalName="Dummy";
    database.ref('/patients_data').child(HospitalName).set({
        pid:user_id,
        age:req.body.age,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        sex:req.body.sex,
        address:req.body.address,
        DoctorId:req.body.docId,
        HospitalName:HospitalName,
        docName:req.body.docName,
        Slot:req.body.Slot
    })
    res.send({status:true,PatientId:user_id,HosName:HospitalName})
})
//app.get('/final/:name',(req,res,next)=>{
   // database.ref('/patients_data/'+req.params.name).once('value',snap=>{
     //  res.send(snap.val())
    //})
//})
app.get('/getData',(req,res,next)=>{
    
    var doc=new Array();
    var today = new Date();
    if(today.getMonth()+1<=9)
    var Month='0'+(today.getMonth()+1);
    console.log(Month)
    if(today.getDate()<=9)
    var todayDate='0'+(today.getMonth()+1);
    var date =todayDate+'-'+Month+'-'+today.getFullYear();
    console.log(date)
    const usersRef=database.ref(`schedule/${date}`);
    usersRef.once('value')
    .then(function(snapshot){
           snapshot.forEach(function(childSnapshot){
                doc.push(childSnapshot.val())
            })
            res.send(doc)
    }).catch(err=>{
        console.log(err)
    })  
  
})

app.post('/newUser',(req,res,next)=>{
    const user_id=usersRef.push().key;
    const email=req.body.email;
    const username=req.body.username;
    usersRef.orderByChild('email').equalTo(email).once('value').then((snapshot)=>{
        if(snapshot.val()!=null)
        {
            res.json({error:"This Email ID Exist Already"})
            console.log(snapshot.val())
        }
         //if Email Exist Already
        else 
        {
            usersRef.orderByChild('username').equalTo(username).once('value').then((snapshot)=>{
                if(snapshot.val()!=null)
                res.json({error:"Username Already Registered Try Different"}) // f username Exist Already
                else
                {
                usersRef.child(user_id).set({
                    username:req.body.username,
                    bloodGroup:req.body.bloodGroup,
                    age:req.body.age,
                    dateOfBirth:req.body.dateOfBirth,
                    email:req.body.email,
                    password:req.body.password
                })
                res.send({status:true})
               }
            })
        }
    })
})
app.post('/Login',(req,res,next)=>{
    const checkData={
    email:req.body.email,
    password:req.body.password
    }
    usersRef.orderByChild('email').equalTo(checkData.email).once('value')
    .then((snapshot)=>{
            
        if(!snapshot.val()) {
           
                res.json({error:"User Not Registered",session:false})      
        }   
        else{
            snapshot.forEach(function(childSnapshot){
                var PrimaryKey=childSnapshot.key;
                if(childSnapshot.val().password==checkData.password)
                {
                   
                    const LoggedUser=childSnapshot.key;
                    res.json({LoggedUser,session:true,sessionID:PrimaryKey})
                }
                else
                {
                    res.json({error:'Wrong Password',session:false})
                }
            })
        }
        
    }).catch(err=>{
        console.log(err);
})
})
app.get('/:id',(req,res,next)=>{
    database.ref('users/'+req.params.id).once('value')
    .then((snapshot)=>{
    res.send(snapshot.val())
    })
    
})
app.post('/Logout',(req,res,next)=>{
//    req.session.ID=null;
   res.json({
       destroyed:true
   })
})

app.post("/callback",(req,res,next)=>{
    
   const data=req.body
    res.json(data)
       
})
app.listen(port,()=>{
    console.log(`Runninnnn on ${port}`)
})
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
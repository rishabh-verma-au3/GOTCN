var express=require('express')

var app=express();

var path= require('path')

app.use(express.static(path.join(__dirname, 'battles.csv')));

const PORT = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(express.static(('/frontend/public')));


const mongoose =require('mongoose');
var key=require("./keys.js").a.key
mongoose.connect(key,{
    useNewUrlParser: true ,
    useUnifiedTopology: true
}
).then(()=>{
      console.log("connecting to mongo")
})



const BattleSchema=new mongoose.Schema({
        name: String ,
        year: Number,
        battle_number:Number,
        attacker_king:String,
        defender_king:String,
        attacker_1:String,
        attacker_2:String,
        attacker_3:String,
        attacker_4:String,
        defender_1:String,
        defender_2:String,
        defender_3:String,
        defender_4:String,
        attacker_outcome:String,
        battle_type:String,
        major_death:Number,
        major_capture:Number,
        attacker_size:Number,
        defender_size:Number,
        attacker_commander:String,
        defender_commander:String,
        summer:Number,
        location:String,
        region:String,
        note:String

})

const BattleField = mongoose.model('BattleField', BattleSchema );

const cors = require('cors')
app.use(cors());


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions));


//-----------------------------------------------

// returns list(array) of all the places where the battle has taken place.
app.get("/list",(req,res)=>{

  BattleField.find({},'location', function(err, result) {
    if (err) {
      // res.send(err);
      console.log(err)
    } else {
      //console.log(result)
      // let arr=[]
      let st=new Set();
      for(let i of result){
        // arr.push(i.location)
         st.add(i.location)
         i+=1;
      }
     // console.log(st)
      res.send({list:[...st].filter((item)=>(item!==""))})
    }
  });

})

//----------------------------------------------------------
//returns the total number of battles occurred.
app.get("/count",(req,res)=>{

  BattleField.find({},'battle_number', function(err, result) {
    if (err) {
      // res.send(err);
      console.log(err)
    } else {

      console.log(result.length)
      res.send({"total":result.length})
    }
  });

})


//-------------------------------------------------------

app.get("/king",(req,res)=>{
  let st1=new Set();

  BattleField.find({},'attacker_king', function(err, result) {
    if (err) {
      // res.send(err);
      console.log(err)
    } else {
      //console.log(result)
      // let arr=[]

      for(let i of result){
        // arr.push(i.location)
         st1.add(i.attacker_king)
         i+=1;
      }
    //  console.log(st1)
     //  res.send({list:[...st1]})
    }
  });

  BattleField.find({},'defender_king', function(err, result) {
    if (err) {
      // res.send(err);
      console.log(err)
    } else {
      //console.log(result)
      // let arr=[]

      for(let i of result){
        // arr.push(i.location)
         st1.add(i.defender_king)
         i+=1;
      }
     // console.log(st1)
      res.send({list:[...st1].filter((item)=>(item!==""))})
    }
  });





})


//---------------------------------------------------

app.get("/type",(req,res)=>{
  BattleField.find({},'battle_type', function(err, result) {
    if (err) {
      // res.send(err);
      console.log(err)
    } else {
    //  console.log(result)
      // let arr=[]
      let st2=new Set();
      for(let i of result){

        st2.add(i.battle_type)
        i+=1;
      }
   //   console.log(st2)
      res.send({list:[...st2].filter((item)=>(item!==""))})
    }
  });

})




//-------------------------------------------------------


// /search?king=Robb Stark
// - return list of battles where 'attacker_king' or 'defender_king' was 'Robb Stark'
// Should also work for multiple queries
// /search?king=Robb Stark&location=Riverrun&type=siege




app.get("/search",(req,res)=>{

           //console.log(typeof req.query)
             let temp={}
             if(req.query.king){
               temp={ ...temp,$or: [{ attacker_king: req.query.king }, { defender_king: req.query.king }] }
             }
             if(req.query.type){
               temp={...temp,battle_type:req.query.type}
             }
             if(req.query.location){
               temp={...temp,location:req.query.location}
             }

            // console.log(temp)
           BattleField.find(temp, function(err, result) {
            if (err) {
              // res.send(err);
              console.log(err)
            } else {

           //   console.log(result)
              res.send(result)
            }
          });

})



//----------------------------------------------------------------

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})


const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2');


//create an express server 
const app=express();


//assign the server with cors and bodyparser object
app.use(cors());
app.use(bodyparser.json());


//database connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'yourpassword',
    database:'mobilestoreangulaar',
    port:3306
});


//check database connection
db.connect(err=>{
    if(err){console.log(err,'err');}
    else
    {
    console.log('database connected ');
    }
});


//get from db 
app.get('/user',(req,res)=>{
    let query='select * from userdetails ';

    db.query(query,(err,result)=>{
        if(err)
        {
            console.log(err,'error2');
        }
        if(result.length>0)
        {
            res.send({
                message:'all users data',
                data:result
            });
        }

    });
});

app.post('/userwithid',(req,res)=>{
    const uid = req.body.id;
    let query='select * from userdetails where id= ? ';

    db.query(query,[uid],(err,result)=>{
        if(err)
        {
            console.log(err,'error2');
        }
        if(result.length>0)
        {
            res.send({
                message:'all users data',
                data:result
            });
        }

    });
});


//get a single row data login verification
app.post('/login/:uname', (req, res) => {
    const uid = req.params.uname;
    const password = req.body.password;
  
    // Validate input data
    if (!uid || !password) {
      return res.status(400).send({ message: 'Invalid input data' });
    }
  
    // query
    const query = 'SELECT * FROM userdetails WHERE nameuser = ? AND password = ?';
    db.query(query, [uid, password], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ message: 'Database error' });
      }
      if (result.length > 0) {
        return res.send({ message: 'true', data: result });
      } else {
        return res.send({ message: 'No user found invalid credentials if new user then register.' });
      }
    });
  });
  


//create data in the db
app.post('/user',(req,res)=>{

    console.log(req.body,'createdata');

    let nameuser=req.body.uname;
    let age=req.body.age;
    let phoneno=req.body.phoneno;
    let password=req.body.password;

    let query=`insert into userdetails(nameuser,age,phoneno,password)values('${nameuser}','${age}','${phoneno}','${password}')`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        }
            res.send({
                message:"data inserted in db"
            
        });

        
    });


});


//update data
app.put('/user/:id',(req,res)=>{

    console.log(req.body,'update ');

    let uid=req.params.id;
    let nameuser=req.body.nameuser;
    let age=req.body.age;
    let phoneno=req.body.phoneno;

    let query=`update userdetails set nameuser='${nameuser}', age ='${age}', phoneno='${phoneno}' where id=${uid}`;

    db.query(query,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        res.send({
            message:'data update'
        });

    });

});


//delete data
app.delete('/user/:id',(req,res)=>{
    
    let uid=req.params.id;
    let query=`delete from userdetails where id='${uid}'`;
    db.query(query,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        res.send({
            message:'data deleted '
        })

    });
});


//start the server at port 3000
app.listen(3000,()=>{
    console.log('server running..');
})
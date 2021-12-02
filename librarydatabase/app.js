const express = require("express")
const app = express()
const mongoose = require('mongoose');
const mySchema = require('./Schema');
mongoose.connect('mongodb+srv://root:root@mycluster.ai1mm.mongodb.net/LibraryRecords?retryWrites=true&w=majority').then(()=>console.log("Connected to Database"))
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
     const mybookname = req.body.Bookname;
     const mystudname = req.body.Studname;
     const mydateissue = req.body.Dateissue;

     try{
          const newlist = new mySchema(
              {
                  Bookname: mybookname,
                  Studname: mystudname,
                  Dateissue: mydateissue
              }
          )
          const savedlist = await newlist.save()
          res.json(
              {"message":"List is saved", "data":savedlist}
          )
        }
     catch(err)
     {
        res.json(err);
     }

})

app.use("/",(req,res)=>{
    res.json(
        {"message": "Your server has started"}
    )
})
app.listen(3001, ()=>console.log("Express Started"))


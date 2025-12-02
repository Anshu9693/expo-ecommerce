import express from 'express';
const app = express();

app.get("/helth/expo",(req,res)=>{
    res.status(200).json({
        message:"hello recived successfullly"
    })
})


app.listen(3000,()=>{
        console.log("the server is runnin on the port 3000");
})
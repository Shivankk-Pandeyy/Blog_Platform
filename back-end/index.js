const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const cors=require('cors');
const PORT=process.env.PORT;
//MIDDLEWARE
app.use(express.json());
app.use(cors());
//MONGODB
const Connect=require('./Connection/Connection');
Connect();
//ROUTES
const product=require('./Routes/Products');
//MIDDLEWARE FOR ROUTER
app.use("/api/diverse",product);
//SERVER STARTED
app.listen(PORT,()=>{
    console.log(`SERVER LIVE AT PORT ${PORT}`);
})

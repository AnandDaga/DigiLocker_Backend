import app from "./app.js";
import connection from "./database/db.js";
const port  =  5005;


app.get('/',(req,res)=>{
    res.send("Welcome to PocketID Backend");
});

app.get('/test',(req,res)=>{
    res.send("Test API");
});
app.get('/about',(req,res)=>{
    res.send("Abouts API");
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
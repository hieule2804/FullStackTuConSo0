import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouiter from "./routes/web";

require("dotenv").config();
const app = express();
const PORT=process.env.PORT || 8080; // phải khai báo dòng 5 thì dòng nay mới chạy

//comfig view engine
configViewEngine(app);


//init web router
//giúp express biết có bao nhiêu route 
//và biết phải làm gì khi user vào 1 đường link
initWebRouiter(app);

app.listen(PORT ,()=>{
    console.log(">>> JWT backend is running  on the port "+PORT);
})
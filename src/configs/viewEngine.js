import express from "express";

/**
 * 
 * @param {*} app -express app 
 */
const configViewEngine =(app) =>{
  app.use(express.static('./src/public'));
app.set("view engine","ejs");
app.set("views" , "./src/views");
}
// export 1 tham chieu , default : export dung 1 ham
export default configViewEngine;
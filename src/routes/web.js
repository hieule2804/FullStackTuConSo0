import express from "express"; 

const router =express.Router();
/**
 * 
 * @param {*} app = express app 
 * @returns 
 */
const initWebRouiter =(app)=>{
router.get("/" ,(req ,res)=>{
return res.send("Hello world");
})
return app.use("/",router);

}
export default initWebRouiter;
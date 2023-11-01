import express from "express"; 
import homeController from "../controller/homeController";
const router =express.Router();



/**
 * 
 * @param {*} app = express app 
 * @returns 
 */
const initWebRouiter =(app)=>{
    //path , handler
router.get("/" , homeController.handlehelloworld)
router.get("/user" ,homeController.handlerUser )


//khi chạy trang web thì web sẽ dẫn sử dụng đường link này đầu tiên
return app.use("/",router);

}
export default initWebRouiter;
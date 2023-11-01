const handlehelloworld = (req,res) =>{
    //trả ra dữ liệu muốn trả
   // return res.send("Helloworld from controller");

   // trả dữ liệu từ 1 trang ejs
   return res.render("home.ejs");
}
const handlerUser = (req ,res)=>{
    return res.render("userPage.ejs");
    }

//export ra 1 file
module.exports ={
     handlehelloworld,handlerUser
}
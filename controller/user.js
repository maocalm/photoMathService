/**
 * Created by 1 on 2016/5/16.
 */
// index page
var mongoose=require('mongoose');

var User=mongoose.model('User');


exports.login=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
      console.log(password);
      console.log(req.query.parm);
    console.log("aaa"+username); 

    User.findOne({username:username}, function (err, docs) {
        if(err){
            res.json({"status":"error","msg":"error_system"});/*ϵͳ����*/
        }else if(docs==null){
            res.json({"status":"error","msg":"error_username"});/*�û���������*/
        } else {
            if(docs.password==password){
                res.json({"status":"success","msg":""+password +"--"+username});
            }
            else{
                res.json({"status":"error","msg":"error_password"});
            }
        }
    })
}
/*�����û�ע������*/
exports.register=function(req,res){
    var username=req.body.username;
    var password=req.body.password;

    User.findOne({username:username}, function (err, docs) {
        if(err){
            res.json({"status":"error","msg":"error_system"});/*ϵͳ����*/
        }else if(docs==null){
            /*�����û�*/
            var newUser=new User(
                {
                    username:username,
                    password:password
                }
            );
            newUser.save(function(err){
                if(err){
                    res.json({"status":"error","msg":"error_system"});/*ϵͳ����*/
                }else{
                    res.json({"status":"success","msg":""});/*ע��ɹ�*/
                }
            });
        } else {
            res.json({"status":"error","msg":"user_exist"});/*�û��Ѿ���ע��*/
        }
    })
}







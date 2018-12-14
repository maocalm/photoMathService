/**
 * Created by 1 on 2016/5/16.
 */
// index page
var mongoose=require('mongoose');

var Signin=mongoose.model('Signin');

exports.signin=function(req,res){

    var unique_id=req.body.unique_id;
    var user_name=req.body.user_name;
    var type=req.body.type;
    var date=req.body.date;


    Signin.findOne({unique_id:unique_id}, function (err, docs) {
        if(err){
            res.json({"status":"error","msg":"error_system"});/*ϵͳ����*/
        }else if(docs==null){
            /*���û���ҵ�ǩ����¼����ô�ǵ����һ��ǩ��*/
            var newSignin=new Signin();
            newSignin.unique_id=unique_id;
            newSignin.user_name=user_name;
            if(type=="am_signin"){
                newSignin.am_signin=date;
                newSignin.am_signout="0";
                newSignin.pm_signin="0";
                newSignin.pm_signout="0";
                newSignin.night_signin="0";
                newSignin.night_signout="0";

                newSignin.save(function(err){
                    if(err){
                        res.json({"status":"error","msg":"error_system"})
                    }else{
                        res.json({"status":"success","msg":""});
                    }
                });
            }else if(type=="am_signout"){

                newSignin.am_signin="0";
                newSignin.am_signout=date;
                newSignin.pm_signin="0";
                newSignin.pm_signout="0";
                newSignin.night_signin="0";
                newSignin.night_signout="0";

                newSignin.save(function(err){
                    if(err){
                        res.json({"status":"error","msg":"error_system"})
                    }else{
                        res.json({"status":"success","msg":""});
                    }
                });

            }else if(type=="pm_signin"){

                newSignin.am_signin="0";
                newSignin.am_signout="0";
                newSignin.pm_signin=date;
                newSignin.pm_signout="0";
                newSignin.night_signin="0";
                newSignin.night_signout="0";

                newSignin.save(function(err){
                    if(err){
                        res.json({"status":"error","msg":"error_system"})
                    }else{
                        res.json({"status":"success","msg":""});
                    }
                });

            }else if(type=="pm_signout"){
                newSignin.am_signin="0";
                newSignin.am_signout="0";
                newSignin.pm_signin="0";
                newSignin.pm_signout=date;
                newSignin.night_signin="0";
                newSignin.night_signout="0";
                newSignin.save(function(err){
                    if(err){
                        res.json({"status":"error","msg":"error_system"})
                    }else{
                        res.json({"status":"success","msg":""});
                    }
                });

            }else if(type=="night_signin"){
                newSignin.am_signin="0";
                newSignin.am_signout="0";
                newSignin.pm_signin="0";
                newSignin.pm_signout="0";
                newSignin.night_signin=date;
                newSignin.night_signout="0";
                newSignin.save(function(err){
                    if(err){
                        res.json({"status":"error","msg":"error_system"})
                    }else{
                        res.json({"status":"success","msg":""});
                    }
                });

            }else if(type=="night_signout"){
                newSignin.am_signin="0";
                newSignin.am_signout="0";
                newSignin.pm_signin="0";
                newSignin.pm_signout="0";
                newSignin.night_signin="0";
                newSignin.night_signout=date;
                newSignin.save(function(err){
                    if(err){
                        res.json({"status":"error","msg":"error_system"})
                    }else{
                        res.json({"status":"success","msg":""});
                    }
                });
            }

        } else {
            /*����м�¼��ֻ��Ҫ�޸�ǩ����¼����*/
            if(type=="am_signin"){
                /*�޸�ǩ����¼*/
                if(docs.am_signin=="0"){
                    docs.am_signin=date;
                    docs.save(function(err){
                        if(err){
                            res.json({"status":"error","msg":"error_system"})
                        }else{
                            res.json({"status":"success","msg":""});
                        }
                    });
                }else{
                    /*����м�¼�����ʾ�Ѿ�ǩ������*/
                    res.json({"status":"error","msg":"already_signin"});
                }

            }else if(type=="am_signout"){

                if(docs.am_signout=="0"){
                    docs.am_signout=date;
                    docs.save(function(err){
                        if(err){
                            res.json({"status":"error","msg":"error_system"})
                        }else{
                            res.json({"status":"success","msg":""});
                        }
                    });
                }else{
                    /*����м�¼�����ʾ�Ѿ�ǩ������*/
                    res.json({"status":"error","msg":"already_signin"});
                }
            }else if(type=="pm_signin"){
                if(docs.pm_signin=="0"){
                    docs.pm_signin=date;
                    docs.save(function(err){
                        if(err){
                            res.json({"status":"error","msg":"error_system"})
                        }else{
                            res.json({"status":"success","msg":""});
                        }
                    });
                }else{
                    /*����м�¼�����ʾ�Ѿ�ǩ������*/
                    res.json({"status":"error","msg":"already_signin"});
                }

            }else if(type=="pm_signout"){
                if(docs.pm_signout=="0"){
                    docs.pm_signout=date;
                    docs.save(function(err){
                        if(err){
                            res.json({"status":"error","msg":"error_system"})
                        }else{
                            res.json({"status":"success","msg":""});
                        }
                    });
                }else{
                    /*����м�¼�����ʾ�Ѿ�ǩ������*/
                    res.json({"status":"error","msg":"already_signin"});
                }

            }else if(type=="night_signin"){
                if(docs.night_signin=="0"){
                    docs.night_signin=date;
                    docs.save(function(err){
                        if(err){
                            res.json({"status":"error","msg":"error_system"})
                        }else{
                            res.json({"status":"success","msg":""});
                        }
                    });
                }else{
                    /*����м�¼�����ʾ�Ѿ�ǩ������*/
                    res.json({"status":"error","msg":"already_signin"});
                }


            }else if(type=="night_signout"){
                if(docs.night_signout=="0"){
                    docs.night_signout=date;
                    docs.save(function(err){
                        if(err){
                            res.json({"status":"error","msg":"error_system"})
                        }else{
                            res.json({"status":"success","msg":""});
                        }
                    });
                }else{
                    /*����м�¼�����ʾ�Ѿ�ǩ������*/
                    res.json({"status":"error","msg":"already_signin"});
                }

            }
        }
    })


}
/*����û�ǩ����¼*/
exports.getSignins=function(req,res){
    /*�û�id*/
    var user_name=req.body.user_name;
    /*ҳ��*/
    var page_num=req.body.page_num;

    /*��ҳ*/
    Signin.find({user_name:user_name}).sort({'_id':-1}).limit(10).skip((page_num-1)*10).exec(function (err, doc) {
        if(err){
            res.json({"status":"error","msg":"error_system"});
        }else{
            if(doc.isNull){
                res.json({"status":"success","msg":"data_empty"});
            }
            res.json({"status":"success","msg":doc});
        }
    })


    /*Signin.find({user_name:user_name}, function (err, doc) {
        if(err){
            res.json({"status":"error","msg":"error_system"});
        }else{
            if(doc.isNull){
                res.json({"status":"success","msg":"data_empty"});
            }
            res.json({"status":"success","msg":doc});
        }
    })*/

}







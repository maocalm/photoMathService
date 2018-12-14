var mongoose=require('mongoose');

var MathPepole=mongoose.model('MathPepole');

const mathsteps = require('../node_modules/mathsteps');

exports.mathstep=function(req,res){
    var username=req.body.username;
    var mathformula=req.body.mathformula;

    console.log(req.body);

    console.log("aaa"+username); 

    console.log("aaa"+mathformula); 

    const steps = mathsteps.solveEquation(mathformula);

    result = [] ; 
    steps.forEach(step => {
       /* console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
        console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
        console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
        console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2*/

        var beforechange = step.oldEquation.ascii(); 
        var change = step.changeType; 
        var afterchange = step.newEquation.ascii(); 
        var ofsubsteps = step.substeps.length; 

        result.push({beforechange:beforechange ,change:change ,afterchange:afterchange ,ofsubsteps:ofsubsteps}); 


    });
    
    var newMathPepole=new MathPepole(
            {
                username:username,
                mathformula:mathformula
            }
    );
    newMathPepole.save(function(err){
                var responsedate ={}; 

                if(err){
                    responsedate['status_db'] ="erro";
                    responsedate['steps'] = result ;
                    res.json(JSON.stringify(responsedate));
                }else{

                    responsedate['status_db'] ="sucess";
                    responsedate['steps'] = result ;
                    res.send(JSON.stringify({responsedate}));
                   
                }
    });







}
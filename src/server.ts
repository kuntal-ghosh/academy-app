// creating an express object
import express,{Application} from 'express';

const init=():Application =>{
    let app=express();

    app.use("/",(req, res)=>{
        res.send("thanks for requesing on "+new Date());
    })


    return app;
}

const app=init();
app.listen(3000,()=>{
    console.log("i am listening");
})



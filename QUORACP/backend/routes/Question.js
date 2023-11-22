const express = require('express');
const router = express.Router();
const questionDB = require('../models/Question');

router.post('/', async (req, res) => {
    const { questionName, questionUrl, user } = req.body;

   

    try {
        if (!questionName || !questionUrl || !user) {
            return res.status(400).json({
                    status: false,
                   message: 'Missing required fields',
             });
        }

        const newQuestion = await questionDB.create({
            questionName,
            questionUrl,
            user,
        });

        res.status(201).json({
            status: true,
            message: 'Question added successfully',
            question: newQuestion,
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: 'Bad format',
        });
    }
});

router.get('/', async(req,res)=>{
    try{
        await questionDB.aggregat([
            {
                $lookup:{
                    
                    from:"answers", //collection hai join ke liye 
                    localField:'_id', // field hai in put ki taraf se 
                    foreignField :'questionId',//field hai jo answer table ko id aur questiontable ko id match karo
                    as:"allAnswers"       // output array field
            }

            }
    

        ]).exact().then(()=>{
            res.status(200).send(doc)
        }).catch((error)=>{
            res.status(500).send({
                status:false,
                message : "unable to get the question detail"
            })
        })
    }catch(e){
        res.status(500).send({
            status:false,
            message : "unexpected error"

        })
    }
    {

    }
})

module.exports = router; 

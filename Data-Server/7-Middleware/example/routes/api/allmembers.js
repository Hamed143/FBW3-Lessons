const express = require('express');
const router = express.Router();
const members = require('../../members');
// get all members

router.get('/',(req,res)=>{
    res.json(members)
});


router.get('/:id',(req,res)=>{
    const  found = members.some(item => item.id === parseInt(req.params.id));
    if(found){
        res.json(
            members.filter(item =>item.id===parseInt(req.params.id))
        )
    }else{
        res.status(400).json({msg:`no member with the id of ${req.params.id}`})
    }
});

// create member
router.post('/',(req,res)=> {
    //res.send(req.body);
    const newMmber ={
        id :uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:req.body.status
    };
    //res.send(newMmber);
    if(!newMmber.name || !newMmber.email){
        return res.status(400).json({ msg : 'Please include a name and email'})
    }
     members.push(newMmber);
     res.json(members);
});
// update a member
router.put("/:id",(req,res)=>{
    const updMember ={
        name:req.body.name,
        email:req.body.email,
        status:req.body.status
    };
    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
        const updMember = req.body;
        members.forEach(member=>{
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name = member.name;
                member.email = updMember.email ? updMember.email = member.email;
                member.status = updMember.status ? updMember.status = member.status;
                res.send({msg : "Member updated" ,member})
            }
        })
    }
    else{
        res.status(400).send({ msg : `No member with the id of ${req.params.id}`});
    }
});
router.delete("/:id",(req,res)=>{
    const found = members.some(item => item.id ===parseInt(req.params.id));
    if(found){
        res.json({
            msg : "Member deleted",
            members: members.filter((member)=>{
                if(member.id !== parseInt(req.params.id)){
                    return member;
                }
            })
        })
    }else{
        res.status(400).json({ msg: `No Member with the id of ${req.params.id}`});
    }
})
module.exports = router;


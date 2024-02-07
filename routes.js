const express=require('express');
const router=express.Router();

const dados=[
{
  name:'Luis',
  idade:23,
  genero:'masculino',
  pais:'Brasil'
},
{
    name:'Maria',
    idade:20,
    genero:'feminino',
    pais:'Rússia'
},
{
    name:'José',
    idade:34,
    genero:'masculino',
    pais:'Colômbia'
},
{
    name:'Clara',
    idade:21,
    genero:'feminino',
    pais:'Estados Unidos'
}
]


router.get('/pessoas/:index',(req,res)=>{
     const{index}=req.params;
     return res.json(dados[index])
})

router.get('/pessoas',(req,res)=>{
    return res.json(dados);
})

router.post('/pessoas',(req,res)=>{
   
  const {name,idade,genero,pais}=req.body;
  dados.push({name,idade,genero,pais});
  res.json({message:'foi enviado'})
    
})
router.put('/pessoas/:index',(req,res)=>{
    const {index}=req.params;
    const{name,idade,genero,pais}=req.body;
   dados[index]={name,idade,genero,pais};
    return res.json(dados)
})

router.delete('/pessoas/:index',(req,res)=>{
    const {index}=req.params;
    dados.splice(index,1);
    return res.json({message:'dado deletado'})

})




module.exports=router;
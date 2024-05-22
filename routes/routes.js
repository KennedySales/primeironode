const express = require ('express')
const routes = express.Router()

const path = require ('path') 


router.get ('/', (req, res)=>{
    res.send ("ola amigo")
})

router.get ('/pagina', (req,res) => {
    res.sendFile (path.resolve ('./public/pagina.html'))
})

router.use (function (req, res, next){
    res.status(404).sendFile(path.resolve('./public/404.html'))
})



router. listen (port, ()=>{
    console.log(`app prodando na porta ${port}`)
})

module.exports = router

const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dashboard', (req, res, next) => {
  const user = req.user
  const points = await (points, colaboration)
  res.render('dashboard');
});

// router.get('/user_form', (req, res, next)=>{
//   let userId = req.query.user_id
//   User.findOne >{
//     res.render("user_form", {user})
//   })
//   catch(err => next(err))
// })

router.get("/recicle_form", (req, res, next ) =>{
  res.render("ercicle_form")
})



module.exports = router;

const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req,res) => {
	const user = new User({
		uname: req.body.uname,
		email: req.body.email,
		pass: req.body.pass
	});
	//res.json(req.body);
	try{
		const savedUser = await user.save();
		res.send(savedUser);
	}catch(err){
		console.log(err);
		res.status(400).send(err);
	}
});

module.exports = router;
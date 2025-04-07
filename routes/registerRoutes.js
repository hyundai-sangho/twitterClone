const express = require('express');
const app = express();
const router = express.Router();

app.set('view engine', 'pug');
app.set('views', './views');

router.get('/', (req, res, next) => {
	res.status(200).render('register');
});

router.post('/', (req, res, next) => {
	const { username, password } = req.body;
	if (username && password) {
		// Here you would typically save the user to the database
		res.status(200).send('User registered successfully');
	} else {
		res.status(400).send('Please provide a username and password');
	}
});

module.exports = router;

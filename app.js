const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./middleware');
const path = require('path');

const server = app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.get('/', middleware.requireLogin, (req, res, next) => {
	let payload = {
		pageTitle: 'Twitter Clone',
		pageDescription: 'Home Page',
	};

	res.status(200).render('home', payload);
});

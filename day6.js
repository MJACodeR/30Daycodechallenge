const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const PORT = 3000;

const app = express();
const secretKey = 'yourSecretKey'; // Change this to a secure secret key

app.use(bodyParser.json());

// Dummy user for demonstration purposes
const dummyUser = {
  id: 1,
  username: 'abhishek',
  password: 'password',
};

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.body;
  console.log(token);
  console.log(secretKey);
  if (!token) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    console.log(req.user);
    next();
  });
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check credentials (dummy check, replace with your authentication logic)
  if (username === dummyUser.username && password === dummyUser.password) {
    // Generate JWT token
    const token = jwt.sign(dummyUser, secretKey, { expiresIn: '1h' });
   res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Logout route (not really needed for JWT since tokens are stateless)
app.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const Developer = require('./models/Developer');
const Host = require('./models/Host');
const Contestant = require('./models/Contestant');
const Contest = require('./models/Contest');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use if you have any CORS issues

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes

// Developer routes
app.post('/api/developers', async (req, res) => {
  try {
    const developer = new Developer(req.body);
    await developer.save();
    res.status(201).send(developer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Host routes
app.post('/api/hosts', async (req, res) => {
  try {
    const host = new Host(req.body);
    await host.save();
    res.status(201).send(host);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Contestant routes
app.post('/api/contestants', async (req, res) => {
  try {
    const contestant = new Contestant(req.body);
    await contestant.save();
    res.status(201).send(contestant);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Contest routes
app.post('/api/contests', async (req, res) => {
  try {
    const contest = new Contest(req.body);
    await contest.save();
    res.status(201).send(contest);
  } catch (error) {
    res.status(400).send(error);
  }
});



// Get all developers
app.get('/api/developers', async (req, res) => {
  try {
    const developers = await Developer.find();
    res.status(200).send(developers);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all hosts
app.get('/api/hosts', async (req, res) => {
  try {
    const hosts = await Host.find();
    res.status(200).send(hosts);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Login for Host
app.post('/api/hosts/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const host = await Host.findOne({ username });

    if (!host || host.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    res.status(200).send('Login successful');
  } catch (error) {
    res.status(400).send(error);
  }
});

// In server.js or a separate routes file
app.post('/api/hosts/signup', async (req, res) => {
  try {
    const host = new Host(req.body);
    await host.save();
    res.status(201).send(host);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all contestants
app.get('/api/contestants', async (req, res) => {
  try {
    const contestants = await Contestant.find();
    res.status(200).send(contestants);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all contests
app.get('/api/contests', async (req, res) => {
  try {
    const contests = await Contest.find();
    res.status(200).send(contests);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get contest by ID
app.get('/api/contests/:id', async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id).populate('hostId contestants leaderboard.contestantId');
    if (!contest) {
      return res.status(404).send('Contest not found');
    }
    res.status(200).send(contest);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete contestant after contest ends
app.delete('/api/contestants/:id', async (req, res) => {
  try {
    const contestant = await Contestant.findByIdAndDelete(req.params.id);
    if (!contestant) {
      return res.status(404).send('Contestant not found');
    }
    res.status(200).send('Contestant deleted');
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

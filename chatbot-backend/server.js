// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route for handling chatbot messages
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    // Placeholder response logic (replace with AI or dynamic responses)
    let botResponse = '';

    if (userMessage.toLowerCase().includes('hello')) {
        botResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('course')) {
        botResponse = 'We offer various courses in engineering, medico, and competitive exams.';
    } 
    else if (userMessage.toLowerCase().includes('good evening')) {
        botResponse = 'Hi,Good Evening..How Can I Assisst you?';
    } 
    else if (userMessage.toLowerCase().includes('good morning')) {
        botResponse = 'Hi,Good Morning..How Can I Assisst you?';
    }
    else if (userMessage.toLowerCase().includes('about this website')) {
        botResponse = 'This website aims to provide students with streamlined access to a curated selection of useful websites, centralizing these resources on a single platform.';
    }
    else {
        botResponse = "Sorry, I didn't quite understand that. Can you rephrase?";
    }

    res.json({ response: botResponse });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

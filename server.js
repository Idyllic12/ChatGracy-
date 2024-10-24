// server.js

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

const OPENAI_API_KEY = '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'; // Replace with your OpenAI API key

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${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}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            }),
        });

        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            res.json({ message: data.choices[0].message.content });
        } else {
            res.json({ message: "Sorry, I didn't understand that." });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error contacting the API." });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

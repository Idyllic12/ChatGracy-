document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById('chatbox');
    const input = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    // Function to send user message
    async function sendMessage() {
        const userMessage = input.value.trim();
        if (userMessage) {
            // Display user message
            displayMessage(userMessage, 'user-msg');

            // Clear input field
            input.value = '';

            // Generate bot response
            await generateResponse(userMessage);
        }
    }

    // Function to display messages
    function displayMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.className = type;
        messageElement.textContent = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight; // Auto scroll to the bottom
    }

    // Function to generate bot responses
    async function generateResponse(userMessage) {
        let botResponse = '';

        // Check for predefined responses
        switch (userMessage.toLowerCase()) {
            case 'what is your name?':
                botResponse = 'My name is Gracy! How can I help you?';
                break;
            case 'who is your your boyfriend?':
                botResponse = 'Noo, Anuj is my boyfriend and I love him! What else would you like to talk about?';
                break;
            case 'i love you':
                botResponse = 'Noo, Anuj is my boyfriend and I love him! What else would you like to talk about?';
                break;
            case 'will you marry me?':
                botResponse = 'Noo, Anuj is my boyfriend and I love him! What else would you like to talk about?';
                break;
            default:
                // If no predefined response, call the API
                botResponse = await getChatGPTResponse(userMessage);
                break;
        }

        // Display bot response
        setTimeout(() => {
            displayMessage(botResponse, 'bot-msg');
        }, 500); // Delay for realism
    }

    // Function to call OpenAI API and get response
    async function getChatGPTResponse(userMessage) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `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`, // Replace with your API key
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo", // Specify the model
                    messages: [{ role: "user", content: userMessage }],
                }),
            });

            const data = await response.json();

            // Check if the response contains a valid message
            if (data.choices && data.choices.length > 0) {
                return data.choices[0].message.content;
            } else {
                return "I'm sorry, I didn't understand that.";
            }
        } catch (error) {
            console.error("Error fetching response from OpenAI:", error);
            return "Sorry, there was an error connecting to the chatbot.";
        }
    }

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);

    // Allow pressing 'Enter' to send a message
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});

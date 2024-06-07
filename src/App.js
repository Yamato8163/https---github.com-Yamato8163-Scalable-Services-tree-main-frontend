import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:3000/send-message', { message });
            setResponse(res.data.message);
        } catch (error) {
            console.error(error);
            setResponse('Error sending message');
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Message Sender</h1>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send Message</button>
                {response && <p>{response}</p>}
            </header>
        </div>
    );
}

export default App;

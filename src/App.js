import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import "./App.css"

function App() {
	return (
		<ChatEngine
      height='100vh'
			projectID='2619f599-6531-4b7e-8ac9-9942bfca67d8'
			userName='ale2'
			userSecret='123123'
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
		/>
	);
}

export default App;

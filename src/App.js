import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import "./App.css"
import LoginForm from './components/LoginForm';

function App() {

	if(!localStorage.getItem("username")) return <LoginForm/>

	return (
		<ChatEngine
      height='100vh'
			projectID='2619f599-6531-4b7e-8ac9-9942bfca67d8'
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
		/>
	);
}

export default App;

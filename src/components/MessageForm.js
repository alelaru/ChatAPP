import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
import {SendOutlined, PictureOutlined} from "@ant-design/icons"

const MessageForm = (props) => {

    // console.log(props);
    const [value, setValue] = useState("")
    const {chatId, creds} = props

    // const authObject = {'ProjectID': props.projectID, 'userName': props.userName, 'userSecret': props.userSecret}

    // console.log("creds ",creds);
    // console.log("auth ", authObject);

    const handleSubmit = (event) => {
        event.preventDefault()
        const text = value.trim();

        if(text.length > 0){
            sendMessage(creds, chatId, {text})
        }
        setValue("");
        // const authObject = {'Project-ID': '0000-00-00-0000', 'User-Name': 'adam', 'User-Secret': 'pass1234'}
        // const chatID = 1
        // const messageObject = {'text': 'Hello world!'}
        // const callback = (data) => console.log(data)
    }
    const handleChange = (event) => { 
        // console.log(e.target.value);
        setValue(event.target.value)
        // const authObject = {'Project-ID': '0000-00-00-0000', 'User-Name': 'adam', 'User-Secret': 'pass1234'}
        // const chatID = 1
        isTyping(props, chatId)
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: ''})
        console.log("Hey");
        console.log("EVENT",event);
    }

    return ( 
        <form 
            className="message-form" 
            onSubmit={handleSubmit}
        >
            <input 
                className="message-input" 
                placeholder="Send a message" 
                value={value} 
                onChange={handleUpload}
            ></input>
            <label htmlFor="upload-button">
                <span className="umage-button">
                        <PictureOutlined className="picture-icon">
                        </PictureOutlined>
                    </span>
            </label>
                        <input 
                            type="file"
                            multiple={false}
                            id="upload-button"
                            style={{display: 'none'}}
                            onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>

        </form>
        );
}
 
export default MessageForm;
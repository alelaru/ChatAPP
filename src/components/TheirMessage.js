const TheirMessage = ({message, lastMessage}) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName


    return ( <div className="message-row">
                {isFirstMessageByUser && (
                    <div
                        className="message-avatar"
                        style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                    />   
                )}
                {
                    // This mean it is an image
                    message.attachments.length > 0 
                    ?(
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachmentt"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px"}}
                        ></img>
                    )
                    :(
                        <div className="message" style={{float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByUser ? "4px" : "48px"}}>
                            {message.text}
                        </div>
                    ) 
                }

            </div> );
}
 
export default TheirMessage;
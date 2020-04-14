//message storage
var messages = [];

//possible message types
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//preload messages
var data = [
    {
        type: messageType.out,
        user: 'Harold',
        message: 'sup up you frickin nerd?'
    },
    {
        type: messageType.in,
        user: 'Jimothy',
        message: 'Simply vibin. How about you?'
    },
    {
        type: messageType.out,
        user: 'Harold',
        message: 'likewise, lets get pizza'
    }
];

//message constructor
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//create html element for message
function createMessageElement(message){
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

//responds to button clicks
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl=  document.getElementById('message-container');

    switch(event.target.id){
        case 'send-button':
            user = 'Harold';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Jimothy';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //create new message using message constructor
    if(messageInput.value != ''){
        //store new message in messages array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create html element for message
        var el = createMessageElement(message);

        //creates empty separator element to put each message on its own row
        var breakEl = document.createElement('div');
        breakEl.className = 'linebreak';

        //add that element to the DOM
        messagesContainerEl.appendChild(el);
        messagesContainerEl.appendChild(breakEl);

        //empty the message box
        messageInput.value = '';
    }
}

//add preload messages to messages array
function loadSeedData(){
    for(var i=0; i<data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //add preload messages to DOM
    var messagesContainerEl = document.getElementById('message-container');

    for(var i=0; i<messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message);

        //creates empty separator element to put each message on its own row
        var breakEl = document.createElement('div');
        breakEl.className = 'linebreak';

        messagesContainerEl.appendChild(el);
        messagesContainerEl.appendChild(breakEl);
    }
}

var init = function(){
    //add event handlers to buttons
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load preload messages
    loadSeedData();
};

init();
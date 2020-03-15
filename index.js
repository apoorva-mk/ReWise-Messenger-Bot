express = require('express'),
bodyParser = require('body-parser'),
app = express().use(bodyParser.json()); 
require('dotenv').config()
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const request = require('request');
const sqlite3 = require('sqlite3').verbose();


//Start process
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
file_path = process.env.DB_FILE_NAME


//Creating a database and table
let db = new sqlite3.Database(file_path, (err) => { 
  if (err) { 
      console.log('Error when creating the database', err) 
  } else { 
      console.log('Database created!, path: "./mydb.sqlite3"') 
      createTable()
  } 
})


//creating a table to hold state
const createTable = () => {
  console.log("Create table 'users' in database");
  db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, psid TEXT, state TEXT, quiz_state TEXT)");
}

v = getUserState(1);
v = getUserState(1);
console.log(v);

app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);


      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);

      user_state = getUserState(sender_psid);
      console.log("The user state is"+user_state);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
      
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "HfdjiJkoInkj24ji903UHI89909inoj909"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Handles messages events
function handleMessage(sender_psid, received_message) {
  let response;

  // Check if the message contains text
  if (received_message.text) {    

    // Create the payload for a basic text message
    response = {
      "text": `You sent the message: "${received_message.text}". Now send me an image!`
    }
  }  
  
  // Sends the response message
  callSendAPI(sender_psid, response); 

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
  
}


function getUserState(sender_psid){
  db.all("SELECT * from users where psid='"+sender_psid+"'",function(err,rows){
    console.log(rows);
    if(rows.length == 0){
      console.log("User not saved, saving new user");
      db.run("INSERT into users (psid,state,quiz_state) VALUES ('"+sender_psid+"','0','0')");
      greetUser(sender_psid);
    }
    else {
      console.log("Old user");
      console.log(rows[0].psid+" "+rows[0].state+" "+rows[0].quiz_state);
      continueInteraction(sender_psid, rows[0].state);
      return rows.state;
    }    
  });
}

function createResponse(content){
  let response;
    // Create the payload for a basic text message
    response = {
      "text": content
    } 

  return response;
}

function greetUser(sender_psid){
  // let response;
  //   // Create the payload for a basic text message
  //   response = {
  //     "text": process.env.INTRO_TEXT
  //   } 
  response = createResponse(process.env.INTRO_TEXT);
  callSendAPI(sender_psid, response);
}

function continueInteraction(sender_psid, state){
  if(state=='0'){
    response = createResponse(process.env.WELCOME_BACK);
    callSendAPI(sender_psid, response);
  }
}
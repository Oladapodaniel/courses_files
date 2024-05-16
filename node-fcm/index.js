const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const axios = require('axios');

const api = axios.create({
    baseURL: 'http://api',
    timeout: 500000,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Initialize Firebase Admin SDK
const serviceAccount = require('./faith-connect-82bdd-firebase-adminsdk-k7w67-62661f17fd.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(bodyParser.json());

// // API endpoint to receive device tokens
// app.post('/token', (req, res) => {
//     const { token } = req.body;
//     // Store the token in your database
//     console.log('Received token:', token);
//     res.sendStatus(200);
// });

// // API endpoint to send notifications
// app.post('/send-notification', async (req, res) => {
//     const { token, title, body } = req.body;
//     // Send the notification using the token
//     const message = {
//         notification: {
//             title: title,
//             body: body,
//         },
//         token: token,
//     };

//     try {
//         await admin.messaging().send(message);
//         res.sendStatus(200);
//     } catch (error) {
//         console.error('Error sending notification:', error);
//         res.status(500).send('Error sending notification');
//     }
// });

// app.listen(3000, () => {
//     const deviceToken = 'chjyNkGjS02HBJoi6JGY3Y:APA91bH7WnJmQKKFniyS6uuGGVDFi0jv36OPGUn3kB-kTrSKr-vG3WmvEziA7y-RPB7p1VbYXgSaZazupIK3NcM_YAeD9V9B_9AY6OkQ_mNeOTAaRdRff6bsSFwAOGzznhc1oeEBlREX'; // Retrieve the token from your database
// sendNotification(deviceToken, 'Notification Title here', 'Notification Body here');
//     console.log('Server running on port 3000');
// });




// By Token
// const sendNotification = async (token, title, body) => {
//     const message = {
//           tokens: [token, token],
//           notification: {
//             title: "Notification Title",
//             body: "Notification Body",
//             // icon: "ic_notification",
//             image: "https://churchplusstorage.blob.core.windows.net/mediacontainer/Dapo_837555b1-873d-4e99-854c-c040bd961806_12022024.jpeg"
//           },
//           android: {
//             notification: {
//               channel_id: "faithconnect",
//             //   color: "#FF0000" // Notification color
//             }
//           }
//       }

// try {
//     // let res = await admin.messaging().send(message);
//     let res = await admin.messaging().sendMulticast(message);
//     console.log('Notification sent', res)
// } catch (error) {
//     console.error('Error sending notification:', error);

// }
// };
// const deviceToken = 'fRaMHZBhRlyO5xN6yId9ui:APA91bGNrna-V45W-vH25vSb-WSQxGRHSEy3iSC2ghyfGlN1NGE-sSp1Zv3HqKKDwk6_hBoFZbDCMTnHbLjKroYkLAn8vfVIIf-VGkfUFd3cs5XcCj3PQSxwl39G6ojoCt7_ikRzqJKd'; // Retrieve the token from your database
// sendNotification(deviceToken, 'Notification Title here', 'Notification Body here');


// By Topics
const sendNotificationToClient = async (topic, message) => {
    // console.log(messaging);

    const data = {
        notification: {
          title: "new title from server",
          body: message,
        },
        data: {
            page: "Feed",
            id: "6ea6da74-2326-40a0-9969-08dc39d0bec4"
        }
        // data: {
        //     page: "Media",
        //     id: "f28272ec-82b0-48f9-8a38-16ccbd8643d4"
        // }
      };

      
    admin.messaging()
      .sendToTopic(topic, data)
      .then((response) => {
        console.log(`Notifications sent:${response}successful `);
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  };

  sendNotificationToClient('feed2BF80036-3702-4FC8-BCE1-67AFF2222CC7', 'This is my first topics message from server')
  

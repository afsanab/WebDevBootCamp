const express = require('express');
const app = express();
// this is going to print in the command line 
// everythime you get a new request
// which is everytime you refresh the localhost:3000
app.use((req, res) => {
    console.log('Hello World!')
    res.send('Hello we are live!');
})

// this prints once when the server starts
app.listen(3000, () => console.log('Server is listening on port 3000'));


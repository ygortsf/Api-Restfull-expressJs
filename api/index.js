const { v4: uuidv4 } = require('uuid');
const express = require('express');

const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};



let mensagens = {};

app.post("/mensagem", (req, resp) => {
  const id = uuidv4();

  const message = {
    id,
    text: req.body.text,
  };

  mensagens[id] = message;

  return resp.send(message);
});

app.get("/user",(req, res)=>{
    return res.send(Object.values(users));
})

app.get("/user/:userId",(req, resp)=>{
    resp.send(users[req.params.userId]);
})

app.get("/",(req, res)=>{
    res.send("oi");
})

app.listen(3000,(req, resp)=>{
    console.log( 'hi lorena')
})


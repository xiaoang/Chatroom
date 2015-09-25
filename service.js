var WebSocketServer = require('ws').Server, wss = new WebSocketServer({port: 8092});
var userlist = [];
wss.on('request', function(ws) {
    ws.send('又一个小伙伴加入了');
})
wss.on('connection', function(ws) {
    userlist.push(ws);
    ws.on('message', function(msg) {
        for(var i=0; i<userlist.length; i++){
            if(userlist[i]!=ws){
                userlist[i].send(msg);
            }
        }
    });
});

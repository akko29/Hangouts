// When the DOM is ready
// document.addEventListener("DOMContentLoaded", function(event) {
    var peer_id;
    var username;
    

    /**
     * Important: the host needs to be changed according to your requirements.
     * e.g if you want to access the Peer server from another device, the
     * host would be the IP of your host namely 192.xxx.xxx.xx instead
     * of localhost.
     *
     * The iceServers on this example are public and can be used for your project.
     */
    document.getElementById("connect-to-peer-btn").addEventListener("click", function(){
        username = document.getElementById("user_name").value;
        
        if(peer_id)
        {    parent.location='chat.html';}
        else
        {   peer_id = document.getElementById("peer_id").value;
            alert("Please provide the correct peer id");
        }

        // if (peer_id) {
        //     conn = peer.connect(peer_id, {
        //         metadata: {
        //             'username': username
        //         }
        //     });

        //     //conn.on('data', handleMessage);
        // }else{
        //     alert("You need to provide a peer to connect with !");
        //     return false;
        // }
//         require('express').get('/join.html',function(req,res){
//     res.sendFile(path.join(__dirname,'/chat.html'));
// });

        // document.getElementById("chat").className = "";
        // document.getElementById("connection-form").className += " hidden";
    }, false);
   
    

    
    /**
     * On click the connect button, initialize connection with peer
     */
    

    /**
     * Initialize application by requesting your own video to test !
     */
//     requestLocalVideo({
//         success: function(stream){
//             window.localStream = stream;
//             onReceiveStream(stream, 'my-camera');
//         },
//         error: function(err){
//             alert("Cannot get access to your camera and video !");
//             console.error(err);
//         }
//     });
// }, false);

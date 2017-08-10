var axios = require("axios");
var express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use("/test", (req, res) => {
  console.log("begin requesting post")
  axios.get('http://debug.shenqibuluo.com:3000/v1/posts/post3', {
       headers: {
         sessionToken: "001",
         communityId: "quanzhigaoshou"
       }
     }
   )
   .then(resp => {
     console.log("resp = ", typeof(resp));
     console.log(res.json(resp.data));
     res.json(resp.data);
   })
})

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});

var http = require("http");
var server = http.createServer((req,res)=>{
    if(req.url =="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("Hellow i am home page");
        res.end();
    }

else if(req.url=="/about"){
   res.writeHead(200,{"content-type":"text/html"});
   res.write("Hellow i am About page");
   res.end();
}


else if(req.url=="/Contact"){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("Hellow i am Contact page");
    res.end();
 }

else{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("Upps sorry. Page Found not Found");
    res.end();
}

})

server.listen(5050);
console.log("Programe Run Sucess");



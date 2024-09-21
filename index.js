//console.log("hello worlds");
const http=require("http");
const fs=require("fs");
const data=fs.readFileSync("index.html",'utf-8');
//console.log(data);
let  hostname="127.0.0.1";
let port=300;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
const url=req.url;
console.log(url);
    res.setHeader('content-type','text/html');
  //  res.end("<h>hello<br> Welcome to our code</h>",`${data}`);
  res.end(data);
 
});
server.listen(port,hostname,()=>{
    console.log(`server running http:// ${hostname}: ${port}/`);
});
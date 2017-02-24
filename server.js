var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
 user: 'vinayak-pai',
 database: 'vinayak-pai',
 host: 'db.imad.hasura-app.io',
 port: '5432',
 password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
            title: 'article one :Vinayak Pai',
            heading: ' article one',
            date: 'Feb 5, 2017',
            content:`
                <p>
                    Hi, This is vinayak , writing the article one.
                    Eat healthy, stay fit.
                    Love Nature ,animals.
                    Help others and respect all.
                </p>
            `
        },
    'article-two':{
            title: 'article two :Vinayak Pai',
            heading: ' article two',
            date: 'Feb 5, 2017',
            content:`
                <p>
                    Hi, This is vinayak , writing the article two.
                    Life is the moment we are living now.
                </p>
            `
        },
    'article-three':{
            title: 'article three :Vinayak Pai',
            heading: ' article three',
            date: 'Feb 5, 2017',
            content:`
                <p>
                    Hi, This is vinayak , writing the article three.
                   stay hungry , stay foolish.
                </p>
            `
        },
};


function createTemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body bg color='khaki'>
            <div class='container'>
                <div>
                     <a href='/'>Home</a>
                </div>
                <hr color='red'>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
            
        </body>
    </html>
    
    `;
return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request
//return response with results
    pool.query('SELECt * FROM test',function(err,result){
       if (err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result.rows));
       }
    });
});

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name/', function(req,res){
    var name=req.query.name;  // /submit-name?name-xxxxxx
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/articles/:articleName',function(req,res){
   //var articleName = req.params.articleName;
   pool.query("SELECT * FROM article WHERE title= '" + req.params.articleName+"'", function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           if (result.rows.length===0){
               res.status(404).send('Article not found');
       } else {
           var articeData =result.rows[0];
           res.send(createTemplate(articleData));
       }
     }
   });
   
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname,'ui', 'main.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

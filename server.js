var express = require('express');
var morgan = require('morgan');
var path = require('path');

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

app.get('/:articleName',function(req,res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
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

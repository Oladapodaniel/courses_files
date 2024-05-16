const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require("./models/blogs")

// Regiter view engine
app.set('view engine', 'ejs')
// app.set('views', 'myviews')


// Connect to mongodb
const dbURI = "mongodb+srv://oladapodaniel10:EdL7yYUcuLDAF0qB@cluster0.pmppn5h.mongodb.net/node-tuts?retryWrites=true&w=majority&authSource=admin"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => (app.listen(3000),(console.log('connected to mongodb'))))
    .catch(err => console.log(err, 'Error connecting to mongodb'))

// Middleware
// serving static files
app.use(express.static('public'))
// encoding data from <form> tag to json
app.use(express.urlencoded({ extended: true }))
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ' + req.hostname);
//     console.log('path: ' + req.path);
//     console.log('method: ' + req.method);
//     next();
// })

// routes

app.get('/', (req, res) => {
    // res.statusCode = 200
    // res.send('<h1>Lets leann this fast</h1>')
    // res.sendFile('./views/index.html', { root: __dirname })
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    // res.statusCode = 200
    // res.send('<h1>About page</h1>')
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' })// Rendering view for ejs file
})

app.get('/blog/create', (req, res) => {
    res.render('createblog', { title: 'Create a new blog' })
})

// blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch(err => console.log(err))
})

app.post('/blogs', (req, res) => {
    console.log(req.body);
    let blog = new Blog(req.body)
    blog.save()
        .then(result => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(result => res.render('details', { blog: result, title: 'Blog details' }))
        .catch(err => console.log(err))
})

app.get('/incoming', (req, res) => {
    const longitude = req.body.Longitude;
    const latitude = req.body.Latitude;
  
    console.log(`The user sent this from ${longitude}, ${latitude}`);
  
    // do something with the location data
  })
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'blog title',
//         snippet: 'Blog snippet, here it is',
//         body: 'This is my beautiful blog body'
//     })
//     blog.save()
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('64aaae6f5fb85792ac517506')
//         .then(result => res.send(result))
//         .catch(err => console.log(err))
// })

// 404

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.render('404', { title: '404 page' }) // Rendering view for ejs file
})
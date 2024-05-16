// console.log(global)

// console.log(__dirname, __filename);

// const os = require('os')

// console.log(os.platform(), os.homedir());

// console.log(process.platform);

// Filesystem

// Read file

// const fs = require("fs")

// fs.readFile('./file/text.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// // Write file 

// fs.writeFile('./file/text.txt', 'Hello Dappy, sure yure ding well', () => {
//     console.log('file was sritten');
// })

// // DirectoRIES

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder removed')
//     })
// }

// // Delete file 

// if (fs.existsSync('./file/deleteme.txt')) {
//     fs.unlink('./file/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }

// // Streams

// // Create stream

// let readStream = fs.createReadStream('./file/blog.txt', { encoding: 'utf-8' })
// let writeStream = fs.createWriteStream('./file/blog1.txt')

// // readStream.on('data', (chunk) => {
// //     console.log('===========CHUNK=============');
// //     // console.log(chunk);
// //     writeStream.write('\n Write Stream \n')
// //     writeStream.write(chunk)
// // })

// readStream.pipe(writeStream)

// Servers
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);

    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Test data here')
    // res.end();
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<p>HTML contenthere</p>')
    // res.end();
    let path = './views'

    switch (req.url) {
        case '/':
            path += '/index.html'
            res.statusCode = 200
            break;
            
            case '/about':
                path += '/about.html'
                res.statusCode = 200
                break;

            case '/about-me':
                path += '/about.html'
                res.statusCode = 301
                res.setHeader('Location', '/about')
                break;
                
                default:
                    path += '/404.html'
                    res.statusCode = 404
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        }   else {
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Server running at 3000');
})
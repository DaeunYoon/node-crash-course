const fs = require('fs');

//reading files
fs.readFile('./docs/blog1.txt', { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})

//writing files
// fs.writeFile('./docs/blog1.txt', 'Hello world!', () => {
// })

//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err)
//             console.log(err)
//         else
//             console.log('folder created')
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) console.log(err)
//         else console.log('folder deleted')
//     });
// }


//delelting files
// if (fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if (err) {
//             console.log(err)
//         } else console.log('file deleted')
//     })
// }


const fs = require('fs').promises;

// fs.readFile('./Read_Me.txt')
//     .then((data) => {
//         console.log(data);
//         console.log(data.toString());
//     })
//     .catch((err) => {
//         console.error(err);
//     });

async () => {
    try{
        const data = await fs.readFile('./Read_Me.txt')
        console.log(data);
        console.log(data.toString());
    }
    catch (err) {
        console.error(err)
    }

}
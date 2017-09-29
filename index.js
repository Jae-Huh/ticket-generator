const jimp = require('jimp')

jimp.read('./images/sydney-opera-house.jpg').then(img => {
  img.greyscale()         
    .write('./images/sydney-opera-house-modified.jpg')
}).catch(function (err) {
  console.error(err)
})


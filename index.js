const jimp = require('jimp')

jimp.read('./images/sydney-opera-house.jpg').then(img => {
  img
    .resize(672, 504)
    .greyscale()
    .brightness(0.5)
  jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
    img.print(font, 100, 100, 'Hello Sydney!')
    jimp.read('./images/cat.jpg').then(cat => {
      img.composite(cat, 150, 100)
        .write('./images/sydney-opera-house-modified.jpg')
    })
  })
}).catch(function (err) {
  console.error(err)
})

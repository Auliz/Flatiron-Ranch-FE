const animals = [
  {
    name: 'Goat',
    image: 'https://www.netclipart.com/pp/m/356-3560075_clipart-goat-head-clipart-three-billy-goats-gruff.png'
  },
  {
    name: 'Sheep',
    image: 'https://lh3.googleusercontent.com/proxy/0RDo9AF6sVLU8sWjiBoVY1Cvl380NGnCmCqXSI8jBqztSPMrGMB0FfMhPVlQHXGYfoZ1oc9RO6yawBXTekNzauBPBTgWiQjJ1lHdGNIGf1vxAhoC7qdu-Qtff15_1vUQ1RUsBEY_'
  },
  {
    name: 'Lamb',
    image: 'https://www.clipartmax.com/png/middle/100-1006423_baby-sheep-cartoon-sheep-png.png'
  },
  {
    name: 'Cow',
    image: 'https://webstockreview.net/images/clipart-cow-cows-milk-11.png'
  },
  {
    name: 'Bull',
    image: 'https://i7.pngguru.com/preview/583/732/832/cattle-drawing-illustration-vector-painted-cute-bull.jpg'
  },
  {
    name: 'Chicken',
    image: 'https://www.clipartmax.com/png/middle/27-270437_cute-white-chicken-cute-chicken-clipart.png'
  },
  {
    name: 'Chick',
    image: 'https://i7.pngguru.com/preview/275/634/445/yellow-hair-chicken-little-yellow-chicken-vector-cute-little-yellow-chicken.jpg'
  },
  {
    name: 'Rooster',
    image: 'https://lh3.googleusercontent.com/proxy/jODNBhV19VyO8xYlgi8v75LHalUljjb7QLRrEsGNu8pzVUbBkpsxALoh2KTbF1o81TZooTiUI55McyDiohkwuYeSs26BsK9MgrHf1ZCH0l84_1kvtJKUnT0NX8WciSvKWfNQnkRqc32vwuj7YdiVbYVkKe8lpGA0KeeBfTID2Xn6ep2fhK0F'
  },
  {
    name: 'Cat',
    image: 'https://i7.pngguru.com/preview/470/437/120/cat-kitten-cartoon-drawing-clip-art-cartoon-images-of-cats.jpg'
  },
  {
    name: 'Dog',
    image: 'https://library.kissclipart.com/20190224/wwq/kissclipart-dog-clipart-puppy-maltese-dog-beagle-3400a99cc8df2422.png'
  },
  {
    name: 'Horse',
    image: 'https://library.kissclipart.com/20191028/zae/kissclipart-animal-figure-yellow-cartoon-horse-toy-654b2e31b4e10b6e.png'
  },
  {
    name: 'Donkey',
    image: 'https://i7.pngguru.com/preview/634/614/329/cartoon-clip-art-dark-green-cartoon-donkey.jpg'
  },
  {
    name: 'Rabbit',
    image: 'https://www.clipartmax.com/png/middle/88-888187_cute-bunny-cartoon-transparent-clip-art-image-rabbit-clipart.png'
  },
  {
    name: 'Pig',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnuWRzhJX4-lPflXFVoFw7Hpz1RQRN7YQaoyqH9z4BN32jwprp&usqp=CAU'
  },
  {
    name: 'Duck',
    image: 'https://webstockreview.net/images/duckling-clipart-mama-duck-16.png'
  },
  {
    name: 'Duckling',
    image: 'https://clipartstation.com/wp-content/uploads/2018/09/baby-duckling-clipart-7.jpg'
  },
  {
    name: 'Turkey',
    image: 'https://www.epicentrofestival.com/wp-content/uploads/2019/12/Cartoon-Turkey-Images-Clip-Art-Turkey-Clipart-Free03063658-720x847.jpg'
  },
  '====================================================='
  {
    id: 18,
    name: 'Bee',
    image: 'https://w0.pngwave.com/png/444/93/bee-cartoon-bee-png-clip-art.png'
  }, 
  {
    id: 19,
    name: 'Bison',
    image: 'https://cdn1.vectorstock.com/i/1000x1000/30/50/cartoon-happy-bison-vector-21053050.jpg'
  }, 
  {
    id: 20,
    name: 'Crow',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/45/03/cartoon-crow-isolated-on-white-background-vector-27154503.jpg'
  }, 
  {
    id: 21, 
    name: 'Egg',
    image: 'https://illustoon.com/photo/4771.png'
  }, 
  {
    id: 22,
    name: 'Farmer',
    image: 'https://cdn5.vectorstock.com/i/1000x1000/36/34/cartoon-farmer-holding-a-rake-vector-24043634.jpg'
  },
  {
    id: 23,
    name: 'Goose',
    image: 'https://image.freepik.com/free-vector/cartoon-goose-white-background_194935-44.jpg'
  },
  {
    id: 24,
    name: 'Hay',
    image: 'https://cdn.clipart.email/a3e46ec779308e376243e4b76f59e4fb_844-hay-bales-stock-illustrations-cliparts-and-royalty-free-hay-_450-259.jpeg'
  },
  {
    id: 25,
    name: 'Hen',
    image: 'https://i.pinimg.com/736x/08/36/41/083641776051c5204a6b457c31554a5e.jpg'
  },
  {
    id: 26,
    name: 'Hive',
    image: 'https://banner2.cleanpng.com/20180404/rsw/kisspng-beehive-tree-hay-day-honey-bee-beehive-5ac5607f8b1160.8153780315228847355696.jpg'
  },
  {
    id: 27,
    name: 'Llama',
    image: 'https://w1.pngwave.com/png/912/361/193/llama-camelid-alpaca-cartoon-livestock-snout-wildlife-png-clip-art.png'
  },
  {
    id: 28, 
    name: 'Bucket',
    image: 'https://cdn5.vectorstock.com/i/1000x1000/30/74/wooden-bucket-with-milk-splash-isolated-on-white-vector-5543074.jpg'
  },
  {
    id: 29,
    name: 'Pail',
    image: 'https://w7.pngwing.com/pngs/873/417/png-transparent-bucket-drawing-cartoon-milk-pail-color-lid-bucket-and-spade.png'
  },
  {
    id: 30,
    name: 'Tractor',
    image: 'https://www.clipartmax.com/png/middle/54-545705_tractor-cartoon-farm-clip-art-tractor-cartoon-farm-clip-art.png'
  },
  {
    id: 31,
    name: 'Rake',
    image: 'https://cdn3.vectorstock.com/i/1000x1000/23/87/rake-with-a-wooden-handle-icon-cartoon-style-vector-9582387.jpg'
  },
  {
    id: 32, 
    name: 'Scarecrow',
    image: 'https://img.favpng.com/17/5/22/scarecrow-icon-scalable-vector-graphics-png-favpng-eiDqdFMs6iyjFNyQHk1jE6V6h.jpg'
  },
  {
    id: 33,
    name: 'Wheelbarrow',
    image: 'https://image.shutterstock.com/image-vector/yellow-wheelbarrow-260nw-373977295.jpg'
  }, 
  {
    id: 34,
    name: 'Windmill',
    image: 'https://mpng.subpng.com/20190506/pyp/kisspng-vector-graphics-farm-illustration-cattle-agricultu-windmill-clipart-rustic-frames-illustrations-hd-im-5ccfc82583d702.26037825155712106154.jpg'
  }

  ]

  function getAnimals () {
    return animals  
  }

// --'Barn'
// --'Bee'
// --'Bison'
// --'Buffalo'
// --'Bull'
// --'Cat'
// --'Chick'
// --'Crow'
// --'Dog'
// --'Donkey'
// --'Duck'
// --'Duckling'
// --'Egg'
// --'Farmer'
// --'Gander'
// --'Goat'
// --'Goose'
// --'Hay'
// --'Hen'
// --'Hive'
// --'Horse'
// --'Lamb'
// --'Llama'
// --'Milk'
// --'Pail'
// --'Pig'
// --'Piglet'
// --'Rabbit'
// --'Rake'
// --'Rooster'
// --'Scarecrow'
// --'Trackor'
// --'Windmill'


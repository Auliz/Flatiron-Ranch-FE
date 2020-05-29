const animals = [
  {
    id: 1,
    name: 'Goat',
    sound: 'sounds/goat.mp3',
    image: 'images/animals/goat.png'
  },
  {
    id: 2,
    name: 'Sheep',
    sound: 'sounds/sheep.mp3',
    image: 'images/animals/sheep.png'
  },
  {
    id: 3,
    name: 'Lamb',
    sound: 'sounds/lamb.mp3',
    image: 'images/animals/lamb.png'
  },
  {
    id: 4,
    name: 'Calf',
    sound: 'sounds/cow.mp3',
    image: 'images/animals/calf.png'
  },
  {
    id: 5,
    name: 'Bull',
    sound: 'sounds/bull.mp3',
    image: 'images/animals/bull.png'
  },
  {
    id: 6,
    name: 'Chicken',
    sound: 'sounds/chicken.mp3',
    image: 'images/animals/chicken.png'
  },
  {
    id: 7,
    name: 'Chick',
    sound: 'sounds/chick.mp3',
    image: 'images/animals/chick.png',
    url: 'https://i7.pngguru.com/preview/275/634/445/yellow-hair-chicken-little-yellow-chicken-vector-cute-little-yellow-chicken.jpg'
  },
  {
    id: 8,
    name: 'Rooster',
    sound: 'sounds/rooster.mp3',
    image: 'images/animals/rooster.png'
  },
  {
    id: 9,
    name: 'Cat',
    sound: 'sounds/cat.mp3',
    image: 'images/animals/cat.png',
    url: 'https://i7.pngguru.com/preview/470/437/120/cat-kitten-cartoon-drawing-clip-art-cartoon-images-of-cats.jpg'
  },
  {
    id: 10,
    name: 'Dog',
    sound: 'sounds/dog.mp3',
    image: 'images/animals/dog.png'
  },
  {
    id: 11,
    name: 'Horse',
    sound: 'sounds/horse.mp3',
    image: 'images/animals/horse.png'
  },
  {
    id: 12,
    name: 'Donkey',
    sound: 'sounds/donkey.mp3',
    image: 'images/animals/donkey.png'
  },
  {
    id: 13,
    name: 'Rabbit',
    sound: '',
    image: 'images/animals/rabbit.png'
  },
  {
    id: 14,
    name: 'Pig',
    sound: 'sounds/pig.mp3',
    image: 'images/animals/pig.png'
  },
  {
    id: 15,
    name: 'Duck',
    sound: 'sounds/duck.mp3',
    image: 'images/animals/duck.png'
  },
  {
    id: 16,
    name: 'Duckling',
    sound: 'sounds/duck.mp3',
    image: 'images/animals/duckling.png'
  },
  {
    id: 17,
    name: 'Turkey',
    sound: 'sounds/turkey.mp3',
    image: 'images/animals/turkey.png'
  },
  {
    id: 18,
    name: 'Bee',
    sound: 'sounds/bee.mp3',
    image: 'https://w0.pngwave.com/png/444/93/bee-cartoon-bee-png-clip-art.png'
  },
  {
    id: 19,
    name: 'Bison',
    sound: 'sounds/bison.mp3',
    image: 'https://cdn1.vectorstock.com/i/1000x1000/30/50/cartoon-happy-bison-vector-21053050.jpg'
  },
  {
    id: 20,
    name: 'Crow',
    sound: 'sounds/crow.mp3',
    image: 'https://cdn4.vectorstock.com/i/1000x1000/45/03/cartoon-crow-isolated-on-white-background-vector-27154503.jpg'
  },
  {
    id: 21,
    name: 'Egg',
    sound: '',
    image: 'https://illustoon.com/photo/4771.png'
  },
  {
    id: 22,
    name: 'Farmer',
    sound: 'sounds/farmer.mp3',
    image: 'https://cdn5.vectorstock.com/i/1000x1000/36/34/cartoon-farmer-holding-a-rake-vector-24043634.jpg'
  },
  {
    id: 23,
    name: 'Goose',
    sound: 'sounds/goose.mp3',
    image: 'https://image.freepik.com/free-vector/cartoon-goose-white-background_194935-44.jpg'
  },
  {
    id: 24,
    name: 'Hay',
    sound: '',
    image: 'https://cdn.clipart.email/a3e46ec779308e376243e4b76f59e4fb_844-hay-bales-stock-illustrations-cliparts-and-royalty-free-hay-_450-259.jpeg'
  },
  {
    id: 25,
    name: 'Hen',
    sound: 'sounds/chicken.mp3',
    image: 'https://i.pinimg.com/736x/08/36/41/083641776051c5204a6b457c31554a5e.jpg'
  },
  {
    id: 26,
    name: 'Hive',
    sound: 'sounds/bee.mp3',
    image: 'https://banner2.cleanpng.com/20180404/rsw/kisspng-beehive-tree-hay-day-honey-bee-beehive-5ac5607f8b1160.8153780315228847355696.jpg'
  },
  {
    id: 27,
    name: 'Llama',
    sound: 'sounds/llama.mp3',
    image: 'https://w1.pngwave.com/png/912/361/193/llama-camelid-alpaca-cartoon-livestock-snout-wildlife-png-clip-art.png'
  },
  {
    id: 28,
    name: 'Bucket',
    sound: '',
    image: 'https://cdn5.vectorstock.com/i/1000x1000/30/74/wooden-bucket-with-milk-splash-isolated-on-white-vector-5543074.jpg'
  },
  {
    id: 29,
    name: 'Pail',
    sound: '',
    image: 'https://w7.pngwing.com/pngs/873/417/png-transparent-bucket-drawing-cartoon-milk-pail-color-lid-bucket-and-spade.png'
  },
  {
    id: 30,
    name: 'Tractor',
    sound: '',
    image: 'https://www.clipartmax.com/png/middle/54-545705_tractor-cartoon-farm-clip-art-tractor-cartoon-farm-clip-art.png'
  },
  {
    id: 31,
    name: 'Rake',
    sound: '',
    image: 'https://cdn3.vectorstock.com/i/1000x1000/23/87/rake-with-a-wooden-handle-icon-cartoon-style-vector-9582387.jpg'
  },
  {
    id: 32,
    name: 'Scarecrow',
    sound: '',
    image: 'https://img.favpng.com/17/5/22/scarecrow-icon-scalable-vector-graphics-png-favpng-eiDqdFMs6iyjFNyQHk1jE6V6h.jpg'
  },
  {
    id: 33,
    name: 'Wheelbarrow',
    sound: '',
    image: 'https://image.shutterstock.com/image-vector/yellow-wheelbarrow-260nw-373977295.jpg'
  },
  {
    id: 34,
    name: 'Windmill',
    sound: '',
    image: 'https://mpng.subpng.com/20190506/pyp/kisspng-vector-graphics-farm-illustration-cattle-agricultu-windmill-clipart-rustic-frames-illustrations-hd-im-5ccfc82583d702.26037825155712106154.jpg'
  }
  ]

const Places = [
    {
        id: 1,
        image:"https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/efd7839dff0bfec81c3e993fca4a07ab.kashmir.jpg",
        title: "Kashmir",
        subtitle: "For its captivating natural beauty",
        info: `One of the most incredible places in India, Kashmir is known for its natural beauty and is thus, rightly called Heaven on Earth. With its picturesque lakes, lush fruit orchards, verdant meadows, pines and deodars forests, all enclosed with mountains of Himalayan and Pir-Panjal ranges – Kashmir seems to have directly made its way right out from a postcard.
            The beautiful Kashmir Valley is home to many destinations ideal for nature lovers, family vacationers, honeymooners, and even a group of friends. Along with great sightseeing opportunities, it offers adventure activities like trekking, skiing, and river rafting, recreational activities like fishing & angling, and even spa & wellness. Shopaholics and food lovers can also have their share of enjoyment as Kashmir spoils them with many options.    
        `
    },
    {
        id:2,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/d9cb68580f5b4deafd3df78f7af33955.ladakh.jpg',
        title:'Ladakh',
        subtitle:'For its unmatched adventure options',
        info:`The land of high mountain passes, barren mountains, alpine lakes & meadows, enchanting valleys and ancient colourful Buddhist monasteries, Ladakh is one of the must-visit destinations in India. It is ideal for adventure enthusiasts and nature lovers alike.
        Ladakh is unlike any place to visit in India. It is here that you can witness some of the world’s highest mountain passes as well as exotic wildlife species in India’s largest national park. This must-visit destination in India is perfect for motorbiking and mountain biking, camping, river rafting, trekking and peak climbing adventures.
        `
    },
    {
        id:3,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/2d9c268d4fa548bd43d2033c1527b1cc.Delhi.jpg',
        title:'Delhi',
        subtitle:'For its incredible history and past',
        info:`The capital city makes for one of the perfect travel destinations in India. A city of heritage, monuments, teeming with bazaars and mouth-watering street food, high-end malls, and luxury hotels & restaurants; Delhi has something for everyone. So whether you are looking for a heritage walk or a shopping experience or for kids-friendly activities or places for photography or even seek the blessings of god, Delhi will not disappoint.
        `
    },
    {
        id:4,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/d3081c763d3986785722f24ef723d9e9.sikkim-tourism.jpg',
        title:'Sikkim',
        subtitle:'For its breathtaking natural vistas and enthralling adventures',
        info:`One of the most beautiful places in India, Sikkim is a glittering gem of the North-East Himalayas. This northeast Indian destination is popular for being home to the world’s third highest mountain, Kanchenjunga (8586 m). Sikkim is one of the best destinations in India to spend a peaceful and laid back holiday as well as enjoy enthralling adventure activities.
        Teeming with some of the world’s scenic trekking trails and rivers, this little northeastern state makes for a perfect adventure destination in India for trekkers, rafting enthusiasts, mountaineers and rock climbers. It is also famous for offering an experience of Yak Safari.
        `
    },
    {
        id:5,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/f17eb96dafcd4b9df96fbee6e178413c.Meghalaya-Shillong.jpg',
        title:'Meghalaya',
        subtitle:'For its spellbinding natural beauty ',
        info:`Also known as the abode of clouds, Meghalaya is a hidden gem nestled in the lap of pine-covered Khasi and Garo Hills in the Northeastern part of India. One of the most picturesque states of North East India with its innumerable waterfalls, mystic caves, dense forests and sparkling lakes and rivers; Meghalaya is an ideal destination in India for trekkers, cavers/spelunkers and nature lovers.
        It is only in Meghalaya where you will come across unique man-made living root bridges that are grown and not built. The ‘double decker living root bridge’ in Cherrapunjee is one such artistic splendour that has been standing strong for over 200 years. Meghalaya also offers a sneak peek of its tribal life along with delicious local food. The state offers a travel experience in India unlike any other.
        `
    },
    {
        id:6,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/41147ddff358651c1ead2bcccafc2bee.Kerala-Houseboat-in-backwater-of-Kerala.jpg',
        title:'Kerala',
        subtitle:'For its backwaters, beaches & culture',
        info:`Pristine backwaters, coconut-palm fringed beaches, rejuvenating Ayurvedic massages and colourful festivals; Yes! You guessed it right. I am talking about God’s own country, Kerala. One of the most picturesque places in India with a footfall of thousands of tourists every year, Kerala is tucked between Arabian Sea and the Western Ghats and is blessed with immense natural beauty.
        Besides serene backwaters and pristine beaches, Kerala is also home to scenic hill stations and numerous wildlife sanctuaries. Offering an umpteen number of tourist activities, Kerala is a must-visit destination for every traveller. From memorable houseboat stays to nature walks through the sprawling tea gardens to wildlife safari to mesmerizing Kathakali performance to savouring traditional dishes, Kerala has a lot to offer.
        `
    },
    {
        id:7,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/a7d05984953269179f71fa0b7a9c4dec.andaman.jpg',
        title:'Andaman',
        subtitle:'For its pristine beauty and array of water sports',
        info:`Known for their picturesque landscape comprising pristine beaches, azure waters and verdant forests, Andaman & Nicobar are a group of more than 500 islands situated in an infinite expanse of the Bay of Bengal. Packed with an array of interesting activities, Andaman & Nicobar is indeed one of the best beach destinations in India.
        `
    },
    {
        id:8,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/f2ae4d77ad640c3546b7f8e0ce38ed6e.Goa-Paragliding-in-Goa.jpg',
        title:'Goa',
        subtitle:'For its beaches, world-heritage churches, food & nightlife',
        info:`Known for its gorgeous beaches, stellar nightlife, delish seafood, world-heritage listed monuments, Goa is where all the fun is in India. Although the beaches of Goa are the primary tourism attractions, there are many surprises waiting to be unravelled.
        Goa has one of the best nightlife in India with trendy bars, beach shacks, elegant cafes and many clubs and discotheques. For those looking for a luxury stay, South Goa has many options.
        `
    },
    {
        id:9,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/3b6e0ca243a0a66f2af6bb4c5db4e1f3.agra-taj-mahal.jpg',
        title:'Agra, Uttar Pradesh',
        subtitle:'For its unprecedented Mughal grandeur',
        info:`Home to the symbol of love, Taj Mahal, Agra in Uttar Pradesh finds its spot on the world heritage map.  With its three gems, the impressive Taj Mahal, magnificent Agra Fort and splendid Fatehpur Sikri; the city charms thousands of tourists including historians and art lovers from all across India and the world.
        Agra also gives a chance to savour authentic and traditional Mughlai flavours, shopping in the lively markets teeming with marble handicrafts & fine leather items, and even soaking your spirits in the enthralling fiesta of the Taj Mahotsav. For a more closer look at this heritage city, get on an off the beaten path journey and explore the narrow alleyways of the old city, ancient temples or visit the renowned poet, Mirza Ghalib’s birthplace.
        `
    },
    {
        id:10,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/70007740affe886ad97e0c1fd50e2999.varanasi.jpg',
        title:'Varanasi, Uttar Pradesh',
        subtitle:'For its spiritual essence',
        info:`Exploration of India remains incomplete without a trip to the holy city of Varanasi in Uttar Pradesh. Also known as the city of Moksha (salvation), the place holds a great religious significance for the Hindus.
        Situated on the banks of sacred river Ganga, the city is believed to be more than 5000 years old. Bustling with enchanting ancient temples and holy Ghats crowded with people performing various rituals and prayers, Varanasi makes for an ultimate spiritual travel destination India.
        `
    },
    {
        id:11,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/ab590124f313f941db00a51f74231b1f.jaisalmer-desert-camel-safari.jpg',
        title:'Jaisalmer, Rajasthan',
        subtitle:'Jaisalmer, Rajasthan',
        info:`Also known as the Land of the Golden Sand, Jaisalmer in Rajasthan is a beautiful city known for its rich cultural heritage and tales of brave Rajput rulers. This popular tourist destination is flanked by the expansive Thar Desert. Jaisalmer offers an authentic experience of Rajasthani culture, traditions, and heritage with its magnificent Sonar Quila or the Jaisalmer Fort, havelis, delectable food, and camel safari opportunity in the desert.
        `
    },
    {
        id:12,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/3bf15b0d7f4ff2b01e62a84bb43b82bc.run-of-kutch.jpg',
        title:'Rann of Kutch, Gujarat',
        subtitle:'For its salt desert and village life experience',
        info:`An enormous stretch of white salt desert, the Great Rann of Kutch in Gujarat is amongst the best places to visit in India. Sprawling in an area of 7500 sq km, Rann of Kutch is one of the largest salt deserts in the world and only one of its kind in India. This must-see place in Gujarat comes to life during the annual Rann Utsav when the white canvas gets painted with different hues and shades of lively folk performances and art.
        `
    },
    {
        id:13,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/8b30d12881f04fde1141c95f4a3beb0b.Aurangabad-Bibi-qa-Maqbara.jpg',
        title:'Aurangabad, Maharashtra',
        subtitle:'For its mesmerizing architecture',
        info:`Dotted with plenty of ancient monuments, Aurangabad is a historical city located in Maharashtra. A city ruled by several dynasties in the past, today boasts of its rich heritage with its architectural marvels reminding the tales of once reigning dynasties. Mostly famed for its stunning Buddhist cave paintings of Ajanta and Ellora, a UNESCO World Heritage Site, Aurangabad is the best destination to visit for history buffs.
        `
    },
    {
        id:14,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/791a7e97256482435961880d4a044fb6.sunderbans-tiger-safari.jpg',
        title:'Sunderbans, West Bengal',
        subtitle:'For its rich wildlife and rustic charm',
        info:`Home to the world’s largest mangrove forests and a large population of Royal Bengal Tigers, Sunderbans in West Bengal is one of the most famous wildlife destinations in India. Situated in the delta formed by Brahmaputra, Ganges, and Meghna Rivers, Sunderbans is also home to a large number of wild animals, reptiles and birds. It is also recognized by UNESCO as a World Heritage Site.
        `
    },
    {
        id:15,
        image:'https://cdn-cdmoj.nitrocdn.com/aMXvDVbOTxUQVHZUrOLYcprbySihZhas/assets/static/optimized/blog/wp-content/uploads/2020/11/4877955f833d02e120544161a4897233.Hampi-Karnataka.jpg',
        title:'Hampi, Karnataka',
        subtitle:'For its brilliantly carved monuments',
        info:`A city immersed in the glorious past of the Vijayanagara Empire dating back to the period between 14th and 16th century, Hampi in Karnataka is another great place to visit for history buffs. Ruins of this ancient city with its number of strikingly beautiful monuments, temples and palaces still tell you the tales of grandeur and magnificence of the Vijayanagara rulers.
        `
    }
]

export {Places}
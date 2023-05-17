const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/774/300/300.jpg?hmac=stZMi6N_KwAYmgPdHkh0LKe3D2y3qNz3X8HTYEeLHCs",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://fastly.picsum.photos/id/689/300/300.jpg?hmac=hNSGFLr-Qb4LU8lzZ5-QQn9_4NL-tW0wKp1xbNcvkLo"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/87/300/300.jpg?hmac=ZkJnFlpR_vw2mM6EcUmokiBIZxMYVvNd_yPHfMES6sM",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://fastly.picsum.photos/id/34/300/300.jpg?hmac=-GjU0JqJpDGmN6a9jh5As4yoFs10KNFhBWDAnOa2f3A"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/787/300/300.jpg?hmac=INjE1ifrj7msPa8lJyw1K_wgWU1l8hfhQnX_uW6OTqE",
        "author": {
            "name": "Luca Formicola",
            "image": "https://fastly.picsum.photos/id/291/300/300.jpg?hmac=N9j_RtHRtCejilL11GBjQhe6_WI0UC4ffotYbmYBu-Q"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://fastly.picsum.photos/id/24/300/300.jpg?hmac=n9HW5CMcd27gPT7__-Xvo__UFbvB8d2UeZxwAToL6r0",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://fastly.picsum.photos/id/857/300/300.jpg?hmac=_2o0QaHplHuWOr4ETeEP5_3Wo6lgNhoxZgeb0yjFckc"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// seleziono il contenitore
const contenitore = document.getElementById('container');

// genero e stampo nell'html la struttura dati
posts.forEach(element => {

    const post = 
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">
                        ${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `

    
    console.log(post);
    contenitore.innerHTML += post;
});

// seleziono contatore like
const counters = document.querySelectorAll(".js-likes-counter");
console.log(counters);

// selezione bottone like
const likeButtons = document.querySelectorAll(".like-button")
console.log(likeButtons);



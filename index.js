const posts = [
    [
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
        {
            title: 'He deserves a lot more Verstappen backs Alonzo',
            image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
            description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
            type: 'Movies'
        },
    ]
]

console.log(posts)
const showPost = document.querySelector('.main_content_articles')
/* var showArticles = document.querySelector('.main_content_articles_item') */
let showArticles = ``

posts[0].forEach(item => {
    showArticles += `
<div class="main_content_articles_item">
    <div class="main_content_articles_item_img">
       <img src="${item.image}" alt="">
    </div>
    <div class="main_content_articles_item_title">
        <h4>
            ${item.title}
        </h4>
    </div>
    <div class="main_content_articles_item_description">
        <p>${item.description}</p>
    </div>
    <div class="main_content_articles_item_type">
        <h5>
            ${item.type}
        </h5>
    </div>
</div>
    `
})
console.log(showArticles)
showPost.innerHTML += showArticles

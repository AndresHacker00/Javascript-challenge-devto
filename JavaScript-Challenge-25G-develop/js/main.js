import { card } from "./postCard.js";
import { getPosts } from "./DataBase.js";
import { filterTags } from "./asideRight.js";
let isSomeUserLoged = localStorage.getItem('token')


const targetDinamic = (posts,key) => {
    let newCard = card(posts,key)
    let target = document.getElementById("card-container")
    target.appendChild(newCard)
}
let Posts = async () => {
    let posts = await getPosts();
    let array = Object.entries(posts.data);
    return posts.data;
};

let allPosts = await Posts()

let printPost = async (posts) =>{
    posts.forEach(element => {
        let cardPost = targetDinamic(element, element)
    });
    return
}

printPost(allPosts);

const filterRelevant = (post) => post.filter( post => {
    let reactions = post[1].heartReactions;
    return  reactions > 60;
});

let relevantSelector = document.getElementById("relevant");
relevantSelector.addEventListener('click', () => {
    let relevant = filterRelevant(allPosts);
    deletePosts();
    printPost(relevant);
    return;
});

const filterLastest = (post) => post.filter((item, index) => {
    if((post.length - 1) === index){
        return item
    }
});

let lastestSelector = document.getElementById("lastest");
lastestSelector.addEventListener('click', () => {
    let lastest = filterLastest(allPosts);
    deletePosts();
    printPost(lastest);
    return
});

const filterTop = (post) => post.filter( post => {
    let top = post[1].topCriterium;
    return  top > 90;
});

let topSelector = document.getElementById("top");
topSelector.addEventListener('click', () => {
    let top = filterTop(allPosts);
    deletePosts();
    printPost(top);
    return;
});

const deletePosts = () => {
    let list = document.getElementById("card-container");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    return ;
};

const getTags = async (posts) =>{
    const allPosts = filterTags(posts)
    return allPosts
}

let test1 = await getTags(allPosts)

let button = document.getElementById("buttonSearchForm");


button.addEventListener('click', () => {
    event.preventDefault()
    deletePosts()
    searchByElement(allPosts)
});


const searchByElement = allPosts => {
    const searchInput = document.getElementById("searchPost");
    const searchParam = searchInput.value;
    let post = allPosts;
    let getTitles = post.filter(element => {
        return element[1].postTitle.toLowerCase().includes(searchParam.toLowerCase())
    });
    printPost(getTitles); 
}
const searchByTag = (tag, allPosts) => {
    let tagToSearch = tag;
    let posts = allPosts; 
    let getTitles = posts.filter(element => {
        return element[1].postTitle.toLowerCase().includes(tagToSearch.toLowerCase())
    });
    printPost(getTitles); 
}

let buttonCreate = document.getElementById("createPost")
buttonCreate.addEventListener('click', () => {
    window.location.replace("../html/newPost.html")
})

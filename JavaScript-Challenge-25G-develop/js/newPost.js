import { createPost } from "./DataBase.js";




const token = localStorage.getItem('token');
if(token === ""){
  window.location.replace("/login");
};
const payload = token.split(".")[1];
const idUserLoged = JSON.parse(atob(payload)).id
let tags = [];



const getPosttInformation = () => {
    let postTitleInput = document.getElementById("postTitle");
    let postTitle = postTitleInput.value;
    let postContentInput = document.getElementById("postContent");
    let postContent = postContentInput.value;
    let postImageInput = document.getElementById("postImageUrl");
    let postImage = postImageInput.value;
    
    let postlectureTimeInput = document.getElementById("lectureTime");
    let postTags = tags;
    let postlectureTime = postlectureTimeInput.value;
    let creationDate = new Date();
    let heartReactions = getRamdomInt(100);
    let marksCount = getRamdomInt(100);
   
    let postInformation = {
      userCreatorId: idUserLoged,
      title: postTitle, //title
      content: postContent,
      image: postImage,
      time: postlectureTime,
      tags: postTags,
      date: creationDate,
      heartReactions : heartReactions,
      marks: marksCount 
    };
    return postInformation;
  };
const createButton = document.getElementById("submitButton")

createButton.addEventListener('click',async () => {
    event.preventDefault();
    let newPost = getPosttInformation();
    createPost(newPost)
    clearForm()
    window.location.replace("/index.html")
})

const getRamdomInt = max => Math.floor(Math.random() * max);

const createTagsTable = tags => {
  let tableTag = document.getElementById("tagsTable");
  tags.forEach((element, index) => {
    let tableItem = createTagTableItem(element, index);
    tableTag.appendChild(tableItem);
  });
  return; 
};
const createTagTableItem = (text,id) => {
    let tableDataItem = document.createElement("td");
    tableDataItem.setAttribute("id", `${id}`)
    let dataText = document.createTextNode(text);
   
    tableDataItem.appendChild(dataText);
    
    return tableDataItem;
};

const addTagsButton = document.getElementById("buttonTags")
addTagsButton.addEventListener('click', () => {
    event.preventDefault();
    deleteTagsList();
    let postTagsInput = document.getElementById("postTags");
    let postTagInput = postTagsInput.value;
    let postTag = `#${postTagInput}`;
    tags.push(postTag);
    let postInput = document.getElementById("postTags");
    postInput.value = "";
    createTagsTable(tags);
    return tags;
});


const deleteTagsList = () => {
  let list = document.getElementById("tagsTable");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    return;
};
const clearForm = () => {
  deleteTagsList();
  tags = [];
  let postTitleInput = document.getElementById("postTitle");
  postTitleInput.value = "";
  let postContentInput = document.getElementById("postContent");
  postContentInput.value = "";
  let postImageInput = document.getElementById("postImageUrl");
  postImageInput.value = "";
  // let postImageTitleInput = document.getElementById("postImageTitle");
  // postImageTitleInput.value = "";
  let postlectureTimeInput = document.getElementById("lectureTime");
  postlectureTimeInput.value = "";
  let postInput = document.getElementById("postTags");
  postInput.value = "";
}
const previewImage = () => {
  let postImageInput = document.getElementById("postImageUrl");
  let postImage = postImageInput.value;
  let imgPreview = document.getElementById("imgPreview");
  if(postImage !== ""){
    imgPreview.setAttribute("src", `${postImage}` );
  }else{
    imgPreview.setAttribute("scc", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fccard3dev%2Fdynamic-yosemite%2F512%2FPreview-icon.png&f=1&nofb=1&ipt=68aa98d04b1dfc9def2120e1c8b36293eb8b25fd6d7c72ae2f7f39eb2acefab6&ipo=images");
  }
  return;
}

document.addEventListener('click', previewImage);

window.addEventListener('message', event => {
  let data = event.data;
})




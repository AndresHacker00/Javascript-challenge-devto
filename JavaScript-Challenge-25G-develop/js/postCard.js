// Tiene el nombre de usuario, cuando se publico, comentario en texto
// * Tiene el nombre de usuario, cuando se publico, comentario en texto
let minutesRead = (post) => {
    let divContainer = document.createElement("div")

        let divMinutesRead = document.createElement("div")
            divMinutesRead.classList.add("minutes-read")

            let ancorRead = document.createElement("a")
                ancorRead.classList.add("minutes-read__anc")
                ancorRead.setAttribute("href","#")

                let cardText = document.createElement("p")
                    cardText.classList.add("card-text")

                    let smallText = document.createElement("small")
                        smallText.classList.add("text-body-secondary")

                        let readText = document.createTextNode(`${post.time}min read`)
                    smallText.append(readText)
                cardText.append(smallText)

                let readImg = document.createElement("img")
                    readImg.setAttribute("src","./assets/icons/save-No-Background-Icon.svg")
                    readImg.classList.add("mt-1")

                ancorRead.append(cardText,readImg)
            divMinutesRead.append(ancorRead)
        divContainer.append(divMinutesRead)
    return divContainer
}
let reactionsContainer = (post) => {
    let comments = minutesRead(post)
    let mainDiv = document.createElement("div")

        let reactionsContainer = document.createElement("div")
            reactionsContainer.classList.add("reactionsContainer","d-flex","flex-row")

            let ancorReaction = document.createElement("a")
                ancorReaction.setAttribute("href","#")
                ancorReaction.classList.add("text-decoration-none","emojisWrapper")

                let userSpaceEmojis = document.createElement("div")
                    userSpaceEmojis.classList.add("user-data-space__tags--emojis")

                    let emojisReactions = document.createElement("div")
                        emojisReactions.classList.add("emojisReaction")

                        let emojisIcons = document.createElement("div")
                            emojisIcons.classList.add("emojisReaction__icons")

                            let ancorIcons = document.createElement("a")
                                ancorIcons.classList.add("text-decoration-none","iconsContainer")
                                ancorIcons.setAttribute("href","#")
                            
                                let heartIcon = document.createElement("img")
                                    heartIcon.setAttribute("src","./assets/icons/red-Heart-Icon.svg")
                                    heartIcon.setAttribute("alt","icono de corazon")
                                
                                // let unicornIcon = document.createElement("img")
                                //     unicornIcon.setAttribute("src","./assets/icons/unicorn-Icon.svg")
                                //     unicornIcon.setAttribute("alt","icono de unicornio")

                                // let crazyIcon = document.createElement("img")
                                //     crazyIcon.setAttribute("src","./assets/icons/crazy-Man-Icon.svg")
                                //     crazyIcon.setAttribute("alt","icono de cabeza que explota")
                                        
                                // let raiseIcon = document.createElement("img")
                                //     raiseIcon.setAttribute("src","./assets/icons/raise-.svg")
                                //     raiseIcon.setAttribute("alt","icono de manos arriba")
                                
                                // let fireIcon = document.createElement("img")
                                //     fireIcon.setAttribute("src","./assets/icons/fire-Icon.svg")
                                //     fireIcon.setAttribute("alt","icono de fuego")

                                let spanText = document.createElement("span")
                                    spanText.classList.add("reactionCount")

                                    let parragraph = document.createElement("p")
                                        let totalReactions = post.heartReactions 
                                        let textInP = document.createTextNode(`${totalReactions} reactions`)
                                    parragraph.appendChild(textInP);
                                    parragraph.classList.add("text-decoration-none");
                                spanText.appendChild(parragraph);
                                
                            ancorIcons.append(heartIcon,spanText)
                        emojisIcons.appendChild(ancorIcons)
                    emojisReactions.appendChild(emojisIcons)
                userSpaceEmojis.appendChild(emojisReactions)
            ancorReaction.appendChild(userSpaceEmojis)


                            let divComments = document.createElement("div")
                                divComments.classList.add("emojisReaction__comments")

                                let commentAncor = document.createElement("a")
                                    commentAncor.classList.add("text-container")
                                    commentAncor.setAttribute("href","#")

                                    // let iconSvg = document.createElement("svg")
                                    //     iconSvg.setAttribute("xmlns","http://www.w3.org/2000/svg")
                                    //     iconSvg.setAttribute("width","24")
                                    //     iconSvg.setAttribute("height","24")
                                    //     iconSvg.setAttribute("role","img")
                                    //     iconSvg.setAttribute("aria-labelledby","arxy4y2dlmoqk3v2m7pqq1i5h7pawpy2")
                                    //     iconSvg.classList.add("crayons-icon")

                                    //     let title = document.createElement("title")
                                    //         title.setAttribute("id","arxy4y2dlmoqk3v2m7pqq1i5h7pawpy2")
                                    //             let textInTitle = document.createTextNode("Comments")
                                    //         title.appendChild(textInTitle)
                                        
                                    //     let path = document.createElement("path")
                                    //         path.setAttribute("d","M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z")

                                    // iconSvg.append(title,path)
                                    let commenImg = () => {
                                        let commentsCountImg = document.createElement("img");
                                        commentsCountImg.classList.add("commentIcon");
                                        commentsCountImg.setAttribute("src", "./assets/icons/comments-count.svg");
                                        commentsCountImg.setAttribute("alt", "Comments Icon");
                                        return commentsCountImg;
                                    };

                                    let commentsP = document.createElement("p")
                                        let text23 = document.createTextNode(`${aleatorio()}`)
                                    commentsP.appendChild(text23)
                                        
                                        let commentSpan = document.createElement("span")
                                            commentSpan.classList.add("d-none","d-md-inline-block")

                                            let textInSpan = document.createTextNode(" " + "\n comments")
                                        commentSpan.appendChild(textInSpan)
                                    commentsP.appendChild(commentSpan)

                                let imgCom = commenImg()
                                commentAncor.append(imgCom,commentsP)
                            divComments.appendChild(commentAncor)

                    reactionsContainer.append(ancorReaction,divComments,comments)
                mainDiv.appendChild(reactionsContainer)

        return mainDiv
}
// let reactionsContainer = post => {
//     let emojisReactions = anchorWrapper(post);
//     let minutesToRead = minutesRead(post);

//     let reactions = document.createElement("div");
//     reactions.classList("reactionsContainer", "d-fex", "flex-row");
//     reactions.append(emojisReactions, minutesToRead);
//     return reactions;
// }

// let anchorWrapper = post => {
//     let anchorCont = anchorContainer();
//     let reactionsAnchor = document.createElement("a");
//     reactionsAnchor.setAttribute("href", "#");
//     reactionsAnchor.appendChild(anchorCont);
//     return reactionsAnchor; 
// };

// let anchorContainer = post => {
    
// }

let hashtags = (post) => {
let tags = post.tags
    let divTags = document.createElement("div")
        divTags.classList.add("user-data-space__tags--lighter")

        let ulList = document.createElement("ul")

            // let list2 = document.createElement("li")
                
            //     let ancor2 = document.createElement("a")
            //         ancor2.setAttribute("href","#")

            //             let tag2 = document.createElement("p")
            //                 let textInP2 = document.createTextNode(post.tags[1])
            //             tag2.appendChild(textInP2)
            //         ancor2.appendChild(tag2)
            //     list2.appendChild(ancor2)

            // let list3 = document.createElement("li")
                
            //     let ancor3 = document.createElement("a")
            //         ancor3.setAttribute("href","#")
        
            //             let tag3 = document.createElement("p")
            //                 let textInP3 = document.createTextNode(post.tags[2])
            //             tag3.appendChild(textInP3)

            //         ancor3.appendChild(tag3)
            //     list3.appendChild(ancor3)

            // let list4 = document.createElement("li")
                
            //     let ancor4 = document.createElement("a")
            //         ancor4.setAttribute("href","#")
        
            //             let tag4 = document.createElement("p")
            //                 let textInP4 = document.createTextNode(post.tags[3])
            //             tag4.appendChild(textInP4)

            //         ancor4.appendChild(tag4)
            //     list4.appendChild(ancor4)

            const liTags = (tags)  => {
                tags.forEach(tag => {
                let list1 = document.createElement("li")
                
                let ancor1 = document.createElement("a")
                    ancor1.setAttribute("href","#")
                        let tag1 = document.createElement("p")
                            let textInP1 = document.createTextNode(post.tags[0])
                        tag1.appendChild(textInP1)

                    ancor1.appendChild(tag1)
                list1.appendChild(ancor1)
            ulList.append(list1)
                })
            }
            liTags(tags)
    divTags.appendChild(ulList)
return divTags
}
let title = (post) => {
    let divWrapper = document.createElement("div")

        let h2Title = document.createElement("h2")
            h2Title.classList.add("card-title","user-data-space","d-flex")

            let titleAncor = document.createElement("a")
                titleAncor.classList.add("titleAnchor")
                titleAncor.setAttribute("href","./html/post.html")

                let titleText = document.createTextNode(post.title)
            titleAncor.appendChild(titleText)
        h2Title.appendChild(titleAncor)
    divWrapper.appendChild(h2Title)
    return divWrapper
}

let infoWrapper = (post) => {
    let postTitle = title(post)
    let tags = hashtags(post)
    let reactions = reactionsContainer(post)

    let wrapper = document.createElement("div")
        wrapper.classList.add("infoWrapper")
    
        wrapper.append(postTitle,tags,reactions)

    return wrapper
}
// TODOs:

// ? genera el card body
let userName = (post, date) => {

    let divUserName = document.createElement("div")
        divUserName.classList.add("user-data-space__name")

        let nameAncor = document.createElement("a")
            nameAncor.classList.add("user-data-space__name--bold")
            nameAncor.setAttribute("href","./html/post.html")

            let nameP = document.createElement("p")
                nameP.classList.add("author-name")
                
                let textInP = document.createTextNode(post.userCreatorId.name)
            nameP.appendChild(textInP)
            nameAncor.appendChild(nameP)

        let dateAncor = document.createElement("a")
            dateAncor.classList.add("text-decoration-none","text-black")
            dateAncor.setAttribute("href","./html/post.html")
        
            let dateP = document.createElement("p")
                dateP.classList.add("reation-date")

                let dateText = document.createTextNode(date)
            dateP.appendChild(dateText)
            dateAncor.appendChild(dateP)

    divUserName.append(nameAncor,dateAncor)
return divUserName
}

let userImg = (post) => {
    let imageDiv = document.createElement("div")
        imageDiv.classList.add("user-data-space__mini")

        let imgAncor = document.createElement("a")
            imgAncor.setAttribute("href","./html/post.html")

            let profileImg = document.createElement("img")
                profileImg.classList.add("rounded-circle")
                profileImg.setAttribute("src",`${post.userCreatorId.profilePicture}`)  // ! La profile ya no viene aqui
        
        imgAncor.appendChild(profileImg)
    imageDiv.appendChild(imgAncor)
return imageDiv
}

let userDataWrapper = (post) => {
    let date = formatTime(post.date)
    let nameUser = userName(post, date)
    let imgUser = userImg(post)

    let divWrapper = document.createElement("div")
        divWrapper.classList.add("user-data-space","d-flex")

        divWrapper.append(imgUser,nameUser)
    return divWrapper
}

let cardBody = (post) => {
    let info = infoWrapper(post)
    let user = userDataWrapper(post)

    let divWrapper = document.createElement("div")
        divWrapper.classList.add("card-body")

    divWrapper.append(user,info)

return divWrapper
}

let imgTop = (post) => {
    let cardTop = document.createElement("div")
        cardTop.classList.add("card-img-top")

        let imgAncor = document.createElement("a")
            imgAncor.setAttribute("href","#")

            let img =document.createElement("img")
                img.setAttribute("src", `${post.image}`)
                img.classList.add("card-img-top", "cardImg")
                img.setAttribute("alt","imagen superior del post")

        imgAncor.appendChild(img)
    cardTop.appendChild(imgAncor)
return cardTop
}

let formatTime = (date) =>{
    let year = date.split("T")[0].split("-")[0]
    let monthNumber = date.split("T")[0].split("-")[1]
    let monthName = getMonthName(date);
    return `${year} ${monthName}`
}

const getMonthName = month => {
    let monntName;
    let monthNumber = new Date(month).getMonth(); 
    switch (monthNumber){
        case 0:
        monntName = "Jan";
            break;
            case 1:
        monntName = "Feb";
            break;
            case 2:
        monntName = "Mar";
            break;
            case 3:
        monntName = "Apr";
            break;
            case 4:
        monntName = "Jun";
            break;
            case 5:
        monntName = "Jul";
            break;
            case 6:
        monntName = "Jan";
            break;
            case 7:
        monntName = "Jan";
            break;
            case 8:
        monntName = "Aug";
            break;
            case 9:
        monntName = "Sep";
            break;
            case 10:
        monntName = "Nov";
            break;
            case 11:
        monntName = "Dec";
            break;
            default:        
        monntName = undefined;
    }
    return monntName;
}
let card = (post) => {
    let img = imgTop(post)
    let body = cardBody(post)

    let divCard = document.createElement("button")
        divCard.classList.add("card","mb-3")
        divCard.setAttribute("id", `${post._id}`)

    divCard.append(img,body)
    divCard.classList.add("card-cont","d-flex","justify-content-center","anchorsFinals")
    divCard.addEventListener("click", () => window.location.replace(`../html/post.html?post=${post._id}`));

return divCard
}

let aleatorio = () => {
    return Math.floor(Math.random()*100);
};

export { card };

const filterTags = (post) => {
  const postArray = post;
  const searchInput = document.getElementById("listings");

  const tagsListings = post.filter((element) => {
    return element.tags.forEach((item) => {
      if (
        item.toLowerCase().includes("tesla") ||
        item.toLowerCase().includes("windows")
      ) {
        const buttonWrapper = document.createElement("a");
        buttonWrapper.setAttribute("id", `${item.toLowerCase()}`)
        buttonWrapper.classList.add("buttonTag")
        const listItem = document.createElement("li");
        listItem.classList.add("listingsTags");
        const tagText = document.createTextNode(item);
        buttonWrapper.appendChild(tagText); 
        listItem.appendChild(buttonWrapper);
        searchInput.appendChild(listItem);
      }
    });
  });
};
///----------------
export { filterTags };

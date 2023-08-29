const getPosts = async () => {
    let response = await fetch(
      `http://localhost:8080/post`
    );
    let posts = await response.json();
    return posts;
  };
  

export { getPosts };
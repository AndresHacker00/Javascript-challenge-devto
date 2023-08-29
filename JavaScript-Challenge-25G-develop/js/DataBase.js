const token = localStorage.getItem("token");

const getPosts = async () => {
  let response = await fetch(`http://localhost:8080/post`);
  let posts = await response.json();
  return posts;
};

const createPost = async (data) => {
  let response = await fetch(`http://localhost:8080/post`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(data),
  });
  let post = await response.json();
  return post;
};

const deletePost = async (id) => {
  let response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let postToDelete = await response.json();
  return postToDelete;
};

const editPost = async (id, data) => {
  let response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(data),
  });
  let postEdited = await response.json();
  return postEdited;
};

const getPostById = async (id) => {
  let response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let post = await response.json();
  return post;
};

const createUser = async (data) => {
  console.log("Esta es la data", data);
  let response = await fetch(`http://localhost:8080/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let userCreated = await response.json();
  return userCreated;
};

const login = async (data) => {
  let response = await fetch(`http://localhost:8080/auth`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let userLoged = await response.json();
  return userLoged;
};

const addComment = async (id, data) => {
  let response = await fetch(`http://localhost:8080/post/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(data),
  });
  let comment = await response.json();
  return comment;
};

export {
  getPosts,
  deletePost,
  editPost,
  getPostById,
  createUser,
  login,
  addComment,
  createPost,
};


// let getUsers = async ( ) => {
//     let respomse = await fetch[
//         ``
//     ]
// }

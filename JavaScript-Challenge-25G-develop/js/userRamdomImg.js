let users = [
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/19.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/19.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/19.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/89.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/87.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/8.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/5.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/30.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/84.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/5.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/26.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/26.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/44.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/57.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/46.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
      }
    },
    {
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/52.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
      }
    }
]

const getRamdomInt = max => Math.floor(Math.random() * max);
const getUserImgRamdom = (users) => {
    const userId = getRamdomInt(0, users.length - 1);
    return users.reduce((img, element, index) => {
        if (index === userId) {
            img = element.picture.medium;
        }
        return img;
    }, "");
};

let img = getUserImgRamdom(users);

export {img};
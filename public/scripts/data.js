var DataContext = function () {
    var friends = [{
        picUrl: "imgs/profiles/1766.png",
        picAlt: "profilePicture",
        friendName: "Ivan Ivanov",
    },
        {
            picUrl: "imgs/profiles/homer.jpg",
            picAlt: "profilePicture",
            friendName: "Pesho Petrov"
        }, 
        {
            picUrl: "imgs/profiles/profile_picture_by_durenatu-d4s6icn.jpg",
            picAlt: "profilePicture",
            friendName: "John Smith"
        }, 
        {
            picUrl: "imgs/profiles/spongeBob.jpg",
            picAlt: "profilePicture",
            friendName: "Spongebob Squarepants"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg",
            picAlt: "profilePicture",
            friendName: "Joro Cherniq"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg",
            picAlt: "profilePicture",
            friendName: "World of warcraft"
        },
        {
            picUrl: "imgs/profiles/1766.png",
            picAlt: "profilePicture",
            friendName: "Just Ivanov"
        },
        {
            picUrl: "imgs/profiles/1766.png",
            picAlt: "profilePicture",
            friendName: "Ivan Ivanov",
        },
        {
            picUrl: "imgs/profiles/homer.jpg",
            picAlt: "profilePicture",
            friendName: "Pesho Petrov"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_durenatu-d4s6icn.jpg",
            picAlt: "profilePicture",
            friendName: "John Smith"
        },
        {
            picUrl: "imgs/profiles/spongeBob.jpg",
            picAlt: "profilePicture",
            friendName: "Spongebob Squarepants"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg",
            picAlt: "profilePicture",
            friendName: "Joro Cherniq"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg",
            picAlt: "profilePicture",
            friendName: "World of warcraft"
        },
        {
            picUrl: "imgs/profiles/1766.png",
            picAlt: "profilePicture",
            friendName: "Just Ivanov"
        },
        {
            picUrl: "imgs/profiles/spongeBob.jpg",
            picAlt: "profilePicture",
            friendName: "Spongebob Squarepants"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg",
            picAlt: "profilePicture",
            friendName: "Joro Cherniq"
        },
        {
            picUrl: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg",
            picAlt: "profilePicture",
            friendName: "World of warcraft"
        },
        {
            picUrl: "imgs/profiles/1766.png",
            picAlt: "profilePicture",
            friendName: "Just Ivanov"
        }];
    var articles = [{
                title: "Title of Lorem ipsum dolor sit amet",
                postedBy: "Info",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.praesentium saepe tempore, veritatis?",
                datePosted: "12.07.2015",
                imgURL: "imgs/info.png"
            },
        {
            title: "Second Title",
            postedBy: "Someone",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.",
            datePosted: "12.07.2015",
            imgURL: "imgs/profiles/homer.jpg"
        },
        {
            title: "Another Title",
            postedBy: "Homer Simpson",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam recusandae! Alias error iure laboriosam maxime modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.Alias error iure laboriosam maxime modi repudiandae unde!",
            datePosted: "12.07.2015",
            imgURL: "imgs/profiles/profile_picture_by_pratikartist-d5cuu1m.jpg"

        },
        {
            title: "Title of Lorem ipsum dolor sit amet",
            postedBy: "Info",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex necessitatibus odio officiis quam lorem recusandae! Alias error iure laboriosam maxi  odio officiis quam lorem recusandae! Alias error iure laboriosam mme modi repudiandae unde! Cum delectus eaque earum hic illo suscipit veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ipsa laudantium, molestias nostrum recusandae repellat sed voluptatibus. Alias cum error fugiat ipsa maiores numquam obcaecati praesentium saepe tempore, veritatis? Explicabo.",
            datePosted: "12.07.2015",
            imgURL: "imgs/info.png"
        }];

    return {
        getFriends: friends,
        getArticles: articles
    };
};
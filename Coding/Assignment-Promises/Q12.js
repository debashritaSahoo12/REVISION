function fetchUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: 'John Doe' };
            resolve(user);
        }, 2000);   
    });
}

function fetchPosts(userId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId==1){
                const posts = [
                    { id: 1, title: 'Post 1' },
                    { id: 2, title: 'Post 2' }
                ];
                resolve(posts);
            }else{
                reject('Posts not found for the user');
            }
        },2000);
    });
}

async function getUserAndPosts(){
    try{
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        const combinedData = { user, posts };
        console.log(combinedData);
        console.log("combinedData:", combinedData);
        console.log("All data fetched successfully");
        return combinedData;
    }catch(error){
        console.error("Error:", error);
    }
}

getUserAndPosts();

//output:
// {
//   user: { id: 1, name: 'John Doe' },
//   posts: [ { id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' } ]
// combinedData: {
//   user: { id: 1, name: 'John Doe' },
//   posts: [ { id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' } ]
// }
// All data fetched successfully



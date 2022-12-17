//1
const posts=[
    {title:'Post One' , body:'This is post One'},
    {title:'Post Two' , body:'This is post TWo'}
];

function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('error: something went wrong')
            }
        }, 2000);
    })
}
createPost({title:'Post Three',body:'This is post Three'}).then(getPosts);





//New
const posts=[
    {title:'Post One' , body:'This is post One'},
    {title:'Post Two' , body:'This is post TWo'}
];

function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('error: something went wrong')
            }
        }, 2000);
    })
}


function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.pop();
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('error: something went wrong')
            }
        }, 3000);
    })
}


createPost({title:'Post Three',body:'This is post Three'}).then(getPosts);
deletePost().then(getPosts);
deletePost().then(getPosts);
deletePost().then(getPosts);
setTimeout(() => {
    createPost({title:'Post Four',body:'This is post Four'}).then(getPosts);
}, 4000);
setTimeout(() => {
    deletePost().then(getPosts);
}, 5000);

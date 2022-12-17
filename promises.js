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
function getPosts()
{
    setTimeout(() => {
        let output=""
        for(let i=0;i<posts.length;i++)
        {
            output+=`<li>${posts[i].title}</li>`
        }
        document.body.innerHTML=output
    }, 1000);
}

function createPost(post,post4)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            posts.push(post,{...post4});

         const error= false
         if(!error){
resolve()
         }
         else{reject("Error:something went wrong")}

        }, 2000);
     });
    }
function removePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            if(posts.length>0)
            {
resolve(posts.pop())
            }
            else{reject("Array is empty now")}

        }, 1000);
    })
      }
createPost({title:"Post Three", body:"This is post Three"},{title:"Post Four", body:"This is post Four"})

     .then(()=>{
      getPosts()
    removePost().then(()=>{
       getPosts()
        removePost().then(()=>{
            getPosts()
            removePost().then(()=>{
                getPosts()
                removePost().then(()=>{
             getPosts()
                removePost().then(()=>{})

                .catch((err)=>{console.log("inside catch block",err)
            })
            })

    })
})
})
     }) 

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' }
];




function getPosts(){

    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000);

}

function createPost(post){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error){
                resolve();

            } else {
                reject('Error creating post');
            }


        }, 1000);

    })


}


// createPost({ title: 'Post Four', body: 'This is post four' })
// .then(getPosts)
// .catch(err => console.error(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve,2000 ,'Goodbye'));


const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(json => console.table(json));



Promise.all([promise1, promise2, promise3]).then(value => console.log(value));
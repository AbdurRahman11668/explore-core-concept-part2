function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(posts){
    const postcontainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post)
        postDiv.innerHTML = `
            <h4>User- ${post.userId}</h4>
            <h5>Post title- ${post.title}</h5>
            <hp>Post Description- ${post.body}</hp>
        `
        postcontainer.appendChild(postDiv);
    }
}
loadPosts()
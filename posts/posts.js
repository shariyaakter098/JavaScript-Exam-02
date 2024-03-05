                 "use strict"

       console.log('myposts');
       
       function loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => displayPosts(data))
         }
         loadPosts();




         function displayPosts(data){
            const sectionId = document.getElementById('create');
             for(const posts of data){
                 
                 const div = document.createElement('div');
                 div.classList.add('created')
                 div.innerHTML = `
                 <h2>${posts.body}</h2>
                 <p>${posts.title}</p>
                <h3>${posts.userId}</h3>
                
                  `;
                  sectionId.appendChild(div);
                   console.log(posts);
              }
           }
          
         
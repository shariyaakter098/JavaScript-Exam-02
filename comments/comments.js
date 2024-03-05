                                        " use script"


           console.log('mycomments');  
           
           
           function loadComments(){
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(data => displayComments(data))
            }
            loadComments();


            function displayComments(data){
                const sectionId = document.getElementById('com');
                for(const comments of data){
                    const div = document.createElement('div');
                    div.classList.add("style")
                    div.innerHTML = `
                        <h3>${comments.name}</h3>
                        <h5>${comments.postId}</h5>
                    `;
                    sectionId.appendChild(div);

                    console.log(comments);
                }
            }

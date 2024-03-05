            "use strict"


            
 console.log("myWork")
 function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
 }
 loadUsers();


 function displayUsers(data){
  const sectionId = document.getElementById('start')
   for(const users of data){
       
       const div = document.createElement('div');
       div.classList.add('style')
       div.innerHTML = `
       <h2>${users.phone}</h2>
       <p>${users.username}</p>
      <h3>${users.address}</h3>
       <h4>${users.id}</h4>
        `;
        sectionId.appendChild(div);
         console.log(users);
    }
 }

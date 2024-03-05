            "use strict"


        console.log("myStyle");

        function loadAlbums(){
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => displayAlbums(data))
        }
        loadAlbums();

        function displayAlbums(data){
            const sectionId = document.getElementById('alb');
            for(const albums of data){
                const div = document.createElement('div');
                div.classList.add('style');
                div.innerHTML=`
                    <h3>${albums.title}</h3>
                `;
                sectionId.appendChild(div);
                console.log(albums);
            }
        }
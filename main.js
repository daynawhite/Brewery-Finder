const displayPost = () => {
    const allPosts = document.getElementById('results')
    posts.map((post) => {
      // create list item for brewery name and heart icon
      const li = document.createElement('li');
      //   create and add a list item containing brewery name from API
      const name = document.createElement('p');
      name.innerHTML = post.name;
      const address = document.createElement('p')
      address.innerHTML = post.address_1;
      const city = document.createElement('p');
      city.innerHTML = post.city
      li.appendChild(name);
      li.appendChild(address) 
      li.appendChild(city)
      const heart = document.createElement('i')
      heart.setAttribute('class','fa-regular fa-heart');
      heart.setAttribute('style',"color: #d0111a");
      console.log(heart.class, heart.classList)
      heart.addEventListener("click", function(){ 
        if ([...heart.classList].includes("fa-regular")) {
            // heart.class = "fa-solid fa-heart"
            heart.classList.remove("fa-regular", "fa-heart")
            heart.classList.add("fa-solid", "fa-heart")
        } else 
        // if ([heart.classList].includes("f-solid")) 
        {
            heart.classList.remove("fa-solid", "fa-heart")
            heart.classList.add("fa-regular", "fa-heart")
        }
      });
      li.appendChild(heart);
      allPosts.append(li)
      })
    }

// button to populate list of breweries close to user location
const button = document.getElementById('finder')
  
button.onclick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
    getPosts(position.coords.latitude, position.coords.longitude);
    console.log(position);
    
    // function to get posts from brewery api:
    async function getPosts(latitude,longitude) {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_dist=${latitude},${longitude}&per_page=8`);
    data = await response.json();
    console.log(data);
    posts = data;
    console.log(posts);
    displayPost()
}
})
}


// map a heart symbol for toggling like/dislike
/* <i class="fa-solid fa-heart" style="color: #c31d1d;"></i>
<i class="fa-regular fa-heart" style="color: #d0111a;"></i> */
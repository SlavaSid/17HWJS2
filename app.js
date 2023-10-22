
const form = document.querySelector('form'),
        input = document.querySelector('input'),
        player = document.querySelector('.player'),
        inputImg = document.querySelector('.inputImg');


form.addEventListener('submit',  async (event) => {
    event.preventDefault();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${input.value}&type=video`;
    input.value = '';
    console.log(input.value);
    const response = await fetch(url); 
    const info = await response.json();
    const addVideo = info.items[0].id.videoId;

    console.log(addVideo);
    player.textContent = ''
    player.innerHTML = `
    <iframe class="devht" width="560" height="315" src="https://www.youtube.com/embed/${addVideo}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `
    const addImg = info.items;

    inputImg.textContent = ''
    addImg.forEach(element => {
        inputImg.innerHTML += `<img src="${element.snippet.thumbnails.default.url}" class="${element.id.videoId}">
    `
    })
    inputImg.addEventListener('click', (event) => {
        const activeImage = event.target;
         if(activeImage.matches('img')){
            const activeSrc = activeImage.getAttribute('class');
           console.log(activeSrc);
           player.innerHTML = `
    <iframe class="devht" width="560" height="315" src="https://www.youtube.com/embed/${activeSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `      
    }})})
  
      
 

   
    


// try{
//     newFunc();

// } catch(error) {
// console.error(error.message);
// }

const form = document.querySelector('form'),
        input = document.querySelector('input'),
        player = document.querySelector('.player'),
        inputImg = document.querySelector('.inputImg');


form.addEventListener('submit',  async (event) => {
    event.preventDefault();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCADcGswi5ec79r45JV-65T52G42bEY25w&q=${input.value}&type=video`;
    input.value = '';
    const response = await fetch(url);
    const info = await response.json();

    
    const addVideo = info.items[0].id.videoId;

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
        
         if(event.target.matches('img')){
            const activeSrc = event.target.getAttribute('class');
            player.innerHTML = `
    <iframe class="devht" width="560" height="315" src="https://www.youtube.com/embed/${activeSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `      
    }})})
  
      
 

   
    



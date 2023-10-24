
const form = document.querySelector('form'),
        input = document.querySelector('input'),
        player = document.querySelector('.player'),
        inputImg = document.querySelector('.inputImg');

const addVideo = (info) => {
    player.textContent = ''
    player.innerHTML = `
    <iframe class="devht" width="560" height="315" src="https://www.youtube.com/embed/${info}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `
   
};
 const addImg = (img) =>{
    inputImg.textContent = ''
    img.forEach(element => {
        inputImg.innerHTML += `<img src="${element.snippet.thumbnails.default.url}" data-ship="${element.id.videoId}">
    `
    })
 }


form.addEventListener('submit',  async (event) => {
    try {event.preventDefault();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCADcGswi5ec79r45JV-65T52G42bEY25w&q=${input.value}&type=video`;
    input.value = '';
   const response = await fetch(url);
    if(!response.ok){
        throw new Error('ошибка статус-кода')
    };
    const info = await response.json();
    

    addVideo(info.items[0].id.videoId);
    addImg(info.items);}
    catch (error){
        console.error(error)
        }
    
     });

    inputImg.addEventListener('click', (event) => {
        if(event.target.matches('img')){
        const activeSrc = event.target.getAttribute('data-ship');
        player.innerHTML = `
    <iframe class="devht" width="560" height="315" src="https://www.youtube.com/embed/${activeSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    `      
    }})
      
 

   
    



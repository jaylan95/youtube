let htmltext = '';
let html = '';
videos.forEach((video) => {
    html = ` 
    <div>
    <div>
        <img class="image" src="${video.pic}">
    </div>
<div class="div">
    <div>
        <img class="image-channel" src="${video.profilepic}">
    </div>
    <div>
        <p class="p1">${video.namechannel}</p>
        <p class="p2"> ${video.title}</p>
        <p class="p3">${video.timeandviews}</p>
    </div>
</div>
</div>
`;
htmltext += html;
document.querySelector('.popo').innerHTML = htmltext;
 
});

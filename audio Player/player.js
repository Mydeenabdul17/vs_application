let artist=[{
    "link":"#",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbpRYtzktlupUVwSiGfouwl-kYn_le8ixGw&usqp=CAU",
    "name":"AR Rahman"
},
{
    "link":"#",
    "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAgXyaXP8UTB-TVHnjG8aH8Rf2N8engWHAw&usqp=CAU",
    "name":"Vijay Antony"
},{
    "link":"#",
    "img":"https://cdn.sharechat.com/96ae576_1587638688244.jpeg?f=96ae576_1587638688244.jpeg&referrer=tag-f5e-service&tenant=sc",
    "name":"Aniruth"
},{
    "link":"#",
    "img":"https://th-i.thgim.com/public/incoming/nb8ejk/article67122584.ece/alternates/FREE_1200/IMG_08mpPradeep.jpeg_5_1_N9A84EBT.jpg",
    "name":"Pradeep Kumar"
}];
let playListjson =[ [
    {
      "img": "https://content1.jdmagicbox.com/comp/jd_social/news/2018aug10/image-255159-vpkb26vkjd.jpg?fit=around|210:308&crop=210:308;*,*",
      "title": "Roja Roja",
      "link": "./Roja-Roja.mp3"
    },
    {
        "img":"https://www.filmiclub.com/resource/img/photo/movie/m1180757f155c21e895.jpg",
      "title": "Ennavale Adi Ennavale",
      "link": "./Ennavale-Adi-Ennavale-MassTamilan.dev.mp3"
    },
    {
        "img":"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/947/1530947-v-e7463d115f72",
      "title": "Vennilave Vennilave",
      "link": "./Vennilavae.mp3"
    }
  ],[
    {
      "img": "https://www.tamil2lyrics.com/wp-content/uploads/2017/04/kv1.png",
      "title": "Thozhiya",
      "link": "./Thozhiya-En-Kadhaliya.mp3"
    },
    {
      "img": "https://upload.wikimedia.org/wikipedia/ta/3/35/Uthama_puthiran.jpg",
      "title": "ussumu laresey",
      "link": "./Ussumu-Laresay.mp3"
    },
    {
      "img": "https://i.scdn.co/image/ab67616d0000b27348ab9d72714d9f1a1e38e3b0",
      "title": "Macha Kanni",
      "link": "./Macha-Kanni.mp3"
    }
  ]
  ,[
    {
        "img": "https://upload.wikimedia.org/wikipedia/en/d/d6/3_%282012_Tamil_film_soundtrack%29.jpg",
        "title": "Why This Kolaveri Di",
        "link": "./Why-this-kolaveri-di.mp3"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BYTAzYzVlYmItMWI1Yi00ZGRjLTkwYWUtYWM3ZDIwOGFiODk4XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
        "title": "Naa ready",
        "link": "./Naa-Ready-MassTamilan.dev.mp3"
    },
    {
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Jailer_2023_Tamil_film_poster.jpg/220px-Jailer_2023_Tamil_film_poster.jpg",
        "title": "Hukum",
        "link": "./Hukum---Thalaivar-Alappara-MassTamilan.dev.mp3"
    }
],[
    {
        "img": "https://c.saavncdn.com/773/Maragatha-Naanayam-Tamil-2017-500x500.jpg",
        "title": "Nee Kavidhaikala",
        "link": "./Nee-Kavithaigala.mp3"
    },
    {
        "img": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kaala-et00057686-25-05-2017-06-31-26.jpg",
        "title": "Kannamma",
        "link": "./Kannamma-MassTamilan.io.mp3"
    },
    {
        "img": "https://i.scdn.co/image/ab67616d0000b273803e99ee30bb2d8169a3fa57",
        "title": "Aval",
        "link": "./Aval.mp3"
    }
]
]
;
let favoriteList =[];
let Artists_Container = document.getElementById("Artists-Container");
let favorite = document.getElementById("favorite");
    // console.log("hi");
function loadPage() {
    
    let title = document.createElement("div");
    title.classList.add("title");
    let h1 = document.createElement("h1");
    h1.innerText="Artists";
    title.appendChild(h1);
    Artists_Container.appendChild(title);

    let artists = document.createElement("div");
    artists.classList.add("Artists");
    artist.forEach((a,i)=>{
    let button = document.createElement("button");
    button.classList.add("button")
    button.addEventListener("click",(event)=>playList(event,i))
    let Ar = document.createElement("div");
    Ar.classList.add("Artist");
    let img = document.createElement("img");
    img.setAttribute("src",a.img);
    img.classList.add("img1");
    let h3 = document.createElement("h3");
    h3.innerText=a.name;
    Ar.append(img,h3);
    button.appendChild(Ar);
    artists.appendChild(button);
})
Artists_Container.appendChild(artists);
if(favoriteList.length==0){
    noFavorite();
}
}


function noFavorite(){
    const play=document.getElementById("favoriteList");
    if(play!=null){
        favorite.removeChild(play);
    }
    let empty = document.createElement("div");
    empty.classList.add("noFavorite")
    empty.id="empty";
    let h1 = document.createElement("h1");
    h1.classList.add("favoriteMsg");
    h1.innerText="No Favorite Available";
    empty.append(h1);
    favorite.append(empty);
}
let playlist_container = document.getElementById("playlist_container");

function playList(event,i)
{
    let currentPlayList = playListjson[i];
    event.preventDefault();
    const play=document.getElementById("songlist");
    if(play!=null){
        playlist_container.removeChild(play);
    }
    const play1=document.getElementById("splay");
    if(play1!=null){
        playing.removeChild(play1);
    }
    let songs = document.createElement("div");
    songs.classList.add("playList");
    songs.id="songlist";
    let table = document.createElement("table");
    currentPlayList.forEach((s,i)=>{
        let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let h4 = document.createElement("h4");
    h4.innerText=s.title;
    td1.appendChild(h4);
    let td2 = document.createElement("td");
    let button = document.createElement("button");
    button.classList.add("play");
    button.innerText="Play";
    button.addEventListener('click',(event)=>playSong(event,s));
    td2.appendChild(button);
    tr.append(td1,td2);
    table.appendChild(tr);
    })
songs.appendChild(table);
playlist_container.appendChild(songs);
}

let playing = document.getElementById("playing");

function playSong(event,s){
    event.preventDefault();
    const play=document.getElementById("splay");
    if(play!=null){
        playing.removeChild(play);
    }
    let playing_song = document.createElement("div");
    playing_song.classList.add("playing");
    playing_song.id="splay";
    let song = document.createElement("div");
    song.classList.add("song");
    let img2 = document.createElement("img");
    img2.classList.add("img2");
    img2.setAttribute("src",s.img);
    let audio = document.createElement("audio");
    audio.controls=true;
    audio.setAttribute("src",s.link);
    let heart = document.createElement("button");
    heart.classList.add("like");
    let heartImg = document.createElement("img");
    heartImg.classList.add("heartImg");
    heartImg.setAttribute("src","./heart.png")
    heart.append(heartImg)
    heart.addEventListener('click',(event)=>addfavorite(event,s))
    song.append(img2,audio,heart);
    playing_song.appendChild(song);
    playing.appendChild(playing_song);
}
function addfavorite(event,s){
favoriteList.push(s);
loadfavorite();
}
function loadfavorite(){
    const play=document.getElementById("favoriteList");
    if(play!=null){
        favorite.removeChild(play);
    }
    const empty =document.getElementById("empty");
    if(empty!=null){
        favorite.removeChild(empty);
    }
    let songs = document.createElement("div")
    songs.id="favoriteList";
    let table = document.createElement("table");
    favoriteList.forEach((s,i)=>{
        let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let h4 = document.createElement("h4");
    h4.innerText=s.title;
    td1.appendChild(h4);
    let td2 = document.createElement("td");
    let button = document.createElement("button");
    button.classList.add("play");
    button.innerText="Play";
    button.addEventListener('click',(event)=>playSong(event,s));
    td2.appendChild(button);
    let td3 = document.createElement("td")
    let remove = document.createElement("button");
    remove.classList.add("remove");
     remove.innerText="remove";
     remove.addEventListener('click',(event)=>removeFavorite(event,i));
     td3.append(remove)
    tr.append(td1,td2,td3);
    table.appendChild(tr);
    })
    songs.append(table);
    favorite.append(songs);
}
function removeFavorite(event,i){
    favoriteList.splice(i,1);
    if(favoriteList.length!=0){
        loadfavorite();
    }else{
        noFavorite();
    }
}
loadPage();
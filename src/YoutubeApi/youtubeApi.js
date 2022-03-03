import fetch from 'node-fetch';
import * as fs from 'fs';



async function getRequest(){
    const url ='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBRB3s6BQqawbrYK1638UysAFjzPOC_sWI&channelId=UCZ5HmtsUwim6bubEkSm8veg&part=snippet,id&order=date&maxResults=100'
    const res = await fetch(url);
    const data = await res.json();
    const myString= await JSON.stringify(data);

    fs.writeFile('youtube.json', `[${myString}]`, function (err) {
        if (err) return console.log(err);

      });


}



getRequest()
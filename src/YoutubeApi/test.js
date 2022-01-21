const carta = 'bici coche  balon _playstation bici coche peluche'


function listGift(carta){

    let splitCarta=carta.split(" ")

    let removed= splitCarta.filter(word=>
        word.charAt(0)!="_"
    )
    

    let obj={}
    let key=[removed[0]];
    let value=[];

    for(let i=0; i<removed.length;i++){
        
        for(let k=0;k<key.length;k++){
            if(removed[i]===key[k]){
                 break;
            }else if(k===key.length-1){
                key.push(removed[i])
            }
        }
        
    }

    for(let o=0;o<key.length;o++){
        
        let counter=0
        
     for(let u=0;u<removed.length;u++){

         if(key[o]===removed[u]){
             counter++;
            }

            if(u===removed.length-1){
                value.push(counter);
            }   

     } 
        
    }


    for (let q = 0; q < key.length; q++){
    obj[key[q]] = value[q];
    }

   console.log(removed)
   console.log(key)
   console.log(value)
}


listGift(carta)

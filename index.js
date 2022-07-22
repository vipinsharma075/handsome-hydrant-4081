let imagesLink=[
    "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/cover/1920x7708760d4e6a1c8429cbfea6f1e4a375f6d25ac3d74d6544bc89704d6475e368c79.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168144/cover/1920x7709b5906f9ab1347e7915762097af21c2e.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/cover/1920x770cd788cc8f66e4f27accee7da64d1e9cd.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172356/cover/1920x7705a2073dc89d04da2926dbcd3886785aaa974ce344e704cabb3b0556de80eaa7b.jpg",
    "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770e6a8bcf4c3b24c93a74b3dd28f81ead4.jpg"
    
]
let leftbtn=document.querySelector("#left-btn");
let rightbtn=document.querySelector("#right-btn");
let crauser=document.querySelector("#crauser");

let imageState=0;
rightbtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imagesLink.length){
        imageState=0;
    }
    crauser.src=imagesLink[imageState];
});
leftbtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink.length-1;
    }
    crauser.src=imagesLink[imageState];
});

// top10


// let imagesLinktop=[
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/portrait/1920x770cd788cc8f66e4f27accee7da64d1e9cd.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172328/portrait/1920x77007054b7e4c68467d92059e604b937ce4.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5181112/portrait/1920x7708502c7d44df94abb8df571634ddeff55.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172356/portrait/1920x7705a2073dc89d04da2926dbcd3886785aaa974ce344e704cabb3b0556de80eaa7b.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/portrait/1920x7708760d4e6a1c8429cbfea6f1e4a375f6d25ac3d74d6544bc89704d6475e368c79.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5168144/portrait/1920x7709b5906f9ab1347e7915762097af21c2e.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x770abf42130d9cf41dab2bf9e648cf3193b0b8736722f40431bb31a5214ab98851c.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5145092/portrait/1920x7702e1f16a2d4f4479284dabf671658897e.jpg",
//     "https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/portrait/1920x770141bcd9ccf9945d490a7935a3cc311069180d7d5e4c248279410203ac82bc67d.jpg"
// ]
// let top10InIndiaButtonLefty=document.querySelector("#top10InIndiaButtonLeft");
// let top10InIndiaButtonRighty=document.querySelector("#top10InIndiaButtonRight");
// let crauser1=document.querySelector("#crauser1");

// let imageState1=0;
// top10InIndiaButtonRighty.addEventListener("click",function(){
//     imageState1++;
//     if(imageState1===imagesLinktop.length){
//         imageState1=0;
//     }
//     crauser1.src=imagesLinktop[imageState1];
// });
// top10InIndiaButtonLefty.addEventListener("click",function(){
//     imageState1--;
//     if(imageState1<0){
//         imageState1=imagesLinktop.length-1;
//     }
//     crauser1.src=imagesLinktop[imageState1];
// });
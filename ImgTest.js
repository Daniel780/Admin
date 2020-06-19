class ImgTest {
    constructor() {
    }   
}

imgs = [];

function addImg(img){
    alert("subiendo imagen");
    imgs.push(img);
}

function getImg(num){
    return imgs[num];
}
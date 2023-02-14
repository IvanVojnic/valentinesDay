const screenWidth = document.documentElement.clientWidth
const screenHeight = document.documentElement.clientHeight

let wishesBox = document.getElementById("wishesBoxID")

let wishColumn = document.createElement('div')

wishColumn.className = "wishCol"

let symbolsArray = ['q','0', 'e','r','t','y','u','i','1','p','2','s','3','f','4','h','5','k','6','z','7','c','8','b','8','m','Q','W','E','R','T','Y','U','I']

function loadAnimation() {
    let colCount = screenWidth/15
    let rowCount = screenHeight/15
    colCount = Math.floor(colCount)
    rowCount = Math.floor(rowCount)
    for(let i = 0; i < colCount; i++){
        let dupl = wishColumn.cloneNode(true)
        wishesBox.append(dupl)
    }
    let wishesColumns = document.querySelectorAll("div.wishCol")
    for(let j = 0; j < colCount; j++) {
        for (let i = 0; i < rowCount; i++) {
            let symbol = symbolsArray[getRandomInt(0, 34)]
            let wishElem = document.createElement('span')
            wishElem.className = "wishElem"
            wishElem.id = j+"."+i
            //B
            if(j==10 && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if((j>=10 && j<=13)&& i==10){
                wishElem.classList.add("wElMain")
            }
            if((j>=10 && j<=13)&& i==15){
                wishElem.classList.add("wElMain")
            }
            if((j>=10 && j<=13)&& i==20){
                wishElem.classList.add("wElMain")
            }
            if((j==14)&&((i>=11 && i<=14)||(i>=16&&i<=20))){
                wishElem.classList.add("wElMain")
            }

            //A
            if((j==17 || j==25) && i>= 17 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if((j==18 || j==24) && (i== 16 || i==15)){
                wishElem.classList.add("wElMain")
            }
            if((j==19 || j==23) && (i== 13 || i==14)){
                wishElem.classList.add("wElMain")
            }
            if((j==20 || j==22) && i== 12){
                wishElem.classList.add("wElMain")
            }
            if(j==21 && (i== 11 || i==10)){
                wishElem.classList.add("wElMain")
            }
            if(i==16 && j>=18 && j<=24){
                wishElem.classList.add("wElMain")
            }

            //Л
            if((j==27 || j==35) && i>= 17 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if((j==28 || j==34) && (i== 16 || i==15)){
                wishElem.classList.add("wElMain")
            }
            if((j==29 || j==33) && (i== 13 || i==14)){
                wishElem.classList.add("wElMain")
            }
            if((j==30 || j==32) && i== 12){
                wishElem.classList.add("wElMain")
            }
            if(j==31 && (i==11 || i==10)){
                wishElem.classList.add("wElMain")
            }

            //E
            if((j==38) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if(i==10 && j >=38 && j<= 42){
                wishElem.classList.add("wElMain")
            }
            if(i==15 && j >=38 && j<= 42){
                wishElem.classList.add("wElMain")
            }
            if(i==20 && j >=38 && j<= 42){
                wishElem.classList.add("wElMain")
            }


            //H
            if((j==45) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }

            if(i==15 && j >=45 && j<= 51){
                wishElem.classList.add("wElMain")
            }
            if((j==51) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }

            //T

            if(i==10 && j >=54 && j<= 58){
                wishElem.classList.add("wElMain")
            }
            if((j==56) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }

            //И
            if((j==61) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if(j==62 && (i== 20 || i==19)) {
                wishElem.classList.add("wElMain")
            }
            if(j==63 && (i== 18 || i==17)) {
                wishElem.classList.add("wElMain")
            }
            if(j==64 && (i== 16 || i==15)) {
                wishElem.classList.add("wElMain")
            }
            if(j==65 && (i== 14 || i==13)) {
                wishElem.classList.add("wElMain")
            }
            if((j==66) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }

            //H
            if((j==69) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if(i==15 && j >=69 && j<= 74){
                wishElem.classList.add("wElMain")
            }
            if((j==74) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }

            //K
            if((j==77) && i>= 10 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if((j==78)&&i==15){
                wishElem.classList.add("wElMain")
            }
            if((j == 79)&&(i==14 || i==16)){
                wishElem.classList.add("wElMain")
            }
            if((j == 80)&&((i==13 || i==12) || (i==17 || i ==18))){
                wishElem.classList.add("wElMain")
            }
            if((j == 81)&&((i==11 || i==10) || (i==19 || i ==20))){
                wishElem.classList.add("wElMain")
            }

            //A
            if((j==84 || j==92) && i>= 17 && i<=20){
                wishElem.classList.add("wElMain")
            }
            if((j==85 || j==91) && (i== 16 || i==15)){
                wishElem.classList.add("wElMain")
            }
            if((j==86 || j==90) && (i== 13 || i==14)){
                wishElem.classList.add("wElMain")
            }
            if((j==87 || j==89) && i== 12){
                wishElem.classList.add("wElMain")
            }
            if(j==88 && (i== 11 || i==10)){
                wishElem.classList.add("wElMain")
            }
            if(i==16 && j>=85 && j<=91){
                wishElem.classList.add("wElMain")
            }
            let text = document.createTextNode(symbol + " \n")
            wishElem.appendChild(text)
            setTimeout(function () {
                wishesColumns[j].appendChild(wishElem)
            }, 50 * i + 1);
        }
    }
    let sB1 = document.getElementById("8.8")
    let sBArr = []
    for(let j = 9; j<=15;j++){

        let sB = document.getElementById("")
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

loadAnimation()

1111111111111111111111111111111111111111111111111
1111110000111111111101111111111111111111111111111
1111110111011111111011111111111111111111111111111
1111110111101111011111111111111111111111111111111
1111110000011111011111111111111111111111111111111
1111110111101110111111111111111111111111111111111
1111110111110110111111111111111111111111111111111
1111110000001101111111111111111111111111111111111
1111111111111111111111111111111111111111111111111
1111111111111111111111111111111111111111111111111
1111111111111111111111111111111111111111111111111
1111111111111111111111111111111111111111111111111
1111111111111111111111111111111111111111111111111
1111111111111111111111111111111111111111111111111
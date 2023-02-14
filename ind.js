const screenWidth = document.documentElement.clientWidth
const screenHeight = document.documentElement.clientHeight

let wishesBox = document.getElementById("wishesBoxID")

let wishColumn = document.createElement('div')

wishColumn.className = "wishCol"

let symbolsArray = ['q','0', 'e','r','t','y','u','i','1','p','2','s','3','f','4','h','5','k','6','z','7','c','8','b','8','m','Q','W','E','R','T','Y','U','I']

function loadAnimation() {
    let colCount = 100
    let rowCount = 62
    wishColumn.style.width = Number(screenWidth)/Number(colCount) + "px"
    wishColumn.style.fontSize = Number(screenHeight)/Number(rowCount) + "px"
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

            // Д
            if((j==17 || j==25) && i>= 29 && i<=30){
                wishElem.classList.add("wElMain")
            }
            if((j>=17 && j<=25) && i==29){
                wishElem.classList.add("wElMain")
            }
            if((j==18 || j==24) && i == 31){
                wishElem.classList.add("wElMain")
            }
            if((j==19 || j==23) && i == 32){
                wishElem.classList.add("wElMain")
            }
            if((j==19 || j==23) && (i>=25 && i<=28)){
                wishElem.classList.add("wElMain")
            }
            if(i==25 && (j>=19 && j<=23)){
                wishElem.classList.add("wElMain")
            }

            //Л
            if((j==27 || j==35) && i==32){
                wishElem.classList.add("wElMain")
            }
            if((j==28 || j==34) && (i== 31 || i==30)){
                wishElem.classList.add("wElMain")
            }
            if((j==29 || j==33) && (i== 29 || i==28)){
                wishElem.classList.add("wElMain")
            }
            if((j==30 || j==32) && i== 27){
                wishElem.classList.add("wElMain")
            }
            if(j==31 && (i==25 || i==26)){
                wishElem.classList.add("wElMain")
            }



            //Я
            if(j == 42 && (i>=25 && i <= 32)) {
                wishElem.classList.add("wElMain")
            }
            if((j == 41 && (i == 29 || i==25)) ||(j == 40 && i == 30)||(j == 39 && i == 31)||(j == 38 && i == 32) || (j == 40 && (i == 28 || i ==26))){
                wishElem.classList.add("wElMain")
            }

            //C
            if(j == 10 && (i>=40 && i <= 44)){
                wishElem.classList.add("wElMain")
            }
            if(j==11 && (i==39 || i == 45)){
                wishElem.classList.add("wElMain")
            }
            if(j==12 && (i==38 || i == 46)){
                wishElem.classList.add("wElMain")
            }
            if((j>=13 && j<=15) && (i==37 || i == 47)){
                wishElem.classList.add("wElMain")
            }

            //A
            if((j==18 || j==26) && i>= 44 && i<=47){
                wishElem.classList.add("wElMain")
            }
            if((j==19 || j==25) && (i== 43 || i==42)){
                wishElem.classList.add("wElMain")
            }
            if((j==20 || j==24) && (i== 40 || i==41)){
                wishElem.classList.add("wElMain")
            }
            if((j==21 || j==23) && i== 39){
                wishElem.classList.add("wElMain")
            }
            if(j==22 && (i== 38 || i==37)){
                wishElem.classList.add("wElMain")
            }
            if(i==44 && j>=19 && j<=25){
                wishElem.classList.add("wElMain")
            }

            //M
            if((j==28 || j==36) && i>= 44 && i<=47){
                wishElem.classList.add("wElMain")
            }
            if((j==29 || j==35) && (i== 43 || i==42)){
                wishElem.classList.add("wElMain")
            }
            if((j==30 || j==34) && (i== 41 || i==40)){
                wishElem.classList.add("wElMain")
            }
            if((j==31 || j==33) && i== 39){
                wishElem.classList.add("wElMain")
            }
            if(j==32 && (i==38 || i==37)){
                wishElem.classList.add("wElMain")
            }
            if((j==36 || j==44) && i>= 44 && i<=47){
                wishElem.classList.add("wElMain")
            }
            if((j==37 || j==43) && (i== 43 || i==42)){
                wishElem.classList.add("wElMain")
            }
            if((j==38 || j==42) && (i== 41 || i==40)){
                wishElem.classList.add("wElMain")
            }
            if((j==39 || j==41) && i== 39){
                wishElem.classList.add("wElMain")
            }
            if(j==40 && (i==38 || i==37)){
                wishElem.classList.add("wElMain")
            }

            //О
            if((j == 47 || j==55) && (i>=40 && i <= 44)){
                wishElem.classList.add("wElMain")
            }
            if((j==48 || j==54) && (i==39 || i == 45)){
                wishElem.classList.add("wElMain")
            }
            if((j==49 || j==53) && (i==38 || i == 46)){
                wishElem.classList.add("wElMain")
            }
            if((j>=50 && j<=52) && (i==37 || i == 47)){
                wishElem.classList.add("wElMain")
            }

            //И
            if((j>=59 && j<=62) && i==35){
                wishElem.classList.add("wElMain")
            }
            if((j==58) && i>= 37 && i<=47){
                wishElem.classList.add("wElMain")
            }
            if(j==59 && (i== 47 || i==46)) {
                wishElem.classList.add("wElMain")
            }
            if(j==60 && (i== 45 || i==44)) {
                wishElem.classList.add("wElMain")
            }
            if(j==61 && (i== 42 || i==43)) {
                wishElem.classList.add("wElMain")
            }
            if(j==62 && (i== 41 || i==40)) {
                wishElem.classList.add("wElMain")
            }
            if((j==63) && i>= 37 && i<=47){
                wishElem.classList.add("wElMain")
            }

            //M
            if((j==10 || j==18) && i>= 58 && i<=61){
                wishElem.classList.add("wElMain")
            }
            if((j==11 || j==17) && (i== 57 || i==56)){
                wishElem.classList.add("wElMain")
            }
            if((j==12 || j==16) && (i==54 || i==55)){
                wishElem.classList.add("wElMain")
            }
            if((j==13 || j==15) && i== 53){
                wishElem.classList.add("wElMain")
            }
            if(j==14 && (i==52)){
                wishElem.classList.add("wElMain")
            }
            if((j==18 || j==25) && i>= 58 && i<=61){
                wishElem.classList.add("wElMain")
            }
            if((j==19 || j==24) && (i== 57 || i==56)){
                wishElem.classList.add("wElMain")
            }
            if((j==20 || j==24) && (i== 54 || i==55)){
                wishElem.classList.add("wElMain")
            }
            if((j==21 || j==23) && i== 53){
                wishElem.classList.add("wElMain")
            }
            if(j==22 && (i==53 || i==52)){
                wishElem.classList.add("wElMain")
            }


            if((j==30) && i>= 52 && i<=61){
                wishElem.classList.add("wElMain")
            }
            if(j==31 && (i== 60 || i==59)) {
                wishElem.classList.add("wElMain")
            }
            if(j==32 && (i== 58 || i==57)) {
                wishElem.classList.add("wElMain")
            }
            if(j==33 && (i== 56 || i==55)) {
                wishElem.classList.add("wElMain")
            }
            if(j==34 && (i== 54 || i==53)) {
                wishElem.classList.add("wElMain")
            }
            if((j==35) && i>= 52 && i<=61){
                wishElem.classList.add("wElMain")
            }

            //Л
            if((j==38 || j==46) && i>= 59 && i<=61){
                wishElem.classList.add("wElMain")
            }
            if((j==39 || j==45) && (i== 58 || i==57)){
                wishElem.classList.add("wElMain")
            }
            if((j==40 || j==44) && (i== 55 || i==56)){
                wishElem.classList.add("wElMain")
            }
            if((j==41 || j==43) && i== 54){
                wishElem.classList.add("wElMain")
            }
            if(j==42 && (i==53 || i==52)){
                wishElem.classList.add("wElMain")
            }

            //О
            if((j == 48 || j==56) && (i>=55 && i <= 58)){
                wishElem.classList.add("wElMain")
            }
            if((j==49 || j==55) && (i==54 || i == 59)){
                wishElem.classList.add("wElMain")
            }
            if((j==50 || j==54) && (i==53 || i == 60)){
                wishElem.classList.add("wElMain")
            }
            if((j>=51 && j<=53) && (i==52 || i == 61)){
                wishElem.classList.add("wElMain")
            }

            //И
            if((j>=59 && j<=62) && i==50){
                wishElem.classList.add("wElMain")
            }
            if((j==58) && i>= 52 && i<=61){
                wishElem.classList.add("wElMain")
            }
            if(j==59 && (i== 61 || i==60)) {
                wishElem.classList.add("wElMain")
            }
            if(j==60 && (i== 59 || i==58)) {
                wishElem.classList.add("wElMain")
            }
            if(j==61 && (i== 56 || i==57)) {
                wishElem.classList.add("wElMain")
            }

            if(j==62 && (i== 55 || i==54)) {
                wishElem.classList.add("wElMain")
            }
            if((j==63) && i>= 52 && i<=61){
                wishElem.classList.add("wElMain")
            }

            let text = document.createTextNode(symbol + " \n")
            wishElem.appendChild(text)
            setTimeout(function () {
                wishesColumns[j].appendChild(wishElem)
            }, 10 * i + 1);
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
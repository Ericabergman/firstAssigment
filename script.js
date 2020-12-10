/*
// FIRST ASSIGNMENT

// Vi har två lag som ska tävla mot varandra. Lagen kommer att
// spela tre rundor. Laget med högsta poäng vinner!
// DATA OG: 96, 108, 89
// DATA ALLIANCE: 88, 91, 110
// 1. Räkna ut medlevärdet för varje lag. Plussa ihop varje lags resultat
// dela resultatet på 2
// 2. Jämföra de båda lagens resultate för att avgöra vilket som är högst
// för att kunna jämföra resultaten behöver vi använda större än operator,
// vi behöver använda en if-sats som skriver ut resultatet beroende på vem som 
// är vinnaren. 

// steg 1: två variabler som innehåller varje lags data
// steg 1.1: skapa två nya variabler som innehåller medelvärdet
// steg 2: skapa en if-sats och avgöra vilket medelvärde som är högst

// 1: Först definierar du vad du ska utföra
// 2: Definierar du vilka steg rent kodmässigt du behöver genomföra
// 3: Skriv ner vilken ordning du behöver utföra stegen
// 4: Om något känns svårt och övermäktigt ta bort ett steg eller en del
// till en början och kom tillbaka till det sen. 


// step 1:  Räkna ut medelvärdet för varje lags resultat 
// plussa ihop varje lags resultat
// dela resultatet på 2

// step 2: jämför lagens resultat för att avgöra vilket som är högst
// för att jämföra resultaten  behöver vi använda större än operator,
// vi behöver använda if-sats som skriver ut resultatet beroende på vem som är vinnare
*/




// FIRST ASSIGNMENT

// OG 96, 108, 89
// A 88, 91, 110




const oRes = 96 + 108 + 89;
// deklarerar en veriabel och tilldelar den ett värde, värdet är summan av 96, 108 och 89
console.log(oRes);
// loggar resulatet till consolen
const aRes = 88 + 91 + 110;
// deklarerat en veriabel och tilldelat den ett värde, värdet är summan av 88, 91 och 110
console.log(aRes);
// loggar resulatet till consolen
const oMedel = oRes / 3;
// delat det sammanlagda resultatet för oRes på 3 för att få medelvärdet 
console.log(oMedel);
// räknat ut medelvärdet och loggat resultatet till consollen
const aMedel = aRes / 3;
// delat det sammanlagda resultatet för aRes på 3 för att få medelvärdet
console.log(aMedel);
// räknat ut medelvärdet och loggat resultatet till consolen






if (oMedel > aMedel) {
    console.log("og winst"); 
} else if (aMedel > oMedel){
    console.log("a winner");
} else {
    console.log("ingen vann");
}






// const OG = 96 + 108 + 89;
// const ALLIANCE = 88 + 91 + 110;*/

// OG = 96 + 108 + 89;

// DATA OG: 96 

// const OG 
// const ALLIANCE 

let scoreDolphins;
let scoreKoalas;
const calcAverage = (score1, score2, score3) => {
    // return (score1 + score2 + score3) / 3;
    const scoreAve = (score1 + score2 + score3) / 3;

    scoreDolphins = scoreAve;
    scoreKoalas = scoreAve;
    return scoreAve;
  
    
}
console.log(calcAverage(44, 23, 71));
console.log(calcAverage(65, 54, 49));

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)

    }
    else if(avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)

    }else{
        console.log(`No team wins`)
    }


}
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(avgDolphins, avgKoalas));

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(checkWinner(avgDolphins2, avgKoalas2))

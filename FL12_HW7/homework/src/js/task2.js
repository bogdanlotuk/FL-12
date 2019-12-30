let play = confirm('Do you want to play a game?');

if (!play){
    alert('You did not become a billionaire, but can.');
} else {
    let playAgain = true;
    let prize1 = 100;
    let prize2 = 50;
    let prize3 = 25;
    let totalPocket = 9;
    let totalPrize = 0;
    let totalSum = 0;
    let n2 = 2;
    let n4 = 4;  
    let pNum = 'Choose a roulette pocket number from 0 to ';
    let attPr3 = '\nAttempts left: 3\nTotal prize: ';
    let attPr2 = '\nAttempts left: 2\nTotal prize: ';
    let attPr1 = '\nAttempts left: 1\nTotal prize: ';
    let possPr = '$\nPossible prize on current attempt: ';
    let cont = '$.Do you want to continue?';  

    while (playAgain) {        
        let numberPocket1 = Math.floor(Math.random() * totalPocket);
        console.log(totalPocket);
        console.log(numberPocket1);
        let playerN1 = parseInt(prompt(pNum + (totalPocket - 1) + attPr3 + totalPrize + possPr + prize1 + '$'));
        if (numberPocket1 === playerN1) {
            totalSum = prize1;           
            playAgain = confirm('Congratulation, you won! Your prize is: ' + prize1 + cont);
            if (playAgain){
            prize1 *= n2;
            prize2 *= n2;
            prize3 *= n2;
            totalPocket += n4;
            totalPrize += totalSum;
            } else {
                totalPrize += totalSum;
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
            }
        } else {
            let numberPocket2 = Math.floor(Math.random() * totalPocket);
            console.log(numberPocket2);
            let playerN2 = parseInt(prompt(pNum + (totalPocket - 1) + attPr2 + totalPrize + possPr + prize2 + '$'));
            if (numberPocket2 === playerN2) {
                totalSum = prize2;                
                playAgain = confirm('Congratulation, you won! Your prize is: ' + prize2 + cont);
                if (playAgain){
                prize1 *= n2;
                prize2 *= n2;
                prize3 *= n2;
                totalPocket += n4;
                totalPrize += totalSum;
                } else {
                    totalPrize += totalSum;
                    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                }
            } else {
                let numberPocket3 = Math.floor(Math.random() * totalPocket);
                console.log(numberPocket3);
                let playerN3 = parseInt(prompt(pNum + (totalPocket - 1) + attPr1 + totalPrize + possPr + prize3 + '$'));
                if (numberPocket3 === playerN3) {
                    totalSum = prize3;                    
                    playAgain = confirm('Congratulation, you won! Your prize is: ' + prize3 + cont);
                    if (playAgain){
                    prize1 *= n2;
                    prize2 *= n2;
                    prize3 *= n2;
                    totalPocket += n4;
                    totalPrize += totalSum;
                    } else {
                    totalPrize += totalSum;
                    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                    }
                } else {
                    alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                    playAgain = confirm('Do you want to play again?');
                    prize1 *= n2;
                    prize2 *= n2;
                    prize3 *= n2;
                    totalPocket += n4;
                    totalPrize += totalSum;
                }
            }
        }
    }
}
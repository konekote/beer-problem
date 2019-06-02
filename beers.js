let beerNumbers = [];

//Function to check if subset sums are equal to the original number or not
function subsetSum(set, sum) {
    const currentSetLength = set.length;
    const lastElement = set[currentSetLength - 1];

    if (sum === 0) {
        return true; //Subset sum is equal to the original number
    } else if (sum < 0) {
        return false; 
    } else if (currentSetLength === 1 && sum !== 0) {
        return false;
    }
    const subset = set.slice(0, currentSetLength - 1);
    return subsetSum(subset, sum - lastElement) || subsetSum(subset, sum);
}

//GEt divisors of numbers from 2 to 1000
const getBeerNumbers = () => {
    for (number = 2; number < 1001; number++) {
        let divisors = [];
        var n;
        for (n = 1; n < number; n++) {
            if (number % n === 0) {
                divisors.push(n);
            };
        }
        let divisorsSum = divisors.reduce((a, b) => a + b, 0); 
        if (divisorsSum > number) { //Check if total sum of divisors bigger than the original numbers
            if (!subsetSum(divisors, number)) { //Check if subset sums are not equal to the original number
                beerNumbers.push(number);
                divisors = [];
            }
        }
    }
};

getBeerNumbers();
console.log(beerNumbers);
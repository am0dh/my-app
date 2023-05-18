import { Wine } from "./Types";

export class Helper{

static gammaCalculation=(wine:Wine)=>{
return (Number(wine.Ash) * Number(wine.Hue)) / Number(wine.Magnesium)
}

static calculateMean(arr: Wine[]) {
    const sum: number = arr.reduce((total: number, wine: Wine) => {
      return Number(total) + Number(wine.Flavanoids)
    }, 0);
    return (sum / arr.length).toFixed(3);
  }


  static calculateMedian(arr: Wine[]) {
    const sorted = arr.map((wine: Wine) => Number(wine.Flavanoids)).sort((a: number, b: number) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return ((sorted[middle - 1] + sorted[middle]) / 2).toFixed(3);
    } else {
      return (sorted[middle]).toFixed(3);
    } 
  }

  


  static calculateMode(arr: Wine[]) {
    let numbers = arr.map((wine: Wine) => Number(wine.Flavanoids))

    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    let mode: number[] = [];

    numbers.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;

      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mode = [num];
      } else if (counts[num] === maxCount) {
        mode.push(num);
      }
    });

    return mode.join(' ,')
  }

  static calculateGammaMedian(arr: Wine[]) {
    const sorted = arr.map((wine: Wine) => Helper.gammaCalculation(wine)).sort((a: number, b: number) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return ((sorted[middle - 1] + sorted[middle]) / 2).toFixed(3);
    } else {
      return (sorted[middle]).toFixed(3);
    }
  }

  static calculateGammaMode(arr: Wine[]) {
    let numbers = arr.map((wine: Wine) => Number((Helper.gammaCalculation(wine)).toFixed(3)))

    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    let mode: number[] = [];

    numbers.forEach((num) => {
      counts[num] = (counts[num] || 0) + 1;

      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mode = [num];
      } else if (counts[num] === maxCount) {
        mode.push(num);
      }
    });

    return mode.join(' ,')
  }

  
  static calculateGammaMean(arr: Wine[]) {
    const sum: number = arr.reduce((total: number, wine: Wine) => {
      let gamma = Helper.gammaCalculation(wine)
      return Number(total) + Number(gamma)
    }, 0);
    return (sum / arr.length).toFixed(3);
  }



}
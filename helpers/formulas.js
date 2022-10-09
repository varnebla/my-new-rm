//C3/(1,0278 - 0,0278*B3)

const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 50;
const PERCENTAGE_INTERVAL = 5;

export function getMaxRepetition({ weight, repetitions }) {
  return Math.round(weight / (1.0278 - 0.0278 * repetitions));
}

export function getWeightPercentages({ weight, repetitions }) {
  let listOfPercentages = [];
  const maxWeight = getMaxRepetition({ weight, repetitions });
  for (
    let percentage = MAX_PERCENTAGE;
    percentage >= MIN_PERCENTAGE;
    percentage -= PERCENTAGE_INTERVAL
  ) {
    listOfPercentages.push({
      [percentage]: Math.round((maxWeight * percentage) / 100)
    });
  }
  return listOfPercentages;
}

import { data } from '../../data/power-clean-rms.json';
// import LineChart from '../../components/LineChart';
import { PercentageSlider } from '../../components/PercentagesSlider';
import { ThreeDotsIcon } from '../../components/icons/ThreeDotsIcon';
import { getMaxRepetition, getWeightPercentages } from '../../helpers/formulas';

export default function MyRmSlug({ maxReps }) {
  // const listOfDates = maxReps.map((el) => el.createdAt).reverse();
  // replace weights by rms with formula
  // const listOfRms = maxReps.map((el) => el.weight).reverse();
  const listOfReps = maxReps.map((el) => {
    return (
      <li
        key={`${el.name}-${el.createdAt}`}
        className="flex justify-between items-center gap-x-2 w-full px-3 py-4"
      >
        <span className="flex-1">{el.createdAt}</span>
        <span className="flex-1 text-right">{el.weight} kg</span>
        <span className="flex-1 text-right">{el.reps} reps</span>
        <button className="text-right rounded-full bg-gray-100 w-min p-2">
          <ThreeDotsIcon />
        </button>
      </li>
    );
  });

  const lastRM = getMaxRepetition({
    weight: maxReps[0].weight,
    repetitions: maxReps[0].reps
  });

  const percentages = getWeightPercentages({
    weight: maxReps[0].weight,
    repetitions: maxReps[0].reps
  });

  return (
    <>
      <h1 className="font-bold text-3xl mb-4">Power clean RMs</h1>
      {/* <LineChart labels={listOfDates} values={listOfRms}></LineChart> */}
      <div className="font-bold bg-gray-100 rounded-lg p-3 w-max mx-auto mb-4">
        <span className="text-6xl">{lastRM}</span>
        <span className="text-2xl"> kg</span>
      </div>
      <PercentageSlider percentages={percentages} />
      <button className="max-w-sm mx-auto w-full bg-lime-300 text-lg px-3 py-2.5 font-bold mb-4 rounded-lg">
        Añadir RM
      </button>
      <h3 className="font-semibold text-xl">Tus RMs</h3>
      <ul className="flex flex-col divide-y-2">{listOfReps}</ul>
    </>
  );
}

export async function getServerSideProps({}) {
  let maxReps = data;
  console.log(maxReps, 'macreps');
  maxReps = maxReps.map((el) => ({
    name: el.name,
    weight: el.weight,
    reps: el.reps,
    createdAt: new Date(el.created_at).toLocaleDateString()
  }));
  return {
    props: { maxReps: maxReps } // will be passed to the page component as props
  };
}

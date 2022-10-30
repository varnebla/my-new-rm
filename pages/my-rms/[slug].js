import { data } from '../../data/power-clean-rms.json';
// import LineChart from '../../components/LineChart';
import { PercentageSlider } from '../../components/PercentagesSlider';
import { AddRmForm } from '../../components/AddRmForm';
import { BaseModal } from '../../components/BaseModal';
import { Calendar, ChevronRight } from 'lucide-react';
import { getMaxRepetition, getWeightPercentages } from '../../helpers/formulas';
import { useState } from 'react';

export default function MyRmSlug({ maxReps }) {
  // const listOfDates = maxReps.map((el) => el.createdAt).reverse();
  // replace weights by rms with formula
  // const listOfRms = maxReps.map((el) => el.weight).reverse();
  const [showModal, toggleShowModal] = useState(false);
  const listOfReps = maxReps.map((el) => {
    return (
      <li
        key={`${el.name}-${el.createdAt}`}
        className="flex justify-between items-center gap-x-2 w-full px-3 py-4 text-gray-500 text-sm"
      >
        <div className="flex flex-col gap-y-2">
          <p className="flex gap-x-1">
            <span className="text-violet-600">{el.weight} kg</span>
            <span>en {el.reps} reps</span>
          </p>
          <p className="flex items-center gap-x-1">
            <Calendar color="currentColor" size={14} />
            <span>{el.createdAt}</span>
          </p>
        </div>
        <ChevronRight color="currentColor" size={18} />
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

  const addRmModal = showModal && (
    <BaseModal close={() => toggleShowModal(false)}>
      <AddRmForm />
    </BaseModal>
  );

  return (
    <>
      <h1 className="font-bold text-3xl mb-8">Power clean RMs</h1>
      {/* <LineChart labels={listOfDates} values={listOfRms}></LineChart> */}
      <div className="font-bold rounded-full w-40 h-40 mx-auto mb-8  relative">
        <div className="relative bg-white z-10 w-40 h-40 rounded-full flex justify-center items-center border border-gray-200">
          <p>
            <span className="text-6xl">{lastRM}</span>
            <span className="text-2xl"> kg</span>
          </p>
        </div>
        <div className="bg-gradient-to-tr z-0 from-lime-300 to-violet-400 blur-md rounded-full absolute top-0 bottom-0 left-0 right-0"></div>
      </div>
      <PercentageSlider percentages={percentages} />
      <div className="w-full flex justify-center">
        <button
          className="max-w-sm w-full bg-lime-300 text-lg px-4 py-3 font-bold mb-6 rounded-full"
          onClick={() => toggleShowModal(true)}
        >
          Añadir RM
        </button>
      </div>
      <h3 className="font-semibold text-xl mb-4">Tus RMs</h3>
      <ul className="flex flex-col rounded-lg divide-y divide-gray-100 border border-gray-100 shadow-sm mb-8">
        {listOfReps}
      </ul>
      {addRmModal}
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

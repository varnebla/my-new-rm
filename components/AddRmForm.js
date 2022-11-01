import { useState } from 'react';
import { addNewUserRm } from '../firebase/client';
import { Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';

export function AddRmForm(props) {
  const [rmDetails, setRmDetails] = useState(props.currentRm || {});
  const router = useRouter();

  const handleInputChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    setRmDetails((values) => ({ ...values, [eventName]: eventValue }));
  };

  const addNewRm = async (event) => {
    const exerciseName = router.query.slug.trim('-').join(' ');
    event.preventDefault();
    await addNewUserRm({
      created_at: Timestamp.fromDate(new Date(rmDetails.rmDate)),
      exercise: exerciseName,
      reps: rmDetails.rmReps,
      username: 'victor.arnedo.93@gmail.com',
      weight: rmDetails.rmWeight,
      slug: router.query.slug
    });
    props.close();
  };

  const editRmModal = async (event) => {};

  return (
    <form action="#" method="POST" onSubmit={addNewRm}>
      <div className="flex flex-col items-start gap-y-6 text-left p-4">
        <div className="w-full">
          <label htmlFor="rm-date" className="text-sm font-medium">
            Fecha
          </label>
          <div className="mt-1 flex rounded-md shadow-sm w-full">
            <input
              name="rmDate"
              type="date"
              required
              value={rmDetails.rmDate || ''}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md sm:text-sm px-3 py-2 w-full focus:outline-none focus:ring-1"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="rm-weight" className="text-sm font-medium">
            Peso
          </label>
          <input
            name="rmWeight"
            type="number"
            min="0"
            required
            value={rmDetails.rmWeight || ''}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md shadow-sm block w-full sm:text-sm px-3 py-2 mt-1 focus:outline-none focus:ring-1 out-of-range:border-red-500 out-of-range:text-red-500 focus:out-of-range:ring-red-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="rm-reps" className="text-sm font-medium">
            Repeticiones
          </label>
          <input
            name="rmReps"
            type="number"
            min="1"
            required
            value={rmDetails.rmReps || ''}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md shadow-sm block w-full sm:text-sm px-3 py-2 mt-1 focus:outline-none focus:ring-1 out-of-range:border-red-500 out-of-range:text-red-500 focus:out-of-range:ring-red-500"
          />
        </div>
        <button
          className="bg-lime-300 rounded-full px-4 py-2 font-semibold w-full"
          type="submit"
        >
          Añadir mi nuevo RM
        </button>
      </div>
    </form>
  );
}

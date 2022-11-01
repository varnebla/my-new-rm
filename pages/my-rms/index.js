import Link from 'next/link';
import { getRmsByUser } from '../../firebase/client';
import { getMaxRepetition } from '../../helpers/formulas';

export default function MyRms({ maxReps }) {
  const maxRepsList = maxReps.map((el) => {
    return (
      <Link
        href={`/my-rms/${el.slug}`}
        key={`${el.createdAt}-${el.weight}-${el.exercise}`}
      >
        <a className="py-2 px-3 rounded-lg bg-gray-200 flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg first-letter:uppercase">
              {el.exercise}
            </p>
            <time className="text-gray-600 text-sm">{el.createdAt}</time>
          </div>
          <p className="text-4xl">
            {el.weight} <span className="text-xl">kg</span>
          </p>
        </a>
      </Link>
    );
  });
  return (
    <>
      <h1 className="font-bold text-3xl mb-4">My rms</h1>
      <div className="flex flex-col gap-y-3 mb-4">{maxRepsList}</div>
    </>
  );
}

export async function getServerSideProps(context) {
  // this user is hardcoded until user auth is set
  const username = 'victor.arnedo.93@gmail.com';
  let userMaxReps = await getRmsByUser(username);
  userMaxReps = userMaxReps.map((el) => ({
    exercise: el.exercise,
    slug: el.exercise.split(' ').join('-'),
    weight: getMaxRepetition({
      weight: el.weight,
      repetitions: el.reps
    }),
    createdAt: new Date(el.created_at.seconds * 1000).toLocaleDateString()
  }));
  console.log(userMaxReps);

  return {
    props: {
      maxReps: userMaxReps
    }
  };
}

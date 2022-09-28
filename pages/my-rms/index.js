import { getRmsByUser } from '../../firebase/client';

export default function MyRms({ maxReps }) {
  const maxRepsList = maxReps.map((el) => {
    return (
      <li key={el.exercise}>
        <p>{el.exercise}</p>
        <p>{el.weight} kg</p>
        <p>{el.createdAt}</p>
      </li>
    );
  });
  return (
    <>
      <h1 className="font-bold text-3xl mb-4">My rms</h1>
      <ul>{maxRepsList}</ul>
    </>
  );
}

export async function getServerSideProps(context) {
  // this user is hardcoded until user auth is set
  const username = 'victor.arnedo.93@gmail.com';
  let userMaxReps = await getRmsByUser(username);
  userMaxReps = userMaxReps.map((el) => ({
    exercise: el.exercise,
    weight: el.weight,
    reps: el.reps,
    createdAt: new Date(el.created_at.seconds * 1000).toLocaleDateString()
  }));

  return {
    props: {
      maxReps: userMaxReps
    }
  };
}

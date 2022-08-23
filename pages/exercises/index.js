import Link from 'next/link';
import { getExercises } from '../../firebase/client';

export default function Exercises({ exercises }) {
  const listOfExercises = exercises.map((el) => {
    return (
      <Link key={el.slug} href={`/exercises/${el.slug}`}>
        <a>{el.name}</a>
      </Link>
    );
  });
  return (
    <>
      <h1>Exercises</h1>
      <div>{listOfExercises}</div>
    </>
  );
}
export async function getServerSideProps(context) {
  const exercisesData = await getExercises();
  return {
    props: { exercises: exercisesData } // will be passed to the page component as props
  };
}

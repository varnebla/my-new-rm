import Link from 'next/link';
import { getExercises } from '../../firebase/client';

export default function Exercises({ exercises }) {
  const listOfExercises = exercises.map((el) => {
    return (
      <li key={el.slug}>
        <Link href={`/exercises/${el.slug}`}>
          <a className="border-2 border-black rounded-md px-3 py-2 hover:bg-black hover:text-white transition-color duration-100">
            {el.name}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <>
      <h1 className="font-bold text-3xl mb-4">Exercises</h1>
      <ul className="flex flex-col gap-y-8">{listOfExercises}</ul>
    </>
  );
}
export async function getServerSideProps(context) {
  const exercisesData = await getExercises();
  return {
    props: { exercises: exercisesData } // will be passed to the page component as props
  };
}

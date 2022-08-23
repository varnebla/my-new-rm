import { useRouter } from 'next/router';
import { getExerciseBySlug } from '../../firebase/client';

export default function Exercise({ exercise }) {
  // const router = useRouter();
  return (
    <>
      <h1>{exercise.name}</h1>
      <p>{exercise.description}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const exerciseData = await getExerciseBySlug(params.slug);
  return {
    props: { exercise: exerciseData } // will be passed to the page component as props
  };
}

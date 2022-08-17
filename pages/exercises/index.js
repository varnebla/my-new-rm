import Link from 'next/link';

export default function Exercises() {
  const exercises = [
    {
      slug: 'power-clean',
      name: 'Power Clean'
    },
    {
      slug: 'power-snatch',
      name: 'Power Snatch'
    },
    {
      slug: 'deadlift',
      name: 'Deadlift'
    }
  ];

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

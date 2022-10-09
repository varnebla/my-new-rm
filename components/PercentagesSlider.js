export function PercentageSlider({ percentages }) {
  const listOfPercentages = percentages.map((el, index) => {
    const percentage = Object.keys(el)[0];
    return (
      <li
        key={percentage[index]}
        className="flex flex-col items-center divide-y-2 bg-gray-100 px-3 py-2 w-max rounded-lg"
      >
        <p className="font-semibold w-max pb-2">{percentage} %</p>
        <p className="w-max pt-2">{el[percentage]} kg</p>
      </li>
    );
  });

  return (
    <>
      <ul className="flex gap-x-3 overflow-x-scroll overfloy-y-hidden mb-4 hide-scrollbar">
        {listOfPercentages}
      </ul>
    </>
  );
}

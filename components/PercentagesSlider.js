export function PercentageSlider({ percentages }) {
  const listOfPercentages = percentages.map((el, index) => {
    const percentage = Object.keys(el)[0];
    return (
      <li
        key={percentage[index]}
        className="flex flex-col items-center w-max relative py-4"
      >
        <p className="w-max px-2 py-1 text-sm bg-gray-200  rounded-full absolute top-0">
          {percentage} %
        </p>
        <p className="font-semibold w-max text-lg px-4 py-6 border border-gray-100 rounded-lg shadow-sm">
          {el[percentage]} kg
        </p>
      </li>
    );
  });

  return (
    <>
      <ul className="flex gap-x-4 overflow-x-scroll mb-6 hide-scrollbar text-gray-700">
        {listOfPercentages}
      </ul>
    </>
  );
}

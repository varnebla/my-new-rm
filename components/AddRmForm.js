export function AddRmForm(props) {
  return (
    <form action="#" method="POST">
      <div className="flex flex-col items-start gap-y-6 text-left p-4">
        <div className="w-full">
          <label htmlFor="rm-date" className="text-sm font-medium">
            Fecha
          </label>
          <div className="mt-1 flex rounded-md shadow-sm w-full">
            <input
              name="rm-date"
              type="date"
              className="border border-gray-300 rounded-md sm:text-sm px-3 py-2 w-full focus:outline-none focus:ring-1"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="rm-weight" className="text-sm font-medium">
            Peso
          </label>
          <input
            name="rm-weight"
            type="number"
            min="0"
            className="border border-gray-300 rounded-md shadow-sm block w-full sm:text-sm px-3 py-2 mt-1 focus:outline-none focus:ring-1 out-of-range:border-red-500 out-of-range:text-red-500 focus:out-of-range:ring-red-500"
          />
        </div>
        <div className="w-full">
          <label htmlFor="rm-reps" className="text-sm font-medium">
            Repeticiones
          </label>
          <input
            name="rm-reps"
            type="number"
            min="1"
            className="border border-gray-300 rounded-md shadow-sm block w-full sm:text-sm px-3 py-2 mt-1 focus:outline-none focus:ring-1 out-of-range:border-red-500 out-of-range:text-red-500 focus:out-of-range:ring-red-500"
          />
        </div>
        <button className="bg-lime-300 rounded-full px-4 py-2 font-semibold w-full">
          Añadir mi nuevo RM
        </button>
      </div>
    </form>
  );
}

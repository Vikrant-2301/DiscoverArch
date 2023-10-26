export const Jury = () => {
  return (
    <div className="bg-wework py-32">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            <strong>Jury Members</strong>
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Accomplished and Respected Members of Our Distinguished Jury Panel
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="/images/jury/Nagendra.jpeg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Ar. Nagendra Narayan</p>
              <p className="mb-5 text-xs text-gray-800">
                HOD, Lovely School of Architecture and Design, LPU
              </p>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="/images/jury/Unknown.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Jury</p>
              <p className="mb-5 text-xs text-gray-800">Jury</p>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="/images/jury/Unknown.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Jury</p>
              <p className="mb-5 text-xs text-gray-800">Jury</p>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="/images/jury/Unknown.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Jury</p>
              <p className="mb-5 text-xs text-gray-800">Jury</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

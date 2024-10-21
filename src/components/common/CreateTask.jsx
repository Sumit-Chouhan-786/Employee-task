
const CreateTask = () => {
  return (
    <div>
      <form className="flex p-5 mt-10 rounded-sm flex-wrap w-full bg-gray-800 items-center justify-between">
        <div className="w-5/12 flex flex-col gap-4">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="w-full border-white border-2 rounded-lg px-2 py-1 bg-transparent outline-none"
              type="text"
              placeholder="Make a ui design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="w-full border-white border-2 rounded-lg px-2 py-1 bg-transparent outline-none"
              type="Date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="w-full border-white border-2 rounded-lg px-2 py-1 bg-transparent outline-none"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="w-full border-white border-2 rounded-lg px-2 py-1 bg-transparent outline-none"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-5/12">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full border-white border-2 rounded-lg px-2 py-1 bg-transparent outline-none"
            name=""
            id=""
            cols="30"
            rows="8"
          ></textarea>
          <button className="bg-emerald-600 py-2 w-full rounded-md mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask
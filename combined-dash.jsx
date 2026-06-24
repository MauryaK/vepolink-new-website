const DashbordCombined = () => {
  const tabData = ["Water", "Dust", "Gas"];
  return (
    <div className="flex flex-row gap-1 mt-8">
      {tabData.map((list, i) => (
        <button
          key={i}
          className="px-6  py-1.5 bg-(--ink) text-white rounded-full border border-(--ink) cursor-pointer"
        >
          {list}
        </button>
      ))}
    </div>
  );
};

Object.assign(window, { DashbordCombined });

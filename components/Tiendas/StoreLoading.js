const StoreLoading = () => {
  return (
    <div className="border border-blue-300 shadow rounded-xl drop-shadow-xl flex flex-col flex-1 h-full">
      <div className="animate-pulse">
        <div className="bg-slate-700"></div>
        <div className="p-5 space-y-2 ">
          <div className="bg-slate-700 rounded"></div>
          <div className="bg-slate-700 rounded"></div>
          <div className="bg-slate-700 rounded"></div>
          <div>
            <div className="bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLoading;

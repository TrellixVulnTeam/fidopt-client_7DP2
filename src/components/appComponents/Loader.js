const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-indigo-700 rounded-full";

  return (
    <div className="flex flex-col py-64">
        <h1 className="text-center text-3xl text-indigo-500 font-caveat mr-1 animate-bounce">LOADING</h1>
      <div className="flex justify-center py-2 font-caveat">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Loader;

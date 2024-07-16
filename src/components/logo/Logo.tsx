const Logo = () => {
  return (
    <div className="ui-logo flex items-center justify-center relative">
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-12 md:w-16 h-[2px] md:h-1 border-slate-500 bg-slate-500" />
      <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-12 md:w-16 h-[2px] md:h-1 border-slate-500 bg-slate-500" />

      <div className="flex relative items-center justify-center rounded-full h-9 w-9 md:h-12 md:w-12 border-[3px] md:border-4 border-white bg-slate-900">
        <span className="text-md md:text-2xl font-bold">SD</span>
      </div>
    </div>
  );
};

export default Logo;

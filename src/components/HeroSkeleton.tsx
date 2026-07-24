const HeroSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 items-center text-gray-800" style={{ margin: "1% 0 5% 0" }}>
      <div className="mb-6 h-40 w-40 animate-pulse rounded-full bg-slate-200/80 md:h-52 md:w-52 dark:bg-slate-700/60" />

      <div className="mb-4 h-10 w-64 animate-pulse rounded-full bg-slate-200/80 md:w-96 dark:bg-slate-700/60" />

      <div className="mb-4 flex flex-col items-center gap-3">
        <div className="h-5 w-72 animate-pulse rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
        <div className="h-5 w-56 animate-pulse rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
      </div>

      <div className="mt-4 flex w-full max-w-4xl flex-col items-center gap-4 px-4">
        <div className="h-4 w-full max-w-3xl animate-pulse rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
        <div className="h-4 w-11/12 max-w-3xl animate-pulse rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
        <div className="h-4 w-10/12 max-w-2xl animate-pulse rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="h-11 w-40 animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/60" />
        <div className="h-11 w-44 animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/60" />
        <div className="h-11 w-32 animate-pulse rounded-md bg-slate-200/80 dark:bg-slate-700/60" />
      </div>
    </div>
  );
};

export default HeroSkeleton;
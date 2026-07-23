// import type { ReactNode } from "react";

// type SectionSkeletonProps = {
//   children: ReactNode;
//   className?: string;
//   titleWidthClassName?: string;
// };

// const SectionSkeleton = ({
//   children,
//   className = "",
//   titleWidthClassName = "w-56",
// }: SectionSkeletonProps) => {
//   return (
//     <div className={`rounded-2xl max-w-7xl mx-auto ${className}`.trim()}>
//       <div className="animate-pulse">
//         <div className="mb-10 flex justify-center">
//           <div
//             className={`h-10 rounded-full bg-slate-200/80 dark:bg-slate-700/60 ${titleWidthClassName}`}
//           />
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SectionSkeleton;
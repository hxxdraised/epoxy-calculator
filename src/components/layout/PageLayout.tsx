import { PropsWithChildren } from "react";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-screen justify-center bg-slate-300 px-2 py-6 sm:px-6 sm:py-10">
    <div className="w-[800px] max-w-full rounded-2xl bg-white px-4 py-6 sm:px-6">
      {children}
    </div>
  </div>
);

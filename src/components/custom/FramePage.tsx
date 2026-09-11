import { type PropsWithChildren } from 'react';

export const FramePage = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto w-full max-w-3xl p-4 sm:p-2 lg:p-0">{children}</div>
  );
};

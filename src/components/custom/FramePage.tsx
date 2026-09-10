import { type PropsWithChildren } from 'react';

export const FramePage = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full bg-accent mx-auto items-center max-w-3xl">
      {children}
    </div>
  );
};

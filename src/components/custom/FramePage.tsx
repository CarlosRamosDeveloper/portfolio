import { type PropsWithChildren } from 'react';

export const FramePage = ({ children }: PropsWithChildren) => {
  return <div className="w-full bg-accent">{children}</div>;
};

import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MenuItem: FC<Props> = ({ children }) => {
  return <li className="inline-block whitespace-nowrap">{children}</li>;
};

export default MenuItem;

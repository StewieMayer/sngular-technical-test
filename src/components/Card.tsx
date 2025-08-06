import type { PropsWithChildren } from "react";

const Card= ({children}:PropsWithChildren) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
      {children}
    </div>
  );
};

export default Card;

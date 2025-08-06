import type { PropsWithChildren } from "react";

const Card= ({children}:PropsWithChildren) => {
  return (
    <div className="max-w-md w-full rounded-xl overflow-hidden shadow-2xl bg-white p-6">
      {children}
    </div>
  );
};

export default Card;

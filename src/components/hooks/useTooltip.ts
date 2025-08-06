import { useState } from "react";

export const useTooltip = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return {
    isVisible,
    showTooltip,
    hideTooltip
  };
};

import { NavigateOptions, useNavigate } from "react-router-dom";

export const navigateBackClickHandler = (
  url: string,
  config: NavigateOptions | undefined,
  navigate: ReturnType<typeof useNavigate>
): void => {
  navigate(url, config);
};

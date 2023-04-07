import { useState } from "react";

export function useApi(entity: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [errors, setErrors] = useState();

  return {
    data,
    errors,
    isLoading,
  };
}

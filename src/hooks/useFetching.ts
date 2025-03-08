"use client"
import { ApiResponse } from "@/models";
import { fetching } from "@/services";
import { useEffect, useState } from "react";

type Data<T> = ApiResponse<T> | T | null;
type ErrorType = Error | null;

interface Props<T> {
  data: Data<T>;
  error: ErrorType;
  loading: boolean;
}

export const useFetching = <T>(url: string): Props<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [error, setError] = useState<ErrorType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetching<T>(url);
      if (response instanceof Error) {
        setError(response);
        return;
      }
      setData(response);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

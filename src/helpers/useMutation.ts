import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
const initHeaders = {
  "Content-type": "application/json",
};

type TMutationProps = {
  url: string;
  method: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  skip?: boolean;
  headers?: { [name: string]: string | boolean | null };
  body?: { [name: string]: string };
}

const useMutation = <TResponse>({ url, method, body: customBody = {}, headers: customHeaders = {}, skip }: TMutationProps) => {
  const [data, setData] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState(null);
  const [headers, setHeaders] = useState(customHeaders);
  const [params, setParams] = useState({});
  const [body, setBody] = useState({});
  const [startMutation, setStartMutation] = useState(false);
  const [loading, setLoading] = useState(false);

  const mutation = ({ body: refetchBody = body, headers: refetchHeaders = {}, params = {} } = {}) => {
    setBody(refetchBody)
    setParams(params)
    setHeaders({ ...initHeaders, ...refetchHeaders })
    setStartMutation(true)
  };

  useEffect(() => {
    let unmount = false;
    const source = axios.CancelToken.source();

    const request = async () => {
      try {
        if (!unmount) setLoading(true);
        const res = await axios.request({
          url,
          method,
          headers: { ...initHeaders, ...headers },
          data: { ...customBody, ...body },
          params,
          cancelToken: source.token,
        });
        if (!unmount) setData(res.data);
      } catch (err: any) {
        if (!unmount) setError(err);
      } finally {
        if (!unmount) {
          setLoading(false)
          setStartMutation(false)
        }
        if (!unmount && !isDirty) setIsDirty(true);
      }
    };
    if (!skip && startMutation) {
      setError(null);
      setData(null);
      request();
    };
    return () => {
      unmount = true;
      source.cancel(`cancel req ${url}`);
    };
  }, [skip, body, headers]);

  return { data: data as TResponse, error, loading, mutation };
};

export default useMutation
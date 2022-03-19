import { useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse, Method } from 'axios';

interface Params {
  [key: string]: any;
}

interface Args<T> {
  url?: string;
  params?: Params;
  body?: Params;
  method?: Method;
  onSuccess?: (data?: T) => void;
  onError?: (err: AxiosError) => void;
}

interface PostRequest {
  method?: Method;
  url?: string;
  params?: Params;
  body?: Params;
  headers?: AxiosRequestHeaders;
}

type Post<T> = ({ url, params }: Args<T>) => Promise<void>;

interface PostResponse<T> {
  post: Post<T>;
  isLoading: boolean;
}

export function usePost<T>({ method = 'post', url, params, headers }: PostRequest): PostResponse<T> {
  const methodInternal = useMemo(() => method, [method]);
  const urlInternal = useMemo(() => url, [url]);
  const paramsInternal = useMemo(() => params, [params]);
  const [isLoading, setLoading] = useState(false);
  const post = useCallback<Post<T>>(
    async <T>(args: Args<T>) => {
      const reqUrl = args.url ?? urlInternal ?? '';
      if (!reqUrl) {
        return;
      }
      if (!methodInternal) {
        return;
      }
      try {
        setLoading(true);
        const res: AxiosResponse<T> = await axios.request({
          method: args?.method ?? methodInternal,
          url: reqUrl,
          data: args?.params ?? paramsInternal ?? undefined,
          headers,
        });
        args.onSuccess?.(res.data);
      } catch (err) {
        args.onError?.(err as AxiosError);
      } finally {
        setLoading(false);
      }
    },
    [headers, methodInternal, paramsInternal, urlInternal]
  );

  const clear = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => () => clear(), [clear]);

  return {
    post,
    isLoading,
  };
}

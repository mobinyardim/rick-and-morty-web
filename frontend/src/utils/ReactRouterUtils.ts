// utils.ts
import {
  Await as RrdAwait,
  defer,
  LoaderFunctionArgs,
  useLoaderData as useRrdLoaderData,
  useRouteLoaderData as useRrdRouteLoaderData,
} from "react-router-dom";
import React from "react";

export function useLoaderData<
  TLoader extends ReturnType<typeof deferredLoader>
>() {
  return useRrdLoaderData() as ReturnType<TLoader>["data"];
}

export function useRouteLoaderData<
  TLoader extends ReturnType<typeof deferredLoader>
>(routerId: string) {
  return useRrdRouteLoaderData(routerId) as ReturnType<TLoader>["data"];
}

export function deferredLoader<TData extends Record<string, unknown>>(
  dataFunc: (args: LoaderFunctionArgs) => TData
) {
  return (args: LoaderFunctionArgs) =>
    defer(dataFunc(args)) as Omit<ReturnType<typeof defer>, "data"> & {
      data: TData;
    };
}

export interface AwaitResolveRenderFunction<T> {
  (data: Awaited<T>): React.ReactElement;
}

export interface AwaitProps<T> {
  children: React.ReactNode | AwaitResolveRenderFunction<T>;
  errorElement?: React.ReactNode;
  resolve: Promise<T>;
}

export function Await<T>(props: AwaitProps<T>): JSX.Element {
  return RrdAwait(props);
}

import { Typography } from "@material-tailwind/react";
import * as BsIcon from "react-icons/bs";
import React, { useEffect, useMemo, useRef } from "react";

interface ItemsListProp {
  className: string;
  title: string;
  isSeeMoreButtonVisible?: boolean;
  onSeeMore?: VoidFunction;
  onLoadNext?: VoidFunction;
  items: JSX.Element[];
}

export function ItemsList({
  className,
  items,
  title,
  onSeeMore,
  isSeeMoreButtonVisible,
  onLoadNext,
}: ItemsListProp) {
  let observer = useMemo(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    return new IntersectionObserver((entries, observer) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          onLoadNext?.();
        }
      });
    }, options);
  }, [onLoadNext]);

  const lastItem = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const item = lastItem.current;
    if (item) {
      observer.observe(lastItem.current);
    }
    return () => {
      if (item) {
        observer.unobserve(item);
      }
    };
  }, [observer]);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex max-w-[100vw] flex-row items-center px-8`}>
        <Typography variant="h4" className={"text-onBackgroundMedium"}>
          {title}
        </Typography>
        <div className="grow" />
        <Typography
          variant="small"
          onClick={() => onSeeMore?.()}
          className={`cursor-pointer text-primary ${
            isSeeMoreButtonVisible ? "" : "hidden"
          }`}
        >
          See More
        </Typography>
        <BsIcon.BsChevronDoubleRight
          className={`h-4 w-4 text-primary ${
            isSeeMoreButtonVisible ? "" : "hidden"
          }`}
        />
      </div>
      <div className={`h-4 flex-shrink-0`} />
      <div
        className={`grid h-fit w-fit max-w-[90vw] grid-flow-row grid-cols-const_40 justify-items-center gap-4 lg:grid-cols-const_96 sm:lg-max:grid-cols-const_44`}
      >
        {items.map((item) => item)}
        <div ref={lastItem} />
      </div>
    </div>
  );
}

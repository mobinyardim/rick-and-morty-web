import { Typography } from "@material-tailwind/react";
import * as BsIcon from "react-icons/bs";
import React, { useEffect } from "react";

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
  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      onLoadNext?.();
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);

    return () => {
      window?.removeEventListener("scroll", handleScroll, { capture: false });
    };
  });

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
        className={`grid h-fit w-fit max-w-[90vw] grid-flow-row grid-cols-const_40 justify-items-center gap-4 overflow-y-auto lg:grid-cols-const_96 sm:lg-max:grid-cols-const_44`}
      >
        {items.map((item) => item)}
      </div>
    </div>
  );
}

import React from "react";

const sizes = {
  s: "text-[64px] font-bold md:text-5xl",
  xs: "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

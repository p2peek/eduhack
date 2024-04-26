import React from "react";

const sizes = {
  xs: "text-lg font-normal",
  s: "text-xl font-medium",
  md: "text-3xl font-normal md:text-[28px] sm:text-[26px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

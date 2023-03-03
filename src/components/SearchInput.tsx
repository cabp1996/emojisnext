import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const SearchInput: FC<Props> = (className, placeholder, ...attrs) => {
  return (
    <input
      className={`text-gray-900 block w-full border ${className}`}
      placeholder={placeholder}
      {...attrs}
      required
    />
  );
};

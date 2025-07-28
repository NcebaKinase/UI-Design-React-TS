import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className = "", ...props }: Props) => (
  <button
    className={`px-4 py-2 rounded text-white font-semibold transition duration-300 ${className}`}
    {...props}
  />
);
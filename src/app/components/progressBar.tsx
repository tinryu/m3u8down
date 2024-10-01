"use client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Progress } from "flowbite-react";
import { useState, useEffect } from "react";

const customTheme: CustomFlowbiteTheme["progress"] = {
  base: "w-full overflow-hidden rounded-lg bg-green-100 relative",
  label: "text-lg font-semibold text-green-100 text-center rounded-lg",
  bar: "space-x-2 rounded-lg text-center font-semibold text-slate-800 dark:text-black leading-10",
  color: {
    green: "bg-green-400 hover:bg-green-500",
  },
  size: {
    xl: "h-12",
  },
};

const DynamicProgressBar = (props: any) => {
  const [progress, setProgress] = useState(props.progresTime ? props.progresTime : 0);
  const color = "green";
  const size = "xl";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(Math.min(progress + 10, 100)); // increment progress by 10% every second
    }, 1000);
    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <Progress
      theme={customTheme}
      progress={progress}
      color={color}
      size={size}
      labelProgress
      className="progresbar"
    />
  );
}

export default DynamicProgressBar;

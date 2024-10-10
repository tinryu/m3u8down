"use client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Progress } from "flowbite-react";
import React, { useState, useEffect } from "react";

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

const DynamicProgressBar = ({ progresTime }: any) => {
  const [initialProgress] = useState(0); // Assuming we start at 0
  const [totalDuration, setTotalDuration] = useState<number | null>(null);
  const intervalTime = 1000;
  const color = "green";
  const size = "xl";

  useEffect(() => {
    if (progresTime >= 100) {
      // Calculate total duration when progress reaches 100%
      const rateOfChange = progresTime / ((100 - initialProgress) / intervalTime);
      setTotalDuration((100 - initialProgress) / rateOfChange * intervalTime);
    }
  }, [progresTime, intervalTime, initialProgress]);

  return (
    <>
      <Progress
        theme={customTheme}
        progress={progresTime}
        color={color}
        size={size}
        labelProgress
        className="progresbar"
      />
    </>
  );
}

export default DynamicProgressBar;

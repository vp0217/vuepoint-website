"use client";

import { useEffect, useState } from "react";
import { HOLIDAY_BOOTCAMP_START, HOLIDAY_BOOTCAMP_START_LABEL } from "@/lib/holiday-bootcamp";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type BootcampCountdownProps = {
  variant?: "full" | "compact";
  className?: string;
};

const BootcampCountdown = ({ variant = "full", className = "" }: BootcampCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    getTimeLeft(HOLIDAY_BOOTCAMP_START)
  );

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(HOLIDAY_BOOTCAMP_START));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!timeLeft) {
    return (
      <p className={`text-sm font-semibold ${className}`}>
        Bootcamp has started — enroll for the next cohort.
      </p>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  if (variant === "compact") {
    return (
      <div className={className}>
        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
          Starts {HOLIDAY_BOOTCAMP_START_LABEL}
        </p>
        <div className="flex gap-2">
          {units.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center min-w-[3rem] rounded-lg bg-primary/15 border border-primary/30 px-2 py-1.5"
            >
              <span className="text-lg font-extrabold text-background leading-none">
                {pad(value)}
              </span>
              <span className="text-[10px] uppercase text-background/60 mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-primary/15 border border-primary/30 p-5 md:p-6 ${className}`}>
      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
        Starts {HOLIDAY_BOOTCAMP_START_LABEL}
      </p>
      <p className="text-sm text-background/70 mb-4">Enrollment closes when we kick off</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-xl bg-background/10 border border-background/10 px-2 py-3 sm:py-4"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-background leading-none">
              {pad(value)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-background/60 mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampCountdown;

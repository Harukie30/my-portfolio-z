"use client";

import { useEffect, useMemo, useState } from "react";

type FooterTimeProps = {
  timeZone?: string;
};

export function FooterTime({ timeZone = "Asia/Manila" }: FooterTimeProps) {
  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-PH", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone,
      }),
    [timeZone]
  );

  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    const timeout = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 1000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [formatter]);

  return <span suppressHydrationWarning>{time ?? "--:--:--"}</span>;
}

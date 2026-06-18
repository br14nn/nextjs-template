"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Home({ initialValue = 0 }) {
  const [value, setValue] = useState<number>(initialValue);

  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex h-dvh min-h-fit w-full max-w-xs flex-col items-center justify-center gap-4 md:container">
        <div>
          <p
            className="text-5xl font-bold text-white"
            data-testid="counter-value"
          >
            {value}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button
            className="size-8"
            variant="destructive"
            onClick={() => setValue((oldVal) => (oldVal == 0 ? 0 : oldVal - 1))}
            data-testid="decrement-btn"
          >
            <p>-</p>
          </Button>
          <Button
            className="size-8"
            variant="secondary"
            onClick={() => setValue((oldVal) => oldVal + 1)}
            data-testid="increment-btn"
          >
            <p>+</p>
          </Button>
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xl font-semibold">
        Count number is {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Click me
      </button>
    </div>
  );
}


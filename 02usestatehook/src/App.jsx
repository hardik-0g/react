import Counter from "./components/counter";
import CalendarDemo from "./components/CalendarDemo";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <Counter />
      <CalendarDemo />
    </div>
  );
}

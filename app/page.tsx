// app/page.tsx
import GreetingCard from './GreetingCard';
import MiniGame from './MiniGame';

export default function Page() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center space-y-8 p-4">
      <MiniGame />
    </div>
  );
}

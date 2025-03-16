import { Typography } from "./components/designSystemComponents/Typography";
import { Order } from "./components/Order";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <Order />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Typography variant="body medium">Francisco Micucci</Typography>
      </footer>
    </div>
  );
}

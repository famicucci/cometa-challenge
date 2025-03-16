import { Order } from "./components/Order";

export default function Home() {
  return (
    <div>
      <main className="p-5 max-w-3xl m-auto">
        <Order />
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Typography variant="body medium">Francisco Micucci</Typography>
      </footer> */}
    </div>
  );
}

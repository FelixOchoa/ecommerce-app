import { PopularProducts } from "@/components/home/PopularProducts";
import { Slogan } from "@/components/home/Slogan";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full">
      <Slogan />
      <PopularProducts />
    </main>
  );
}

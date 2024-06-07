"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={() => router.push("/tomato")}>
          router로 tomato로 이등
        </button>
      </div>
      <div>
        <input
          type="text"
          aria-label="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button onClick={() => router.push(`/vegetable/${name}`)}>
          {name}으로 이동
        </button>
      </div>

      <div>
        <h2>Link to tomato</h2>
        <Link href="/tomato">tomato{/* <a>Move to /toamato</a> */}</Link>
      </div>
      <div>
        <h2>Link to potato</h2>
        <Link href="/vegetable/potato">
          potato{/* <a>Move to /toamato</a> */}
        </Link>
      </div>
    </main>
  );
}

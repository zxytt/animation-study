'use client'

import Link from "next/link"

export default function Home() {
  const styles = "border-b-2 black border-black text-2xl"
  return (
    <div className="flex flex-col items-center">
      <Link href="/1-Base" className="mb-4"><span className={styles}>Base</span></Link>
      <Link href="/2-Action" className="mb-4"><span className={styles}>Action</span></Link>
      <Link href="/3-MotionValue" className="mb-4"><span className={styles}>useMotionValue</span></Link>
      <Link href="/4-Spring" className="mb-4"><span className={styles}>useSpring</span></Link>
      <Link href="/5-Transform" className="mb-4"><span className={styles}>useTransform</span></Link>
      <Link href="/6-Drag" className="mb-4"><span className={styles}>Drag</span></Link>
      <Link href="/7-Presence" className="mb-4"><span className={styles}>Presence</span></Link>
    </div>
  );
}

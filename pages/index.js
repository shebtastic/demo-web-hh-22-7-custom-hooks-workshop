import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useLightBulb, useNavigation, useToggle } from "@/lib/hooks";
import LightBulb from "@/components/LightBulb";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [toggleState, setToggleState] = useState(false);
  const [toggleState, toggle] = useToggle();
  const [lightbulb, { on, off, stomp }] = useLightBulb();
  const [page, { previous, next, hasPrevious, hasNext }] = useNavigation([
    "Lorem",
    "ipsum",
    "bla",
    "blubb",
  ]);

  return (
    <>
      <button onClick={toggle}>{toggleState ? "on" : "off"}</button>
      <div>
        {lightbulb}
        <button onClick={on}>on</button>
        <button onClick={off}>off</button>
        <button onClick={stomp}>stomp</button>
      </div>
      <LightBulb />
      <LightBulb />
      <div>
        {page}
        {hasPrevious() && <button onClick={previous}>previous</button>}
        {hasNext() && <button onClick={next}>next</button>}
        {hasNext(2) ? "there is a page 3" : "there is no page 3"}
      </div>
    </>
  );
}

import dynamic from "next/dynamic";
import Image from "next/image";
// import Video from "./Video";
const Video = dynamic(() => import("./Video"), { ssr: false });
export default function Home() {
  return (
  <Video />
  );
}

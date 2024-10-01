import "@/app/globals.css";

import Image from "next/image";
import Masonry from "@mui/lab/Masonry";

const imageSources = [
  "/assets/images/digitals/digital1.png",
  "/assets/images/digitals/digital2.png",
  "/assets/images/digitals/digital3.png",
  "/assets/images/digitals/digital4.png",
"/assets/images/digitals/digital5.PNG"];

export default function Digital() {
  return (
    <Masonry columns={3} spacing={1} sx={{ maxWidth: 1200, margin: "auto" }}>
      {imageSources.map((src, index) => (
        <Image key={index} src={src} alt="Digital" width={400} height={400} />
      ))}
    </Masonry>
  );
}

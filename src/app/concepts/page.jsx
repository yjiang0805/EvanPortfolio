import "@/app/globals.css";

import Image from "next/image";
import Masonry from "@mui/lab/Masonry";

const collectionImageSources = [
  [
    "/assets/images/concepts/cyberpunk_shop_interior/IMG_2827.png",
    "/cyberpunkshop",
    "Cyberpunk Shop",
  ],
  [
    "/assets/images/concepts/cyberpunk_street/cyberpunk_street.png",
    "/cyberpunkstreet",
    "Cyberpunk Street",
  ],
  [
    "/assets/images/concepts/group_collab/group_collab_cover.png",
    "/groupcollab",
    "Group Collab",
  ],
  [
    "/assets/images/concepts/traditional_to_digit_house/morning_mood_cover.png",
    "/traditionaltodigital",
    "Traditional to Digital House",
  ],
];

const otherConceptsImageSources = [
  "/assets/images/concepts/IMG_2824.png",
  "/assets/images/concepts/IMG_2960.png",
];

export default function Concepts() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-4 mb-4">Collections</h1>
      <Masonry columns={3} spacing={1} sx={{ maxWidth: 1200, margin: "auto" }}>
        {collectionImageSources.map((src, index) => (
          <Image
            key={index}
            src={src[0]}
            alt="Collection Concepts"
            width={400}
            height={400}
          />
        ))}
      </Masonry>
      <h1 className="text-center text-2xl font-bold mt-4 mb-4">
        Other Concepts
      </h1>
      <Masonry columns={3} spacing={1} sx={{ maxWidth: 1200, margin: "auto" }}>
        {otherConceptsImageSources.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Other Concepts"
            width={400}
            height={400}
          />
        ))}
      </Masonry>
    </div>
  );
}

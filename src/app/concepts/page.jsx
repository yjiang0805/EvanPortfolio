import "@/app/globals.css";

import Image from "next/image";
import Link from "next/link";
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
  [
    "/assets/images/concepts/journey_reimagine/IMG_3327.PNG",
    "/journeytooz",
    "Journey to Oz Reimagine",
  ],
  [
    "/assets/images/concepts/monster_hero/IMG_3527.PNG",
    "/monsterhero",
    "Monster V Hero",
  ],
];

const otherConceptsImageSources = [
  "/assets/images/concepts/IMG_2824.png",
  "/assets/images/concepts/IMG_2960.png",
  "/assets/images/concepts/IMG_3093.PNG",
];

export default function Concepts() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold font-beaufort mt-4 mb-4">
        Collections
      </h1>
      <Masonry columns={3} spacing={2} sx={{ maxWidth: 1200, margin: "auto" }}>
        {collectionImageSources.map((src, index) => (
          <Link href={"/concepts" + src[1]} key={index}>
            <button className="relative rounded hover:scale-105 transition duration-500 ease-in-out w-96 h-64">
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out z-10"></div>
              <h1 className="text-4xl font-beaufort font-extrabold absolute inset-0 flex items-end p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out z-20">
                {src[2]}
              </h1>
              <div className="relative w-full h-full">
                <Image
                  src={src[0]}
                  alt="Collection Concepts"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </button>
          </Link>
        ))}
      </Masonry>
      <h1 className="text-center text-5xl font-beaufort font-bold mt-4 mb-4">
        Other Concepts
      </h1>
      <Masonry columns={3} spacing={1} sx={{ maxWidth: 1200, margin: "auto" }}>
        {otherConceptsImageSources.map((src, index) => (
          <div key={index} className="relative">
            <Image
              src={src}
              alt={`Other Concept ${index + 1}`}
              width={400}
              height={400}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

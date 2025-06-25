import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-bold mb-8 text-center font-beaufort">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-8">
          <Image
            src="/assets/images/IMG_3141.png"
            alt="Evan Lee"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-auto md:pl-4">
          <p className="text-lg mb-4 font-beaufort">
            Hello! I'm Evan Lee, a painter and concept artist from New Jersey. I
            graduated from Ringling College of Art and Design and strive to work
            in the gaming industry someday. When I'm away from the canvas you
            can find me cooking or playing online games with friends.
          </p>
          <p className="text-lg font-beaufort">
            Feel free to reach out to me through my email at{" "}
            <a
              href="mailto:evanplee@icloud.com"
              className="text-blue-500 underline"
            >
              evanplee@icloud.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

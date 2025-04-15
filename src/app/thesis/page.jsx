export default function Thesis() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        Thesis
      </h1>
      <div className="w-full max-w-4xl aspect-w-16 aspect-h-9">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQJmQtgAxo0Tq90iVkBtaivYyI8wzkn4CLFrlWHh1mj1VHtrmLEqM2LdD9LhAcjWwL0kxp6KzxKYVmo/pubembed?start=true&loop=true&delayms=3000"
          className="w-full h-[300px] md:h-[500px]"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
}

import imgSrc from "../public/images/portrait.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sm text-white">
      <section className="bg-main px-52 flex row pt-20 align-bottom justify-between">
        <div className="w-2/5 flex flex-col justify-end">
          <h2 className="text-5xl font-semibold mb-4">
            Hello 👋I&apos;m Oleksandr
          </h2>
          <p className="font-light text-4xl mb-32">
            I&apos;m a Full Stack Web Developer. I focus on project consistency
            from all perspectives.
          </p>
        </div>
        <Image
          src={imgSrc}
          alt="oleksandr photo"
          width={500}
          height={500}
          priority
          className="w-2/5"
        />
      </section>
      <section className="bg-orange-100 px-52"></section>
    </main>
  );
}

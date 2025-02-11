import Partners_Images from "@/Components/Partners_Images";

export default function Partners() {
  return (
    <section className="px-10 max-lg:pt-8">
      <div className="space-y-8">
        <h1 className="text-xl md:text-4xl capitalize font-semibold max-lg:text-center">
          Partnered with like-minded companies
        </h1>
        <Partners_Images />
      </div>
    </section>
  );
}

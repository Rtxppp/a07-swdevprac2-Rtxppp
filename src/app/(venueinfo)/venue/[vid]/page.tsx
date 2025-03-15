import Image from "next/image";

export default function CardDetailPage({
  params,
}: {
  params: { vid: string };
}) {
  const mockCardRepo = new Map();
  mockCardRepo.set("001", {
    name: "The Bloom Pavilion",
    image: "/image/bloom.jpg",
  });
  mockCardRepo.set("002", {
    name: "Spark Space",
    image: "/image/sparkspace.jpg",
  });
  mockCardRepo.set("003", {
    name: "The Grand Table",
    image: "/image/grandtable.jpg",
  });
  return (
    <main>
      <h1 className="text-large font-medium text-black content-center ">
        <div className="flex flex-row my-5">
          <Image
            src={mockCardRepo.get(params.vid).image}
            alt="Car Image"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg w-[30%]"
          ></Image>
          <div className="text-md mx-5">
            {mockCardRepo.get(params.vid).name}
          </div>
        </div>
      </h1>
    </main>
  );
}
export async function generateStaticParams() {
  return [{ vid: "001" }, { vid: "002" }, { vid: "003" }];
}

import Image from "next/image";
import Link from "next/link";

export default function ClubCard({
  title,
  image,
  members,
  description,
}) {
  return (
    <Link
      href={`/clubs/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="group relative overflow-hidden rounded-[30px] bg-white shadow-xl hover:-translate-y-3 transition-all duration-500 hover:shadow-purple-300 block"
    >

      {/* IMAGE */}
      <div className="relative h-[320px] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">

        <h2 className="text-2xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">

          <span className="text-sm text-purple-200">
            {members} Members
          </span>

          <div className="w-11 h-11 rounded-full bg-white text-[#6C63FF] flex items-center justify-center font-bold text-xl">
            →
          </div>

        </div>

      </div>

    </Link>
  );
}
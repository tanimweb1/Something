import Image from "next/image";

const clubsData = {
  "science-club": {
    title: "Science Club",
    image: "/images/science.jpg",
    description:
      "The Science Club inspires students through innovation, research, scientific exploration and exciting projects.",

    president: "John Smith",
    secretary: "Sarah Ahmed",

    achievements: [
      "National Science Fair Champion",
      "Organized 20+ Workshops",
      "Innovation Research Program",
    ],
  },

  "robotics-club": {
    title: "Robotics Club",
    image: "/images/robotics.jpg",
    description:
      "The Robotics Club develops automation systems, intelligent robotics and modern technology projects.",

    president: "Alex Johnson",
    secretary: "Nusrat Jahan",

    achievements: [
      "National Robotics Contest",
      "Built Smart Automation System",
      "AI Robotics Workshop",
    ],
  },

  "programming-club": {
    title: "Programming Club",
    image: "/images/programming.jpg",
    description:
      "Programming Club helps students master coding, software development and competitive programming.",

    president: "David Miller",
    secretary: "Tanvir Hasan",

    achievements: [
      "ICPC Training Camp",
      "500+ Active Members",
      "Programming Bootcamp",
    ],
  },
};

export default async function ClubDetailsPage({ params })  {

  const resolvedParams = await params;

const club = clubsData[resolvedParams.slug];

  if (!club) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl font-bold">
        Club Not Found
      </div>
    );
  }

  return (
    <main className="bg-[#f7f7ff] min-h-screen">

      {/* HERO */}
      <section className="relative h-[500px]">

        <Image
          src={club.image}
          alt={club.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            {club.title}
          </h1>

          <p className="max-w-3xl text-lg text-gray-200 leading-relaxed">
            {club.description}
          </p>

        </div>

      </section>

      {/* LEADERS */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-16">
            Club Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="bg-white rounded-[30px] p-10 shadow-xl text-center">
              <div className="w-32 h-32 rounded-full bg-[#6C63FF] mx-auto mb-6"></div>

              <h3 className="text-3xl font-bold mb-3">
                {club.president}
              </h3>

              <p className="text-gray-600 text-lg">
                President
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-10 shadow-xl text-center">
              <div className="w-32 h-32 rounded-full bg-[#6C63FF] mx-auto mb-6"></div>

              <h3 className="text-3xl font-bold mb-3">
                {club.secretary}
              </h3>

              <p className="text-gray-600 text-lg">
                Secretary
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-16">
            Achievements
          </h2>

          <div className="space-y-6">

            {club.achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[25px] shadow-lg text-xl font-medium hover:-translate-y-2 transition-all duration-300"
              >
                🏆 {item}
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
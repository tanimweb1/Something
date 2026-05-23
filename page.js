import Navbar from "@/components/Navbar/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero-section">
        <div className="container-custom">
          <div className="hero-content">
            <span className="hero-badge">
              Varendra University Clubs Platform
            </span>

            <h1 className="hero-title">
              Discover <span>Clubs</span>,
              <br />
              Events & Student
              <br />
              Communities
            </h1>

            <p className="hero-description">
              Join your favorite university clubs, participate in exciting
              events, showcase your achievements and become part of an amazing
              student community.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Clubs
              </button>

              <button className="secondary-btn">
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
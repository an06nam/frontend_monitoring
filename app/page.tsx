import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* Hero 1 */}
      <div className="hero bg-white min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-screen-xl">
            <h1 className="text-5xl font-bold">
              OpenMarineTech [OMT]
            </h1>
            <p className="py-8">
              Website OpenSource yang berfokus pada digitalisasi penelitian yang berfokus pada bidang keteknikan terutama Marine Engineering.
            </p>

            <button className="btn btn-outline">
              <a href="/docs">Pelajari Selengkapnya</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

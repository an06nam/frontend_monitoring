

const Diesel = () => {
  return (
    <div>

      {/* Control & Monitoring */}
      <div className="hero h-80 bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-screen-xl">

            <h1 className="text-5xl font-bold">
              Diesel Engine Monitoring
            </h1>
            <p className="py-6 text-lg">
              Control & Monitor Dual Fuel Diesel Engine
            </p>
            
            <div dir="ltr" className="flex-col">
              <a href="/diesel/Monitoring" className="mr-2 btn hover:bg-red-900 btn-outline px-8">
                Start
              </a>
              <a href="/docs/duelFuel" className="ms-2 btn btn-neutral btn-outline px-8">
                Learn More
              </a>  
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Data Processing */}
      <div className="hero h-80 bg-gradient-to-b from-base-100 bg-red-100">
        <div className="hero-content text-center">
          <div className="max-w-screen-xl">

            <h1 className="text-5xl font-bold">
              Data Processing
            </h1>
            <p className="py-6 text-lg">
              Process the Captured Data to Revealed the Truth!
            </p>
            <div dir="ltr" className="flex-col">
              <a href="/diesel/dualFuel" className="mr-2 btn hover:bg-red-900 btn-outline px-8">
                Start
              </a>
              <a href="/docs/duelFuel" className="ms-2 btn btn-neutral btn-outline px-8">
                Learn More
              </a> 
            </div> 
          </div>
        </div>
      </div>

            {/* train the model */}
      <div className="hero h-80 bg-red-100">
        <div className="hero-content text-center">
          <div className="max-w-screen-xl">

            <h1 className="text-5xl font-bold">
              Create Machine Learning Models
            </h1>
            <p className="py-6 text-lg">
              Train, Test, and Deploy your Models
            </p>
            <div dir="ltr" className="flex-col">
              <a href="/diesel/dualFuel" className="mr-2 btn hover:bg-red-900 btn-outline px-8">
                Start
              </a>
              <a href="/docs/duelFuel" className="ms-2 btn btn-neutral btn-outline px-8">
                Learn More
              </a> 
            </div> 
          </div>
        </div>
      </div>

    </div>
  
  )
}

export default Diesel
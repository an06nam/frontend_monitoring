'use client';
import dynamic from "next/dynamic";
import React, { useState } from "react";





export default function gauge ( ) {
  
  const GaugeComponent = dynamic(() => import('react-gauge-component'), {ssr: false});
  
  // connection status to the mqtt
  const [isConnected, setIsConnected] = useState(false);

  // Control condition
  // Turn on and off the dual fuel injection
  // default is false which is off 
  const [toggleState, setToggleState] = useState(false);

  return (
    <div>
      <div className="text-center flex-row py-5 max-w-screen-xl">
        <ul
          onClick={(toggleState) => setToggleState((prev) => !prev)}
          className="btn btn-outline hover:bg-red-950 text-lg font-bold px-20">
            Start
          </ul>
      </div>
    </div>
  )
}

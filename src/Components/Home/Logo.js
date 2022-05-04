import React from 'react'
import Typewriter from "typewriter-effect";
function Logo() {
    return (
        <Typewriter
          options={{
            strings: [
              "Khadija",
              "Khadija Barhoumi",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      );
    }

export default Logo

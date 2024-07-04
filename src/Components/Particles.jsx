import React, { useContext, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { AuthContext } from './AuthContext/AuthContex';

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const { theme } = useContext(AuthContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'none', // Keep background color to none
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse',
          },
          onHover: {
            enable: true,
            mode: 'repulse', // Set particles to repulse on hover
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
          repulse: { // Repulse mode settings
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'light' ? '#00FF00' : '#FFFFFF', // Adjust particle color based on theme
        },
        links: {
          color: theme === 'light' ? '#000000' : '#FFFFFF', // Adjust link color based on theme
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 3, // Increase speed for faster particles
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.8, // Increase opacity of particles
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      zIndex: {
        value: -1, // Set z-index to -1
      },
    }),
    [theme], // Depend on theme state
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;

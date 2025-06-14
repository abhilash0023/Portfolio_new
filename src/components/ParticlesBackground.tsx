
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface ParticlesBackgroundProps {
  isDark: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ isDark }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: ['repulse', 'connect'],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 8,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            connect: {
              distance: 150,
              links: {
                opacity: 0.3,
              },
            },
          },
        },
        particles: {
          color: {
            value: isDark 
              ? ['#ffffff', '#93c5fd', '#60a5fa'] 
              : ['#000000', '#1e40af', '#3b82f6'],
          },
          links: {
            color: isDark ? '#3b82f6' : '#1e40af',
            distance: 180,
            enable: true,
            opacity: isDark ? 0.4 : 0.3,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.1,
            },
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 2,
            straight: false,
            path: {
              enable: true,
              delay: {
                value: 0,
              },
              generator: 'perlinNoise',
              options: {
                columns: 6,
                rows: 6,
              },
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: isDark ? 0.5 : 0.4,
            random: true,
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: ['circle', 'triangle', 'polygon', 'star'],
            options: {
              polygon: {
                sides: 6,
              },
              star: {
                sides: 5,
              },
            },
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.5,
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: 'random',
            animation: {
              enable: true,
              speed: 5,
            },
          },
          zIndex: {
            value: { min: 0, max: 100 },
            opacityRate: 0.5,
            sizeRate: 1,
            velocityRate: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

// import type { AstroIntegration } from 'astro';
import { readFileSync } from 'node:fs';

function getViteConfiguration() {
  return {
    optimizeDeps: {
      include: [],
      exclude: [],
    },
    ssr: {
      external: [],
    },
  };
}

export default function () {
  return {
    name: '@astrojs/can',
    hooks: {
      'astro:config:setup': ({ updateConfig, addRenderer, injectScript }) => {
        addRenderer({
          name: '@astrojs/can',
          serverEntrypoint: '@astrojs/lit/server.js',
        });
        // Update the vite configuration.
        updateConfig({
          vite: getViteConfiguration(),
        });
      },
      'astro:build:setup': ({ vite, target }) => {
        // if (target === 'server') {
        //   if (!vite.ssr) {
        //     vite.ssr = {};
        //   }
        //   if (!vite.ssr.noExternal) {
        //     vite.ssr.noExternal = [];
        //   }
        //   if (Array.isArray(vite.ssr.noExternal)) {
        //     vite.ssr.noExternal.push('lit');
        //   }
        // }
      },
    },
  };
}

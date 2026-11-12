'use client';

import { useEffect } from 'react';

type Instance = { destroy?: () => void };
type Win = Window & {
  ScrollCraft?: { mount: (root: Element) => Instance };
  PSpaceLock?: { init: () => () => void };
};

function load(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(src));
    document.body.appendChild(s);
  });
}

/**
 * Starts the scroll engine and the page's own script once the static HTML is
 * on screen. The page is complete without it: this only adds the motion.
 */
export default function Mount() {
  useEffect(() => {
    let sc: Instance | undefined;
    let stop: (() => void) | undefined;
    let dead = false;
    const w = window as Win;
    (async () => {
      try {
        if (!w.ScrollCraft) await load('/sc/scrollcraft.js?v=1');
        if (!w.PSpaceLock) await load('/sc/pspace-page.js?v=1');
        if (dead) return;
        sc = w.ScrollCraft!.mount(document.body);
        stop = w.PSpaceLock!.init();
      } catch {
        /* scripts failed: the page still reads in full */
      }
    })();
    return () => {
      dead = true;
      stop?.();
      sc?.destroy?.();
    };
  }, []);
  return null;
}

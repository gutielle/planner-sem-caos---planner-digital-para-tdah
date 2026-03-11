import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function getPixelId(pathname: string): string {
  if (pathname === '/es') return '1307090751482021';
  return '619201927930702';
}

export default function PixelManager() {
  const location = useLocation();

  useEffect(() => {
    const pixelId = getPixelId(location.pathname);
    const storageKey = '__planner_meta_pixel_id';

    const current = window.sessionStorage.getItem(storageKey);
    if (current && current !== pixelId) {
      window.sessionStorage.setItem(storageKey, pixelId);
      window.location.reload();
      return;
    }
    if (!current) {
      window.sessionStorage.setItem(storageKey, pixelId);
    }

    const w = window as any;
    w.__metaPixel = w.__metaPixel || { inited: {}, pageView: {} };

    if (typeof w.fbq !== 'function') {
      (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(w, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }

    if (!w.__metaPixel.inited[pixelId]) {
      w.fbq('init', pixelId);
      w.__metaPixel.inited[pixelId] = true;
    }

    const pageKey = `${pixelId}|${location.pathname}${location.search}${location.hash}`;
    if (!w.__metaPixel.pageView[pageKey]) {
      w.fbq('trackSingle', pixelId, 'PageView');
      w.__metaPixel.pageView[pageKey] = true;
    }
  }, [location.pathname, location.search, location.hash]);

  return null;
}


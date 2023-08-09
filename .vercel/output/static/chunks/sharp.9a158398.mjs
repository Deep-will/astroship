import sharp from 'sharp';
import { B as BaseSSRService, i as isOutputFormatSupportsAlpha } from './pages/blog.astro.bfb028de.mjs';
import 'fs';
import 'path';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import '@jridgewell/sourcemap-codec';
import 'inherits';
import 'events';
import 'node:stream';
/* empty css                        */import './astro.1a1465e7.mjs';
import './pages/_slug_.astro.8bf05cd9.mjs';
import './pages/404.astro.eac5842b.mjs';
/* empty css                        */import './pages/about.astro.2c66b790.mjs';

class SharpService extends BaseSSRService {
  async transform(inputBuffer, transform) {
    const sharpImage = sharp(inputBuffer, { failOnError: false, pages: -1 });
    sharpImage.rotate();
    if (transform.width || transform.height) {
      const width = transform.width && Math.round(transform.width);
      const height = transform.height && Math.round(transform.height);
      sharpImage.resize({
        width,
        height,
        fit: transform.fit,
        position: transform.position,
        background: transform.background
      });
    }
    if (transform.format) {
      sharpImage.toFormat(transform.format, { quality: transform.quality });
      if (transform.background && !isOutputFormatSupportsAlpha(transform.format)) {
        sharpImage.flatten({ background: transform.background });
      }
    }
    const { data, info } = await sharpImage.toBuffer({ resolveWithObject: true });
    return {
      data,
      format: info.format
    };
  }
}
const service = new SharpService();
var sharp_default = service;

export { sharp_default as default };

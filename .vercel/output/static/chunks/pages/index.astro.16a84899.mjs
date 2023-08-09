/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, b as addAttribute, s as spreadAttributes, d as renderSlot } from '../astro.1a1465e7.mjs';
import { a as $$Container, $ as $$Layout } from './404.astro.eac5842b.mjs';
import { $ as $$Icon } from './contact.astro.dd0e6794.mjs';
import { $ as $$Picture } from './blog.astro.bfb028de.mjs';
/* empty css                         */import 'os';
import 'url';
import 'entities';
import 'source-map/lib/source-map-generator.js';
import 'fs';
import 'path';
import './about.astro.2c66b790.mjs';
/* empty css                             */import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'node:os';
import '@jridgewell/sourcemap-codec';
import 'inherits';
import 'events';
import 'node:stream';
import './_slug_.astro.8bf05cd9.mjs';

const $$Astro$4 = createAstro("https://www.organicbabyclothes.cc/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Organic",
      description: "Nature materials",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Healty",
      description: "No Chemical residues",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "Comfortable",
      description: "Natural feeling",
      icon: "bx:bxs-data"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0">
  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    Why Organic
  </h2>
  <p class="text-lg mt-4 text-slate-600">
    Secret originate from nature
  </p>
</div>

<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
  ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
          ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })}
        </div>
        <div>
          <h3 class="font-semibold text-lg">${item.title}</h3>${" "}
          <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p>
        </div>
      </div>`)}
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/features.astro", void 0);

const heroImage = {"src":"/_astro/class.eb740a18.png","width":1920,"height":1280,"format":"jpg"};

const $$Astro$3 = createAstro("https://www.organicbabyclothes.cc/");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])}
</a>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/ui/link.astro", void 0);

const $$Astro$2 = createAstro("https://www.organicbabyclothes.cc/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
  <div class="py-6 md:order-1 hidden md:block">
    ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "OBC", "widths": [200, 400, 600], "aspectRatio": "4:3", "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })}
  </div>
  <div>
    <h1 class="text-5xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter">
     Welcome!
    </h1>
    <p class="text-lg mt-4 text-slate-600 max-w-xl">
      A heartful site of carefully picked selections of organic baby clothes.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row gap-3">
      
      ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "/landing", "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate`
        Learn more about us
      ` })}
    </div>
  </div>
</main>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://www.organicbabyclothes.cc/");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24">
  <h2 class="text-center text-slate-500">Support technologies</h2>
  <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
    ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:react" })}
    ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:svelte" })}
    ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-14", "name": "simple-icons:tailwindcss" })}
    ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:vercel" })}
    ${renderComponent($$result, "Icon", $$Icon, { "class": "h-8 md:h-12", "name": "simple-icons:astro" })}
  </div>
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/logos.astro", void 0);

const $$Astro = createAstro("https://www.organicbabyclothes.cc/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Hero", $$Hero, {})}
    ${renderComponent($$result3, "Features", $$Features, {})}
    ${renderComponent($$result3, "Logos", $$Logos, {})}
    
  ` })}
` })}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/index.astro", void 0);

const $$file = "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

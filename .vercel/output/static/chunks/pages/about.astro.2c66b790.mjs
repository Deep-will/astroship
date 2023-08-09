/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent, F as Fragment } from '../astro.1a1465e7.mjs';
import { a as $$Container, $ as $$Layout } from './404.astro.eac5842b.mjs';

const $$Astro$1 = createAstro("https://www.organicbabyclothes.cc/");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-4 text-slate-600">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://www.organicbabyclothes.cc/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })}

    ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with Love.
      </h2>
      <p class="text-lg leading-relaxed">
        We are passinate about healthy, sustainable and comfort. We are determined to find best wearing clothies for babies.
      </p>
      <p class="text-lg leading-relaxed">
        So here we are, <text style="color: #00cc33;"> organic baby clothes</text> .
			</p>
    </div>
  ` })}
` })}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/about.astro", void 0);

const $$file = "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, about as a };

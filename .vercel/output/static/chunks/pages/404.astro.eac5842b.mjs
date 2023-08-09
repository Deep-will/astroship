/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, u as unescapeHTML, e as renderComponent, F as Fragment, f as renderHead } from '../astro.1a1465e7.mjs';
/* empty css                         */
const $$Astro$m = createAstro("https://www.organicbabyclothes.cc/");
const $$Container$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Container$1;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto px-5", className], "class:list")}>
  ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/container.astro", void 0);

const $$Astro$l = createAstro("https://www.organicbabyclothes.cc/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$k = createAstro("https://www.organicbabyclothes.cc/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$j = createAstro("https://www.organicbabyclothes.cc/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { url, secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$i = createAstro("https://www.organicbabyclothes.cc/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$h = createAstro("https://www.organicbabyclothes.cc/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-eqiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$g = createAstro("https://www.organicbabyclothes.cc/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$f = createAstro("https://www.organicbabyclothes.cc/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SEO;
  const { props } = Astro2;
  const { title, description, canonical, noindex, nofollow, charset } = props;
  function validateProps(props2) {
    const { openGraph, description: description2 } = props2;
    if (openGraph) {
      if (!openGraph.basic || openGraph.basic.title == null || openGraph.basic.type == null || openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (title && openGraph?.basic.title) {
      if (title == openGraph.basic.title) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (openGraph?.basic?.image && !openGraph?.image?.alt) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(props);
  return renderTemplate`${title ? renderTemplate`<title>${unescapeHTML(title)}</title>` : null}

${charset ? renderTemplate`<meta${addAttribute(charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(canonical || Astro2.url.href, "href")}>

${description ? renderTemplate`<meta name="description"${addAttribute(description, "content")}>` : null}

<meta name="robots"${addAttribute(`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`, "content")}>

${props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...props })}`}
${props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...props })}`}
${props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...props })}`}
${props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...props })}`}
${props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...props })}`}
${props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...props })}`}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-seo@0.7.0/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$e = createAstro("https://www.organicbabyclothes.cc/");
const $$GroupFooterNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$GroupFooterNav;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 h-max">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/blocks/GroupFooterNav.astro", void 0);

const $$Astro$d = createAstro("https://www.organicbabyclothes.cc/");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}>
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/shared/Container.astro", void 0);

const $$Astro$c = createAstro("https://www.organicbabyclothes.cc/");
const $$FooterNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FooterNav;
  const { title, navItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="space-y-6">
    <h2 class="capitalze font-semibold text-heading-1 text-xl">
        ${title}
    </h2>
    <ul class="space-y-3 font-medium md:text-lg text-heading-3">
        ${navItems.map((navItem) => renderTemplate`<li>
                <a${addAttribute(navItem.itemLink, "href")} class="transition hover:text-primary">
                    ${navItem.itemText}
                </a>
            </li>`)}
    </ul>
</nav>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/shared/FooterNav.astro", void 0);

const $$Astro$b = createAstro("https://www.organicbabyclothes.cc/");
const $$Paragraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}>
    ${renderSlot($$result, $$slots["default"])}
</p>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/shared/Paragraph.astro", void 0);

const $$Astro$a = createAstro("https://www.organicbabyclothes.cc/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerSubs = [
    {
      itemText: "Subscribe",
      itemLink: "/landing"
    }
  ];
  const footerStory = [
    {
      itemText: "Blog",
      itemLink: "/blog"
    }
  ];
  const footerContact = [
    {
      itemText: "Contact Us",
      itemLink: "/contact"
    }
  ];
  const footerAbout = [
    {
      itemText: "About Us",
      itemLink: "/about"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"></div>
<footer class="my-20">

${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-hidden" }, { "default": ($$result2) => renderTemplate`
    <div class="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative">
        <div class="col-span-2 lg:col-span-1 h-auto flex flex-col">
            <div class="h-full">
                <div class="inline-flex text-lg font-semibold text-heading-1" style="color: #00cc33;">
                  Organic Baby Clothes
                </div>
                ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
                  A heartful site of carefully picked selections of organic baby clothes.
                ` })}
            </div>

            <!-- social links -->
            <div class="min-h-max flex items-center gap-4 text-heading-3 mt-8">
                <a href="#" class="transition hover:text-heading-1 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                    <span class="sr-only">social link</span>
                </a>

                <a href="#" class="transition hover:text-heading-1 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                    <span class="sr-only">social link</span>
                </a>

                <a href="#" class="transition hover:text-heading-1 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                    <span class="sr-only">social link</span>
                </a>

                <a href="#" class="transition hover:text-heading-1 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <span class="sr-only">social link</span>
                </a>
            </div>
        </div>

        ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate`
          ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "More Stories", "navItems": footerStory })}
          ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "More Info", "navItems": footerSubs })}
        ` })}

        ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate`
          ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Contact Us", "navItems": footerContact })}
          ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "About Us", "navItems": footerAbout })}
        ` })}
    </div>
    <p class="text-center text-sm text-slate-500">
      Copyright © ${( new Date()).getFullYear()} Organic Baby Clothes. All rights reserved.
    </p>
` })}

</footer>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/footer.astro", void 0);

const $$Astro$9 = createAstro("https://www.organicbabyclothes.cc/");
const $$Astronav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Astronav;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}

`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$8 = createAstro("https://www.organicbabyclothes.cc/");
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu">
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path class="astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path>
      <path class="astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path>
    </svg>
  `)}
</button>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$7 = createAstro("https://www.organicbabyclothes.cc/");
const $$OpenIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-toggle", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$6 = createAstro("https://www.organicbabyclothes.cc/");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$5 = createAstro("https://www.organicbabyclothes.cc/");
const $$MenuItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-toggle", className], "class:list")}>
    ${renderSlot($$result, $$slots["default"])}
</nav>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$4 = createAstro("https://www.organicbabyclothes.cc/");
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown", className], "class:list")} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$3 = createAstro("https://www.organicbabyclothes.cc/");
const $$DropdownItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["dropdown-toggle hidden", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/node_modules/.pnpm/astro-navbar@1.1.5/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

const $$Astro$2 = createAstro("https://www.organicbabyclothes.cc/");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Join Us",
      path: "/landing"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Container", $$Container$1, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<header class="flex flex-col lg:flex-row justify-between items-center my-5">
    ${renderComponent($$result2, "Astronav", $$Astronav, {}, { "default": ($$result3) => renderTemplate`
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg"><span class="font-bold text-slate-800 xl:text-5xl" style="color: #00cc33;">Organic Baby Clothes</span>
        </a>
        <div class="block lg:hidden">
          ${renderComponent($$result3, "MenuIcon", $$MenuIcon, { "class": "w-4 h-4 text-gray-800" })}
        </div>
      </div>
      ${renderComponent($$result3, "MenuItems", $$MenuItems, { "class": "hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0" }, { "default": ($$result4) => renderTemplate`
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          ${menuitems.map((item) => renderTemplate`<li>
                <a${addAttribute(item.path, "href")} class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                  ${item.title}
                </a>
              </li>`)}
        </ul>
      ` })}
    ` })}
  </header>
` })}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/navbar/navbar.astro", void 0);

const $$Astro$1 = createAstro("https://www.organicbabyclothes.cc/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/opengraph.jpg",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | Organic Baby Clothes" : "OBC - Best wearing clothies for babies";
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>💞</text></svg>">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    <!-- <link rel="preload" as="image" href={src} alt="Hero" /> -->
    ${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "A heartful site of carefully picked selections of organic baby clothes.", "canonical": canonicalURL, "twitter": {
    creator: "@surjithctly",
    site: "@web3templates",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Organic Baby Clothes - Best wearing clothies for babies`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Astroship Homepage Screenshot"
    }
  } })}
  ${renderHead()}</head>
  <body>
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
    ${renderComponent($$result, "Footer", $$Footer, {})}
    
  </body>
</html>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://www.organicbabyclothes.cc/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container$1, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="min-h-[calc(100vh-16rem)] flex items-center justify-center">
      <div class="mt-16 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">404</h1>
        <p class="text-lg mt-4 text-slate-600">Page not found.</p>
        <p class="text-lg mt-4 text-slate-600">Oops~ Something went wrong. Please try again.</p>
      </div>
    </div>
  ` })}
` })}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/404.astro", void 0);

const $$file = "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$Container$1 as a, $$Container as b, $$Paragraph as c };

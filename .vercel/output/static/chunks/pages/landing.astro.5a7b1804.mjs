/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent, f as renderHead, d as renderSlot } from '../astro.1a1465e7.mjs';
import { b as $$Container, c as $$Paragraph } from './404.astro.eac5842b.mjs';
/* empty css                             *//* empty css                         */
const $$Astro$d = createAstro("https://www.organicbabyclothes.cc/");
const $$Navitem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li>
    <a${addAttribute(href, "href")} class="duration-300 font-medium ease-linear hover:text-primary py-3">
    ${text}
    </a>
</li>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/shared/Navitem.astro", void 0);

const $$Astro$c = createAstro("https://www.organicbabyclothes.cc/");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navItems = [
    {
      href: "#brands",
      text: "Trusted Brands |"
    },
    {
      href: "#services",
      text: "Why Organic |"
    },
    {
      href: "#features",
      text: "How to choose |"
    },
    {
      href: "#about-us",
      text: "About us"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-0 z-50 py-6">
    ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
        <nav class="w-full flex justify-between gap-6 relative">
            <!-- logo -->
            <div class="min-w-max inline-flex relative">
                <div class="inline-flex text-xl font-semibold text-heading-1" style="color: #00cc33;">
                    Organic Baby Clothes
                </div>
            </div>

            <div data-navbar class="flex h-0 overflow-hidden lg:!h-auto lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0">
                <ul class="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                    ${navItems.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item })}`;
  })}
                </ul>

            <div class="min-w-max flex items-center gap-x-3">
                <button data-switch-theme class="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:flex hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                      </svg>
                                    
                    <span class="sr-only">switch theme</span>
                </button>
            </div>
        </div></nav>
    ` })}
</header>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/elements/Navbar.astro", void 0);

const $$Astro$b = createAstro("https://www.organicbabyclothes.cc/");
const $$LandingLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <meta name="description" content="AgenceX - SEO Agency website landing page made with ASTROJS and TAILWINDCSS">
    <title>Organic Baby Clothes - ${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ${renderHead()}</head>
  <body class="overflow-hidden overflow-y-auto bg-body">
    ${renderComponent($$result, "Navbar", $$Navbar, {})}
    ${renderSlot($$result, $$slots["default"])}
  
  
</body>
</html>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/layouts/Landing_Layout.astro", void 0);

const $$Astro$a = createAstro("https://www.organicbabyclothes.cc/");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Button;
  const { className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}>
    ${renderSlot($$result, $$slots["default"])}
</button>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/shared/Button.astro", void 0);

const $$Astro$9 = createAstro("https://www.organicbabyclothes.cc/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 lg:pt-36">
    ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col lg:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate`
        <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 ">
            <span class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>
        <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
        lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
            
            <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
             font-bold text-heading-1">
             Welcome to <span class="text-transparent text-xl bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">Organic Baby Clothes</span>
            </h1>
            ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
                A heartful site of carefully picked selections of organic baby clothes.
            ` })}
            <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div class="flex sm:flex-row flex-col gap-5 w-full">
                    <form action="#" class="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body  focus-within:border-primary">
                        <span class="min-w-max pr-2 border-r border-box-border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"></path>
                            </svg>                                                                  
                        </span>
                        <input type="email" name="" id="" placeholder="johndoe@gmail.com" class="w-full py-3 outline-none bg-transparent">
                        ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-white" }, { "default": ($$result3) => renderTemplate`
                            <span class="hidden sm:flex relative z-[5]">
                                Join Us
                            </span>
                            <span class="flex sm:hidden relative z-[5]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                                </svg>                                      
                            </span>
                        ` })}
                    </form>
                </div>
            </div>
        </div>

        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img src="/images/image1.webp" alt="Hero image" width="2350" height="2359" class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96">
        </div>
    ` })}

    <!-- <ByNumber/> -->
</section>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sections/Hero.astro", void 0);

const $$Astro$8 = createAstro("https://www.organicbabyclothes.cc/");
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
    <div class="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        ${renderSlot($$result, $$slots["icon"])}
    </div>
    <div class="mt-6 space-y-4 relative">
        <h2 class="text-lg md:text-xl font-semibold text-heading-2">
            ${title}
        </h2>
        ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })}
    </div>
    <span class="absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full"></span>
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/cards/Service.astro", void 0);

const $$Astro$7 = createAstro("https://www.organicbabyclothes.cc/");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
    ${renderSlot($$result, $$slots["default"])}
</h1>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/shared/Title.astro", void 0);

const $$Astro$6 = createAstro("https://www.organicbabyclothes.cc/");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services">
    ${renderComponent($$result, "Container", $$Container, { "className": "space-y-10 md:sapce-y-12" }, { "default": ($$result2) => renderTemplate`
        <div class="text-center max-w-3xl mx-auto space-y-4">
            ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`
                Why Organic?
            ` })}
            ${renderComponent($$result2, "Paragraph", $$Paragraph, {}, { "default": ($$result3) => renderTemplate`
                Secrets originate from nature
            ` })}
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            ${renderComponent($$result2, "Service", $$Service, { "title": "Organic", "description": "Natural materials" }, { "icon": ($$result3) => renderTemplate`<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                    </svg> 
                </span>` })}
            ${renderComponent($$result2, "Service", $$Service, { "title": "Healthy", "description": "No chemicals" }, { "icon": ($$result3) => renderTemplate`<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                    </svg> 
                </span>` })}
            ${renderComponent($$result2, "Service", $$Service, { "title": "Comfortable", "description": "Natural feeling" }, { "icon": ($$result3) => renderTemplate`<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                    </svg> 
                </span>` })}
        </div>
    ` })}
</section>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sections/Services.astro", void 0);

const $$Astro$5 = createAstro("https://www.organicbabyclothes.cc/");
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Info;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
    <div class="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        ${renderSlot($$result, $$slots["icon"])}
    </div>
    <h2 class="md:text-xl font-semibold text-heading-2 mt-6 mb-4"> ${title} </h2>
    ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })}
</div>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/cards/Info.astro", void 0);

const $$Astro$4 = createAstro("https://www.organicbabyclothes.cc/");
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${maybeRenderHead()}<section id="about-us">
    ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate`
        <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto">
            <div class="w-full h-80 sm:h-96 midmd:h-full relative">
                <div class="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div>
                <div class="absolute  p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div>
                
                <span class="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0"></span>
                <img${addAttribute("/images/dev-with-c-1.webp", "src")} alt="banner image" width="1240" height="1385" class=" w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full">
            </div>
        </div>
        <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
            ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`
                We are a small passionate team.
            ` })}
            ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
                We are passinate about healthy, sustainable and comfort. We are determined to find best wearing clothies for babies.
            ` })}
            <div class="pt-8 grid grid-cols-2 items-center gap-4 max-w-3xl md:max-w-[none]">
                ${renderComponent($$result2, "Info", $$Info, { "description": "Best organic Baby Clothes for every baby", "title": "Mission" }, { "icon": ($$result3) => renderTemplate`<span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                        </svg>                              
                    </span>` })}
                ${renderComponent($$result2, "Info", $$Info, { "description": "Best selection of organic clothes for pick up", "title": "Service" }, { "icon": ($$result3) => renderTemplate`<span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-5 sm:h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </span>` })}
            </div>
        </div>
    ` })}
</section>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sections/AboutUs.astro", void 0);

const $$Astro$3 = createAstro("https://www.organicbabyclothes.cc/");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead()}<section id="features">
    ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col midmd:flex-row gap-10 lg:gap-12" }, { "default": ($$result2) => renderTemplate`
        
        <div class="flex-1 flex midmd:w-7/12 lg:w-1/2 flex-col">
            ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`
                How to choose wearing clothes for babies?
            ` })}
            ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
                We aim for best quality, most confortable, trending fashion.
                <br> 
                And most important, organic and healthy!
            ` })}
            <ul class="mt-8 space-y-4 text-heading-3 font-medium">
                <li>
                    <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Organic
                </li>
                <li>
                    <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Big brands
                </li>
                <li>
                    <span class="font-bold bg-box-bg rounded-full w-8 h-8 mr-3 text-primary inline-flex justify-center items-center">&checkmark;</span> Quality
                </li>
            </ul>
        </div>

        <div class="max-w-md mx-auto midmd:max-w-none lg:mx-0  lg:pr-10 xl:pr-2 flex-1 flex w-11/12 midmd:w-5/12 lg:w-1/2 midmd:h-auto">
            <div class="w-full h-80 sm:h-96 midmd:h-full relative">
                <div class="absolute rotate-45 -left-5 md:-left-10 lg:-left-20 xl:-left-24 p-1 top-1/2 w-16 h-16 bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50"></div>
                <div class="absolute  p-1 -top-4 md:-top-10 right-0 w-20 h-20 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60"></div>
                
                <span class="absolute w-full aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-tr from-primary to-green-400 opacity-40 blur-2xl left-0 bottom-0"></span>
                <img${addAttribute("/images/dev-with-c.webp", "src")} alt="banner image" width="1240" height="1385" class=" w-auto left-1/2 -translate-x-1/2 absolute bottom-0 max-h-full">
            </div>
        </div>
    ` })}
</section>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sections/Features.astro", void 0);

const $$Astro$2 = createAstro("https://www.organicbabyclothes.cc/");
const $$CTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CTA;
  return renderTemplate`${maybeRenderHead()}<section id="cta" class="pb-20">
  ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`
    <div class="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
      <div class="absolute right-0 top-0 h-full w-full flex justify-end">
        <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
            <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
          </div>
      </div>

      <div class="absolute left-0 bottom-0 h-full w-full flex items-end">
        <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
            <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
            <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
          </div>
      </div>
      <div class="mx-auto text-center max-w-xl md:max-w-2xl relative">
        <h1 class="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight
          font-bold text-heading-1">
          Join our <span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600">Organic Baby Clothes</span> Community
        </h1>
        ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "pt-10" }, { "default": ($$result3) => renderTemplate`
          Stay tunned for our latest post
        ` })}
        <div class="mx-auto max-w-md sm:max-w-xl pt-10">
          <form action="#" class="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow
                      border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body  focus-within:border-primary">
                        <span class="min-w-max pr-2 border-r border-box-border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"></path>
                            </svg>                                                                  
                        </span>
                        <input type="email" name="" id="" placeholder="johndoe@gmail.com" class="w-full py-3 outline-none bg-transparent">
                        ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-white" }, { "default": ($$result3) => renderTemplate`
                            <span class="hidden sm:flex relative z-[5]">
                                Join Us
                            </span>
                            <span class="flex sm:hidden relative z-[5]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                                </svg>                                      
                            </span>
                        ` })}
                    </form>
        </div>
      </div>
    </div>
  ` })}
</section>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sections/CTA.astro", void 0);

const $$Astro$1 = createAstro("https://www.organicbabyclothes.cc/");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Brands;
  return renderTemplate`${maybeRenderHead()}<section id="brands">
    ${renderComponent($$result, "Container", $$Container, { "className": "space-y-8" }, { "default": ($$result2) => renderTemplate`
        <div class="text-center max-w-3xl mx-auto">
            ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate`
                Trusted by companies like
            ` })}
        </div>
        <div class="flex justify-center flex-wrap gap-4">
            <div class="p-4 sm:p-5 rounded-xl bg-body border border-box-border group">
                More to come..
            </div>
        </div>
    ` })}
</section>`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/components/sections/Brands.astro", void 0);

const $$Astro = createAstro("https://www.organicbabyclothes.cc/");
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing;
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "title": "Organc, healty, comfortable" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
		${renderComponent($$result2, "Hero", $$Hero, {})}
		${renderComponent($$result2, "Brands", $$Brands, {})}
		${renderComponent($$result2, "Services", $$Services, {})}
		${renderComponent($$result2, "Features", $$Features, {})}
		${renderComponent($$result2, "AboutUs", $$AboutUs, {})}
		${renderComponent($$result2, "CTA", $$CTA, {})}
	</main>
` })}`;
}, "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/landing.astro", void 0);

const $$file = "C:/Users/admin/Desktop/Main/0. Project/AP/astroship/astroship/src/pages/landing.astro";
const $$url = "/landing";

export { $$Landing as default, $$file as file, $$url as url };

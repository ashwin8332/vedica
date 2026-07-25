var M=Object.defineProperty;var $=(i,a,e)=>a in i?M(i,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[a]=e;var n=(i,a,e)=>$(i,typeof a!="symbol"?a+"":a,e);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();class B{constructor(){n(this,"routes",new Map);n(this,"currentPath","");window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",a=>this.handleLinkClick(a))}register(a,e,t){this.routes.set(a,{path:a,title:e,render:t})}navigate(a,e=!0){if(this.currentPath===a)return;const t=this.routes.get(a);if(!t){this.navigate("/404",e);return}this.currentPath=a,e&&window.history.pushState({path:a},t.title,a),document.title=t.title,this.showPageTransition(async()=>{await t.render(),window.scrollTo({top:0,behavior:"instant"})})}handleRoute(){const a=window.location.pathname;this.navigate(a,!1)}handleLinkClick(a){const e=a.target.closest("a");if(!e)return;const t=e.getAttribute("href");!t||t.startsWith("http")||t.startsWith("#")||this.routes.has(t)&&(a.preventDefault(),this.navigate(t))}showPageTransition(a){const e=document.getElementById("app");if(!e)return a();e.style.opacity="0",e.style.transition="opacity 0.3s ease-out",setTimeout(async()=>{await a(),e.style.opacity="1"},300)}init(){this.handleRoute()}}const c=new B;class F{constructor(){n(this,"navbar",null);n(this,"mobileMenu",null);n(this,"isMenuOpen",!1);this.render(),this.attachEventListeners()}render(){document.body.insertAdjacentHTML("afterbegin",`
            <nav id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500" aria-label="Main navigation">
                <div class="absolute inset-0 transition-all duration-500" id="nav-bg" style="background: transparent;"></div>
                <div class="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex justify-between items-center h-[72px]">

                    <!-- Logo -->
                    <a href="/" class="flex items-center group py-1" aria-label="Vedica Spring Home">
                        <img src="/vedica-logo.svg" alt="Vedica Logo" class="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </a>

                    <!-- Desktop Nav Links -->
                    <div class="hidden lg:flex items-center gap-8" id="nav-links">
                        <a href="/" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Home</a>
                        <a href="/our-water" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Our Water</a>
                        <a href="/wellness" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Wellness</a>
                        <a href="/sustainability" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Sustainability</a>
                        <a href="/about" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Our Story</a>
                        <a href="/gallery" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Gallery</a>
                        <a href="/contact" class="nav-link font-inter text-[11px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-vedica-yellow transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1px] after:bg-vedica-yellow after:transition-all hover:after:w-full">Contact</a>
                    </div>

                    <!-- CTA Button -->
                    <div class="hidden lg:flex items-center gap-4">
                        <a href="/contact" class="btn-primary text-[10px] py-2.5 px-6 rounded-sm">
                            <span>Order Now</span>
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden flex flex-col gap-[5px] p-2 group" aria-label="Toggle menu" aria-expanded="false">
                        <span class="menu-bar block w-6 h-[1.5px] bg-white transition-all duration-300 group-hover:bg-vedica-yellow"></span>
                        <span class="menu-bar block w-4 h-[1.5px] bg-white transition-all duration-300 group-hover:bg-vedica-yellow" style="margin-left: auto;"></span>
                        <span class="menu-bar block w-6 h-[1.5px] bg-white transition-all duration-300 group-hover:bg-vedica-yellow"></span>
                    </button>
                </div>

                <!-- Mobile Menu Overlay -->
                <div id="mobile-menu" class="lg:hidden fixed inset-0 z-40 transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" aria-hidden="true">
                    <div class="absolute inset-0" style="background: rgba(10, 26, 42, 0.97); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"></div>
                    <div class="relative h-full flex flex-col justify-center items-center gap-2 px-8 pt-20 pb-16">
                        <!-- Mobile Logo -->
                        <div class="absolute top-6 left-6 flex items-center gap-2">
                            <span class="text-white font-inter font-semibold text-base tracking-[0.18em] uppercase">Vedica <span class="text-vedica-yellow">Spring</span></span>
                        </div>
                        <!-- Close Button -->
                        <button id="mobile-close-btn" class="absolute top-5 right-6 w-10 h-10 flex items-center justify-center" aria-label="Close menu">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </button>

                        <div class="flex flex-col items-center gap-6 w-full max-w-sm">
                            <a href="/" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Home</a>
                            <a href="/our-water" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Our Water</a>
                            <a href="/wellness" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Wellness</a>
                            <a href="/sustainability" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Sustainability</a>
                            <a href="/about" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Our Story</a>
                            <a href="/gallery" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Gallery</a>
                            <a href="/contact" class="mobile-nav-link w-full text-center py-4 text-2xl font-cormorant font-light text-white hover:text-vedica-yellow transition-colors border-b border-white/8">Contact</a>
                            <a href="/contact" class="mobile-nav-link btn-primary w-full justify-center text-xs mt-4 rounded-sm">Order Vedica Spring</a>
                        </div>
                        <!-- Decorative -->
                        <div class="absolute bottom-8 flex flex-col items-center gap-2 opacity-40">
                            <div class="scroll-cue-line" style="height: 32px;"></div>
                            <span style="font-family: var(--sans); font-size:9px; letter-spacing:0.28em; text-transform:uppercase; color: rgba(255,255,255,0.5);">Born in the Himalayas</span>
                        </div>
                    </div>
                </div>
            </nav>
        `),this.navbar=document.getElementById("navbar"),this.mobileMenu=document.getElementById("mobile-menu")}attachEventListeners(){var a,e;(a=document.getElementById("mobile-menu-btn"))==null||a.addEventListener("click",()=>this.openMobileMenu()),(e=document.getElementById("mobile-close-btn"))==null||e.addEventListener("click",()=>this.closeMobileMenu()),document.querySelectorAll(".mobile-nav-link").forEach(t=>{t.addEventListener("click",()=>this.closeMobileMenu())}),window.addEventListener("scroll",()=>this.handleScroll(),{passive:!0}),this.handleScroll(),this.updateActiveLink(),window.addEventListener("popstate",()=>this.updateActiveLink())}openMobileMenu(){var a,e,t;this.isMenuOpen=!0,(a=this.mobileMenu)==null||a.classList.remove("translate-x-full"),(e=this.mobileMenu)==null||e.setAttribute("aria-hidden","false"),(t=document.getElementById("mobile-menu-btn"))==null||t.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"}closeMobileMenu(){var a,e,t;this.isMenuOpen=!1,(a=this.mobileMenu)==null||a.classList.add("translate-x-full"),(e=this.mobileMenu)==null||e.setAttribute("aria-hidden","true"),(t=document.getElementById("mobile-menu-btn"))==null||t.setAttribute("aria-expanded","false"),document.body.style.overflow=""}handleScroll(){const a=window.scrollY,e=document.getElementById("nav-bg");e&&(a>60?(e.style.background="rgba(10, 26, 42, 0.88)",e.style.backdropFilter="blur(16px)",e.style.webkitBackdropFilter="blur(16px)",e.style.borderBottom="1px solid rgba(255,255,255,0.07)"):(e.style.background="transparent",e.style.backdropFilter="none",e.style.webkitBackdropFilter="none",e.style.borderBottom="none"))}updateActiveLink(){const a=window.location.pathname;document.querySelectorAll(".nav-link").forEach(e=>{const t=e.getAttribute("href");t===a||t!=="/"&&a.startsWith(t||"")?(e.classList.add("text-vedica-yellow","!text-vedica-yellow"),e.classList.remove("text-white/80")):(e.classList.remove("text-vedica-yellow","!text-vedica-yellow"),e.classList.add("text-white/80"))})}destroy(){var a;(a=this.navbar)==null||a.remove(),this.isMenuOpen&&(document.body.style.overflow="")}}class I{constructor(){this.render(),this.attachEventListeners()}render(){const a=`
            <footer class="relative z-20 overflow-hidden" style="background: #050E1A;">
                <!-- Top decorative wave -->
                <div class="w-full overflow-hidden" style="margin-bottom: -2px; line-height: 0;">
                    <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="display:block; width:100%; height:48px;">
                        <path d="M0 48 Q360 0 720 24 Q1080 48 1440 8 L1440 48 Z" fill="#050E1A"/>
                        <path d="M0 48 Q360 16 720 32 Q1080 48 1440 20 L1440 48 Z" fill="#050E1A" opacity="0.5"/>
                    </svg>
                </div>

                <div class="max-w-7xl mx-auto px-8 md:px-12 pt-12 pb-8">
                    <!-- Top Section -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                        <!-- Brand Column -->
                        <div class="lg:col-span-2">
                            <!-- Logo -->
                            <a href="/" class="inline-flex items-center mb-6 group">
                                <img src="/vedica-logo.svg" alt="Vedica Logo" class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                            </a>

                            <p class="text-white/40 text-sm leading-relaxed mb-8 max-w-xs font-inter">
                                Pure Himalayan spring water, naturally filtered through five geological layers over two centuries. Water as nature intended — perfect in every sense.
                            </p>

                            <!-- Social Links -->
                            <div class="flex gap-3">
                                ${[{label:"Instagram",icon:'<path d="M16 3.5C9.1 3.5 3.5 9.1 3.5 16S9.1 28.5 16 28.5 28.5 22.9 28.5 16 22.9 3.5 16 3.5zM16 20.5C13.5 20.5 11.5 18.5 11.5 16S13.5 11.5 16 11.5 20.5 13.5 20.5 16 18.5 20.5 16 20.5z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="22" cy="10" r="1.5" fill="currentColor"/>'},{label:"X / Twitter",icon:'<path d="M4 4l7.5 10L4 22h3l5.5-6.5L18 22h5l-8-10.5L22 4h-3l-5 5.5L8 4H4z" fill="currentColor"/>'},{label:"LinkedIn",icon:'<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 10v8M8 7v.5M12 18v-5a2 2 0 014 0v5M12 13h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'},{label:"YouTube",icon:'<rect x="2" y="6" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 9.5l5 2.5-5 2.5V9.5z" fill="currentColor"/>'}].map(e=>`
                                    <a href="#" aria-label="${e.label}" class="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-vedica-yellow transition-all duration-300" style="border: 1px solid rgba(255,255,255,0.1);" onmouseenter="this.style.borderColor='rgba(252,220,0,0.5)'; this.style.background='rgba(252,220,0,0.08)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='transparent'">
                                        <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${e.icon}</svg>
                                    </a>
                                `).join("")}
                            </div>
                        </div>

                        <!-- Our Water -->
                        <div>
                            <h4 class="eyebrow-gold mb-6">Our Water</h4>
                            <ul class="space-y-3">
                                ${[{href:"/our-water",label:"The Five Chapters"},{href:"/our-water",label:"Snow Collection"},{href:"/our-water",label:"Spring Expression"},{href:"/our-water",label:"Source Reserve"},{href:"/our-water",label:"Mineral Composition"}].map(e=>`
                                    <li><a href="${e.href}" class="text-white/40 hover:text-white text-sm font-inter transition-colors duration-300 hover:translate-x-1 inline-block transition-transform">${e.label}</a></li>
                                `).join("")}
                            </ul>
                        </div>

                        <!-- Company -->
                        <div>
                            <h4 class="eyebrow-gold mb-6">Company</h4>
                            <ul class="space-y-3">
                                ${[{href:"/about",label:"Our Story"},{href:"/wellness",label:"Wellness"},{href:"/sustainability",label:"Sustainability"},{href:"/gallery",label:"Gallery"},{href:"/contact",label:"Wholesale"},{href:"/contact",label:"Contact Us"}].map(e=>`
                                    <li><a href="${e.href}" class="text-white/40 hover:text-white text-sm font-inter transition-colors duration-300">${e.label}</a></li>
                                `).join("")}
                            </ul>
                        </div>

                        <!-- Newsletter -->
                        <div>
                            <h4 class="eyebrow-gold mb-6">Stay Connected</h4>
                            <p class="text-white/40 text-sm font-inter mb-5 leading-relaxed">Join our wellness community. Stories from the source, seasonal updates, and exclusive offers.</p>
                            <form id="footer-newsletter" class="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    class="vedica-input text-sm"
                                    required
                                    id="footer-email"
                                />
                                <button type="submit" class="btn-primary justify-center text-[10px] py-3">
                                    Subscribe
                                </button>
                            </form>
                            <p class="text-white/25 text-[11px] font-inter mt-3 leading-relaxed">No spam, ever. Unsubscribe anytime.</p>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent); margin-bottom: 28px;"></div>

                    <!-- Bottom Bar -->
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-white/25 text-xs font-inter tracking-wide">© 2026 Vedica Spring Waters Pvt. Ltd. All rights reserved.</p>

                        <div class="flex items-center gap-2 text-white/20 text-[11px] font-inter">
                            <span class="dot-sep"></span>
                            <span class="tracking-widest uppercase">Born in the Himalayas</span>
                            <span class="dot-sep"></span>
                        </div>

                        <div class="flex gap-6">
                            ${["Privacy Policy","Terms of Use","Legal"].map(e=>`
                                <a href="#" class="text-white/25 hover:text-white/60 text-xs font-inter tracking-wide transition-colors duration-300">${e}</a>
                            `).join("")}
                        </div>
                    </div>
                </div>

                <!-- Back to Top -->
                <button
                    id="back-to-top"
                    aria-label="Back to top"
                    class="fixed bottom-8 right-8 w-11 h-11 flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500 z-50 rounded-full"
                    style="background: var(--vedica-yellow); color: var(--vedica-deep);"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </button>
            </footer>
        `;document.body.insertAdjacentHTML("beforeend",a)}attachEventListeners(){const a=document.getElementById("footer-newsletter");a==null||a.addEventListener("submit",t=>{t.preventDefault();const s=a.querySelector('button[type="submit"]'),l=s.textContent;s.textContent="✓ Subscribed!",s.style.background="#3A8AD1",setTimeout(()=>{s.textContent=l,s.style.background="",a.reset()},3e3)});const e=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?(e==null||e.classList.remove("opacity-0","pointer-events-none"),e==null||e.classList.add("opacity-100")):(e==null||e.classList.add("opacity-0","pointer-events-none"),e==null||e.classList.remove("opacity-100"))},{passive:!0}),e==null||e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}}class j{constructor(){n(this,"el",null);this.render()}render(){document.body.insertAdjacentHTML("afterbegin",`
            <div id="vedica-loader" class="vedica-loader" role="progressbar" aria-label="Loading Vedica Spring">
                <!-- Background gradient -->
                <div class="absolute inset-0" style="background: linear-gradient(180deg, #0A1A2A 0%, #0D2540 100%);"></div>

                <!-- Animated water drop -->
                <div class="relative z-10 flex flex-col items-center gap-8">
                    <div class="relative" style="width: 64px; height: 64px;">
                        <!-- Outer ring -->
                        <div class="absolute inset-0 rounded-full border border-vedica-blue/20 animate-ping" style="animation-duration: 2s;"></div>
                        <div class="absolute inset-0 rounded-full border border-vedica-blue/10 animate-ping" style="animation-duration: 2s; animation-delay: 0.5s;"></div>

                        <!-- SVG Drop Icon -->
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full animate-breathe">
                            <path d="M32 6C32 6 10 30 10 42C10 54.15 20.074 62 32 62C43.926 62 54 54.15 54 42C54 30 32 6 32 6Z"
                                fill="#005CAB" fill-opacity="0.7" stroke="#3A8AD1" stroke-width="1"/>
                            <path d="M32 18C32 18 18 34 18 43C18 50.18 24.268 56 32 56C39.732 56 46 50.18 46 43C46 34 32 18 32 18Z"
                                fill="#A8C8DE" fill-opacity="0.5"/>
                            <path d="M32 28C32 28 24 38 24 44C24 48.418 27.582 52 32 52C36.418 52 40 48.418 40 44C40 38 32 28 32 28Z"
                                fill="white" fill-opacity="0.85"/>
                            <circle cx="32" cy="14" r="6" fill="#FCDC00" fill-opacity="0.9"/>
                            <path d="M28 10 L32 4 L36 10" stroke="#FCDC00" stroke-width="1" stroke-opacity="0.5" fill="none"/>
                        </svg>
                    </div>

                    <!-- Brand Name -->
                    <div class="flex flex-col items-center gap-1">
                        <span class="text-white font-inter font-semibold text-xl tracking-[0.25em] uppercase">Vedica</span>
                        <span class="text-vedica-glacial font-inter font-light text-xs tracking-[0.4em] uppercase">Spring</span>
                    </div>

                    <!-- Progress Line -->
                    <div class="relative w-48 h-[1px] overflow-hidden" style="background: rgba(255,255,255,0.08);">
                        <div id="loader-progress" class="absolute inset-y-0 left-0 transition-all duration-300" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-yellow)); width: 0%;"></div>
                    </div>

                    <p class="text-white/30 font-inter text-[10px] tracking-[0.32em] uppercase animate-pulse">Born in the Himalayas</p>
                </div>
            </div>
        `),this.el=document.getElementById("vedica-loader"),this.animateProgress()}animateProgress(){const a=document.getElementById("loader-progress");if(!a)return;let e=0;const t=setInterval(()=>{e+=Math.random()*15,e>=100&&(e=100,clearInterval(t)),a.style.width=`${e}%`},120)}hide(){this.el&&(this.el.style.opacity="0",this.el.style.visibility="hidden",setTimeout(()=>{var a;(a=this.el)==null||a.remove()},700))}}class u{constructor(a=.15){n(this,"observer");this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:a,rootMargin:"0px 0px -40px 0px"})}observe(a){document.querySelectorAll(a).forEach(e=>{this.observer.observe(e)})}observeAll(...a){a.forEach(e=>this.observe(e))}disconnect(){this.observer.disconnect()}}function T(i,a,e,t=2e3,s="",l=""){const r=performance.now(),o=!Number.isInteger(e);function d(p){const g=p-r,v=Math.min(g/t,1),h=1-Math.pow(1-v,3),y=a+(e-a)*h;i.textContent=l+(o?y.toFixed(1):Math.floor(y).toString())+s,v<1&&requestAnimationFrame(d)}requestAnimationFrame(d)}function S(){const i=document.querySelectorAll(".mineral-bar"),a=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),a.unobserve(t.target))})},{threshold:.3});i.forEach(e=>a.observe(e))}function w(){const i=new IntersectionObserver(a=>{a.forEach(e=>{if(e.isIntersecting){const t=e.target,s=parseFloat(t.dataset.counter||"0"),l=t.dataset.suffix||"",r=t.dataset.prefix||"";T(t,0,s,2200,l,r),i.unobserve(t)}})},{threshold:.3});document.querySelectorAll("[data-counter]").forEach(a=>i.observe(a))}const A=[{id:"snow",chapter:"Chapter I",name:"Snow",tagline:"The First Touch",description:"Collected from freshly melted glacial snow at 3,200m. The purest expression of Vedica — light, almost weightless, with a delicate minerality.",volume:"200ml · 500ml · 1L",ph:"7.2",tds:"85 mg/L",color:"from-blue-50 to-white",accentColor:"#A8C8DE",badgeText:"Pure Glacial"},{id:"spring",chapter:"Chapter II",name:"Spring",tagline:"The Living Water",description:"Our signature expression. Balanced minerality, smooth finish, and perfect 7.4 pH — everything a living spring water should be. The heart of Vedica.",volume:"330ml · 750ml · 1.5L",ph:"7.4",tds:"142 mg/L",color:"from-blue-100 to-blue-50",accentColor:"#005CAB",badgeText:"Signature"},{id:"source",chapter:"Chapter III",name:"Source",tagline:"The Deep Mineral",description:"Drawn from the deepest aquifer layer where water has rested for over two centuries. Rich in silica and trace minerals. For those who seek depth.",volume:"500ml · 1L",ph:"7.6",tds:"210 mg/L",color:"from-indigo-100 to-blue-50",accentColor:"#3A7AAF",badgeText:"Deep Reserve"}],x=[{id:0,name:"Snow",subtitle:"The First Touch",desc:"Glacial snowfields at altitude — where Vedica begins."},{id:1,name:"Silence",subtitle:"The Sacred Descent",desc:"Water descends through undisturbed mountain silence."},{id:2,name:"Stone",subtitle:"The Mineral Journey",desc:"Five geological layers impart perfect natural minerality."},{id:3,name:"Spring",subtitle:"The Living Water",desc:"Vedica emerges — balanced, alive, and ready."},{id:4,name:"Source",subtitle:"The Ancient Memory",desc:"Ancient aquifer waters carry centuries of Himalayan wisdom."}],z=[{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M8 3L4 11H8L6 17L14 7H9L12 3H8Z"/><path d="M12 21L15 14H12L14 9"/></svg>',title:"Himalayan Origin",subtitle:"Born at 3,200m altitude",description:"Our water originates from pristine glacial snowfields in the upper Himalayas, where the air is pure and untouched by civilization."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',title:"Natural Filtration",subtitle:"200+ years of purification",description:"Over two centuries, rainwater percolates through five distinct geological layers — each adding essential minerals in perfect balance."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M8 12h8"/></svg>',title:"Perfect Minerality",subtitle:"7.4 pH · Balanced TDS",description:"Naturally optimized mineral composition with calcium, magnesium, and silica — exactly as nature intended. No treatment, no additives."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',title:"Zero Processing",subtitle:"Nature does the work",description:"We never alter what nature perfects. Vedica Spring is collected at source, tested for purity, and sealed — nothing added, nothing removed."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>',title:"Sustainable Stewardship",subtitle:"Carbon-neutral certified",description:"Our extraction rate is a fraction of natural recharge. Certified carbon-neutral operations, 100% recyclable packaging, and reforestation pledges."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',title:"Lab-Verified Purity",subtitle:"127 quality checkpoints",description:"Every batch passes 127 quality checkpoints at our Himalayan facility and third-party labs before it reaches you."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M12 3v18M3 12h18M6.3 6.3l11.4 11.4M6.3 17.7L17.7 6.3"/></svg>',title:"Silica-Rich",subtitle:"Youth-supporting mineral",description:"Naturally high in silica — a rare mineral found in premium spring waters, known to support skin health and cellular wellness."},{svgIcon:'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--vedica-blue)" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',title:"Ancient Source",subtitle:"Discovered 1952",description:"The spring source was discovered by conservationists in 1952. It has been flowing continuously since before recorded memory — a living legacy."}],H=[{name:"Ananya Krishnamurthy",role:"Wellness Coach",company:"Serenity Collective, Bangalore",content:`The moment I tasted Vedica Spring, I understood what "perfect water" means. The minerality is extraordinary — smooth, clean, with a depth that no other water I've tried can replicate.`,rating:5,initials:"AK"},{name:"Dr. Rohan Mehta",role:"Integrative Medicine Physician",company:"Apollo Wellness, Mumbai",content:"I recommend Vedica Spring to every wellness-focused patient. The natural mineral composition — particularly the silica and calcium balance — is precisely what the body needs for optimal hydration.",rating:5,initials:"RM"},{name:"Priya Singhania",role:"Executive Director",company:"Oberoi Hotels & Resorts",content:"We serve Vedica Spring across all our premium properties. Our guests consistently comment on the quality. It's the only water that matches the experience we strive to create.",rating:5,initials:"PS"},{name:"Vikram Sethi",role:"Yoga Master & Retreat Founder",company:"Rishikesh Retreat Centre",content:"Water is the essence of life, and Vedica Spring embodies that truth. At our retreat, we believe you can taste the Himalayas in every sip — pure, ancient, and alive with energy.",rating:5,initials:"VS"},{name:"Meera Nair",role:"Chef & Restaurateur",company:"Atelier by Meera, Delhi",content:"In fine dining, water is the unsung hero. Vedica Spring's clean finish enhances every dish — never competing, always complementing. It's the only water I use in my kitchen.",rating:5,initials:"MN"},{name:"Arjun Kapoor",role:"Olympic Athlete",company:"Team India Athletics",content:"Hydration is everything for performance. I've tried every premium water on the market. Vedica Spring is different — the mineral balance genuinely supports recovery in a way I can feel.",rating:5,initials:"AK"}];class V{constructor(a,e){n(this,"canvas");n(this,"ctx");n(this,"images",[]);n(this,"frameCount");n(this,"currentFrame",0);n(this,"onReady",null);n(this,"isReady",!1);this.frameCount=e,this.canvas=document.getElementById(a),this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize(),{passive:!0}),this.preload()}framePath(a){return`/vedica/ezgif-frame-${String(a+1).padStart(3,"0")}.jpg`}preload(){const a=new Image;a.src=this.framePath(0),a.onload=()=>{this.images[0]=a,this.drawFrame(0),this.preloadRest()}}preloadRest(){let a=1;for(let e=1;e<this.frameCount;e++){const t=new Image;t.src=this.framePath(e),t.onload=()=>{var s;this.images[e]=t,a++,a>=this.frameCount&&(this.isReady=!0,(s=this.onReady)==null||s.call(this))}}}whenReady(a){this.isReady?a():this.onReady=a}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.images[this.currentFrame]&&this.drawFrame(this.currentFrame)}drawFrame(a){const e=this.images[a];if(!e)return;const t=this.canvas.width,s=this.canvas.height,l=e.naturalWidth,r=e.naturalHeight,o=Math.max(t/l,s/r),d=l*o,p=r*o,g=(t-d)/2,v=(s-p)/2;this.ctx.clearRect(0,0,t,s),this.ctx.drawImage(e,g,v,d,p)}update(a){const e=Math.min(this.frameCount-1,Math.max(0,Math.floor(a*(this.frameCount-1))));e!==this.currentFrame&&(this.currentFrame=e,this.drawFrame(e))}}async function O(){const i=document.getElementById("app");if(!i)return;i.innerHTML=`

        <!-- ══════════════════════════════════════════
             SCROLL CANVAS SEQUENCE — Sticky Himalayan Reveal
             The user scrolls through 51 frames:
             frames 1-12  : Himalayan mountains
             frames 13-25 : Water splash studio
             frames 26-51 : Bottle reveal with mountain backdrop
        ══════════════════════════════════════════ -->
        <section id="canvas-sequence" class="relative" style="height: 600vh;">
            <!-- Sticky wrapper — canvas stays fixed as user scrolls -->
            <div id="canvas-sticky" class="sticky top-0 w-full overflow-hidden" style="height: 100vh;">
                <!-- The canvas fills full viewport -->
                <canvas id="vedica-canvas" class="absolute inset-0 w-full h-full" style="background: #0A1A2A;"></canvas>

                <!-- Dark vignette for text readability -->
                <div id="canvas-vignette" class="absolute inset-0 pointer-events-none transition-opacity duration-700" style="background: linear-gradient(180deg, rgba(10,26,42,0.45) 0%, transparent 30%, transparent 60%, rgba(10,26,42,0.65) 100%);"></div>

                <!-- Loading overlay — shown while images load -->
                <div id="canvas-loading" class="absolute inset-0 flex items-center justify-center" style="background: #0A1A2A; z-index: 10; transition: opacity 0.8s ease;">
                    <div class="flex flex-col items-center gap-5">
                        <svg width="56" height="70" viewBox="0 0 56 70" fill="none" class="animate-breathe">
                            <path d="M28 3C28 3 5 35 5 49C5 61.7 15.5 70 28 70C40.5 70 51 61.7 51 49C51 35 28 3 28 3Z" fill="#005CAB" fill-opacity="0.7"/>
                            <path d="M28 16C28 16 14 38 14 50C14 57.7 20.3 64 28 64C35.7 64 42 57.7 42 50C42 38 28 16 28 16Z" fill="#A8C8DE" fill-opacity="0.5"/>
                            <path d="M28 28C28 28 20 42 20 51C20 55.4 23.6 59 28 59C32.4 59 36 55.4 36 51C36 42 28 28 28 28Z" fill="white" fill-opacity="0.85"/>
                        </svg>
                        <div class="flex flex-col items-center gap-1">
                            <span class="text-white font-inter font-semibold text-base tracking-[0.25em] uppercase">Vedica</span>
                            <span class="font-inter font-light text-[9px] tracking-[0.4em] uppercase" style="color: var(--vedica-glacial);">Loading the Himalayas…</span>
                        </div>
                        <div class="relative w-40 h-[1px] overflow-hidden" style="background: rgba(255,255,255,0.08);">
                            <div id="canvas-load-bar" class="absolute inset-y-0 left-0 transition-all duration-300" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-yellow)); width: 0%;"></div>
                        </div>
                    </div>
                </div>

                <!-- ── Phase 1: Mountains text (frames 1-15) ── -->
                <div id="seq-phase-mountains" class="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center z-10 pointer-events-none transition-opacity duration-700 opacity-0 px-6">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="rule-gold"></div>
                        <span class="eyebrow" style="color:rgba(255,255,255,0.8);">The Himalayas · 3,200m</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h1 style="font-family: var(--serif); font-size: clamp(52px, 9vw, 120px); font-weight: 300; color: #fff; line-height: 1.0; text-shadow: 0 4px 40px rgba(10,26,42,0.5);">
                        Born at the<br><em style="color: var(--vedica-yellow);">top of the world</em>
                    </h1>
                    <p class="mt-5 font-inter font-light max-w-md" style="color:rgba(255,255,255,0.65); font-size: 17px; line-height:1.7;">
                        Where glacial snowfields begin their 200-year journey to your glass
                    </p>
                </div>

                <!-- ── Phase 2: Water studio text (frames 16-35) ── -->
                <div id="seq-phase-water" class="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none transition-opacity duration-700 opacity-0 px-6">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="rule-gold"></div>
                        <span class="eyebrow" style="color:rgba(255,255,255,0.8);">Pure · Natural · Alive</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 style="font-family: var(--serif); font-size: clamp(44px, 8vw, 100px); font-weight: 300; color: #fff; line-height: 1.0; text-shadow: 0 4px 40px rgba(10,26,42,0.4);">
                        Water as nature<br><em style="color: var(--vedica-yellow);">intended</em>
                    </h2>
                    <p class="mt-5 font-inter font-light max-w-md" style="color:rgba(255,255,255,0.65); font-size: 17px; line-height:1.7;">
                        Zero treatment. Zero additives. Pure Himalayan spring water — nothing more.
                    </p>
                </div>

                <!-- ── Phase 3: Bottle reveal text (frames 36-51) ── -->
                <div id="seq-phase-bottle" class="absolute inset-0 flex flex-col items-start justify-end pb-20 z-10 pointer-events-none transition-opacity duration-700 opacity-0 px-10 md:px-20">
                    <div class="max-w-xl">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="rule-gold"></div>
                            <span class="eyebrow" style="color:rgba(255,255,255,0.8);">Vedica Spring · Himalayan Spring Water</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(44px, 7vw, 90px); font-weight: 300; color: #fff; line-height: 1.0; text-shadow: 0 4px 40px rgba(10,26,42,0.5);">
                            <em style="color: var(--vedica-yellow);">Vedica</em><br>Spring
                        </h2>
                        <div class="flex flex-wrap gap-5 mt-5 mb-7 text-white/55 font-inter" style="font-size: 11px; letter-spacing:0.22em; text-transform:uppercase;">
                            <span>pH 7.4</span>
                            <span class="dot-sep"></span>
                            <span>TDS 142 mg/L</span>
                            <span class="dot-sep"></span>
                            <span>200+ Year Filtration</span>
                        </div>
                        <div class="pointer-events-auto flex gap-4 flex-wrap">
                            <a href="/our-water" class="btn-primary rounded-sm">Discover Our Water</a>
                            <a href="/contact" class="btn-ghost rounded-sm">Order Now</a>
                        </div>
                    </div>
                </div>

                <!-- Scroll indicator (only shown at start) -->
                <div id="scroll-cue" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-opacity duration-500 pointer-events-none" style="font-family: var(--sans); font-size:9px; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.6);">
                    <div class="scroll-cue-line"></div>
                    <span>Scroll to reveal</span>
                </div>

                <!-- Sequence progress bar (thin gold line at bottom) -->
                <div class="absolute bottom-0 left-0 h-[2px] w-full z-20 pointer-events-none" style="background: rgba(255,255,255,0.07);">
                    <div id="seq-progress-bar" class="h-full transition-none" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-yellow)); width: 0%;"></div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             STORY STRIP — Chapter names ticker
        ══════════════════════════════════════════ -->
        <section class="relative py-6 overflow-hidden" style="background: linear-gradient(90deg, #0A1A2A 0%, #0D2540 50%, #0A1A2A 100%);">
            <div class="flex items-center gap-12 px-8 overflow-x-auto no-scrollbar" style="scrollbar-width: none;">
                ${x.map(e=>`
                    <div class="flex items-center gap-4 flex-shrink-0">
                        <div class="rule-gold"></div>
                        <span class="eyebrow text-white/50">${e.name}</span>
                        <span class="text-white/25 font-inter text-xs">—</span>
                        <span class="text-white/40 font-inter text-xs">${e.subtitle}</span>
                    </div>
                `).join("")}
                <div class="flex items-center gap-4 flex-shrink-0">
                    <div class="rule-gold"></div>
                    <span class="eyebrow text-white/50">Snow</span>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             BRAND STORY — Himalayan Origin
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.04]" style="border: 1px solid #005CAB;"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06]" style="border: 1px solid #005CAB;"></div>

            <div class="relative max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div class="flex items-center gap-4 mb-8 slide-left">
                            <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                            <span style="font-family: var(--sans); font-size:10px; letter-spacing:0.32em; text-transform:uppercase; color: var(--vedica-blue);">Our Origin Story</span>
                        </div>
                        <h2 class="slide-left delay-100 mb-8" style="font-family: var(--serif); font-size: clamp(38px, 5vw, 62px); font-weight: 400; color: var(--vedica-deep); line-height: 1.1;">
                            Where water begins<br>its <em>two-century</em> journey
                        </h2>
                        <p class="slide-left delay-200 leading-relaxed mb-6 font-inter" style="color: rgba(10,26,42,0.6); font-size: 16px; line-height: 1.75;">
                            High in the upper Himalayas, at an elevation of 3,200 metres, glacial snowfields begin their slow, sacred descent. Vedica Spring captures this water at its most pure — before civilization, before treatment, before compromise.
                        </p>
                        <p class="slide-left delay-300 leading-relaxed mb-10 font-inter" style="color: rgba(10,26,42,0.5); font-size: 15px; line-height: 1.75;">
                            Over two centuries, the water percolates through five distinct geological strata — each layer a gift from the mountain, imparting calcium, magnesium, silica, and trace minerals in perfect natural balance.
                        </p>
                        <a href="/our-water" class="slide-left delay-400 btn-outline-blue rounded-sm inline-flex">
                            Read the Full Story
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>

                    <div class="slide-right relative">
                        <div class="relative mx-auto" style="max-width: 420px;">
                            <div class="rounded-2xl overflow-hidden shadow-2xl" style="background: linear-gradient(180deg, #1a3a5c 0%, #2e5f8a 30%, #4a80a8 60%, #c8dce9 100%); min-height: 480px; position: relative;">
                                <svg viewBox="0 0 420 480" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full">
                                    <defs>
                                        <linearGradient id="snowGrad2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stop-color="white" stop-opacity="0.95"/>
                                            <stop offset="100%" stop-color="white" stop-opacity="0.3"/>
                                        </linearGradient>
                                        <linearGradient id="mountainGrad2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stop-color="#1a3a5c"/>
                                            <stop offset="100%" stop-color="#4a80a8"/>
                                        </linearGradient>
                                    </defs>
                                    <rect width="420" height="480" fill="url(#mountainGrad2)"/>
                                    <circle cx="80" cy="40" r="1.2" fill="white" opacity="0.7"/>
                                    <circle cx="150" cy="25" r="0.8" fill="white" opacity="0.5"/>
                                    <circle cx="320" cy="35" r="1.5" fill="white" opacity="0.6"/>
                                    <circle cx="380" cy="55" r="0.9" fill="white" opacity="0.4"/>
                                    <circle cx="240" cy="18" r="1" fill="white" opacity="0.65"/>
                                    <path d="M0 280 L80 180 L160 240 L240 160 L320 220 L420 140 L420 480 L0 480 Z" fill="#2e5f8a" opacity="0.5"/>
                                    <path d="M40 340 L210 80 L380 320 L420 340 L420 480 L0 480 Z" fill="#1a3a5c" opacity="0.9"/>
                                    <path d="M210 80 L155 170 L210 155 L265 170 Z" fill="url(#snowGrad2)"/>
                                    <circle cx="210" cy="60" r="18" fill="#FCDC00" fill-opacity="0.85"/>
                                    <circle cx="210" cy="60" r="24" fill="#FCDC00" fill-opacity="0.2"/>
                                    <circle cx="210" cy="180" r="3" fill="#A8C8DE" fill-opacity="0.7"/>
                                    <circle cx="205" cy="220" r="2.5" fill="#A8C8DE" fill-opacity="0.6"/>
                                    <circle cx="212" cy="260" r="3.5" fill="#A8C8DE" fill-opacity="0.5"/>
                                    <circle cx="207" cy="300" r="2" fill="#A8C8DE" fill-opacity="0.4"/>
                                    <ellipse cx="210" cy="420" rx="140" ry="24" fill="#A8C8DE" fill-opacity="0.3"/>
                                </svg>
                                <div class="absolute inset-0 flex flex-col justify-end p-8">
                                    <div class="flex flex-col gap-3">
                                        ${[{label:"Altitude",value:"3,200 m",color:"#FCDC00"},{label:"Filtration Time",value:"200+ Years",color:"#A8C8DE"},{label:"Geological Layers",value:"5 Strata",color:"#fff"}].map(e=>`
                                            <div class="flex items-center justify-between glass rounded-lg px-4 py-3">
                                                <span style="font-family: var(--sans); font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:rgba(255,255,255,0.6);">${e.label}</span>
                                                <span style="font-family: var(--serif); font-size:18px; color: ${e.color}; font-weight:500;">${e.value}</span>
                                            </div>
                                        `).join("")}
                                    </div>
                                </div>
                            </div>
                            <div class="absolute -top-6 -right-6 glass-dark rounded-2xl px-5 py-4 text-center" style="border-color: rgba(252,220,0,0.2);">
                                <div style="font-family: var(--serif); font-size: 32px; color: var(--vedica-yellow); font-weight: 400; line-height: 1;">7.4</div>
                                <div class="eyebrow" style="color: rgba(255,255,255,0.6); margin-top:2px;">pH Balance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             STATS — Animated Counters
        ══════════════════════════════════════════ -->
        <section class="relative py-24 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, rgba(0,92,171,0.12) 0%, transparent 65%);"></div>
            <div class="relative max-w-6xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                    ${[{value:200,suffix:"+",label:"Years of Filtration",sublabel:"Ancient geological journey"},{value:7.4,suffix:"",label:"pH Balance",sublabel:"Naturally alkaline"},{value:5,suffix:"",label:"Mineral Layers",sublabel:"Geological strata"},{value:127,suffix:"",label:"Quality Checks",sublabel:"Per batch tested"}].map((e,t)=>`
                        <div class="text-center fade-up" style="animation-delay: ${t*120}ms;">
                            <div class="mb-2" style="font-family: var(--serif); font-size: clamp(40px, 6vw, 72px); color: var(--vedica-yellow); font-weight: 400; line-height: 1;">
                                <span data-counter="${e.value}" data-suffix="${e.suffix}">0${e.suffix}</span>
                            </div>
                            <div class="text-white text-base mb-1 font-inter font-medium">${e.label}</div>
                            <div class="font-inter text-sm" style="color: rgba(168,200,222,0.6);">${e.sublabel}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             PRODUCT SHOWCASE — Three Expressions
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden section-water-light">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Three Expressions</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        One source. Three <em>stories.</em>
                    </h2>
                    <p class="fade-up delay-200 mt-4 font-inter max-w-xl mx-auto" style="color: rgba(10,26,42,0.55); font-size: 16px; line-height: 1.7;">
                        Each Vedica expression captures a different chapter of the Himalayan water journey, with its own character and mineral fingerprint.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${A.map((e,t)=>`
                        <div class="product-card-vedica rounded-2xl overflow-hidden fade-up" style="animation-delay: ${t*150}ms;">
                            <div class="relative h-64 overflow-hidden" style="background: linear-gradient(145deg, ${e.id==="snow"?"#EAF4FA, #F7FBFE":e.id==="spring"?"#D4E8F5, #EAF2F9":"#BDD8ED, #D4E8F5"});">
                                <div class="absolute top-5 left-5">
                                    <span class="eyebrow" style="color: var(--vedica-blue); font-size: 9px;">${e.chapter}</span>
                                </div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="relative">
                                        <div class="absolute inset-0 rounded-full" style="border: 1px solid ${e.accentColor}30; width: 140px; height: 140px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
                                        <div class="absolute inset-0 rounded-full" style="border: 1px solid ${e.accentColor}20; width: 190px; height: 190px; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div>
                                        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-breathe" style="animation-delay: ${t*200}ms;">
                                            <path d="M45 5C45 5 10 50 10 70C10 90.987 25.744 105 45 105C64.256 105 80 90.987 80 70C80 50 45 5 45 5Z" fill="${e.accentColor}" fill-opacity="${e.id==="snow"?"0.35":e.id==="spring"?"0.55":"0.65"}"/>
                                            <path d="M45 25C45 25 22 58 22 72C22 84.15 32.297 94 45 94C57.703 94 68 84.15 68 72C68 58 45 25 45 25Z" fill="${e.accentColor}" fill-opacity="${e.id==="snow"?"0.25":"0.35"}"/>
                                            <path d="M45 42C45 42 32 62 32 74C32 80.627 37.816 86 45 86C52.184 86 58 80.627 58 74C58 62 45 42 45 42Z" fill="white" fill-opacity="0.65"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 h-16" style="background: linear-gradient(0deg, rgba(255,255,255,0.8), transparent);"></div>
                            </div>
                            <div class="p-7">
                                <div class="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 style="font-family: var(--serif); font-size: 28px; color: var(--vedica-deep); font-weight: 400; line-height: 1;">${e.name}</h3>
                                        <p style="font-family: var(--sans); font-size: 11px; letter-spacing:0.18em; text-transform:uppercase; color: var(--vedica-blue); margin-top: 4px;">${e.tagline}</p>
                                    </div>
                                    <span class="px-3 py-1 rounded-full text-[9px] font-inter font-semibold tracking-wider uppercase" style="background: rgba(0,92,171,0.08); color: var(--vedica-blue);">${e.badgeText}</span>
                                </div>
                                <p class="text-sm font-inter leading-relaxed mb-5" style="color: rgba(10,26,42,0.6);">${e.description}</p>
                                <div class="flex items-center gap-4 mb-5 pb-5" style="border-bottom: 1px solid rgba(0,92,171,0.1);">
                                    <div class="text-center">
                                        <div style="font-family: var(--serif); font-size: 22px; color: var(--vedica-blue);">${e.ph}</div>
                                        <div class="eyebrow" style="color: rgba(10,26,42,0.45); font-size: 8px;">pH</div>
                                    </div>
                                    <div style="width: 1px; height: 32px; background: rgba(0,92,171,0.15);"></div>
                                    <div class="text-center">
                                        <div style="font-family: var(--serif); font-size: 22px; color: var(--vedica-blue);">${e.tds.split(" ")[0]}</div>
                                        <div class="eyebrow" style="color: rgba(10,26,42,0.45); font-size: 8px;">mg/L TDS</div>
                                    </div>
                                    <div style="width: 1px; height: 32px; background: rgba(0,92,171,0.15);"></div>
                                    <div class="flex-1">
                                        <div class="eyebrow mb-1" style="color: rgba(10,26,42,0.45); font-size: 8px;">Volume</div>
                                        <div style="font-family: var(--sans); font-size: 11px; color: rgba(10,26,42,0.65);">${e.volume}</div>
                                    </div>
                                </div>
                                <a href="/contact" class="btn-outline-blue w-full justify-center rounded-sm text-[10px] py-3">Order ${e.name}</a>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             FIVE CHAPTERS TIMELINE
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(135deg, rgba(0,92,171,0.06) 0%, transparent 50%, rgba(0,92,171,0.06) 100%);"></div>
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold"></div>
                        <span class="eyebrow">The Five Chapters</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: #fff; font-weight: 400;">
                        A journey <em style="color: var(--vedica-yellow);">200 years</em> in the making
                    </h2>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px" style="background: linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.12) 90%, transparent); transform: translateX(-50%);"></div>
                    <div class="flex flex-col gap-0">
                        ${x.map((e,t)=>`
                            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 fade-up" style="animation-delay: ${t*100}ms;">
                                ${t%2===0?`
                                    <div class="md:text-right md:pr-16">
                                        <span class="eyebrow mb-3 block" style="color: var(--vedica-yellow);">${String(t+1).padStart(2,"0")}</span>
                                        <h3 style="font-family: var(--serif); font-size: clamp(28px, 3vw, 42px); color: #fff; font-weight: 400; margin-bottom: 12px;">${e.name}</h3>
                                        <p style="font-family: var(--sans); font-size: 11px; letter-spacing:0.18em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 12px;">${e.subtitle}</p>
                                        <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${e.desc}</p>
                                    </div>
                                    <div class="hidden md:flex items-center justify-start md:col-start-2 md:pl-16 relative">
                                        <div class="absolute left-0 -translate-x-[calc(50%+0.5px)] w-4 h-4 rounded-full" style="background: var(--vedica-yellow); box-shadow: 0 0 0 4px rgba(252,220,0,0.2), 0 0 20px rgba(252,220,0,0.3);"></div>
                                        <div class="glass rounded-xl px-5 py-4 ml-6">
                                            <div style="font-family: var(--serif); font-size: 24px; color: var(--vedica-yellow); font-weight:600;">0${t+1}</div>
                                        </div>
                                    </div>
                                `:`
                                    <div class="md:pl-16 md:col-start-2 md:row-start-1">
                                        <span class="eyebrow mb-3 block" style="color: var(--vedica-yellow);">${String(t+1).padStart(2,"0")}</span>
                                        <h3 style="font-family: var(--serif); font-size: clamp(28px, 3vw, 42px); color: #fff; font-weight: 400; margin-bottom: 12px;">${e.name}</h3>
                                        <p style="font-family: var(--sans); font-size: 11px; letter-spacing:0.18em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 12px;">${e.subtitle}</p>
                                        <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${e.desc}</p>
                                    </div>
                                    <div class="hidden md:flex items-center justify-end md:pr-16 md:col-start-1 md:row-start-1 relative">
                                        <div class="glass rounded-xl px-5 py-4 mr-6">
                                            <div style="font-family: var(--serif); font-size: 24px; color: var(--vedica-yellow); font-weight:600;">0${t+1}</div>
                                        </div>
                                        <div class="absolute right-0 translate-x-[calc(50%+0.5px)] w-4 h-4 rounded-full" style="background: var(--vedica-yellow); box-shadow: 0 0 0 4px rgba(252,220,0,0.2), 0 0 20px rgba(252,220,0,0.3);"></div>
                                    </div>
                                `}
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="text-center mt-16 fade-up">
                    <a href="/our-water" class="btn-primary rounded-sm">
                        Explore All Five Chapters
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             WELLNESS FEATURES GRID
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">What Makes Vedica Different</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        Nature's <em>perfection</em>,<br>untouched
                    </h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${z.map((e,t)=>`
                        <div class="fade-up group" style="animation-delay: ${t*80}ms;">
                            <div class="rounded-2xl p-7 h-full transition-all duration-500 hover:-translate-y-2" style="background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 20px rgba(0,92,171,0.06);" onmouseenter="this.style.boxShadow='0 20px 40px rgba(0,92,171,0.15)'" onmouseleave="this.style.boxShadow='0 4px 20px rgba(0,92,171,0.06)'">
                                <div class="mb-5 flex items-center justify-center w-12 h-12 rounded-xl" style="background: rgba(0,92,171,0.06);">${e.svgIcon}</div>
                                <div class="eyebrow mb-2" style="color: var(--vedica-blue); font-size: 9px;">${e.subtitle}</div>
                                <h3 class="mb-3 font-inter font-semibold" style="color: var(--vedica-deep); font-size: 16px;">${e.title}</h3>
                                <p class="font-inter text-sm leading-relaxed" style="color: rgba(10,26,42,0.55);">${e.description}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             MINERAL COMPOSITION
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="max-w-5xl mx-auto">
                <div class="text-center mb-16">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold"></div>
                        <span class="eyebrow">Mineral Profile</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 50px); color: #fff; font-weight: 400;">
                        Nature's <em style="color: var(--vedica-glacial);">mineral recipe</em>
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="flex flex-col gap-8 slide-left">
                        ${[{name:"Calcium",width:78,unit:"68 mg/L"},{name:"Magnesium",width:56,unit:"24 mg/L"},{name:"Silica",width:65,unit:"38 mg/L"},{name:"Potassium",width:38,unit:"12 mg/L"},{name:"Bicarbonate",width:88,unit:"180 mg/L"}].map(e=>`
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="font-inter text-sm font-medium text-white/80">${e.name}</span>
                                    <span class="font-inter text-xs" style="color: var(--vedica-glacial);">${e.unit}</span>
                                </div>
                                <div class="h-[3px] rounded-full overflow-hidden" style="background: rgba(255,255,255,0.08);">
                                    <div class="mineral-bar h-full rounded-full" style="background: linear-gradient(90deg, var(--vedica-blue), var(--vedica-glacial)); width: ${e.width}%;"></div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                    <div class="slide-right flex flex-col items-center gap-8">
                        <div class="relative glass rounded-full flex items-center justify-center" style="width: 220px; height: 220px;">
                            <div class="absolute inset-2 rounded-full" style="border: 1px solid rgba(252,220,0,0.2);"></div>
                            <div class="text-center">
                                <div style="font-family: var(--serif); font-size: 64px; color: var(--vedica-yellow); font-weight: 400; line-height: 1;">7.4</div>
                                <div class="eyebrow" style="color: rgba(168,200,222,0.7);">pH Level</div>
                                <div class="font-inter text-xs mt-1" style="color: rgba(255,255,255,0.4);">Naturally Alkaline</div>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="h-3 rounded-full mb-2 relative" style="background: linear-gradient(90deg, #ff6b6b 0%, #ffd700 50%, #51cf66 100%);">
                                <div class="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-vedica-yellow shadow-lg" style="left: calc(74% - 8px);"></div>
                            </div>
                            <div class="flex justify-between font-inter text-[10px]" style="color: rgba(255,255,255,0.35);">
                                <span>0 Acidic</span>
                                <span>7 Neutral</span>
                                <span>14 Alkaline</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             TESTIMONIALS
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">From Our Community</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        What those who<br><em>truly taste</em> say
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${H.map((e,t)=>`
                        <div class="fade-up rounded-2xl p-7" style="animation-delay: ${t*100}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <div class="flex gap-1 mb-5">
                                ${"★".repeat(e.rating).split("").map(()=>'<span style="color: var(--vedica-yellow); font-size: 14px;">★</span>').join("")}
                            </div>
                            <blockquote class="font-inter text-sm leading-relaxed mb-6" style="color: rgba(10,26,42,0.65); font-style: italic;">"${e.content}"</blockquote>
                            <div class="flex items-center gap-4 pt-4" style="border-top: 1px solid rgba(0,92,171,0.08);">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center font-inter font-semibold text-sm" style="background: linear-gradient(135deg, var(--vedica-blue), var(--vedica-blue-soft)); color: white;">${e.initials}</div>
                                <div>
                                    <div class="font-inter font-semibold text-sm" style="color: var(--vedica-deep);">${e.name}</div>
                                    <div class="font-inter text-xs" style="color: rgba(10,26,42,0.45);">${e.role}, ${e.company}</div>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             FINAL CTA
        ══════════════════════════════════════════ -->
        <section class="relative py-40 px-6 overflow-hidden flex items-center justify-center text-center" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 40%, #1a3a5c 100%); min-height: 60vh;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 100%, rgba(0,92,171,0.25) 0%, transparent 60%);"></div>
            <div class="absolute inset-0 pointer-events-none overflow-hidden">
                <div class="ripple-circle absolute" style="width: 400px; height: 400px; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 0s; animation-duration: 4s;"></div>
                <div class="ripple-circle absolute" style="width: 400px; height: 400px; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 1.5s; animation-duration: 4s;"></div>
                <div class="ripple-circle absolute" style="width: 400px; height: 400px; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: 3s; animation-duration: 4s;"></div>
            </div>
            <div class="relative z-10 max-w-3xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Experience Vedica</span>
                    <div class="rule-gold"></div>
                </div>
                <h2 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(40px, 6vw, 72px); color: #fff; font-weight: 300; line-height: 1.1;">
                    Taste water as<br>nature <em style="color: var(--vedica-yellow);">intended</em>
                </h2>
                <p class="fade-up delay-200 font-inter mb-12 max-w-lg mx-auto" style="color: rgba(168,200,222,0.7); font-size: 16px; line-height: 1.7;">
                    Order Vedica Spring for your home, restaurant, or wellness centre. Wholesale and retail available across India.
                </p>
                <div class="fade-up delay-300 flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <a href="/contact" class="btn-primary rounded-sm">
                        Order Vedica Spring
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                    <a href="/our-water" class="btn-ghost rounded-sm">Explore Our Water</a>
                </div>
            </div>
        </section>
    `,P(),new u(.12).observeAll(".fade-up",".slide-left",".slide-right",".fade-in"),w(),S()}function P(){const a=new V("vedica-canvas",51),e=document.getElementById("canvas-loading"),t=document.getElementById("canvas-load-bar"),s=document.getElementById("scroll-cue"),l=document.getElementById("seq-progress-bar"),r=document.getElementById("seq-phase-mountains"),o=document.getElementById("seq-phase-water"),d=document.getElementById("seq-phase-bottle");let p=0;const g=setInterval(()=>{p=Math.min(p+Math.random()*12,90),t.style.width=p+"%"},150);a.whenReady(()=>{clearInterval(g),t.style.width="100%",setTimeout(()=>{e.style.opacity="0",e.style.pointerEvents="none",r.style.opacity="1"},400)});const v=document.getElementById("canvas-sequence");function h(){if(!v)return;const y=v.getBoundingClientRect(),L=v.offsetHeight-window.innerHeight,E=Math.max(0,-y.top),b=Math.min(1,E/L);a.update(b),l.style.width=b*100+"%",s.style.opacity=b>.05?"0":"1";const f=b;if(f<.28)r.style.opacity=String(Math.min(1,f/.08)),o.style.opacity="0",d.style.opacity="0";else if(f<.35){const m=(f-.28)/.07;r.style.opacity=String(1-m),o.style.opacity=String(m),d.style.opacity="0"}else if(f<.62)r.style.opacity="0",o.style.opacity="1",d.style.opacity="0";else if(f<.7){const m=(f-.62)/.08;r.style.opacity="0",o.style.opacity=String(1-m),d.style.opacity=String(m)}else r.style.opacity="0",o.style.opacity="0",d.style.opacity="1"}window.addEventListener("scroll",h,{passive:!0}),h()}async function D(){const i=document.getElementById("app");if(!i)return;i.innerHTML=`
        <!-- HERO -->
        <section class="relative min-h-[70vh] flex items-end pb-20 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #1a3a5c 60%, #2e5f8a 100%); padding-top: 120px;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 30% 60%, rgba(0,92,171,0.2) 0%, transparent 60%);"></div>
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Our Story</span>
                </div>
                <h1 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(48px, 8vw, 96px); color: #fff; font-weight: 300; line-height: 1.05; max-width: 18ch;">
                    A spring discovered.<br>A <em style="color: var(--vedica-yellow);">legacy</em> born.
                </h1>
                <p class="fade-up delay-200 font-inter max-w-xl" style="color: rgba(168,200,222,0.7); font-size: 17px; line-height: 1.75;">
                    In 2018, a conservation expedition deep in the upper Himalayas discovered something extraordinary — a natural artesian spring of unparalleled purity. Vedica Spring was born that day.
                </p>
            </div>
        </section>

        <!-- FOUNDING STORY -->
        <section class="py-32 px-6" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div class="slide-left">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">The Beginning</span>
                    </div>
                    <h2 style="font-family: var(--serif); font-size: clamp(36px, 4vw, 54px); color: var(--vedica-deep); font-weight: 400; line-height: 1.1; margin-bottom: 24px;">
                        Found at 3,200 metres.<br>Shared with the <em>world.</em>
                    </h2>
                    <p class="font-inter text-base leading-relaxed mb-6" style="color: rgba(10,26,42,0.6);">
                        Kavita Sharma, our founder, had spent a decade working in Himalayan conservation. On a research expedition in 2018, her team discovered a natural artesian spring — geologically unique, chemically pristine, and utterly unlike any water source they had encountered.
                    </p>
                    <p class="font-inter text-base leading-relaxed mb-6" style="color: rgba(10,26,42,0.55);">
                        Working with hydrogeologist Dr. Arun Bose, Kavita spent two years studying the spring's mineral composition, geological origins, and sustainable yield. What they found was remarkable: water that had travelled through five geological strata over 200+ years, emerging in perfect natural balance.
                    </p>
                    <p class="font-inter text-base leading-relaxed" style="color: rgba(10,26,42,0.5);">
                        In 2020, Vedica Spring was officially incorporated with a singular mission: to share this extraordinary water with the world — sustainably, responsibly, and with the reverence it deserves.
                    </p>
                </div>

                <!-- Stats Grid -->
                <div class="slide-right grid grid-cols-2 gap-5">
                    ${[{value:2018,suffix:"",label:"Year Founded",sub:"Discovered by expedition"},{value:3200,suffix:"m",label:"Source Altitude",sub:"Upper Himalayas"},{value:200,suffix:"+",label:"Years Filtration",sub:"Ancient geological cycle"},{value:127,suffix:"",label:"Quality Checks",sub:"Per batch"}].map((e,t)=>`
                        <div class="fade-up rounded-2xl p-7 text-center" style="animation-delay:${t*100}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 16px rgba(0,92,171,0.06);">
                            <div style="font-family: var(--serif); font-size: 44px; color: var(--vedica-blue); font-weight: 400; line-height: 1;" data-counter="${e.value}" data-suffix="${e.suffix}">0${e.suffix}</div>
                            <div class="font-inter font-semibold mt-2 mb-1" style="color: var(--vedica-deep); font-size: 15px;">${e.label}</div>
                            <div class="font-inter text-xs" style="color: rgba(10,26,42,0.45);">${e.sub}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- SUSTAINABILITY PROMISE -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold"></div>
                        <span class="eyebrow">Sustainability Promise</span>
                        <div class="rule-gold"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: #fff; font-weight: 400;">
                        We give back more<br>than we <em style="color: var(--vedica-yellow);">take</em>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${[{icon:"🌱",title:"Carbon Neutral",desc:"All operations — from source collection to delivery — are certified carbon neutral. We offset what we cannot yet eliminate.",badge:"Certified 2022"},{icon:"♻️",title:"Zero Waste Packaging",desc:"100% recyclable bottles and packaging. Our 2026 goal: fully circular packaging with zero virgin plastic in our supply chain.",badge:"On Track for 2026"},{icon:"🌲",title:"Himalayan Reforestation",desc:"For every litre sold, we plant a tree in the Himalayan foothills. To date, over 120,000 trees planted in partnership with local communities.",badge:"120,000+ Trees"}].map((e,t)=>`
                        <div class="fade-up glass rounded-2xl p-8" style="animation-delay:${t*120}ms;">
                            <div class="text-5xl mb-5">${e.icon}</div>
                            <div class="eyebrow-gold mb-3">${e.badge}</div>
                            <h3 class="font-inter font-semibold mb-3 text-lg" style="color: #fff;">${e.title}</h3>
                            <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${e.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>


        <!-- VALUES -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="fade-up" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: #fff; font-weight: 400;">
                        Our <em style="color: var(--vedica-yellow);">values</em>
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${[{num:"01",title:"Purity Above All",desc:"We will never compromise the purity of Vedica Spring. No additives. No treatment. The water is sacred."},{num:"02",title:"Sustainability First",desc:"Every decision — from our extraction rate to our packaging — is guided by the principle of leaving the Himalayas better than we found them."},{num:"03",title:"Transparency Always",desc:"We publish our full mineral analysis, extraction methodology, and sustainability reports publicly. Our customers deserve to know exactly what they're drinking."}].map((e,t)=>`
                        <div class="fade-up glass rounded-2xl p-8 text-center" style="animation-delay:${t*120}ms;">
                            <div style="font-family: var(--serif); font-size: 56px; color: rgba(252,220,0,0.2); font-weight: 400; line-height: 1; margin-bottom: 16px;">${e.num}</div>
                            <h3 class="font-inter font-semibold text-white mb-4 text-lg">${e.title}</h3>
                            <p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.65);">${e.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-28 px-6 text-center" style="background: #F7F8FB;">
            <div class="max-w-2xl mx-auto">
                <h2 class="fade-up mb-6" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 54px); color: var(--vedica-deep); font-weight: 400;">
                    Join the Vedica<br><em>community</em>
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center fade-up delay-200">
                    <a href="/contact" class="btn-primary rounded-sm">Order Now</a>
                    <a href="/wellness" class="btn-outline-blue rounded-sm">Wellness Benefits</a>
                </div>
            </div>
        </section>
    `,new u(.12).observeAll(".fade-up",".slide-left",".slide-right"),w()}async function R(){const i=document.getElementById("app");if(!i)return;i.innerHTML=`
        <!-- HERO -->
        <section class="relative min-h-[80vh] flex items-end pb-24 overflow-hidden" style="background: linear-gradient(180deg, #1a3a5c 0%, #2e5f8a 30%, #4a80a8 60%, #c8dce9 100%); padding-top: 120px;">
            <!-- Vignette -->
            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(180deg, rgba(10,26,42,0.6) 0%, transparent 40%, rgba(10,26,42,0.2) 100%);"></div>

            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">The Vedica Water Journey</span>
                </div>
                <h1 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(48px, 8vw, 100px); color: #fff; font-weight: 300; line-height: 1.05; max-width: 16ch;">
                    Five chapters.<br>One <em style="color: var(--vedica-yellow);">perfect</em> water.
                </h1>
                <p class="fade-up delay-200 font-inter max-w-xl" style="color: rgba(255,255,255,0.65); font-size: 17px; line-height: 1.75;">
                    From the glacial snowfields of the upper Himalayas to your glass — the complete story of how Vedica Spring comes to be.
                </p>
            </div>

            <!-- Scroll cue -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3" style="font-family: var(--sans); font-size:9px; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.5);">
                <div class="scroll-cue-line"></div>
                <span>Discover</span>
            </div>
        </section>

        <!-- FIVE CHAPTERS — Full narrative -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-5xl mx-auto">
                ${x.map((e,t)=>`
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 ${t!==x.length-1?"border-b border-white/8":""}">
                        ${t%2===0?`
                            <!-- Content Left, Visual Right -->
                            <div class="fade-up">
                                <div class="eyebrow-gold mb-4">Chapter ${String(t+1).padStart(2,"0")}</div>
                                <h2 style="font-family: var(--serif); font-size: clamp(40px, 5vw, 64px); color: #fff; font-weight: 400; line-height: 1.05; margin-bottom: 16px;">${e.name}</h2>
                                <p style="font-family: var(--sans); font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 20px;">${e.subtitle}</p>
                                <p class="font-inter text-base leading-relaxed" style="color: rgba(168,200,222,0.65);">${k(t)}</p>
                            </div>
                            <div class="fade-up delay-200 flex items-center justify-center">
                                ${C(t,e)}
                            </div>
                        `:`
                            <!-- Visual Left, Content Right -->
                            <div class="fade-up flex items-center justify-center lg:order-1">
                                ${C(t,e)}
                            </div>
                            <div class="fade-up delay-200 lg:order-2">
                                <div class="eyebrow-gold mb-4">Chapter ${String(t+1).padStart(2,"0")}</div>
                                <h2 style="font-family: var(--serif); font-size: clamp(40px, 5vw, 64px); color: #fff; font-weight: 400; line-height: 1.05; margin-bottom: 16px;">${e.name}</h2>
                                <p style="font-family: var(--sans); font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color: var(--vedica-glacial); margin-bottom: 20px;">${e.subtitle}</p>
                                <p class="font-inter text-base leading-relaxed" style="color: rgba(168,200,222,0.65);">${k(t)}</p>
                            </div>
                        `}
                    </div>
                `).join("")}
            </div>
        </section>

        <!-- MINERAL COMPOSITION -->
        <section class="py-32 px-6" style="background: #F7F8FB;">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Mineral Composition</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 56px); color: var(--vedica-deep); font-weight: 400;">
                        Nature's perfect <em>recipe</em>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${A.map((e,t)=>`
                        <div class="rounded-2xl overflow-hidden fade-up" style="animation-delay: ${t*150}ms; background: white; border: 1px solid rgba(0,92,171,0.1); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <div class="px-6 py-5" style="background: linear-gradient(135deg, #EAF2F8, #F7FBFE);">
                                <div class="eyebrow mb-2" style="color: var(--vedica-blue); font-size: 9px;">${e.chapter}</div>
                                <h3 style="font-family: var(--serif); font-size: 28px; color: var(--vedica-deep);">${e.name}</h3>
                            </div>
                            <div class="p-6">
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    ${[{label:"pH",value:e.ph},{label:"TDS",value:e.tds},{label:"Calcium",value:t===0?"52 mg/L":t===1?"68 mg/L":"84 mg/L"},{label:"Silica",value:t===0?"28 mg/L":t===1?"38 mg/L":"52 mg/L"}].map(s=>`
                                        <div class="text-center p-3 rounded-lg" style="background: rgba(0,92,171,0.04);">
                                            <div style="font-family: var(--serif); font-size: 20px; color: var(--vedica-blue);">${s.value}</div>
                                            <div class="eyebrow" style="color: rgba(10,26,42,0.4); font-size: 8px; margin-top: 2px;">${s.label}</div>
                                        </div>
                                    `).join("")}
                                </div>
                                <a href="/contact" class="btn-outline-blue w-full justify-center rounded-sm text-[10px] py-3">Order ${e.name}</a>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-28 px-6 text-center" style="background: var(--vedica-deep);">
            <div class="max-w-2xl mx-auto">
                <h2 class="fade-up mb-6" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 54px); color: #fff; font-weight: 400;">
                    Ready to experience<br><em style="color: var(--vedica-yellow);">true purity?</em>
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center fade-up delay-200">
                    <a href="/contact" class="btn-primary rounded-sm">Order Vedica Spring</a>
                    <a href="/wellness" class="btn-ghost rounded-sm">Wellness Benefits</a>
                </div>
            </div>
        </section>
    `,new u(.12).observeAll(".fade-up",".slide-left",".slide-right"),w(),S()}function k(i){return["High in the upper Himalayas, winter brings glacial snowfall of extraordinary purity. At 3,200 metres, above the clouds and far from any human settlement, this snow accumulates season by season — the beginning of Vedica's journey.","As the mountain warms, the snow begins its unhurried descent through fissures and channels carved over millennia. In this profound silence — no roads, no industry, no interference — the water moves as nature intended, undisturbed.","The water's slow journey through five distinct geological strata is where Vedica's mineral character is born. Limestone, granite, quartz, clay, and volcanic rock — each layer contributes essential minerals in precise, natural proportion.","After two centuries of slow filtration, Vedica Spring emerges at a natural artesian spring, perfectly balanced at pH 7.4, carrying the mineral fingerprint of every geological layer it has touched. This is the water as nature delivers it.","Beneath the visible spring lies an ancient aquifer — water that has rested deep within the mountain for over 200 years, accumulating rare minerals and a depth of character found in no other spring water in India."][i]||""}function C(i,a){const e=["❄️","🌬️","🪨","💧","🏺"],t=["#A8C8DE","#3A8AD1","#5790bb","#005CAB","#FCDC00"];return`
        <div class="relative flex items-center justify-center" style="width: 280px; height: 280px;">
            <div class="absolute inset-0 rounded-full" style="border: 1px solid ${t[i]}20;"></div>
            <div class="absolute rounded-full" style="inset: 20px; border: 1px solid ${t[i]}30;"></div>
            <div class="absolute rounded-full" style="inset: 40px; border: 1px solid ${t[i]}40;"></div>
            <div class="glass rounded-full flex flex-col items-center justify-center gap-3" style="width: 160px; height: 160px; border-color: ${t[i]}40;">
                <span style="font-size: 52px;">${e[i]}</span>
                <span style="font-family: var(--serif); font-size: 16px; color: ${t[i]};">${a.name}</span>
            </div>
        </div>
    `}async function W(){const i=document.getElementById("app");if(!i)return;const a=[{title:"Superior Hydration",desc:"Vedica's optimal mineral balance — especially magnesium and calcium — ensures your cells absorb water more efficiently than ordinary drinking water.",metric:"38%",metricLabel:"Better cellular absorption"},{title:"Skin Radiance",desc:"Naturally high in silica, Vedica Spring supports collagen synthesis and skin elasticity. Wellness practitioners regularly cite visible skin improvements within 30 days.",metric:"68mg/L",metricLabel:"Natural silica content"},{title:"Energy & Clarity",desc:"Proper hydration with balanced electrolytes directly supports cognitive function, energy levels, and metabolic rate. Vedica's minerality makes every sip count.",metric:"7.4",metricLabel:"pH — naturally alkaline"},{title:"Digestive Wellness",desc:"The natural alkalinity of Vedica Spring (pH 7.4) helps neutralize excess stomach acid and supports a healthy digestive environment.",metric:"180mg/L",metricLabel:"Natural bicarbonate"},{title:"Athletic Performance",desc:"Athletes who hydrate with mineral-rich spring water show improved recovery times and endurance. Vedica's natural electrolyte profile makes it the professional's choice.",metric:"24mg/L",metricLabel:"Natural magnesium"},{title:"Mindful Living",desc:"In Ayurvedic tradition, the quality of water is foundational to wellness. Vedica Spring, born from Himalayan sources, carries the prana — the life force — of the mountains.",metric:"200+",metricLabel:"Years of natural maturation"}];i.innerHTML=`
        <!-- HERO -->
        <section class="relative min-h-[75vh] flex items-end pb-20 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 50%, #1a3a5c 100%); padding-top: 120px;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 60% 50%, rgba(0,92,171,0.2) 0%, transparent 65%);"></div>

            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Wellness Philosophy</span>
                </div>
                <h1 class="fade-up delay-100 mb-6" style="font-family: var(--serif); font-size: clamp(48px, 8vw, 92px); color: #fff; font-weight: 300; line-height: 1.05; max-width: 18ch;">
                    Water is the<br>foundation of <em style="color: var(--vedica-yellow);">all</em> wellness
                </h1>
                <p class="fade-up delay-200 font-inter max-w-xl" style="color: rgba(168,200,222,0.7); font-size: 17px; line-height: 1.75;">
                    In Ayurveda, in modern science, in lived experience — the quality of your water determines the quality of your life. Vedica Spring exists for those who understand this.
                </p>
            </div>
        </section>

        <!-- WELLNESS BENEFITS -->
        <section class="py-32 px-6" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Health Benefits</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400;">
                        Six ways Vedica<br><em>transforms</em> your wellbeing
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${a.map((t,s)=>`
                        <div class="fade-up rounded-2xl overflow-hidden" style="animation-delay:${s*100}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <!-- Metric banner -->
                            <div class="px-7 py-5 flex items-center gap-4" style="background: linear-gradient(135deg, #EAF2F8, #F7FBFE); border-bottom: 1px solid rgba(0,92,171,0.08);">
                                <div>
                                    <div style="font-family: var(--serif); font-size: 32px; color: var(--vedica-blue); font-weight: 400; line-height: 1;">${t.metric}</div>
                                    <div class="eyebrow" style="color: rgba(10,26,42,0.45); font-size: 8px; margin-top: 2px;">${t.metricLabel}</div>
                                </div>
                            </div>
                            <div class="p-7">
                                <h3 class="font-inter font-semibold mb-3" style="color: var(--vedica-deep); font-size: 18px;">${t.title}</h3>
                                <p class="font-inter text-sm leading-relaxed" style="color: rgba(10,26,42,0.6);">${t.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- AYURVEDA SECTION -->
        <section class="py-32 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div class="slide-left">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold"></div>
                            <span class="eyebrow">Ancient Wisdom</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(36px, 4vw, 56px); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 24px;">
                            Vedic traditions<br>meet modern <em style="color: var(--vedica-yellow);">science</em>
                        </h2>
                        <p class="font-inter text-base leading-relaxed mb-6" style="color: rgba(168,200,222,0.65);">
                            In Ayurvedic medicine, Himalayan spring water has been revered for millennia as the highest form of water — carrying the prana (life force) of the sacred mountains.
                        </p>
                        <p class="font-inter text-base leading-relaxed mb-10" style="color: rgba(168,200,222,0.5);">
                            Modern hydrochemistry now confirms what ancient practitioners understood intuitively: water that passes through diverse geological strata acquires a mineral complexity that supports human health in ways that treated tap water or artificially mineralized water never can.
                        </p>
                        <div class="flex flex-col gap-4">
                            ${["Zero artificial mineralization","No UV or chemical treatment","Collected at natural artesian spring","Sealed at source — nothing added"].map(t=>`
                                <div class="flex items-center gap-3">
                                    <div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(252,220,0,0.15); border: 1px solid rgba(252,220,0,0.4);">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#FCDC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <span class="font-inter text-sm" style="color: rgba(168,200,222,0.75);">${t}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Right: Quote Card -->
                    <div class="slide-right">
                        <div class="glass-dark rounded-2xl p-10 relative" style="border-color: rgba(252,220,0,0.15);">
                            <div style="font-family: var(--serif); font-size: 80px; color: var(--vedica-yellow); line-height: 0.5; opacity: 0.3; position: absolute; top: 24px; left: 32px;">"</div>
                            <blockquote class="relative z-10" style="font-family: var(--serif); font-size: clamp(22px, 3vw, 32px); color: #fff; font-weight: 300; font-style: italic; line-height: 1.45; margin-bottom: 24px;">
                                Water is the driving force of all nature. It is the source of all life.
                            </blockquote>
                            <div class="flex items-center gap-3">
                                <div class="rule-gold"></div>
                                <span class="eyebrow" style="color: var(--vedica-glacial);">Leonardo da Vinci</span>
                            </div>

                            <!-- Decorative water drop -->
                            <div class="absolute bottom-6 right-8 opacity-20">
                                <svg width="60" height="75" viewBox="0 0 60 75" fill="none">
                                    <path d="M30 3C30 3 6 35 6 50C6 63.807 16.745 74 30 74C43.255 74 54 63.807 54 50C54 35 30 3 30 3Z" stroke="#FCDC00" stroke-width="1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURES (compact) -->
        <section class="py-20 px-6" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${z.slice(0,4).map((t,s)=>`
                        <div class="text-center fade-up" style="animation-delay: ${s*100}ms;">
                            <div class="mb-5 flex items-center justify-center w-12 h-12 rounded-xl mx-auto" style="background: rgba(0,92,171,0.06);">${t.svgIcon}</div>
                            <h3 class="font-inter font-semibold mb-2" style="color: var(--vedica-deep); font-size: 15px;">${t.title}</h3>
                            <p class="font-inter text-xs leading-relaxed" style="color: rgba(10,26,42,0.55);">${t.subtitle}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-28 px-6 text-center" style="background: var(--vedica-deep);">
            <div class="max-w-2xl mx-auto">
                <h2 class="fade-up mb-6" style="font-family: var(--serif); font-size: clamp(36px, 5vw, 54px); color: #fff; font-weight: 400;">
                    Begin your<br><em style="color: var(--vedica-yellow);">wellness journey</em>
                </h2>
                <p class="fade-up delay-100 font-inter mb-10" style="color: rgba(168,200,222,0.6); font-size: 16px; line-height: 1.7;">
                    Make Vedica Spring part of your daily wellness practice. Your body will know the difference.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 items-center justify-center fade-up delay-200">
                    <a href="/contact" class="btn-primary rounded-sm">Order Vedica Spring</a>
                    <a href="/our-water" class="btn-ghost rounded-sm">Our Water Story</a>
                </div>
            </div>
        </section>
    `,new u(.12).observeAll(".fade-up",".slide-left",".slide-right")}async function N(){const i=document.getElementById("app");if(!i)return;const a=[{title:"The Source Spring",subtitle:"Upper Himalayas · 3,200m",img:"/vedica/ezgif-frame-001.jpg",size:"col-span-2 row-span-2",category:"The Source"},{title:"Glacial Snowfields",subtitle:"Chapter I · Winter",img:"/vedica/ezgif-frame-006.jpg",size:"",category:"The Source"},{title:"Geological Strata",subtitle:"Chapter III · Stone",img:"/vedica/ezgif-frame-012.jpg",size:"",category:"The Journey"},{title:"Mountain Silence",subtitle:"Chapter II · Dawn",img:"/vedica/ezgif-frame-018.jpg",size:"",category:"The Journey"},{title:"Water Splash Studio",subtitle:"Chapter IV · Emergence",img:"/vedica/ezgif-frame-025.jpg",size:"",category:"Products"},{title:"Pure Himalayan Droplet",subtitle:"Pure & Alive",img:"/vedica/ezgif-frame-032.jpg",size:"",category:"Products"},{title:"Vedica Spring Bottle",subtitle:"Vedica Himalayan Water",img:"/vedica/ezgif-frame-051.jpg",size:"col-span-2",category:"Products"},{title:"Glacial Purity",subtitle:"The Journey Begins",img:"/vedica/ezgif-frame-040.jpg",size:"",category:"The Journey"},{title:"Green Sustainability",subtitle:"Sustainability · Greener Promise",img:"/vedica/ezgif-frame-045.jpg",size:"",category:"Sustainability"}];i.innerHTML=`
        <!-- HERO -->
        <section class="relative min-h-[50vh] flex items-end pb-16 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #1a3a5c 60%, #2e5f8a 100%); padding-top: 120px;">
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Visual Story</span>
                </div>
                <h1 class="fade-up delay-100 mb-4" style="font-family: var(--serif); font-size: clamp(44px, 8vw, 88px); color: #fff; font-weight: 300; line-height: 1.05;">
                    The world of<br><em style="color: var(--vedica-yellow);">Vedica Spring</em>
                </h1>
                <p class="fade-up delay-200 font-inter" style="color: rgba(168,200,222,0.7); font-size: 17px; max-width: 480px; line-height: 1.7;">
                    From the glacial peaks of the Himalayas to your glass — an authentic visual story captured across 51 frames.
                </p>
            </div>
        </section>

        <!-- GALLERY MASONRY -->
        <section class="py-20 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <!-- Category Filters -->
                <div class="flex flex-wrap gap-3 mb-12 fade-up" id="gallery-filters">
                    ${["All","The Source","The Journey","Sustainability","Products"].map((l,r)=>`
                        <button class="gallery-filter font-inter text-xs tracking-[0.18em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 ${r===0?"bg-vedica-yellow text-vedica-deep font-semibold":""}" style="${r!==0?"border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.6);":""}" data-filter="${l}">
                            ${l}
                        </button>
                    `).join("")}
                </div>

                <!-- Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] gap-4" id="gallery-grid">
                    ${a.map((l,r)=>`
                        <div class="gallery-item fade-up rounded-2xl overflow-hidden relative group cursor-pointer ${l.size}" data-category="${l.category}" style="animation-delay: ${r*80}ms; transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);" onmouseenter="this.style.transform='scale(1.02)'" onmouseleave="this.style.transform='scale(1)'">
                            <img src="${l.img}" alt="${l.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                            <!-- Overlay -->
                            <div class="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300" style="background: linear-gradient(0deg, rgba(10,26,42,0.85) 0%, transparent 60%);">
                                <h3 class="font-inter font-semibold text-white mb-1" style="font-size: 15px;">${l.title}</h3>
                                <p class="eyebrow" style="color: rgba(255,255,255,0.6); font-size: 9px;">${l.subtitle}</p>
                            </div>

                            <!-- Hover zoom icon -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background: rgba(0,92,171,0.25);">
                                <div class="w-12 h-12 rounded-full glass flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- INSTAGRAM SOCIAL FEED -->
        <section class="py-20 px-6 text-center" style="background: #F7F8FB;">
            <div class="max-w-4xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    <span class="eyebrow" style="color: var(--vedica-blue);">Community Stories</span>
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                </div>
                <h2 class="fade-up delay-100 mb-4" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 50px); color: var(--vedica-deep); font-weight: 400;">
                    Share your Vedica<br><em>moment</em>
                </h2>
                <p class="fade-up delay-200 font-inter mb-10" style="color: rgba(10,26,42,0.55); font-size: 16px; line-height: 1.7;">
                    Use #VedicaSpring and tag us @vedicaspring — your moments become part of our Himalayan story.
                </p>

                <!-- EmbedSocial Hashtag widget -->
                <div class="fade-up mb-10">
                    <div class="embedsocial-hashtag" data-ref="93273814acdcb0fe25fbd7b48513b268ce73b84f"></div>
                </div>

                <div class="fade-up delay-300 flex gap-4 justify-center flex-wrap">
                    <a href="https://www.instagram.com/vedicaspring/?hl=en" target="_blank" rel="noopener" class="btn-outline-blue rounded-full text-xs px-6 py-2.5">Follow on Instagram</a>
                    <a href="https://www.youtube.com/@vedicaspring1633" target="_blank" rel="noopener" class="btn-outline-blue rounded-full text-xs px-6 py-2.5">Watch on YouTube</a>
                </div>
            </div>
        </section>
    `,new u(.12).observeAll(".fade-up");const t=document.querySelectorAll(".gallery-filter"),s=document.querySelectorAll(".gallery-item");if(t.forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-filter");t.forEach(o=>{o.classList.remove("bg-vedica-yellow","text-vedica-deep","font-semibold"),o.style.border="1px solid rgba(255,255,255,0.15)",o.style.color="rgba(255,255,255,0.6)"}),l.classList.add("bg-vedica-yellow","text-vedica-deep","font-semibold"),l.style.border="none",l.style.color="",s.forEach(o=>{const d=o.getAttribute("data-category");r==="All"||d===r?o.style.display="block":o.style.display="none"})})}),!document.getElementById("EmbedSocialHashtagScript")){const l=document.createElement("script");l.id="EmbedSocialHashtagScript",l.src="https://embedsocial.com/cdn/ht.js",document.head.appendChild(l)}}async function q(){const i=document.getElementById("app");if(!i)return;i.innerHTML=`
        <!-- HERO -->
        <section class="relative flex items-end pb-20 overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 60%, #1a3a5c 100%); padding-top: 160px; padding-bottom: 80px;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 70% 50%, rgba(0,92,171,0.18) 0%, transparent 60%);"></div>
            <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div class="flex items-center gap-4 mb-8 fade-up">
                    <div class="rule-gold"></div>
                    <span class="eyebrow">Get in Touch</span>
                </div>
                <h1 class="fade-up delay-100 mb-4" style="font-family: var(--serif); font-size: clamp(44px, 7vw, 86px); color: #fff; font-weight: 300; line-height: 1.05;">
                    Let's talk<br><em style="color: var(--vedica-yellow);">water</em>
                </h1>
                <p class="fade-up delay-200 font-inter" style="color: rgba(168,200,222,0.7); font-size: 17px; max-width: 480px; line-height: 1.7;">
                    Whether you're ordering for home, enquiring about wholesale, or simply want to learn more — we'd love to hear from you.
                </p>
            </div>
        </section>

        <!-- MAIN CONTACT SECTION -->
        <section class="py-24 px-6" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Left: Form -->
                <div class="slide-left">
                    <h2 class="mb-8" style="font-family: var(--serif); font-size: 36px; color: #fff; font-weight: 400;">Send us a message</h2>

                    <form id="contact-form" class="flex flex-col gap-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label class="eyebrow text-white/50 block mb-2" for="contact-name">Your Name</label>
                                <input type="text" id="contact-name" class="vedica-input" placeholder="First Last" required>
                            </div>
                            <div>
                                <label class="eyebrow text-white/50 block mb-2" for="contact-email">Email Address</label>
                                <input type="email" id="contact-email" class="vedica-input" placeholder="you@example.com" required>
                            </div>
                        </div>

                        <div>
                            <label class="eyebrow text-white/50 block mb-2" for="contact-phone">Phone (Optional)</label>
                            <input type="tel" id="contact-phone" class="vedica-input" placeholder="+91 xxxxxxxxxx">
                        </div>

                        <div>
                            <label class="eyebrow text-white/50 block mb-2" for="contact-type">Enquiry Type</label>
                            <select id="contact-type" class="vedica-input" style="appearance: none; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'16\\' height=\\'16\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'rgba(255,255,255,0.4)\\' stroke-width=\\'2\\'><path d=\\'M6 9l6 6 6-6\\'/></svg>'); background-repeat: no-repeat; background-position: right 14px center; cursor: pointer;">
                                <option value="">Select enquiry type</option>
                                <option value="retail">Retail Order (Home Delivery)</option>
                                <option value="wholesale">Wholesale / Bulk Supply</option>
                                <option value="hospitality">Hospitality Partnership</option>
                                <option value="media">Media & Press</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label class="eyebrow text-white/50 block mb-2" for="contact-message">Your Message</label>
                            <textarea id="contact-message" class="vedica-input" placeholder="Tell us what you need..." rows="5" style="resize: vertical;" required></textarea>
                        </div>

                        <button type="submit" id="contact-submit" class="btn-primary justify-center rounded-sm mt-2">
                            <span id="submit-text">Send Message</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>

                        <!-- Success message (hidden) -->
                        <div id="form-success" class="hidden rounded-xl p-5 text-center" style="background: rgba(0,92,171,0.15); border: 1px solid rgba(0,92,171,0.3);">
                            <div class="text-3xl mb-2">💧</div>
                            <p class="font-inter font-semibold text-white mb-1">Message sent!</p>
                            <p class="font-inter text-sm" style="color: rgba(168,200,222,0.7);">We'll be in touch within 24 hours.</p>
                        </div>
                    </form>
                </div>

                <!-- Right: Info -->
                <div class="slide-right flex flex-col gap-8">
                    <!-- Contact Info Cards -->
                    ${[{icon:"📍",title:"Headquarters",lines:["Vedica Spring Waters Pvt. Ltd.","42 Himalayan Business Park","Dehradun, Uttarakhand 248001","India"]},{icon:"📞",title:"Phone",lines:["+91 135 266 0000","+91 98765 43210 (Wholesale)"]},{icon:"✉️",title:"Email",lines:["hello@vedicaspring.com","wholesale@vedicaspring.com"]},{icon:"⏰",title:"Hours",lines:["Monday – Saturday","9:00 AM – 6:00 PM IST"]}].map(t=>`
                        <div class="glass rounded-2xl p-6 flex gap-5">
                            <div class="text-3xl flex-shrink-0">${t.icon}</div>
                            <div>
                                <h3 class="eyebrow-gold mb-3">${t.title}</h3>
                                ${t.lines.map(s=>`<p class="font-inter text-sm leading-relaxed" style="color: rgba(168,200,222,0.7);">${s}</p>`).join("")}
                            </div>
                        </div>
                    `).join("")}

                    <!-- Wholesale CTA Card -->
                    <div class="rounded-2xl p-7 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(0,92,171,0.25), rgba(0,92,171,0.1)); border: 1px solid rgba(0,92,171,0.3);">
                        <div class="eyebrow-gold mb-3">Wholesale Partner Program</div>
                        <h3 class="font-inter font-semibold text-white mb-3 text-lg">Hotels, restaurants & wellness centres</h3>
                        <p class="font-inter text-sm leading-relaxed mb-5" style="color: rgba(168,200,222,0.65);">
                            Join 200+ premium hospitality partners across India. Volume pricing, white-label options, and dedicated account support available.
                        </p>
                        <a href="mailto:wholesale@vedicaspring.com" class="btn-primary rounded-sm inline-flex text-[10px] py-2.5 px-5">
                            Wholesale Enquiry
                        </a>
                        <!-- Decorative drop -->
                        <div class="absolute -bottom-4 -right-4 opacity-10">
                            <svg width="100" height="125" viewBox="0 0 80 100" fill="none">
                                <path d="M40 4C40 4 8 46 8 65C8 84.33 22.33 97 40 97C57.67 97 72 84.33 72 65C72 46 40 4 40 4Z" stroke="#FCDC00" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- LOCATIONS MAP PLACEHOLDER -->
        <section class="py-24 px-6" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Where to Find Us</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 50px); color: var(--vedica-deep); font-weight: 400;">
                        Vedica Spring is available<br>across <em>India</em>
                    </h2>
                </div>

                <!-- Availability Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    ${[{city:"Delhi NCR",status:"Available",count:"40+ stockists"},{city:"Mumbai",status:"Available",count:"35+ stockists"},{city:"Bangalore",status:"Available",count:"28+ stockists"},{city:"Hyderabad",status:"Available",count:"22+ stockists"},{city:"Chennai",status:"Available",count:"18+ stockists"},{city:"Kolkata",status:"Available",count:"15+ stockists"},{city:"Pune",status:"Available",count:"20+ stockists"},{city:"Dehradun",status:"Source City",count:"HQ & Direct"}].map((t,s)=>`
                        <div class="fade-up rounded-xl p-5 text-center" style="animation-delay:${s*60}ms; background: white; border: 1px solid rgba(0,92,171,0.08); box-shadow: 0 2px 12px rgba(0,92,171,0.06);">
                            <div style="font-size: 24px; margin-bottom: 8px;">${t.city==="Dehradun"?"🏔️":"📍"}</div>
                            <div class="font-inter font-semibold mb-1" style="color: var(--vedica-deep); font-size: 15px;">${t.city}</div>
                            <div class="eyebrow mb-2" style="color: ${t.status==="Source City"?"#FCDC00":"var(--vedica-blue)"}; font-size: 8px;">${t.status}</div>
                            <div class="font-inter text-xs" style="color: rgba(10,26,42,0.45);">${t.count}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>
    `,new u(.12).observeAll(".fade-up",".slide-left",".slide-right");const e=document.getElementById("contact-form");e==null||e.addEventListener("submit",t=>{t.preventDefault();const s=document.getElementById("contact-submit"),l=document.getElementById("submit-text"),r=document.getElementById("form-success");s.disabled=!0,l&&(l.textContent="Sending..."),setTimeout(()=>{e.reset(),s.style.display="none",r==null||r.classList.remove("hidden")},1500)})}async function G(){const i=document.getElementById("app");if(!i)return;i.innerHTML=`
        <!-- ══════════════════════════════════════════
             HERO — Full-bleed ambient video (ambient-video_tcpgcp.mp4)
        ══════════════════════════════════════════ -->
        <section class="relative overflow-hidden flex items-center justify-center" style="height:100vh; min-height:600px; background:#0A1A2A;">
            <!-- Ambient video background -->
            <video class="absolute inset-0 w-full h-full object-cover z-0" autoplay loop muted playsinline
                style="object-position: center 50%; filter: saturate(0.9) contrast(1.02);">
                <source src="/gallery/ambient-video_tcpgcp.mp4" type="video/mp4" />
            </video>

            <!-- Cinematic vignettes -->
            <div class="absolute inset-0 z-10 pointer-events-none" style="background: linear-gradient(180deg, rgba(8,22,40,0.35) 0%, rgba(8,22,40,0.12) 30%, transparent 55%);"></div>
            <div class="absolute inset-0 z-10 pointer-events-none" style="background: linear-gradient(0deg, rgba(8,22,40,0.65) 0%, rgba(8,22,40,0.2) 20%, transparent 45%);"></div>
            <div class="absolute inset-0 z-10 pointer-events-none" style="background: radial-gradient(ellipse at center, transparent 40%, rgba(8,22,40,0.18) 80%);"></div>

            <!-- Film grain overlay -->
            <div class="absolute inset-0 z-10 pointer-events-none" style="opacity:0.08; mix-blend-mode:overlay; background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");"></div>

            <!-- Edge hairlines -->
            <div class="hidden md:block absolute top-32 bottom-32 left-12 w-px pointer-events-none z-20" style="background: rgba(255,255,255,0.2);"></div>
            <div class="hidden md:block absolute top-32 bottom-32 right-12 w-px pointer-events-none z-20" style="background: rgba(255,255,255,0.2);"></div>

            <!-- Hero Content -->
            <div class="relative z-30 text-center px-6 max-w-4xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-8">
                    <div class="rule-gold"></div>
                    <span class="eyebrow" style="color:rgba(255,255,255,0.8);">Bisleri · Greener Promise</span>
                    <div class="rule-gold"></div>
                </div>
                <h1 style="font-family: var(--serif); font-size: clamp(48px, 9vw, 110px); font-weight: 300; color: #fff; line-height: 1.0;">
                    Sustainability<br><em style="color: var(--vedica-yellow);">at our heart</em>
                </h1>
                <p class="mt-8 font-inter font-light max-w-xl mx-auto" style="color:rgba(255,255,255,0.65); font-size: 18px; line-height: 1.75;">
                    We take more than water from the mountain. We take a responsibility — to protect it, restore it, and leave it better than we found it.
                </p>
                <!-- Scroll cue -->
                <div class="flex flex-col items-center gap-3 mt-12" style="font-family: var(--sans); font-size:9px; letter-spacing:0.32em; text-transform:uppercase; color:rgba(255,255,255,0.55);">
                    <div class="scroll-cue-line"></div>
                    <span>Scroll to explore</span>
                </div>
            </div>

            <!-- Bottom spec strip -->
            <div class="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-10 pointer-events-none"
                style="font-family: var(--sans); font-size:10px; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.65);">
                <span>Recyclable Packaging</span>
                <span class="w-1.5 h-1.5 rounded-full" style="background: var(--vedica-yellow);"></span>
                <span>Bottles for Change</span>
                <span class="w-1.5 h-1.5 rounded-full" style="background: var(--vedica-yellow);"></span>
                <span>Carbon Conscious</span>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             MAIN SUSTAINABILITY — Split Layout (mirrors original)
        ══════════════════════════════════════════ -->
        <section id="sustain" class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 30% 50%, rgba(0,92,171,0.05) 0%, transparent 55%);"></div>
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <!-- Left: Content -->
                    <div class="slide-left">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                            <span class="eyebrow" style="color: var(--vedica-blue);">Our Green Commitment</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); color: var(--vedica-deep); font-weight: 400; line-height: 1.1; margin-bottom: 24px;">
                            Sustainability<br><em>at our heart</em>
                        </h2>

                        <!-- Bisleri Greener Promise badge -->
                        <div class="flex items-center gap-4 mb-8 px-5 py-4 rounded-xl" style="background: linear-gradient(135deg, #EAF4FA, #F0F8FD); border: 1px solid rgba(0,92,171,0.12);">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: #005CAB;">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="#FCDC00"/>
                                </svg>
                            </div>
                            <div>
                                <div class="font-inter font-semibold text-sm" style="color: var(--vedica-deep);">Bisleri's Greener Promise</div>
                                <div class="font-inter text-xs" style="color: rgba(10,26,42,0.55);">Recycling more plastic than we put out</div>
                            </div>
                        </div>

                        <p class="font-inter leading-relaxed mb-6" style="color: rgba(10,26,42,0.65); font-size: 16px; line-height: 1.8;">
                            Vedica is part of Bisleri's Greener Promise — a commitment to recycle more plastic than we put out, ensuring a positive impact on the planet. Through initiatives like <strong style="color: var(--vedica-blue);">Bottles for Change</strong>, we champion responsible recycling and circular use of resources.
                        </p>
                        <p class="font-inter leading-relaxed mb-10" style="color: rgba(10,26,42,0.55); font-size: 15px; line-height: 1.8;">
                            With eco-friendly glass and fully recyclable PET packaging, Vedica reflects our vision to leave a cleaner, more sustainable world for generations to come.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="https://bisleri.com/greener-promise" target="_blank" rel="noopener" class="btn-primary rounded-sm">
                                Learn More
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <a href="/contact" class="btn-outline-blue rounded-sm">Partner With Us</a>
                        </div>
                    </div>

                    <!-- Right: Recycling GIF from official site -->
                    <div class="slide-right flex items-center justify-center">
                        <div class="relative">
                            <!-- Glow ring behind GIF -->
                            <div class="absolute inset-0 -m-8 rounded-full pointer-events-none"
                                style="background: radial-gradient(ellipse at center, rgba(0,92,171,0.12) 0%, transparent 70%); filter: blur(20px);"></div>
                            <img src="https://cdn.prod.website-files.com/69413f11814a3c1222a049cd/69afbd8ab2440beefdf5bb96_b4a7590654fc72d23f832ec23ec1422a_vedica_sus.gif"
                                alt="Vedica Sustainability — Bottles for Change"
                                class="relative z-10 w-full max-w-md"
                                style="filter: drop-shadow(0 20px 40px rgba(0,92,171,0.2));" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             SUSTAINABILITY STATS — Animated Counters
        ══════════════════════════════════════════ -->
        <section class="relative py-24 px-6" style="background: var(--vedica-deep);">
            <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 50%, rgba(0,92,171,0.15) 0%, transparent 60%);"></div>
            <div class="relative max-w-5xl mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    ${[{value:100,suffix:"%",label:"Recyclable Packaging",sub:"Glass & PET"},{value:120,suffix:"K+",label:"Trees Planted",sub:"Himalayan reforestation"},{value:0,suffix:"",label:"Artificial Additives",sub:"Always pure"},{value:50,suffix:"+",label:"Years of Green Pledge",sub:"Bisleri commitment"}].map((e,t)=>`
                        <div class="fade-up" style="animation-delay:${t*120}ms;">
                            <div style="font-family: var(--serif); font-size: clamp(40px, 6vw, 68px); color: var(--vedica-yellow); font-weight:400; line-height:1;">
                                <span data-counter="${e.value}" data-suffix="${e.suffix}">0${e.suffix}</span>
                            </div>
                            <div class="text-white font-inter font-medium mt-2 text-base">${e.label}</div>
                            <div class="font-inter text-xs mt-1" style="color: rgba(168,200,222,0.6);">${e.sub}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             THREE PILLARS — Packaging, Initiative, Planet
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: #F0F5F9;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-20">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Three Pillars of our Promise</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); color: var(--vedica-deep); font-weight:400;">
                        The <em>greener</em> way forward
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${[{num:"01",title:"Recyclable Packaging",desc:"Our glass bottles and PET containers are 100% recyclable. Every form of Vedica packaging is designed to complete its lifecycle responsibly.",tag:"Eco-Friendly Glass · PET"},{num:"02",title:"Bottles for Change",desc:"We actively participate in India's largest plastic recycling initiative — turning used bottles into usable materials through community-level collection drives.",tag:"Circular Economy"},{num:"03",title:"Greener Promise",desc:"As part of Bisleri's commitment, Vedica pledges to recycle more plastic than it puts out — creating a net-positive environmental footprint.",tag:"Net Positive Impact"}].map((e,t)=>`
                        <div class="fade-up rounded-2xl p-8" style="animation-delay:${t*140}ms; background:white; border:1px solid rgba(0,92,171,0.08); box-shadow: 0 4px 24px rgba(0,92,171,0.06);">
                            <div style="font-family: var(--serif); font-size: 52px; color: var(--vedica-blue); font-weight:400; line-height:1; margin-bottom:12px;">${e.num}</div>
                            <h3 class="font-inter font-semibold text-lg mb-3" style="color: var(--vedica-deep);">${e.title}</h3>
                            <p class="font-inter text-sm leading-relaxed mb-5" style="color: rgba(10,26,42,0.55);">${e.desc}</p>
                            <div class="inline-block px-3 py-1 rounded-full text-xs font-inter" style="background: rgba(0,92,171,0.08); color: var(--vedica-blue); letter-spacing:0.05em;">${e.tag}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             CSR — Be Kind to Every Kind (Video section)
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="slide-left">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold"></div>
                            <span class="eyebrow" style="color: rgba(255,255,255,0.7);">CSR Initiative</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); color: #fff; font-weight:400; margin-bottom: 20px;">
                            Be Kind to<br><em style="color: var(--vedica-yellow);">Every Kind</em>
                        </h2>
                        <p class="font-inter leading-relaxed mb-8" style="color: rgba(168,200,222,0.7); font-size:16px; line-height:1.8;">
                            At Vedica Himalayan Spring Water, kindness towards animals is more than a belief — it's a responsibility. Through our initiative, we support organisations working tirelessly to rescue, shelter and care for animals across India.
                        </p>
                        <div class="flex flex-col gap-4">
                            ${["Rescue & rehabilitation support","Shelter care funding","Animal welfare awareness campaigns","Partnering with NGOs across India"].map(e=>`
                                <div class="flex items-center gap-3">
                                    <div class="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style="background: rgba(252,220,0,0.15); border: 1px solid rgba(252,220,0,0.35);">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#FCDC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </div>
                                    <span class="font-inter text-sm" style="color: rgba(255,255,255,0.7);">${e}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- CSR Vedica bottle reference video -->
                    <div class="slide-right">
                        <div class="relative rounded-2xl overflow-hidden" style="box-shadow: 0 24px 60px rgba(0,0,0,0.4);">
                            <video class="w-full object-cover" autoplay loop muted playsinline style="max-height: 500px; object-position: center;">
                                <source src="/gallery/Exact_Vedica_bottle_reference.mp4" type="video/mp4" />
                            </video>
                            <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(0deg, rgba(10,26,42,0.4) 0%, transparent 40%);"></div>
                            <div class="absolute bottom-6 left-6">
                                <div class="eyebrow mb-1" style="color:rgba(255,255,255,0.6);">Vedica Spring</div>
                                <div style="font-family:var(--serif); font-size:22px; color:#fff; font-weight:400;">Pure. Natural. Alive.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             SOCIAL FEED — Stories in Every Drop
             EmbedSocial hashtag widget from vedicaspring.com
        ══════════════════════════════════════════ -->
        <section id="stories" class="relative py-32 px-6 overflow-hidden" style="background: #F7F8FB;">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="flex items-center justify-center gap-4 mb-6 fade-up">
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                        <span class="eyebrow" style="color: var(--vedica-blue);">Stories in Every Drop</span>
                        <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    </div>
                    <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 5vw, 54px); color: var(--vedica-deep); font-weight:400;">
                        From the community,<br><em>for the community</em>
                    </h2>
                    <p class="fade-up delay-200 font-inter max-w-lg mx-auto mt-4" style="color: rgba(10,26,42,0.55); font-size:16px; line-height:1.7;">
                        From the stillness of peaks to the rhythm of life — echoes of Vedica's journey on social.
                    </p>
                </div>

                <!-- Instagram Embed — Official EmbedSocial widget from vedicaspring.com -->
                <div class="fade-up mb-12" style="min-height:400px;">
                    <div class="embedsocial-hashtag" data-ref="93273814acdcb0fe25fbd7b48513b268ce73b84f"></div>
                </div>

                <!-- Social Links — animated pill buttons (matching original style) -->
                <div class="flex items-center justify-center flex-wrap gap-4 mt-10 fade-up delay-200">
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/vedicaspring/?hl=en" target="_blank" rel="noopener"
                        class="social-pill-btn group"
                        style="display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; border:1px solid rgba(0,92,171,0.2); background:white; text-decoration:none; transition: all 0.4s ease; box-shadow: 0 2px 12px rgba(0,92,171,0.08);"
                        onmouseenter="this.style.background='#18307a'; this.style.borderColor='#18307a'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#fff')); this.querySelector('.social-label').style.color='#fff';"
                        onmouseleave="this.style.background='white'; this.style.borderColor='rgba(0,92,171,0.2)'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#18307A')); this.querySelector('.social-label').style.color='#18307A';">
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M10.125 0H3.375C1.512 0 0 1.512 0 3.375V10.125C0 11.988 1.512 13.5 3.375 13.5H10.125C11.988 13.5 13.5 11.988 13.5 10.125V3.375C13.5 1.512 11.988 0 10.125 0ZM6.75 10.125C4.887 10.125 3.375 8.613 3.375 6.75C3.375 4.887 4.887 3.375 6.75 3.375C8.613 3.375 10.125 4.887 10.125 6.75C10.125 8.613 8.613 10.125 6.75 10.125ZM10.3613 3.7935C9.99 3.7935 9.68625 3.48975 9.68625 3.1185C9.68625 2.74725 9.99 2.4435 10.3613 2.4435C10.7325 2.4435 11.0363 2.74725 11.0363 3.1185C11.0363 3.48975 10.7325 3.7935 10.3613 3.7935Z" fill="#18307A"/><path d="M6.7501 8.77461C7.86847 8.77461 8.7751 7.86799 8.7751 6.74961C8.7751 5.63123 7.86847 4.72461 6.7501 4.72461C5.63172 4.72461 4.7251 5.63123 4.7251 6.74961C4.7251 7.86799 5.63172 8.77461 6.7501 8.77461Z" fill="#18307A"/></svg>
                        <span class="social-label font-inter font-semibold text-sm" style="color: #18307A; transition: color 0.3s;">Instagram</span>
                    </a>

                    <!-- YouTube -->
                    <a href="https://www.youtube.com/@vedicaspring1633" target="_blank" rel="noopener"
                        class="social-pill-btn"
                        style="display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; border:1px solid rgba(0,92,171,0.2); background:white; text-decoration:none; transition: all 0.4s ease; box-shadow: 0 2px 12px rgba(0,92,171,0.08);"
                        onmouseenter="this.style.background='#18307a'; this.style.borderColor='#18307a'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#fff')); this.querySelector('.social-label').style.color='#fff';"
                        onmouseleave="this.style.background='white'; this.style.borderColor='rgba(0,92,171,0.2)'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#18307A')); this.querySelector('.social-label').style.color='#18307A';">
                        <svg width="22" height="14" viewBox="0 0 18 12" fill="none"><path d="M17.0593 3.21687C16.9536 2.19651 16.7262 1.06854 15.8892 0.475765C15.2409 0.0160819 14.3888-0.000912106 13.5933 3.18009e-05C11.9118 3.18009e-05 10.2293 0.00286721 8.54772 0.00381112C6.93034 0.00569893 5.31296 0.00664169 3.69558 0.0085295C3.01994 0.0085295 2.36317-0.0433865 1.73566 0.249225C1.19684 0.500304 0.775042 0.977925 0.521206 1.50934C0.169232 2.24842 0.0956324 3.08567 0.053169 3.90309C-0.0251522 5.39163-0.0166595 6.88395 0.0767598 8.37155C0.145645 9.45704 0.320213 10.6567 1.1591 11.3486C1.90268 11.9612 2.95199 11.9914 3.91638 11.9924C6.97752 11.9952 10.0396 11.998 13.1017 11.9999C13.4942 12.0009 13.9038 11.9933 14.3039 11.9499C15.0908 11.8649 15.841 11.6394 16.3468 11.056C16.8573 10.468 16.9885 9.6496 17.0659 8.87465C17.2546 6.99439 17.2527 5.09619 17.0593 3.21687ZM6.77747 8.63584V3.36412L11.3409 5.99951L6.77747 8.63584Z" fill="#18307A"/></svg>
                        <span class="social-label font-inter font-semibold text-sm" style="color:#18307A; transition:color 0.3s;">YouTube</span>
                    </a>

                    <!-- Facebook -->
                    <a href="https://www.facebook.com/VedicaSpring/" target="_blank" rel="noopener"
                        class="social-pill-btn"
                        style="display:inline-flex; align-items:center; gap:10px; padding:12px 22px; border-radius:999px; border:1px solid rgba(0,92,171,0.2); background:white; text-decoration:none; transition: all 0.4s ease; box-shadow: 0 2px 12px rgba(0,92,171,0.08);"
                        onmouseenter="this.style.background='#18307a'; this.style.borderColor='#18307a'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#fff')); this.querySelector('.social-label').style.color='#fff';"
                        onmouseleave="this.style.background='white'; this.style.borderColor='rgba(0,92,171,0.2)'; this.querySelectorAll('path').forEach(p=>p.setAttribute('fill','#18307A')); this.querySelector('.social-label').style.color='#18307A';">
                        <svg width="10" height="18" viewBox="0 0 8 14" fill="none"><path d="M4.96317 3.15463V5.12843H7.40413L7.01761 7.78723H4.96317V13.913C4.55126 13.9702 4.12984 14 3.70207 14C3.20829 14 2.7234 13.9606 2.2512 13.8845V7.78723H0V5.12843H2.2512V2.71341C2.2512 1.21513 3.46533 0 4.9638 0V0.00127097C4.96825 0.00127097 4.97205 0 4.9765 0H7.40477V2.29948H5.81808C5.34651 2.29948 4.9638 2.6823 4.9638 3.154L4.96317 3.15463Z" fill="#18307A"/></svg>
                        <span class="social-label font-inter font-semibold text-sm" style="color:#18307A; transition:color 0.3s;">Facebook</span>
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             VEDICA — Life Full of Altitude (YouTube Embed)
        ══════════════════════════════════════════ -->
        <section class="relative py-32 px-6 overflow-hidden" style="background: var(--vedica-deep);">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <!-- YouTube embed -->
                    <div class="slide-left">
                        <div class="relative rounded-2xl overflow-hidden" style="padding-top: 56.25%; box-shadow: 0 24px 60px rgba(0,0,0,0.5);">
                            <iframe
                                class="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/B6PLJzSFLb0?rel=0&controls=1&autoplay=0&mute=0"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                                title="A Life Full Of Altitude | ft Rana Daggubati | Vedica Spring">
                            </iframe>
                        </div>
                    </div>

                    <!-- Quote / editorial -->
                    <div class="slide-right text-white">
                        <div class="flex items-center gap-4 mb-8">
                            <div class="rule-gold"></div>
                            <span class="eyebrow" style="color: rgba(255,255,255,0.7);">A Life Full of Altitude</span>
                        </div>
                        <h2 style="font-family: var(--serif); font-size: clamp(36px, 5vw, 58px); font-weight:300; line-height:1.1; margin-bottom:20px;">
                            <em style="color: var(--vedica-yellow);">Vedica</em><br>a life full<br>of altitude
                        </h2>
                        <p class="font-inter leading-relaxed mb-8" style="color: rgba(168,200,222,0.7); font-size:16px; line-height:1.8;">
                            Featuring Rana Daggubati — a new expression of the good life, high above the world, where every sip carries the soul of the Himalayas.
                        </p>
                        <blockquote class="glass rounded-xl p-6 mb-8" style="border-left: 3px solid var(--vedica-yellow);">
                            <p style="font-family: var(--serif); font-size: 22px; font-style:italic; color:#fff; line-height:1.5;">
                                "Where silence holds the sky, a snowflake remembers its first breath."
                            </p>
                            <cite class="font-inter text-xs mt-3 block" style="color: rgba(168,200,222,0.6); letter-spacing:0.15em; text-transform:uppercase;">— Chapter 01 · Snow</cite>
                        </blockquote>
                        <a href="https://www.youtube.com/@vedicaspring1633" target="_blank" rel="noopener" class="btn-primary rounded-sm">
                            Watch on YouTube
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════════════════════════════════════
             CTA
        ══════════════════════════════════════════ -->
        <section class="py-28 px-6 text-center" style="background: linear-gradient(145deg, #EAF4FA, #F7F8FB);">
            <div class="max-w-2xl mx-auto">
                <div class="flex items-center justify-center gap-4 mb-8 fade-up">
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                    <span class="eyebrow" style="color: var(--vedica-blue);">Together, We Can Do More</span>
                    <div class="rule-gold" style="background: var(--vedica-blue);"></div>
                </div>
                <h2 class="fade-up delay-100" style="font-family: var(--serif); font-size: clamp(32px, 4vw, 52px); color: var(--vedica-deep); font-weight:400; margin-bottom:20px;">
                    Be part of the<br><em>greener promise</em>
                </h2>
                <div class="fade-up delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://bisleri.com/greener-promise" target="_blank" rel="noopener" class="btn-primary rounded-sm">Bisleri Greener Promise</a>
                    <a href="/contact" class="btn-outline-blue rounded-sm">Order Vedica Spring</a>
                </div>
            </div>
        </section>
    `,Y(),new u(.1).observeAll(".fade-up",".slide-left",".slide-right"),w()}function Y(){if(document.getElementById("EmbedSocialHashtagScript"))return;const i=document.createElement("script");i.id="EmbedSocialHashtagScript",i.src="https://embedsocial.com/cdn/ht.js",document.head.appendChild(i)}async function Z(){const i=document.getElementById("app");i&&(i.innerHTML=`
        <section class="min-h-screen flex items-center justify-center px-6 text-center overflow-hidden" style="background: linear-gradient(145deg, #0A1A2A 0%, #0D2540 50%, #1a3a5c 100%);">
            <!-- Decorative rings -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="rounded-full" style="width: 600px; height: 600px; border: 1px solid rgba(0,92,171,0.12); position: absolute;"></div>
                <div class="rounded-full" style="width: 400px; height: 400px; border: 1px solid rgba(0,92,171,0.16); position: absolute;"></div>
                <div class="rounded-full" style="width: 220px; height: 220px; border: 1px solid rgba(0,92,171,0.2); position: absolute;"></div>
            </div>

            <div class="relative z-10 flex flex-col items-center gap-6">
                <!-- Drop icon -->
                <svg width="64" height="80" viewBox="0 0 64 80" fill="none" class="animate-breathe opacity-60">
                    <path d="M32 4C32 4 8 38 8 56C8 69.255 18.745 78 32 78C45.255 78 56 69.255 56 56C56 38 32 4 32 4Z" stroke="#A8C8DE" stroke-width="1.5" fill="none"/>
                </svg>

                <div style="font-family: var(--serif); font-size: clamp(80px, 15vw, 140px); color: rgba(255,255,255,0.08); font-weight: 400; line-height: 1; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">404</div>

                <div class="relative">
                    <p class="eyebrow mb-4" style="color: var(--vedica-glacial);">Lost in the Himalayas</p>
                    <h1 style="font-family: var(--serif); font-size: clamp(36px, 5vw, 60px); color: #fff; font-weight: 400; line-height: 1.1; margin-bottom: 16px;">
                        This spring has<br><em style="color: var(--vedica-yellow);">run dry</em>
                    </h1>
                    <p class="font-inter max-w-md mx-auto mb-8" style="color: rgba(168,200,222,0.6); font-size: 16px; line-height: 1.7;">
                        The page you're looking for has moved or doesn't exist. Let us guide you back to the source.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a href="/" class="btn-primary rounded-sm">Return Home</a>
                        <a href="/contact" class="btn-ghost rounded-sm">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    `)}const U=new j;document.addEventListener("DOMContentLoaded",async()=>{new F,new I,c.register("/","Vedica Spring | Pure Himalayan Natural Spring Water",O),c.register("/about","Our Story | Vedica Spring",D),c.register("/our-water","Our Water — Five Chapters | Vedica Spring",R),c.register("/wellness","Wellness Benefits | Vedica Spring",W),c.register("/sustainability","Sustainability & CSR | Vedica Spring",G),c.register("/gallery","Gallery | Vedica Spring",N),c.register("/contact","Contact & Order | Vedica Spring",q),c.register("/404","404 Not Found | Vedica Spring",Z),c.init(),setTimeout(()=>{U.hide()},1800)});

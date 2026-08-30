import {react} from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="overflow-hidden bg-slate-950 text-white">

            {/* ================= HERO SECTION ================= */}
            <section className="relative isolate">
                
                {/* Background Effects */}
                <div className="absolute -top-40 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[120px]" />
                <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

                <div className="mx-auto grid min-h-180 max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

                    {/* Hero Content */}
                    <div className="text-center lg:text-left">

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
                            Modern Web Development
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                            We Build
                            <span className="block bg-linear-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                                Digital Experiences
                            </span>
                            That Matter.
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
                            We create fast, modern, responsive and professional
                            websites that help businesses establish a powerful
                            online presence and reach more customers.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

                            <Link
                                to="/about"
                                className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/40"
                            >
                                Explore Our Work
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:bg-white/10"
                            >
                                Let's Talk
                            </Link>

                        </div>

                        {/* Trust Points */}
                        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400 lg:justify-start">
                            <span className="flex items-center gap-2">
                                <span className="text-orange-400">✓</span>
                                Responsive Design
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="text-orange-400">✓</span>
                                SEO Friendly
                            </span>

                            <span className="flex items-center gap-2">
                                <span className="text-orange-400">✓</span>
                                Fast Performance
                            </span>
                        </div>

                    </div>

                    {/* Hero Image */}
                    <div className="relative mx-auto w-full max-w-xl">

                        <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[90px]" />

                        <div className="relative rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

                            <img
                                src="https://unpkg.com/undraw-svg@1.0.0/svgs/remote-worker.svg"
                                alt="Developer working remotely"
                                className="mx-auto w-full max-w-md drop-shadow-2xl transition duration-700 hover:scale-105"
                            />

                            {/* Floating Card */}
                            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-10">
                                <p className="text-xs text-slate-400">
                                    Project Status
                                </p>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
                                    <span className="font-semibold">
                                        Ready to Build
                                    </span>
                                </div>
                            </div>

                            {/* Floating Tech Card */}
                            <div className="absolute -right-5 -top-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-10">
                                <p className="text-xs text-slate-400">
                                    Technology
                                </p>
                                <p className="mt-1 font-bold text-orange-400">
                                    React + Modern UI
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* ================= STATS ================= */}
            <section className="border-y border-white/10 bg-white/3">
                <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">

                    <div className="p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400">
                            100%
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Responsive
                        </p>
                    </div>

                    <div className="p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400">
                            SEO
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Optimized
                        </p>
                    </div>

                    <div className="border-t border-white/10 p-6 text-center sm:border-t-0">
                        <h3 className="text-3xl font-bold text-orange-400">
                            24/7
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Accessible
                        </p>
                    </div>

                    <div className="border-t border-white/10 p-6 text-center sm:border-t-0">
                        <h3 className="text-3xl font-bold text-orange-400">
                            Fast
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                            Performance
                        </p>
                    </div>

                </div>
            </section>


            {/* ================= SERVICES ================= */}
            <section className="bg-slate-950 px-6 py-24 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                            WHAT WE DO
                        </span>

                        <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
                            Everything You Need
                            <span className="block text-orange-400">
                                To Grow Online
                            </span>
                        </h2>

                        <p className="mt-5 leading-8 text-slate-400">
                            From designing your website to improving its visibility,
                            we focus on creating digital solutions that support
                            your business goals.
                        </p>

                    </div>


                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {/* Card 1 */}
                        <div className="group rounded-3xl border border-white/10 bg-white/4 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl transition group-hover:bg-orange-500/20">
                                💻
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                Web Development
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Modern websites built with clean code,
                                responsive layouts and smooth user experiences.
                            </p>

                        </div>


                        {/* Card 2 */}
                        <div className="group rounded-3xl border border-white/10 bg-white/4 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                                🎨
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                UI / UX Design
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Clean and attractive interfaces designed to
                                make your website simple and enjoyable to use.
                            </p>

                        </div>


                        {/* Card 3 */}
                        <div className="group rounded-3xl border border-white/10 bg-white/4 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                                🔎
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                SEO Optimization
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Search-friendly websites structured to help
                                customers discover your business online.
                            </p>

                        </div>


                        {/* Card 4 */}
                        <div className="group rounded-3xl border border-white/10 bg-white/4 p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/5">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                                🚀
                            </div>

                            <h3 className="mt-6 text-xl font-bold">
                                Performance
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                Optimized experiences designed for speed,
                                reliability and smooth browsing.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= CTA ================= */}
            <section className="relative overflow-hidden bg-linear-to-r from-orange-600 to-orange-500 px-6 py-20">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

                <div className="relative mx-auto max-w-4xl text-center">

                    <h2 className="text-3xl font-extrabold sm:text-5xl">
                        Ready To Build Something Great?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-orange-50/90">
                        Let's turn your idea into a professional website that
                        looks great, performs smoothly and helps your business
                        grow online.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-3.5 font-bold text-orange-600 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        Start Your Project
                        <span className="ml-2">
                            →
                        </span>
                    </Link>

                </div>

            </section>

        </main>
    );
}

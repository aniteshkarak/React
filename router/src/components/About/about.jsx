import {react} from 'react'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-100 py-20 sm:py-28">

            {/* Decorative Background Elements */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold tracking-wide text-orange-700">
                        ABOUT US
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Turning Ideas Into
                        <span className="block text-orange-600">
                            Digital Experiences
                        </span>
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        We create modern websites and digital solutions that help
                        businesses build a stronger online presence and connect
                        with their customers.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Image Side */}
                    <div className="relative">

                        {/* Decorative Card */}
                        <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-orange-400 to-orange-600 opacity-20 blur-2xl"></div>

                        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-3 shadow-2xl backdrop-blur">

                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                                alt="Professional web development team"
                                className="h-105 w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/50 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-xl text-white">
                                        ✓
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            Quality First
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Built with attention to detail
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Decorative Dot */}
                        <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-2xl border-4 border-white bg-orange-500 shadow-lg"></div>
                    </div>

                    {/* Text Side */}
                    <div>

                        <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
                            What We Do
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            We Build Websites That Work For Your Business
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            A website should do more than simply look good. It should
                            communicate your brand, provide a great experience to
                            visitors, and help turn visitors into customers.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            We focus on building fast, responsive, modern, and
                            user-friendly websites that work seamlessly across
                            smartphones, tablets, and desktops.
                        </p>

                        {/* Feature List */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            <div className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                                    ⚡
                                </div>

                                <h3 className="font-bold text-gray-900">
                                    Fast & Responsive
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Smooth performance and responsive design on every device.
                                </p>
                            </div>

                            <div className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                                    🎨
                                </div>

                                <h3 className="font-bold text-gray-900">
                                    Modern Design
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Clean, attractive interfaces designed around your brand.
                                </p>
                            </div>

                            <div className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                                    🔍
                                </div>

                                <h3 className="font-bold text-gray-900">
                                    SEO Friendly
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Structured to help your business become easier to discover online.
                                </p>
                            </div>

                            <div className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                                    🛠️
                                </div>

                                <h3 className="font-bold text-gray-900">
                                    Ongoing Support
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Reliable support to keep your website running smoothly.
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex flex-wrap items-center gap-4">

                            <Link
                                to="/contact"
                                className="inline-flex items-center rounded-xl bg-orange-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-600/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl"
                            >
                                Let's Work Together
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <Link
                                to="/"
                                className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 shadow-sm transition duration-300 hover:border-orange-300 hover:text-orange-600"
                            >
                                Explore More
                            </Link>

                        </div>

                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 grid gap-5 sm:grid-cols-3">

                    <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-3xl font-extrabold text-orange-600">
                            100%
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600">
                            Responsive Design
                        </p>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-3xl font-extrabold text-orange-600">
                            24/7
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600">
                            Website Accessibility
                        </p>
                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-3xl font-extrabold text-orange-600">
                            SEO
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-600">
                            Search-Friendly Structure
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}


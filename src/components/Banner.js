import React from 'react'

const Banner = () => {
    return (
        <section className="bg-black text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Understand User Flow.

                        <span className="sm:block"> Increase Conversion. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-black hover:ring-2 focus:outline-none focus:ring hover:ring-yellow-400"
                            href="/get-started"
                        >
                            Get Started
                        </a>

                        <a
                            className="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-black hover:ring-2 focus:outline-none focus:ring hover:ring-yellow-400"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
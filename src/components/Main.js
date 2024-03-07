import React from 'react'

const Main = () => {
    return (
        <section className='bg-black'>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="House"
                                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-800">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-800"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                debitis.
                            </h2>

                            <p className="mt-4 text-white">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                                molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                                dolores provident quaerat totam eos, aperiam architecto eius quis
                                quibusdam fugiat dicta.
                            </p>

                            <a
                                href="/"
                                className="mt-8 inline-block rounded border border-black bg-gradient-to-r from-red-300 via-red-500 to-red-800 text-white px-12 py-3 text-sm font-medium "
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
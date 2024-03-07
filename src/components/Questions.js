// import React from 'react'

// const Questions = () => {
//     return (
//         <div className="space-y-4 bg-black">
//             <div
//                 className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
//             >
//                 <h2 className="text-3xl text-white font-bold sm:text-4xl">Skill set related questions ... </h2>
//             </div>
//             <details
//                 className="group border-s-4 border-red-500 hover:border-green-400 bg-gray-50 p-6 dark:bg-black [&_summary::-webkit-details-marker]:hidden"
//                 open
//             >
//                 <summary className="flex cursor-pointer items-center justify-between gap-1.5">
//                     <h2 className="text-lg font-medium text-gray-900 dark:text-white">
//                         Lorem ipsum dolor sit amet consectetur adipisicing?
//                     </h2>

//                     <span
//                         className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </span>
//                 </summary>

//                 <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
//                     molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
//                     voluptate dicta quo officiis explicabo consequuntur distinctio corporis
//                     earum similique!
//                 </p>
//             </details>

//             <details
//                 className="group border-s-4 border-red-500 hover:border-green-400 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
//             >
//                 <summary className="flex cursor-pointer items-center justify-between gap-1.5">
//                     <h2 className="text-lg font-medium text-gray-900 dark:text-white">
//                         Lorem ipsum dolor sit amet consectetur adipisicing?
//                     </h2>

//                     <span
//                         className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </span>
//                 </summary>

//                 <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
//                     molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
//                     voluptate dicta quo officiis explicabo consequuntur distinctio corporis
//                     earum similique!
//                 </p>
//             </details>
//         </div>
//     )
// }

// export default Questions



import React from 'react';

const Questions = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="space-y-4 max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl text-white font-bold sm:text-4xl">Skill set related questions ...</h2>

                <details className="group border-2 border-red-500 hover:border-green-400 bg-gray-50 p-4 dark:bg-gray-900">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base font-medium text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                        <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>

                <details className="group border-2 border-red-500 hover:border-green-400 bg-gray-50 p-4 dark:bg-gray-900">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base font-medium text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                        <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
                <details className="group border-2 border-red-500 hover:border-green-400 bg-gray-50 p-4 dark:bg-gray-900">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base font-medium text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                        <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
                <details className="group border-2 border-red-500 hover:border-green-400 bg-gray-50 p-4 dark:bg-gray-900">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base font-medium text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                        <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
                <details className="group border-2 border-red-500 hover:border-green-400 bg-gray-50 p-4 dark:bg-gray-900">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-base font-medium text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                        <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab hic veritatis
                        molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                        voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                    </p>
                </details>
            </div>
        </div>
    );
};

export default Questions;

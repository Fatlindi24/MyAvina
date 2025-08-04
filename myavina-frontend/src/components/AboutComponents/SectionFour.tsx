"use client"

import React from 'react'

const SectionFour = () => {
    return (
        <div>

            <section className="py-16 bg-gray-50">
                <div className="mx-auto px-4 max-w-[1400px] space-y-16">
                    {/* How We Help */}
                    <div className="text-center space-y-4">
                        <h3 className="text-4xl font-bold text-gray-900">How We Help</h3>
                        <p className="text-lg text-gray-700">
                            We make menopause care simple, safe, and personal<br />
                            — designed around you.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Item 1 */}
                        <div className="flex flex-col items-start text-left space-y-4">
                            <div className="bg-white p-4 rounded-full">
                                <img
                                    src="/aboutpage/icon1.png"
                                    alt="Personalized Care"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">Personalized Care</h4>
                            <p className="text-gray-700">
                                Doctor-prescribed, customized hormone therapy
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-start text-left space-y-4">
                            <div className="bg-white p-4 rounded-full">
                                <img
                                    src="/aboutpage/icon2.png"
                                    alt="Easy Online Visits"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">Easy Online Visits</h4>
                            <p className="text-gray-700">
                                Simple telehealth & free follow-ups anytime
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col items-start text-left space-y-4">
                            <div className="bg-white p-4 rounded-full">
                                <img
                                    src="/aboutpage/icon3.png"
                                    alt="Discreet Delivery"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">Discreet Delivery</h4>
                            <p className="text-gray-700">
                                Your treatments shipped to your door, always private
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-col items-start text-left space-y-4">
                            <div className="bg-white p-4 rounded-full">
                                <img
                                    src="/aboutpage/icon4.png"
                                    alt="Ongoing Support"
                                    className="w-12 h-12"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">Ongoing Support</h4>
                            <p className="text-gray-700">
                                Menopause specialists by your side whenever you need
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-t border-purple-200" />

                    {/* Coast to Coast */}
                    <div className="text-center space-y-4">
                        <h3 className="text-4xl font-bold text-gray-900">
                            Here for Women Coast to Coast
                        </h3>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            MyAvina is growing fast! We currently serve many states and are expanding
                            to reach more women every month. See if we’re available where you live.
                        </p>
                    </div>

                    {/* Notification Form */}
                    <form className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full md:w-1/3 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900"
                        />
                        <select
                            defaultValue=""
                            className="w-full md:w-1/3 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900"
                        >
                            <option value="" disabled>
                                Select State
                            </option>
                            {/* <option value="NY">New York</option> */}
                            {/* Add your state options here */}
                        </select>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-14 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
                        >
                            Get Notified
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default SectionFour

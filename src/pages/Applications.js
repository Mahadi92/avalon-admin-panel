import React from 'react';
import { Link } from 'react-router-dom';

const appData = [
    {
        appName: "Avalon Hosting Services",
        link: "ahs",
        img: "Avalon-Red-Logo.svg"
    },
    {
        appName: "Privacy Pie",
        link: "pp",
        img: "privacyPie.png"
    },
    {
        appName: "Avalon Incorporation",
        link: "ai",
        img: "Avalon-Green-Logo.svg"
    }
]

const Applications = () => {
    return (
        <section>
            <h1 className="text-8xl text-center py-10">All Applications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-4/5 m-auto">
                {
                    appData.map(app => {
                        const { appName, link, img } = app
                        return (
                            <Link to={`/${link}`} className="block px-2 py-5 text-center">
                                <div className="bg-gray-100 rounded-xl px-2 py-4 hover:bg-gray-200">
                                    <img src={require(`../image/app-logo/${img}`).default} className="w-1/2 m-auto mb-5" alt="" />
                                    <h2 className="text-4xl font-extrabold">{appName}</h2>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Applications;
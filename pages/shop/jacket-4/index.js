/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import BackButton from 'src/components/back-button';

const data = [
    {
        id: 1,
        src: '/media/images/tissues/viscose.png',
        description: () => (
            <p className="has-text-hdarkred">
                crepe viscose
                <br />
                70% polyester
                <br />
                26% viscose
                <br />
                4% élasthane
            </p>
        ),
    },
    {
        id: 2,
        src: '/media/images/tissues/satin.png',
        description: () => (
            <p className="has-text-hdarkred">
                satin crepe de soie
                <br />
                100% soie
            </p>
        ),
    },
    {
        id: 3,
        src: '/media/images/tissues/georgette.png',
        description: () => (
            <p className="has-text-hdarkred">
                crepe de georgette
                <br />
                100% polyester
            </p>
        ),
    },
    {
        id: 4,
        src: '/media/images/tissues/organza.png',
        description: () => <p className="has-text-hdarkred">100 % organza de soie</p>,
    },
    {
        id: 5,
        src: '/media/images/tissues/mousseline.png',
        description: () => <p className="has-text-hdarkred">100% polyester</p>,
    },
    {
        id: 6,
        src: '/media/images/tissues/doublure-bemberg.png',
        description: () => (
            <p className="has-text-hdarkred">
                55% bemberg
                <br />
                45% acétate
            </p>
        ),
    },
];

const Jacket4 = () => {
    const [showBaseTissue, setShowBaseTissue] = useState(false);
    const [showDoublure, setShowDoublure] = useState(false);
    const [showSecondaryTissue, setShowSecondaryTissue] = useState(false);

    const handleMouseEnterBaseTissue = () => setShowBaseTissue(true);
    const handleMouseLeaveBaseTissue = () => setShowBaseTissue(false);
    const handleMouseEnterDoublure = () => setShowDoublure(true);
    const handleMouseLeaveDoublure = () => setShowDoublure(false);
    const handleMouseEnterSecondaryTissue = () => setShowSecondaryTissue(true);
    const handleMouseLeaveSecondaryTissue = () => setShowSecondaryTissue(false);

    return (
        <section className="section has-font-footlight">
            <div className="container">
                <div className="columns has-text-centered">
                    <div className="column">
                        <div className="content is-large">
                            <h1 className="title has-text-hgold">Shop</h1>
                            <hr className="has-text-hdarkred" />
                            <div className="columns">
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image" style={{ width: '256px', height: '256px' }}>
                                        <img src="/media/images/color-jacket-4.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content is-large">
                            <h1 className="title has-text-hgold">Tissus de bases</h1>
                            <hr className="has-text-hdarkred" />
                            <div className="columns">
                                {data.slice(0, 3).map(item => (
                                    <div className="column" key={item.id}>
                                        <img
                                            src={item.src}
                                            alt=""
                                            style={{ width: '128px', height: '128px' }}
                                            onMouseEnter={handleMouseEnterBaseTissue}
                                            onMouseLeave={handleMouseLeaveBaseTissue}
                                        />

                                        {showBaseTissue ? <item.description /> : null}
                                    </div>
                                ))}
                            </div>
                            <div className="columns pt-6">
                                <div className="column">
                                    <h1 className="title has-text-hgold">Tissus Secondaires</h1>
                                    <hr className="has-text-darkred" />
                                    <div className="columns">
                                        {data.slice(3, 5).map(item => (
                                            <div className="column" key={item.id}>
                                                <img
                                                    src={item.src}
                                                    alt=""
                                                    style={{ width: '128px', height: '128px' }}
                                                    onMouseEnter={handleMouseEnterDoublure}
                                                    onMouseLeave={handleMouseLeaveDoublure}
                                                />
                                                {showDoublure ? <item.description /> : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="columns pt-6">
                                <div className="column">
                                    <h1 className="title has-text-hgold">Doublures</h1>
                                    <hr className="has-text-darkred" />
                                    <div className="columns">
                                        {data.slice(5, 6).map(item => (
                                            <div className="column" key={item.id}>
                                                <img
                                                    src={item.src}
                                                    alt=""
                                                    style={{ width: '128px', height: '128px' }}
                                                    onMouseEnter={handleMouseEnterSecondaryTissue}
                                                    onMouseLeave={handleMouseLeaveSecondaryTissue}
                                                />
                                                {showSecondaryTissue ? <item.description /> : null}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section mt-6">
                <div className="container">
                    <BackButton destination="/shop" />
                </div>
            </section>
        </section>
    );
};
Jacket4.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Jacket 4');
export default Jacket4;

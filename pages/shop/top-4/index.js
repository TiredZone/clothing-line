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
        src: '/media/images/tissues/polyanide.png',
        description: () => (
            <p className="has-text-hdarkred">
                polyanide
                <br />
                65% polyester
                <br />
                35% élasthane
            </p>
        ),
    },
];

const Top4 = () => {
    const [showBaseTissue, setShowBaseTissue] = useState(false);

    const handleMouseEnterBaseTissue = () => setShowBaseTissue(true);
    const handleMouseLeaveBaseTissue = () => setShowBaseTissue(false);

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
                                        <img src="/media/images/color-top-4.jpeg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content is-large">
                            <h1 className="title has-text-hgold">Tissus</h1>
                            <hr className="has-text-hdarkred" />
                            <div className="columns">
                                {data.map(item => (
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
Top4.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Top 4');
export default Top4;

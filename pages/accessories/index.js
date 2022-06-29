/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
// import { useEffect, useState } from 'react';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { useRouter } from 'next/router';

const Accessoires = () => {
    const router = useRouter();

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-flex is-justify-content-center has-text-centered">
                    <div className="column is-flex is-justify-content-center">
                        <div className="content is-large">
                            <h1 className="title has-font-roboto has-text-hgold">Accessoires</h1>
                            <hr className="has-text-hdarkred" />
                            <div className="columns">
                                <div className="column is-narrow">
                                    <figure className="image is-clickable is-128x128">
                                        <img
                                            src="media/images/accessory-pic-1.png"
                                            alt=""
                                            onClick={() => router.push('/accessories/accessory-1')}
                                        />
                                    </figure>
                                </div>
                                <div className="column is-narrow">
                                    <figure className="image is-clickable is-128x128">
                                        <img
                                            src="media/images/accessory-pic-2.png"
                                            alt=""
                                            onClick={() => router.push('/accessories/accessory-2')}
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Accessoires.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Accessories');
export default Accessoires;

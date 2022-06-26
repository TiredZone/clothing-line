/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
// import { useEffect, useState } from 'react';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { useRouter } from 'next/router';

const Shop = () => {
    const router = useRouter();

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-flex is-justify-content-center has-text-centered">
                    <div className="column is-narrow">
                        <div className="content is-large">
                            <h1 className="title has-font-roboto has-text-hgold">Jackets</h1>
                            <hr className="has-text-hdarkred" />
                            <div className="columns">
                                <div className="column is-narrow">
                                    <figure className="image is-clickable is-128x128">
                                        <img
                                            src="media/images/jacket-1.png"
                                            alt=""
                                            onClick={() => router.push('/shop/jacket-1')}
                                        />
                                    </figure>
                                </div>
                                <div className="column is-narrow">
                                    <figure className="image is-clickable is-128x128">
                                        <img
                                            src="media/images/jacket-2.png"
                                            alt=""
                                            onClick={() => router.push('/shop/jacket-2')}
                                        />
                                    </figure>
                                </div>
                                <div className="column is-narrow">
                                    <figure className="image is-clickable is-128x128">
                                        <img
                                            src="media/images/jacket-3.png"
                                            alt=""
                                            onClick={() => router.push('/shop/jacket-3')}
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns is-flex is-justify-content-center has-text-centered pt-6 mb-6">
                    <div className="column is-narrow">
                        <div className="content is-large">
                            <h1 className="title has-font-roboto has-text-hgold">Tops</h1>
                        </div>
                        <hr className="has-text-hdarkred" />
                        <div className="columns">
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-128x128">
                                    <img
                                        src="media/images/top-1.png"
                                        alt=""
                                        onClick={() => router.push('/shop/top-1')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-128x128">
                                    <img
                                        src="media/images/top-2.png"
                                        alt=""
                                        onClick={() => router.push('/shop/top-2')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-128x128">
                                    <img
                                        src="media/images/top-3.png"
                                        alt=""
                                        onClick={() => router.push('/shop/top-3')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-128x128">
                                    <img
                                        src="media/images/top-4.png"
                                        alt=""
                                        onClick={() => router.push('/shop/top-4')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-128x128">
                                    <img
                                        src="media/images/top-5.png"
                                        alt=""
                                        onClick={() => router.push('/shop/top-5')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-128x128">
                                    <img
                                        src="media/images/top-6.png"
                                        alt=""
                                        onClick={() => router.push('/shop/top-6')}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Shop.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Store');
export default Shop;

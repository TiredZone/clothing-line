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
                            <div className="columns is-centered">
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-clickable">
                                        <img
                                            style={{ width: '400px', height: '500px' }}
                                            src="/media/images/accessory-pic-1.png"
                                            alt=""
                                            onClick={() => router.push('/accessories/accessory-1')}
                                        />
                                        <figcaption className="has-font-footlight has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Planche d&apos;accessoires</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-clickable">
                                        <img
                                            style={{ width: '400px', height: '500px' }}
                                            src="/media/images/accessory-pic-2.png"
                                            alt=""
                                            onClick={() => router.push('/accessories/accessory-2')}
                                        />
                                        <figcaption className="has-font-footlight has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Accessoires</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="has-text-hdarkred" />
                <div className="columns is-flex is-justify-content-center has-text-centered">
                    <div className="column is-5 is-flex is-justify-content-center">
                        <div className="box has-text-hdarkred has-font-footlight">
                            <div className="content is-large">
                                <p className="has-text-black is-italic">
                                    To me, clothing is a form of self-expression. There are hints about who you are in
                                    what you wear. ~Marc Jacobs
                                </p>
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

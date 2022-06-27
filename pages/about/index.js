/* eslint-disable @next/next/no-img-element */
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import BackButton from 'src/components/back-button';

const About = () => {
    return (
        <section className="section hero is-fullheight has-font-footlight" data-aos="fade-up">
            <div className="container">
                <div className="columns">
                    <div className="column is-half-desktop is-offset-one-quarter-desktop">
                        <div className="content is-large">
                            <h1 className="title has-text-hgold">About</h1>
                            <hr className="has-text-hdarkred" />
                            <p className="has-text-black">
                                Marie-Danielle Maalouf, étudiante de stylisme à Esmod Pris. Ce qui fait ma passion pour
                                le style et la mode. À ce jour, les achats d&apos;habits que j&apos;ai effectué me sont
                                d&apos;une précieuse aide pour me positionner et clarifier mon point de vue et ma visée
                                face à la création de mes accessoires. Premièrement, mon objectif est la production et
                                la création des accessoires qu&apos;on peut porter de manières différentes à fin de
                                changer de look dépendemment de notre style et nos envies de tous les jours et même pour
                                les soirées. De plus, je ferai des outfits casuals et sophistiqués en même temps. Et
                                tout cela contribue à planter le sentiment de confidence chez les clients qui portent
                                mes accessoires et mes habits, et ceci par le biais du style qui sera comme un mirroir
                                de leurs propres intérieurs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="has-text-hdarkred" style={{ marginRight: '-7rem', marginLeft: '-7rem' }} />
            <section className="section">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <div className="content is-large">
                                <h1 className="title has-text-hgold">Store</h1>
                                <hr className="has-text-hdarkred" />
                                <div className="columns">
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/store-pic-1.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/store-pic-2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/store-pic-3.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/store-pic-4.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <div className="content is-large">
                                <h1 className="title has-text-hgold">Shop Package</h1>
                                <hr className="has-text-hdarkred" />
                                <div className="columns">
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img src="media/images/shop-1.png" alt="" />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/shop-2.png"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/shop-3.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <div className="column">
                                        <figure className="image is-256x256">
                                            <img
                                                style={{ borderRadius: '20px' }}
                                                src="media/images/shop-4.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <BackButton />
                </div>
            </section>
        </section>
    );
};

About.getLayout = page => getPageTitleLayout(getMainLayout(page), 'About');
export default About;

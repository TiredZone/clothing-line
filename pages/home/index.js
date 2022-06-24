/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import IntroSection from 'src/components/intro-section';
import Router from 'next/router';

const Home = () => {
    return (
        <div>
            <IntroSection
                title="Old But Gold"
                image="media/images/intro-picture.png"
                content={
                    <div className="content is-large pt-1" data-aos="fade-right">
                        <ul className="has-text-hdarkred">
                            <li>Introduction sur l&apos;art nouveau</li>
                            <li>Introduction sur ma collection</li>
                            <li>Moodboard</li>
                            <li>Inspiration</li>
                            <li>Adn</li>
                            <li>Planche</li>
                            <li>Plan de collection</li>
                            <li>Défilé: dream it, do it</li>
                            <li>Détails de mode</li>
                        </ul>
                    </div>
                }
            />
            <hr className="is-hdarkred" />
            <section className="section has-font-footlight" data-aos="fade-up">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-flex is-justify-content-center">
                            <figure className="image is-256x256 is-clickable">
                                <img
                                    src="media/images/art-nouveau.jpg"
                                    alt="Intro"
                                    style={{ borderRadius: '20px' }}
                                    onClick={() => Router.push('/intro-art-nouveau')}
                                />

                                <figcaption className="has-text-hdarkred has-text-centered">
                                    <h1 className="title is-4 pt-4">Introduction sur l&apos;art nouveau</h1>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="column is-flex is-justify-content-center">
                            <figure className="image is-256x256 is-clickable">
                                <img
                                    src="media/images/collection.png"
                                    alt="Intro"
                                    style={{ borderRadius: '20px', width: '235px' }}
                                    onClick={() => Router.push('/my-collection')}
                                />

                                <figcaption className="has-text-hdarkred has-text-centered">
                                    <h1 className="title is-4 pt-4">Introduction sur ma collection</h1>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <section className="section has-font-footlight" data-aos="fade-up">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-256x256 is-clickable">
                                        <img
                                            src="media/images/moodboard.png"
                                            alt="Intro"
                                            style={{ borderRadius: '20px' }}
                                            onClick={() => Router.push('/moodboard')}
                                        />
                                        <figcaption className="has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Moodboard</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="is-hdarkred" style={{ marginRight: '-7rem', marginLeft: '-7rem' }} />
                    <section className="section has-font-footlight" data-aos="fade-up">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-256x256 is-clickable">
                                        <img
                                            src="media/images/inspiration.png"
                                            alt="Intro"
                                            style={{ width: '330px' }}
                                            onClick={() => Router.push('/inspiration')}
                                        />
                                        <figcaption className="has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Inspiration</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-256x256 is-clickable">
                                        <img
                                            src="media/images/adn.jpeg"
                                            alt="Intro"
                                            style={{ borderRadius: '20px' }}
                                            onClick={() => Router.push('/adn')}
                                        />
                                        <figcaption className="has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">ADN</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section has-font-footlight" data-aos="fade-up">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-256x256 is-clickable">
                                        <img
                                            src="media/images/plan-de-collection.jpg"
                                            alt="Intro"
                                            style={{ borderRadius: '20px' }}
                                            onClick={() => Router.push('/plan-de-collection')}
                                        />
                                        <figcaption className="has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Plan de collection</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="is-hdarkred" style={{ marginRight: '-7rem', marginLeft: '-7rem' }} />
                    <section className="section has-font-footlight" data-aos="fade-up">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-256x256 is-clickable">
                                        <img
                                            src="media/images/défilé.png"
                                            alt="Intro"
                                            style={{ width: '400px' }}
                                            onClick={() => Router.push('/dream-it')}
                                        />
                                        <figcaption className="has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Défilé: dream it, do it</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="column is-flex is-justify-content-center">
                                    <figure className="image is-256x256 is-clickable">
                                        <img
                                            src="media/images/mode.png"
                                            alt="Intro"
                                            style={{ width: '370px' }}
                                            onClick={() => Router.push('/details')}
                                        />
                                        <figcaption className="has-text-hdarkred has-text-centered">
                                            <h1 className="title is-4 pt-4">Détails de mode</h1>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

Home.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');
export default Home;

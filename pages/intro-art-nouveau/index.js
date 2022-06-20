import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import Slider from 'src/components/slider';
import Link from 'next/link';
import { artNouveauData } from 'src/static/data-slider';

const IntroArtNouveau = () => {
    return (
        <section className="section hero is-fullheight has-font-footlight" data-aos="fade-up">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-flex is-justify-content-center">
                        <p className="content is-large pt-4">
                            Le mouvement Art Nouveau est un courant artistique né en Europe : il est particulièrement
                            suivi entre 1890 et 1910. C&apos;est un mouvement de contestation en réaction aux différents
                            courants artistique de la seconde moitié du XXème siècle. En effet, pour bien comprendre la
                            philosophie derrière ce mouvement, il convient d&apos;abord de s&apos;intéresser au contexte
                            de cette époque au-delà de l&apos;architecture et des arts décoratifs. Le mouvement Art
                            Nouveau a plusieurs enjeux. D&apos;abord, sa mission et de remettre la nature au centre de
                            l&apos;Art et du Beau. En effet, l&apos;émergence de la société industrielle risque
                            d&apos;aseptiser l&apos;Art. Ensuite, il doit reproduire au mieux les « codes » de création
                            de la nature : les oeuvres Art Nouveau doivent donc imiter les couleurs, les formes
                            parfaitement imparfaites, et les ambiances naturelles; donc caractériser par des forms
                            arrondies, asymétriques qui reproduisent les mouvements de la nature. De plus, le terme “Art
                            Nouveau” vient d&apos;une boutique ouverte par Siegfried Bing (1838-1905) qu&apos;elle
                            appelle tout simplement ”Art Nouveau”, et c&apos;est comme ca qu&apos;il deviant le nom
                            official du style moderne en France. Nous pouvons retrouver l&apos;art nouveau en
                            architecture, decoration intérieur, peinture, sculpture…
                        </p>
                    </div>
                </div>
            </div>
            <hr className="is-hdarkred" style={{ marginRight: '-3rem', marginLeft: '-3rem' }} />
            <section className="section has-font-footlight" data-aos="fade-up">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-flex is-justify-content-center">
                            <Slider data={artNouveauData} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="columns">
                <div className="column is-flex is-justify-content-flex-end">
                    <Link href="/" passHref>
                        <button
                            className="button is-large has-border-1-hdarkred-o-10 is-darkhred is-outlined is-rounded"
                            type="button"
                        >
                            <span className="icon">
                                <i className="fas fa-arrow-left" />
                            </span>
                            <span>Retour</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

IntroArtNouveau.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Art Nouveau');

export default IntroArtNouveau;

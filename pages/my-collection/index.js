import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import Slider from 'src/components/slider';
import Link from 'next/link';
import { myCollectionData } from 'src/static/data-slider';

const MyCollection = () => {
    return (
        <section className="section hero is-fullheight has-font-footlight" data-aos="fade-up">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-flex is-justify-content-center">
                        <p className="content is-large pt-4">
                            J&apos;ai été inspirer par l&apos;art nouveau pour pouvoir créer des accessoires as
                            statement piece et qu&apos;on peut inclure dans les vêtements, pour pouvoir changer le style
                            des vêtements par rapport aux accessoires porter. Pour moi cette collection à était créer
                            pour des femmes audacieuses qui aiment mettre en valeur leur accessoire plus que leur
                            vêtement vu que c&apos;est des gros accessoires qu&apos;on ne peut pas porter tout les
                            jours. Ca serait donc une collection qu&apos;on pourra porter a des grandes soirées (avec
                            accessoires)pour donner un look unique et sophisitqué ou pour une petite soirée pour avoir
                            un look oser mais en meme temps casual (sans accessoires)
                        </p>
                    </div>
                </div>
            </div>
            <hr className="is-hdarkred" style={{ marginRight: '-3rem', marginLeft: '-3rem' }} />
            <section className="section has-font-footlight" data-aos="fade-up">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-flex is-justify-content-center">
                            <Slider data={myCollectionData} />
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

MyCollection.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Ma Collection');

export default MyCollection;

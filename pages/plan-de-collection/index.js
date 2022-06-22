/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import BackButton from 'src/components/back-button';

const PlanDeCollection = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-flex is-justify-content-center">
                            <figure className="image is-256x256">
                                <img src="media/images/plan-de-collection-content.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <BackButton />
                </div>
            </section>
        </section>
    );
};

PlanDeCollection.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Plan de Collection');

export default PlanDeCollection;

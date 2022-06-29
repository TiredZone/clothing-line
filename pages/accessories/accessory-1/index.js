/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import BackButton from 'src/components/back-button';

const Accessory1 = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-flex is-justify-content-center">
                            <figure className="image">
                                <img src="/media/images/accessory-pic-1-content.jpg" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <BackButton destination="/accessories" />
                </div>
            </section>
        </section>
    );
};

Accessory1.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Accessory1');

export default Accessory1;

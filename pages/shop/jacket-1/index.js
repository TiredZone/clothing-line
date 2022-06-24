/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import BackButton from 'src/components/back-button';

const Jacket1 = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns has-text-centered">
                    <div className="column">
                        <div className="content is-large">
                            <h1 className="title has-font-roboto has-text-hgold">Shop</h1>
                            <hr className="has-text-hdarkred" />
                            <div className="columns">
                                <div className="column">
                                    <figure className="image is-128x128">
                                        <img src="/media/images/color-jacket-1.png" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <BackButton destination="/shop" />
                </div>
            </section>
        </section>
    );
};
Jacket1.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Jacket 1');
export default Jacket1;

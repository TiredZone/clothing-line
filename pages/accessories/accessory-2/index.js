/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { useRouter } from 'next/router';

const Accessory2 = () => {
    const router = useRouter();

    return (
        <>
            <div className="columns is-flex is-justify-content-center has-text-centered pt-6 mb-6">
                <div className="column is-narrow">
                    <div className="content is-large">
                        <h1 className="title has-font-roboto has-text-hgold">Shoes</h1>
                        <hr className="has-text-hdarkred" />
                        <div className="columns">
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-1.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-1')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-2.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-2')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-3.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-3')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-4.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-4')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-5.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-5')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-6.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-6')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/shoe-7.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/shoe-7')}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="columns is-flex is-justify-content-center has-text-centered pt-6 mb-6">
                <div className="column is-narrow">
                    <div className="content is-large">
                        <h1 className="title has-font-roboto has-text-hgold">Bags</h1>
                        <hr className="has-text-hdarkred" />
                        <div className="columns">
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/bag-1.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/bag-1')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/bag-2.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/bag-2')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/bag-3.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/bag-3')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/bag-4.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/bag-4')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/bag-5.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/bag-5')}
                                    />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-clickable is-64x64">
                                    <img
                                        src="/media/images/bag-6.png"
                                        alt=""
                                        onClick={() => router.push('./accessory-2/bag-6')}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="columns is-flex is-justify-content-center has-text-centered pt-6 mb-6">
                <div className="column is-narrow">
                    <div className="content is-large">
                        <h1 className="title has-font-roboto has-text-hgold">Accessories</h1>
                        <hr className="has-text-hdarkred" />
                        <div className="columns">
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-1.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-2.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-3.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-4.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-5.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-6.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-7.png" alt="" />
                                </figure>
                            </div>
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <img src="/media/images/accessory-8.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Accessory2.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Accessory 2');

export default Accessory2;

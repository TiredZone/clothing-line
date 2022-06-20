/* eslint-disable @next/next/no-img-element */
const IntroSection = ({ title, subtitle, image, content }) => {
    return (
        <section className="hero is-fullheight has-font-footlight">
            <div className="hero-body is-clipped">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-flex is-justify-content-center">
                            <h1 className="title is-1 has-text-hgold">{title}</h1>
                        </div>
                    </div>
                    <div className="py-6 is-hidden-desktop" />
                    <div className="columns is-vcentered">
                        <div className="column has-text-centered-mobile" data-aos="fade-right">
                            <h1 className="subtitle has-text-white is-4">{subtitle}</h1>
                            {content}
                        </div>
                        <div className="column is-7 has-text-centered" data-aos="fade-left">
                            <figure className="image is-256x256">
                                <img src={image} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;

import { getLayout as getMainLayout } from 'src/layouts/main';
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import ContactUsBox from './contact-us-box';

const ContactUs = () => {
    return (
        <section className="section has-font-footlight has-background-primary2dark-v " data-aos="fade-up">
            <div className="container">
                <div className="columns">
                    <div className="column is-5">
                        <h1 className="title is-size-1 has-text-hdarkred">Have a project? We would love to help.</h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <ContactUsBox />
                    </div>
                </div>
            </div>
        </section>
    );
};

ContactUs.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Contact Us');

export default ContactUs;

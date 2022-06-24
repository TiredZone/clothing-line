/* eslint-disable jsx-a11y/label-has-associated-control */

const ContactUsBox = () => {
    const validateName = e => {
        const name = e.target.value;
        const checkMark = document.getElementById('validate-name');
        const regex = /^[a-zA-Z ]+$/;

        if (name.match(regex)) {
            checkMark.classList.add('has-text-contrast');
        } else {
            checkMark.classList.remove('has-text-contrast');
        }
    };

    const validateURL = e => {
        const url = e.target.value;
        const checkMark = document.getElementById('validate-url');

        // check if url is valid
        if (url.match(/^(http|https):\/\/[^ "]+$/)) {
            checkMark.classList.add('has-text-contrast');
        } else {
            checkMark.classList.remove('has-text-contrast');
        }
    };

    const validateEmail = e => {
        const email = e.target.value;
        const checkMark = document.getElementById('validate-email');
        if (email.includes('@') && email.includes('.')) {
            checkMark.classList.add('has-text-contrast');
        } else {
            checkMark.classList.remove('has-text-contrast');
        }
    };

    return (
        <>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label has-text-hdarkred">Your name</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-hdarkred-o-5 has-text-hdarkred is-borderless"
                                type="text"
                                placeholder="John Doe"
                                onChange={e => validateName(e)}
                            />
                            <span id="validate-name" className="icon has-text-hdarkred is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label has-text-hdarkred">Your email</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-hdarkred-o-5 has-text-hdarkred is-borderless"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                onChange={e => validateEmail(e)}
                            />
                            <span id="validate-email" className="icon has-text-hdarkred is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label has-text-hdarkred">Project type</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-hdarkred-o-5 has-text-hdarkred is-borderless"
                                type="text"
                                placeholder="Website"
                            />
                            <span className="icon has-text-hdarkred is-small is-left">
                                <i className="fas fa-globe" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label has-text-hdarkred">URL</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-hdarkred-o-5 has-text-hdarkred is-borderless"
                                type="text"
                                placeholder="drive.google.com/aH2z568qaw47"
                                onChange={e => validateURL(e)}
                            />
                            <span id="validate-url" className="icon has-text-hdarkred is-small is-left">
                                <i className="fas fa-link" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label has-text-hdarkred">About</label>
                        <div className="control">
                            <textarea
                                className="textarea has-background-hdarkred-o-5 has-text-hdarkred is-borderless"
                                placeholder="Tell us about your project"
                                rows="5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-narrow">
                    <button
                        className="button is-fullwidth has-background-hdarkred-o-5 has-text-hdarkred has-border-1-hdarkred-o-10"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContactUsBox;

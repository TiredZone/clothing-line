import Link from 'next/link';

const BackButton = () => {
    return (
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
    );
};

export default BackButton;

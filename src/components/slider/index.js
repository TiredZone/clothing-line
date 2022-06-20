/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

const Slider = ({ data }) => {
    // const [currentVideo, setCurrentVideo] = useState(0);

    const options = {
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '45rem',
    };

    return (
        <div className="columns is-centered">
            <div className="column is-7">
                {/* <h1 className="title is-1 has-text-centered has-text-white">{dataSlider[currentVideo].name}</h1> */}
                <Splide
                    options={options}
                    // onMove={event => {
                    //     setCurrentVideo(event.index);
                    // }}
                    aria-labelledby="autoplay-example-heading"
                    hasTrack={false}
                >
                    <div className="is-relative">
                        <SplideTrack>
                            {data.map(slide => (
                                <SplideSlide key={slide.id}>
                                    <figure className="image">
                                        <img src={slide.src} alt={slide.alt} style={{ borderRadius: '10px' }} />
                                    </figure>
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </div>
                    <div className="splide__progress">
                        <div className="splide__progress__bar is-hdarkred" />
                    </div>
                    <div className="pt-5 has-text-centered">
                        <button className="splide__toggle button is-hdarkred is-medium is-borderless" type="button">
                            <span className="splide__toggle__play has-text-weight-bold">
                                <i className="fas fa-play" />
                            </span>
                            <span className="splide__toggle__pause has-text-weight-bold">
                                <i className="fas fa-pause" />
                            </span>
                        </button>
                    </div>
                </Splide>
            </div>
        </div>
    );
};

export default Slider;

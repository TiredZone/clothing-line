/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Navbar from 'src/components/commons/navbar';
// import Footer from 'src/components/commons/footer';
// import Background from 'src/components/commons/background';
// import { useSelector, useDispatch } from 'react-redux';

const MainLayout = props => {
    const { children } = props;

    // const { announcementsReducer } = useSelector(state => state);
    // const dispatch = useDispatch();

    // const onCloseClick = e => {
    //     e.preventDefault();
    //     dispatch({ type: 'TOGGLE' });
    // };

    return (
        <>
            {/* <Background /> */}
            <Navbar />
            {/* <div style={{ height: '64px' }} /> */}
            <div className="py-6">{children}</div>

            {/* <div className="is-flex is-flex-direction-column " style={{ height: '100%' }}>
                <div className="is-flex-grow-1" style={{ overflow: 'hidden' }}>
                </div>
            </div> */}
            {/* <div style={{ paddingBottom: '5rem' }} /> */}
            {/* <Footer /> */}
        </>
    );
};

export const getLayout = page => <MainLayout>{page}</MainLayout>;

export default MainLayout;

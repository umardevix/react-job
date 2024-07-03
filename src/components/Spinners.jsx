/* eslint-disable react/prop-types */
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
	display: 'block',
	margin: '100px auto',
};

const Spinners = ({ loading }) => {
	return <BeatLoader color='#4338ca' loading={loading} cssOverride={override} size={10} />;
};

export default Spinners;

import { ColorRing } from 'react-loader-spinner';

export const Loader = ({ isPreloader, isLoaderSpinner, isButtonLoader }) => {
  const props = { styles: {} };

  if (isPreloader)
    props.styles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

  if (isLoaderSpinner) props.styles = { display: 'block', margin: '0 auto' };

  if (isButtonLoader) props.styles = { height: '35px', width: '35px' };

  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        ...props.styles,
      }}
      wrapperClass="blocks-wrapper"
      colors={['#2d2d2d', '#524a33', '#556b2f', '#212121', '#821a1a']}
    />
  );
};

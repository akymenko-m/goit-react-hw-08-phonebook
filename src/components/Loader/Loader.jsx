import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '2',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Oval
        height={80}
        width={80}
        color="darkblue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="darkblue"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

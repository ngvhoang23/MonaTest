export const DollarIcon = ({ size }) => {
    return (
        <img style={{ height: size, width: size }} src={require('../../assets/images/icons8-dollar-96.png')} alt="" />
    );
};

export const EmailIcon = ({ size }) => {
    return (
        <img
            style={{ height: size, width: size }}
            src={require('../../assets/images/icons8-gmail-logo-96.png')}
            alt=""
        />
    );
};

export const UserIcon = ({ size }) => {
    return <img style={{ height: size, width: size }} src={require('../../assets/images/icons8-user-96.png')} alt="" />;
};

export const PhoneIcon = ({ size }) => {
    return (
        <img style={{ height: size, width: size }} src={require('../../assets/images/icons8-phone-96.png')} alt="" />
    );
};

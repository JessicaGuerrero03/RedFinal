import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
    profile: {
        bio,
        user: { name },
    },
}) => {
    return ( <
        >
        <
        div className = 'profile-about bg-light p-2' > {
            bio && ( <
                >
                <
                h2 className = 'text-primary' > {
                    name.split("")[name.length - 1] !== "s" ?
                    name.trim().split(" ")[0] + "'" : name.trim().split(" ")[0] + "'s"
                } { " " }
                Bio <
                /h2> <
                p > { bio } < /p> <
                div className = 'line' > < /div> < / >
            )
        } <
        /div> < /
        div > <
        />
    );
};

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history,
}) => {
    const [formData, setFormData] = useState({
        location: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        instagram: "",
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            location: loading || !profile.location ? "" : profile.location,
            bio: loading || !profile.bio ? "" : profile.bio,
            twitter: loading || !profile.social ? "" : profile.social.twitter,
            facebook: loading || !profile.social ? "" : profile.social.facebook,
            linkedin: loading || !profile.social ? "" : profile.social.linkedin,
            youtube: loading || !profile.social ? "" : profile.social.youtube,
            instagram: loading || !profile.social ? "" : profile.social.instagram,
        });
    }, [loading, getCurrentProfile]);

    const {
        location,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;

    const handleChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history, true);
    };

    return ( <
        >
        <
        h1 className = 'large text-primary' > Create Your Profile < /h1> <
        p className = 'lead' >
        <
        i className = 'fas fa-user' > < /i> Let's get some information to make your
        profile stand out <
        /p> <
        small > * = required field < /small> <
        form className = 'form'
        onSubmit = {
            (e) => handleSubmit(e)
        } >
        <
        div className = 'form-group' >
        <
        input type = 'text'
        placeholder = 'Location'
        name = 'location'
        value = { location }
        onChange = {
            (e) => handleChange(e)
        }
        /> <
        small className = 'form-text' >
        City and state suggested(eg.Boston, MA) <
        /small> < /
        div > <
        div className = 'form-group' >
        <
        textarea placeholder = 'A short bio of yourself'
        name = 'bio'
        value = { bio }
        onChange = {
            (e) => handleChange(e)
        } > { " " } <
        /textarea> <
        small className = 'form-text' > Tell us a little about yourself < /small> < /
        div >

        <
        div className = 'my-2' >
        <
        button onClick = {
            () => toggleSocialInputs(!displaySocialInputs)
        }
        type = 'button'
        className = 'btn btn-light' >
        Add Social Network Links <
        /button> <
        span > Optional < /span> < /
        div > {
            displaySocialInputs && ( <
                >
                <
                div className = 'form-group social-input' >
                <
                i className = 'fab fa-twitter fa-2x' > < /i> <
                input type = 'text'
                placeholder = 'Twitter URL'
                name = 'twitter'
                value = { twitter }
                onChange = {
                    (e) => handleChange(e)
                }
                /> < /
                div > <
                div className = 'form-group social-input' >
                <
                i className = 'fab fa-facebook fa-2x' > < /i> <
                input type = 'text'
                placeholder = 'Facebook URL'
                name = 'facebook'
                value = { facebook }
                onChange = {
                    (e) => handleChange(e)
                }
                /> < /
                div > <
                div className = 'form-group social-input' >
                <
                i className = 'fab fa-youtube fa-2x' > < /i> <
                input type = 'text'
                placeholder = 'YouTube URL'
                name = 'youtube'
                value = { youtube }
                onChange = {
                    (e) => handleChange(e)
                }
                /> < /
                div > <
                div className = 'form-group social-input' >
                <
                i className = 'fab fa-linkedin fa-2x' > < /i> <
                input type = 'text'
                placeholder = 'Linkedin URL'
                name = 'linkedin'
                value = { linkedin }
                onChange = {
                    (e) => handleChange(e)
                }
                /> < /
                div > <
                div className = 'form-group social-input' >
                <
                i className = 'fab fa-instagram fa-2x' > < /i> <
                input type = 'text'
                placeholder = 'Instagram URL'
                name = 'instagram'
                value = { instagram }
                onChange = {
                    (e) => handleChange(e)
                }
                /> < /
                div > <
                />
            )
        } <
        input type = 'submit'
        className = 'btn btn-primary my-1' / >
        <
        Link className = 'btn btn-light my-1'
        to = '/dashboard' >
        Go Back <
        /Link> < /
        form > <
        />
    );
};

/* 
    If there is no state to bring from the store, mapStateToProps doesn't need 
    to be used and the first argument on "connect" is null
 */

const mapStateToProps = (state) => ({
    profile: state.profile,
});

//The action createProfile must be brought before used.
EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired, //ptfr
    profile: PropTypes.object.isRequired, //ptor
};

// withRouter wrapping the component allows to use the history object and use it from the action
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
);
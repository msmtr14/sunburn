import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
              
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30265.98538668158!2d73.723803!3d18.517684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzAzLjciTiA3M8KwNDMnMjUuNyJF!5e0!3m2!1sen!2sus!4v1544169854475"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
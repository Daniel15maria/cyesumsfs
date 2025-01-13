import React from 'react';
import image1 from '../images/goodone.jpg'
import image2 from '../images/image6.jpg'
import image3 from '../images/image12.jpg'


const Experience = () => {
    return (
        <div style={{ backgroundColor: '#5A7D6C', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '48px', marginBottom: '20px' }}>
                My
                <span style={{ fontWeight: 'normal' }}> Professional Experience</span>
            </h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
                {/* Card 1 */}
                <div style={cardStyle}>
                    <img
                        src={image1}
                        alt="Professional Counsellor"
                        style={imageStyle}
                    />
                    <h3 style={titleStyle}>Professional Counsellor</h3>
                    <p style={textStyle}>
                        Empowering individuals through expert guidance and personalized counseling strategies.
                    </p>
                </div>
                {/* Card 2 */}
                <div style={cardStyle}>
                    <img
                        src={image2}
                        alt="Professor"
                        style={imageStyle}
                    />
                    <h3 style={titleStyle}>
                        Professor at Assam Don Bosco University, Guwahati
                    </h3>
                    <p style={textStyle}>
                        Dedicated educator shaping minds at Assam Don Bosco University, Guwahati.
                    </p>
                </div>
                {/* Card 3 */}
                <div style={cardStyle}>
                    <img
                        src={image3}
                        alt="Visiting Lecturer"
                        style={imageStyle}
                    />
                    <h3 style={titleStyle}>
                        Visiting Lecturer at St. Clement College, Nagaon
                    </h3>
                    <p style={textStyle}>
                        Engaging visiting lecturer at St. Clement College, Nagaon, inspiring students.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Styles
const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    margin: '0 10px',
};

const imageStyle = {
    borderRadius: '10px',
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
};

const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333333',
};

const textStyle = {
    fontSize: '14px',
    color: '#555555',
};

export default Experience;

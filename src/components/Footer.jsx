import React from 'react'
import "../styles/footer.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FaceBookIcon from '@material-ui/icons/Facebook';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <GitHubIcon/>
                <FaceBookIcon/>
                <TwitterIcon/>
            </div>
            <p>&copy; 2021 pizza.com</p>
        </div>
    )
}

export default Footer

import React from "react";
import "../styles/footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<a
					href="https://www.github.com/binamra7"
					target="_blank"
					rel="noreferrer noopener"
				>
					<GitHubIcon />
				</a>
				<a
					href="https://www.linkedin.com/in/binamra7"
					target="_blank"
					rel="noreferrer noopener"
				>
					<LinkedInIcon />
				</a>
				<a
					href="https://www.twitter.com/whokhadka"
					target="_blank"
					rel="noreferrer noopener"
				>
					<TwitterIcon />
				</a>
			</div>
			<p>
				&copy; 2021 <a href="/">pizza.com</a>
			</p>
		</div>
	);
}

export default Footer;

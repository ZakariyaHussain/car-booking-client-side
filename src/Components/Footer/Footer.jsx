import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 mt-16">
            <aside className="grid-flow-col items-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <a href='https://www.termsfeed.com/blog/sample-terms-and-conditions-template/' target='_blank' className="underline link link-hover">Terms and Conditions</a>
                <a href='https://policies.google.com/privacy?hl=en-US' target='_blank' className="underline link link-hover">Privacy Policy</a>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href='https://www.facebook.com/zakariyahussain89' target='_blank'>
                    <FaFacebook size={24} />
                </a>
                <a href='https://www.linkedin.com/in/zakariya-hussain/' target='_blank'>
                    <FaLinkedin size={24} />
                </a>
                <a href='https://github.com/ZakariyaHussain' target='_blank'>
                    <FaGithub size={24} />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
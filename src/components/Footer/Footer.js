import { Link } from 'gatsby';
import React, { useState } from 'react';

import Container from '../Container';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root} style={{marginTop: "100px"}}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div>To place an order, please contact us at</div><br/>
          <div>
            Phone Number: 7697642244
          </div><br/>
          <div>
            Instagram Profile: <a href="https://www.instagram.com/art_mold_studios">https://www.instagram.com/art_mold_studios</a>
          </div><br/>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

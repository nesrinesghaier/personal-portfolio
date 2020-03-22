import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/NESRINE.jpg`} alt=""/>
      </Link>
      <header>
        <h2>Nesrine Sghaier</h2>
        <p><a href="mailto:nesrinesghaier10@gmail.com">nesrinesghaier10@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Summary</h2>
      <p>Hi, I&apos;m Nesrine Sghaier. I am an <a href="http://eniso.info/" rel="noopener noreferrer" target="_blank">ENISo (National Engineering School of Sousse)</a> Alumni
        and a Full Stack Engineer currently. I am always passioned about coding that may help
        people in any aspect of their lives. Most of the time, I am driven by curiosity and
        competitiveness.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume`
            ? <Link to="/resume" className="button">Learn More</Link>
            : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Nesrine Sghaier.</p>
    </section>
  </section>
);

export default Nav;

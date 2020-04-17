import React from 'react';
import githubIcon2 from '../images/github-icon2.png';
import emailIcon2 from '../images/email-icon2.png';
import resumeIcon2 from '../images/resume-icon2.png';
import resume from '../images/resume.pdf';
import Icon from './Icon';

function Contact() {
  return (
    <React.Fragment>
      <div className='header'>
        <h1>Contact</h1>
      </div>
      <main>
        <div className='content-container'>
          <div className='content'>
            <p>
              Feel free to reach out at any time, whether it be job
              opportunities, project ideas, or tea recommendations!
            </p>

            <div className='icons'>
              <Icon
                anchor={
                  <a
                    href='https://github.com/seschwartz8'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Github <br />
                    <img
                      src={githubIcon2}
                      id='github'
                      width='40px'
                      alt='github icon'
                    />
                  </a>
                }
              />
              <Icon
                anchor={
                  <a target='_blank' rel='noopener noreferrer' href={resume}>
                    Resume <br />
                    <img src={resumeIcon2} alt='resume icon' width='40px' />
                  </a>
                }
              />
              <Icon
                anchor={
                  <a href='mailto: seschwartz8@gmail.com'>
                    Email <br />
                    <img src={emailIcon2} alt='email icon' width='40px' />
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Contact;

import React from 'react';
import {
  Title,
  IconsRow,
  ContactContent,
  SingleBox,
} from '../styledComponents/index';
import githubIcon from '../images/github-icon-black.png';
import emailIcon from '../images/email-icon-black.png';
import resumeIcon from '../images/resume-icon-black.png';
import resume from '../images/resume.pdf';
import Icon from './Icon';

const Contact = () => {
  return (
    <>
      <Title>Contact</Title>
      <ContactContent>
        <SingleBox>
          <p style={{ fontSize: '1.3em' }}>
            Feel free to reach out at any time, whether it be job opportunities,
            project ideas, or tea recommendations!
          </p>
          <br />
          <IconsRow>
            <Icon
              href='https://github.com/seschwartz8'
              newTab={true}
              src={githubIcon}
              alt='github icon'
              label='Github'
              size='50px'
            />
            <Icon
              href={resume}
              newTab={true}
              src={resumeIcon}
              alt='resume icon'
              label='Resume'
              size='50px'
            />
            <Icon
              href='mailto: seschwartz8@gmail.com'
              newTab={false}
              src={emailIcon}
              alt='email icon'
              label='Email'
              size='50px'
            />
          </IconsRow>
        </SingleBox>
      </ContactContent>
    </>
  );
};

export default Contact;

import React from 'react';
import { Content, Title, IconsRow } from '../styledComponents/index';
import { colors } from '../utils';
import githubIcon from '../images/github-icon-black.png';
import emailIcon from '../images/email-icon-black.png';
import resumeIcon from '../images/resume-icon-black.png';
import resume from '../images/resume.pdf';
import Icon from './Icon';
import styled from 'styled-components';

const SingleContent = styled.div`
  background-color: ${colors.superLightAqua};
  padding: 8%;
  display: flex;
  flex-direction: column;
  margin: 3% 2% 8% 2%;
  width: 100%;
  text-align: center;
`;

const LabeledIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => {
  return (
    <>
      <Title>Contact</Title>
      <Content>
        <SingleContent>
          <p style={{ fontSize: '1.1em' }}>
            Feel free to reach out at any time, whether it be job opportunities,
            project ideas, or tea recommendations!
          </p>
          <br />
          <IconsRow>
            <LabeledIcon>
              Github
              <Icon
                href='https://github.com/seschwartz8'
                newTab={true}
                src={githubIcon}
                alt='github icon'
              />
            </LabeledIcon>
            <LabeledIcon>
              Resume
              <Icon
                href={resume}
                newTab={true}
                src={resumeIcon}
                alt='resume icon'
              />
            </LabeledIcon>
            <LabeledIcon>
              Email
              <Icon
                href='mailto: seschwartz8@gmail.com'
                newTab={false}
                src={emailIcon}
                alt='email icon'
              />
            </LabeledIcon>
          </IconsRow>
        </SingleContent>
      </Content>
    </>
  );
};

export default Contact;

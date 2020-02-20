import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;

const Section = styled.section`
  text-align: center;
  color: #fff;
  height: 100vh;
  line-height: 100vh;
  background: ${props => {
    return props.number % 2 === 1
      ? "radial-gradient(ellipse farthest-corner at center top, #f39264 0%, #f2606f 100%)"
      : "radial-gradient(ellipse farthest-corner at center top, #cbf49a, #1ea623)";
  }};
`;

const Title = styled.h2`
  font-size: 90px;
  font-weight: 100;
  text-transform: uppercase;
`;

const MainSection = ({ contents }) => (
  <Container>
    {contents.map(content => (
      <Section key={content.id} name={content.title} number={content.id}>
        <Title>{content.content}</Title>
      </Section>
    ))}
  </Container>
);

MainSection.propTypes = {
  contents: PropTypes.array
};

export default MainSection;

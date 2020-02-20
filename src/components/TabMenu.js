import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  float: left;
  color: #fff;
  font-size: 40px;
  padding: 5px 5px 5px 15px;
  font-family: "Abel";
`;

const MenuList = styled.ul`
  float: right;
  padding-right: 10px;
`;

const MenuItem = styled.li`
  display: inline;
`;

const ItemLink = styled(Link)`
  display: inline-block;
  padding: 20px 15px;
  color: #fff;
  font-weight: bold;
  font-family: "Abel";
  text-transform: capitalize;
  cursor: pointer;
  &.active {
    color: #333;
  }
`;

const TabMenu = ({ menuList, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MenuList>
        {menuList.map(menu => (
          <MenuItem key={menu.id}>
            <ItemLink
              activeClass="active"
              to={menu.title}
              spy={true}
              smooth={true}
              duration={500}
            >
              {menu.title}
            </ItemLink>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  );
};

TabMenu.propTypes = {
  menuList: PropTypes.array,
  title: PropTypes.string
};

export default TabMenu;

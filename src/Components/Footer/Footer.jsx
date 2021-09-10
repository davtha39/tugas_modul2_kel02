import React from "react";
import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: #131313;
  position: relative;
  bottom: 0;
  width: 100%;
  
   
`;
   
const Footer = () => {
    return (
      <Box>
        <h3 style={{ color: "white", 
                     textAlign: "center", 
                     marginTop: "-70px",
                     marginBottom: "-70px",}}>
          Praktikum RPLBK Modul 2 2021
        </h3>
      </Box>
    );
  };
  export default Footer;
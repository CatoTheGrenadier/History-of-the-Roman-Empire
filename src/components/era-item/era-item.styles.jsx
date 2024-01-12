import styled from "styled-components";

export const Backgroundimage = styled.div`
  width: 100%;
  height: 100%;
  align-items:center;
  min-height:120px;
  background-size: cover;
  background-position: center;
  border: 1px solid black;
  background-image: ${({imageUrl}) => `url(${imageUrl})`}
`

export const Body = styled.div`
  min-height:100px;
  height: 15%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 120%;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`

export const EraItemContainer = styled.div`
  min-width: 30%;
  min-height: 200px;
  min-width: 340px;
  height: 20vh;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: auto;
  overflow: hidden;
  margin-left: 15%;
  margin-right: 15%;
  padding:2.3%;
  
  &:hover {
    cursor: pointer;

    & ${Backgroundimage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      border: 1px solid black;
    }

    & ${Body}{
      opacity: 0.9;
    }
`
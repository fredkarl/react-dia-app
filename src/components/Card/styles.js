import styled from "styled-components";

export const CardCointainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  position: relative;
  margin-bottom: 24px;
`

export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  div {
    margin-left: 12px;
    margin-top: -10px;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 0px;
    color: #fff;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 0px;
    color: #fff;
  }
` 

export const UserPicture = styled.img`
  width: 45px;
  height: 45px;
  border: 2px solid #FFF;
  border-radius: 25px;
`

export const PostInfo = styled.div`
  margin-bottom: 12px;
  color: #FFF;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 5px;
  }

  P {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px; 
  }
`

export const HasInfo = styled.div`
  margin-top: 12px;
  color: #fff;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 5px;
  }

  P {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px; 
    cursor: pointer;
  }
`
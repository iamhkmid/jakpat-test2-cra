import styled from "styled-components"

export const Loading = () => {
  return (
    <LoadingStyled><div className="lds-dual-ring"></div></LoadingStyled>
  );
}

export default Loading

const LoadingStyled = styled.div`
width: fit-content;
height: fit-content;
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 12px;
  height: 12px;
  margin: 5px;
  border-radius: 50%;
  border: 3px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`
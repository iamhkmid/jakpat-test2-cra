import React from "react"
import styled from "styled-components"

const data = new Array(12).fill(0).map((val) => val + 1)

const LoadingCards = () => {

  return (
    <LoadingCardsStyled>
      {data.map((val, idx) => <div key={val + idx} className="character-card"><Skeleton /></div>)}
    </LoadingCardsStyled>
  )
}

export default LoadingCards

const LoadingCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(180px, 1fr));
  gap: 20px;
  .character-card {
    display: flex;
    overflow: hidden;
    height: 210px;
    border-radius: 10px;
    flex-direction: column;
  }
`

const Skeleton = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeholderSkeleton;
  animation-timing-function: linear;
  background: #f6f7f8;
  background-image: -webkit-gradient(
    linear,
    left center,
    right center,
    from(#f6f7f8),
    color-stop(0.2, #edeef1),
    color-stop(0.4, #f6f7f8),
    to(#f6f7f8)
  );
  background-image: -webkit-linear-gradient(
    left,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100%;
  height: 100%;
  width: 100%;
  border-radius: 4px;

  @keyframes placeholderSkeleton {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 1200px 0;
    }
  }

  @keyframes skeletonAnimate {
    from {
      background-position: top left;
    }
    to {
      background-position: top right;
    }
  }
`
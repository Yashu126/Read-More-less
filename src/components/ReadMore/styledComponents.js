import styled from 'styled-components'

export const ReadMoreCon = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-size: cover;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 26px;
  font-family: Roboto;
`
export const Title = styled.p`
  color: #334155;
  font-family: Roboto;
  font-size: 12px;
`
export const Description = styled(Title)`
  width: 80%;
`

export const Image = styled.img`
  width: 80%;
  background-size: cover;
`

export const ReadMoreBtn = styled.button`
  background-color: #1f81ff;
  width: 100px;
  font-size: 12px;
  font-family: Roboto;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 8px;
`

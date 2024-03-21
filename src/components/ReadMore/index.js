import {useState} from 'react'

import {
  ReadMoreCon,
  Heading,
  Title,
  Description,
  Image,
  ReadMoreBtn,
} from './styledComponents'

const ReadMore = props => {
  const [showDescription, setStatus] = useState(false)

  const {reactHooksDescription} = props

  const readMore = () => {
    setStatus(prevValue => !prevValue)
  }

  return (
    <ReadMoreCon>
      <Heading>React Hooks</Heading>
      <Title>Hooks are a new addition to React</Title>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {showDescription ? (
        <Description>{reactHooksDescription}</Description>
      ) : (
        <Description>{reactHooksDescription.slice(0, 170)}</Description>
      )}
      {showDescription ? (
        <ReadMoreBtn onClick={readMore} type="button">
          Read Less
        </ReadMoreBtn>
      ) : (
        <ReadMoreBtn onClick={readMore} type="button">
          Read More
        </ReadMoreBtn>
      )}
    </ReadMoreCon>
  )
}

export default ReadMore

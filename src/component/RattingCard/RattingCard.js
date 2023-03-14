import React, { useState } from 'react';
import { H1, P, RattingCardWrapper, RattingIconBox, StarButton, SubmitButton } from './RattingCard.style';
import Star from '../../acctes/icon-star.svg'

const RattingCard = () => {

    const [selectedRating, setSelectedRating] = useState(0);
    console.log(selectedRating)

    return (
       <RattingCardWrapper>
             <RattingIconBox>
                 <img src={Star} alt="star icon" />
             </RattingIconBox>
             <H1>How did we do?</H1>
             <P>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</P>

             {
                [1,2,3,4,5].map((item, i) => (<StarButton as='button' 
                key={i} 
                onClick={() => {setSelectedRating(item)}}
                selected={selectedRating === i + 1} >{item}</StarButton>))
             }

             <SubmitButton>Submit</SubmitButton>
       </RattingCardWrapper>
    );
};

export default RattingCard;
import React from 'react';
import { RattingCardWrapper } from './RattingCard.style';
import Star from '../../acctes/icon-star.svg'

const RattingCard = () => {
    return (
       <RattingCardWrapper>
             <div>
                 <img src={Star} alt="" />
             </div>
       </RattingCardWrapper>
    );
};

export default RattingCard;
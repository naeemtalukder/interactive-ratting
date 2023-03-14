import styled from "styled-components";

export const RattingCardWrapper = styled.div`

    border-radius: 20px;
    width: 100%;
    max-width: 450px;
    min-width: 450px;
    background: white;
    background-color: hsl(213, 19%, 18%);
    padding: 2.2rem;

`;

export const RattingIconBox = styled.div`

    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: hsl(210, 16%, 22%);
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const H1 = styled.h1`

   color: #ffffff;
   font-size: 1.8rem;
   letter-spacing: 1.5px;
   margin: 2rem 0 1rem 0;
   text-align: left;

`;

export const P = styled.p`

   color: hsl(217, 12%, 63%);
   font-size: 1.1rem;
   margin: 1rem 0 2rem 0;
   text-align: left;

`;

export const StarButton = styled(RattingIconBox)`

    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    color: #ffffff;

    background-color: ${({selected}) => selected ? 'hsl(25, 97%, 53%)' : 'hsl(213, 19%, 18%)'};

    &:not(:last-child){
        margin-right: 1rem;
    }

    &:hover {
        background: hsl(25, 97%, 53%);
        transition: all 0.2s;
    }
`;

export const SubmitButton = styled.button`

    border-radius: 25px;
    width: 100%;
    background: hsl(25, 97%, 53%);
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    outline: none;
    padding: 0.8rem 2rem;
    margin-top: 2rem;
    cursor: pointer;

    &:hover {
        background: #ffffff;
        color: hsl(25, 97%, 53%);
    }
      
    
`;
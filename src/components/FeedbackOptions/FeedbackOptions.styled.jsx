import styled from "styled-components";


export const Button = styled.button`
font-size: 16px;
border-radius: 8px;
padding: 4px 16px;
border: 1px solid grey;
cursor: pointer;

&:not(:last-child){
    margin-right: 12px;
}

&:active{
    background-color: darkgrey;
}
`;

export const ButtonWrapper = styled.div`
margin-bottom: 20px;
`;
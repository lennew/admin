import styled from "styled-components";

const REM = 16;
export const RED = "#f44336";
export const GREEN = "#4CAF50";

export const rem = (px: number): string => {
    return `${px / REM}rem`;
};

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button<{color?: string}>`
    background-color: ${ props => props.color ? props.color : "#008CBA"};
    border-radius: ${rem(4)};
    border: none;
    color: white;
    padding: ${rem(7)} ${rem(15)};
    text-align: center;
    display: inline-block;
    font-size: ${rem(12)};
`;


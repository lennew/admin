import styled from "styled-components";
import { rem } from "../../utils/styles";

export const RowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${rem(12)} ${rem(4)};
    border-bottom: ${rem(1)} solid gray;
    border-left: ${rem(1)} solid gray;
    border-right: ${rem(1)} solid gray;
`;

export const Cell = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    overflow: hidden;
    width: 20%;
    font-size: ${rem(14)};
`;

export const UserTable = styled.div`
    display: flex;
    flex-direction: column;
`;
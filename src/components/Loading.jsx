import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading(){
    return(
        <Load>
            <AiOutlineLoading3Quarters />
        </Load>
    )
}

const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    font-size: 200px;
    animation: spin 1s infinite; 


    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
`
import styled from 'styled-components';

const StyledFav = styled.div`
margin:20px;
.favorite{    
    color:#EDEDED;
    background-color: #8D2828;   
    .title{
        text-decoration: none;
        color:#EDEDED;
    }
    .title:hover{
        color: #555555;
    }
    button{
        color:#8D2828;
        background-color: #EDEDED;
    }
    button:hover{
        color:#EDEDED;
        background-color: #8D2828;
        transform: scale(1.02);
        }
}
`

export default StyledFav;
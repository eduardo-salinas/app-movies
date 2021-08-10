import styled from 'styled-components';

const StyledFav = styled.div`
margin: 20px 10px 0px 20px;
.favorite{
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#EDEDED;
    background-color: #8D2828;    
    text-align:center;
    height: 50px;
    border-radius: 5px;
    .title{
        text-decoration: none;
        width: 500px;
        color:#EDEDED;
    }
    .title:hover{
        color: #555555;
    }
    p {
        width:200px;
    }
    button{
                color:#8D2828;
                background-color: #CDC9C3;
                height: 100%;
        }
        button:hover{
            background-color: #555555;
        }
}
`

export default StyledFav;
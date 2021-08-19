import styled from 'styled-components';

const StyledAbout = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 50px;
.card-body{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    color:#EDEDED;
    background-color: #8D2828;
div{
    font-size: 2rem;
    text-align:center;
}
p{
    font-size: 1.5rem;
    text-align:center;
}
img{
    text-align:center;
    height: 100px;
}
}

`

export default StyledAbout;
import styled from 'styled-components';

const StyledMovie = styled.div`
margin: 0px 10px 20px 10px;
width: 350px;
height: 550px;
border: none;
text-decoration: none;

.card-header{
    color:#EDEDED;
    height: 60px;
    background-color: #8D2828;
}
.card-header:hover{
    text-align:center;
    transform: scale(1.02);
}
img{
    height: 490px;
}
.btn{
    border: none;
    background-color: transparent;
}
.infav{
    width: 80px;
    height: 80px; 
}
.favorite{
    filter:grayscale(100%);
    width: 80px;
    height: 80px;
}
.favorite:hover{
    cursor: pointer;
    filter:grayscale(0%);
}
.card-img-overlay{
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
}
`

export default StyledMovie;
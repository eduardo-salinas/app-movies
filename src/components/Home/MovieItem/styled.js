import styled from 'styled-components';

const StyledMovie = styled.div`
margin: 0px 10px 20px 10px;
width: 350px;
height: 550px;
border: none;
h5{
    color:black;
    height: 60px;
    text-align:center;
    text-decoration: none;
    background-color: #FFC947;
}
img{
    height: 490px;
}
.btn{
    border: none;
    background-color: transparent;
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
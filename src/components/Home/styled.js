import styled from 'styled-components';

const StyledHome = styled.div`
.all {
    margin:0px 30px 0px 30px;
    }
.paginate{
    margin-left: 80%;
}
.error{
    color:#EDEDED;
    font-size: 2rem;
}
`
const StyledPag = styled.div`
   .page-link {
       color:#EDEDED;
    background-color: #8D2828;
}
.page-link:hover{
    transform: scale(1.02);
}
`
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
const StyledSearch = styled.div`
        width: 20%;
        margin: 40px 0px 40px 40%;
        button{
                color:#EDEDED;
                background-color: #8D2828;
        }
        button:hover{
            transform: scale(1.02);
        }
`

export {
    StyledHome,
    StyledMovie,
    StyledPag,
    StyledSearch
}
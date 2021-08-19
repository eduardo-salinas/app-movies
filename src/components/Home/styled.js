import styled from 'styled-components';

const StyledHome = styled.div`
.all {
    margin:0px 30px 0px 30px;
    }


.error{
    color:#EDEDED;
    font-size: 2rem;
}
`
const StyledPag = styled.div`
display:flex;
justify-content: flex-end;
margin:20px;
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
img{
    height: 490px;
}
.title{
    text-align:center;
    text-decoration:none;
    color:#EDEDED;
    background-color: #8D2828;
    height: 50px;
}
.title:hover{
    cursor: pointer;
    color:gray
}
.btn{
    margin-bottom:15px;
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
        margin-top: 20px;
        display:flex;
        justify-content: center;
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
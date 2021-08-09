import styled from 'styled-components';

const StyledMovie = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 50px;
.detail{
    max-width: 85%;
    img{
        float: left;
        height: 650px;
    }
}

.card-body{
    height: 650px;
    color:#EDEDED;
    background-color: #8D2828;
    h4{
        font-size: 1.3rem;
    }
    h5{
        font-size: 4rem;
        text-align:center;
    }
    p{
        font-size: 2rem;
        text-align:center;
    }
}
.card-header:hover{
    text-align:center;
    transform: scale(1.02);
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
import React from 'react';
import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-graph.svg' alt='' />
                </Hero>
                <From>
                    <Google>
                        <img src='/images/google.svg' alt='' />
                        <p>Sign in with google</p>
                    </Google>
                </From>
            </Section>
        </Container>
    )
};

const Container = styled.div`
    padding: 0;
    margin: 0;
`;
const Section = styled.section`
    display: flex;
    align-content: start;
    /* min-height: 700px; */
    padding-bottom: 138px;
    /* padding-top: 40px; */
    padding: 100px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media (max-width: 768px){
        margin: 'auto',;
        min-height: 0px;
    }  
`;
const Hero = styled.div`
    width: 100%;

    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #6C63FF;
        font-weight: 200;
        line-height: 70px;

        @media (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        } 
    }

    img{
        /* z-index: -1; */
        width: 700px;
        height: 570px;
        position: absolute;
        bottom: -96px;
        right: -100px;

        @media (max-width: 768px){
            width: 300px;
            height: 370px;
            top: 230px;
            right: 0;
            /* width: initial;
            position: initial;
            height: initial; */
        }
    }
`;
const From = styled.div`
    margin-top: 100px;
    width: 408px;

    @media (max-width: 768px){
        margin-top: 20px; 
    } 
`;
const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border: none;
    border-radius: 28px;
    box-shadow:  inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &:hover{
        background-color: rgba(207, 207, 207, 0.25); 
        color: rgba(0, 0, 0, 0.75);
    }
    p{
        padding: 0 10px;
    }
`;


export default Login;

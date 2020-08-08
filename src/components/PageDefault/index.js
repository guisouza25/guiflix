import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;   
    padding-left: 5%;
    padding-right: 5%; 
`;

function PageDefault(props) {
    return (
        <div> {/*todo componente precisa ter uma estrutura em volta*/}

        <Main>
            <Menu />
                {props.children}
            <Footer />
        </Main>

        </div>
    );
}

export default PageDefault;
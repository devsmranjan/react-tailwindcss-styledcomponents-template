import React from 'react';
import ButtonComponent from './components/Button';
import { GlobalStyles } from 'twin.macro'; // new
import { StyledApp } from './styles/StyledApp';

const App = () => {
    return (
        <div>
            <GlobalStyles /> {/* new */}
            <StyledApp>
                <ButtonComponent />
            </StyledApp>
        </div>
    );
};

export default App;

import React from 'react';
//css
import { Container, Navigation, DropboxLogo, Form } from './styles';


const FormMenu: React.FC = () => {
    function handleToggle() {
        if (window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return (
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo />
                    <span>Dropbox</span>
                </h1>
                {/* ✕ chacter in video description */}
                <button className="action--close" onClick={handleToggle}>
                    ✕
                </button>
                <Form>
                    <span className="title">Registre-se</span>
                    <span className="subtitle">preencha o formulário abaixo</span>

                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Sobrenome" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />

                    <button>Prosseguir</button>

                    <span className="terms">
                        Esta página está sujeita à Política de privacidade e aos Termos de
                        serviço.
                    </span>
                </Form>

            </Navigation>
        </Container>
    )
}

export default FormMenu;
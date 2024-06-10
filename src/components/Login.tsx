import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; // Importe o arquivo CSS

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (email === 'admin' && password === 'admin') {
            navigate('/');
        } else {
            setErrorMessage('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="email" className="label">Seu email</label>
                    <input
                        type="text"
                        id="email"
                        className="input"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="label">Senha</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <a href="#" className="link">Esqueceu a senha?</a>
                <button type="submit" className="button">Entrar</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <a href="#" className="register">Não tem uma conta? Cadastre-se</a>
            </form>
        </div>
    );
}

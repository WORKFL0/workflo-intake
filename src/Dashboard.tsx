import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import './index.css';

interface IntakeItem {
    id: number;
    created_at: string;
    client_name: string;
    client_address: string;
    client_city: string;
    answers: Record<string, any>;
}

const Dashboard: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [intakes, setIntakes] = useState<IntakeItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // A simple passgate. For real prod, Use Supabase Auth!
        if (password === 'workflo2026!') {
            setIsAuthenticated(true);
            fetchIntakes();
        } else {
            setError('Onjuist wachtwoord');
        }
    };

    const fetchIntakes = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('intakes')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Supabase error:", error);
                throw error;
            }
            if (data) {
                setIntakes(data as IntakeItem[]);
            }
        } catch (err: any) {
            setError('Fout bij ophalen van data: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
                <div className="section-card">
                    <h2 className="section-title">Admin Dashboard</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label className="question-label">Wachtwoord</label>
                            <input
                                type="password"
                                className="input-text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Vul wachtwoord in..."
                            />
                        </div>
                        {error && <p style={{ color: '#ef4444', marginBottom: '15px' }}>{error}</p>}
                        <button type="submit" className="submit-btn" style={{ width: '100%', minWidth: 'auto' }}>
                            Inloggen
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ maxWidth: '1200px' }}>
            <div className="header">
                <h1>Workflo Intake Dashboard</h1>
                <p>Overzicht van alle ingevulde formulieren (gekoppeld aan Supabase).</p>
                <div style={{ marginTop: '20px' }}>
                    <button className="submit-btn" onClick={() => window.location.href = '/'} style={{ minWidth: 'auto', padding: '10px 20px', fontSize: '1rem' }}>
                        &larr; Terug naar de voorkant
                    </button>
                    <button className="submit-btn" onClick={fetchIntakes} style={{ minWidth: 'auto', padding: '10px 20px', fontSize: '1rem', marginLeft: '10px', background: 'transparent', border: '1px solid var(--accent-yellow)', color: 'var(--accent-yellow)' }}>
                        ↻ Verversen
                    </button>
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>Data laden...</div>
            ) : intakes.length === 0 ? (
                <div className="section-card" style={{ textAlign: 'center' }}>Nog geen intakes gevonden in de database.</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {intakes.map((intake) => (
                        <div key={intake.id} className="section-card">
                            <h2 style={{ color: '#10b981', marginBottom: '10px' }}>{intake.client_name}</h2>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}>
                                Aangemaakt op: {new Date(intake.created_at).toLocaleString('nl-NL')} <br />
                                Locatie: {intake.client_address}, {intake.client_city}
                            </p>

                            <h3 style={{ marginBottom: '10px', color: 'var(--accent-yellow)' }}>Gegeven Antwoorden (Ruwe Data):</h3>
                            <div style={{ background: 'rgba(11, 17, 32, 0.6)', padding: '15px', borderRadius: '8px', overflowX: 'auto' }}>
                                <pre style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: 0 }}>
                                    {JSON.stringify(intake.answers, null, 2)}
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;

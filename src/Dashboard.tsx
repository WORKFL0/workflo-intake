import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { calculateScore, generatePDF, generateTXT, getQuestionLabels } from './utils';
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
    const [questionLabels, setQuestionLabels] = useState<Record<string, string>>({});

    useEffect(() => {
        setQuestionLabels(getQuestionLabels());
    }, []);

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
                    {intakes.map((intake) => {
                        const { score } = calculateScore(intake.answers);
                        const labelKeys = Object.keys(intake.answers);
                        return (
                            <div key={intake.id} className="section-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <h2 style={{ color: '#10b981', margin: 0 }}>{intake.client_name}</h2>
                                    <div style={{ background: '#10b981', color: '#111827', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
                                        Score: {score}/100
                                    </div>
                                </div>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px' }}>
                                    Aangemaakt op: {new Date(intake.created_at).toLocaleString('nl-NL')} <br />
                                    Locatie: {intake.client_address}, {intake.client_city}
                                </p>

                                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                                    <button
                                        className="submit-btn"
                                        onClick={() => generatePDF(intake.client_name, intake.answers, score)}
                                        style={{ padding: '8px 15px', fontSize: '0.9rem', minWidth: 'auto', background: '#3b82f6', color: '#fff', border: 'none' }}>
                                        Export PDF
                                    </button>
                                    <button
                                        className="submit-btn"
                                        onClick={() => generateTXT(intake.client_name, intake.answers, score)}
                                        style={{ padding: '8px 15px', fontSize: '0.9rem', minWidth: 'auto', background: 'transparent', color: '#eab308', border: '1px solid #eab308' }}>
                                        Export TXT
                                    </button>
                                </div>

                                <h3 style={{ marginBottom: '10px', color: 'var(--accent-yellow)', fontSize: '1.1rem' }}>Gegeven Antwoorden:</h3>
                                <div style={{ background: 'rgba(11, 17, 32, 0.6)', padding: '15px', borderRadius: '8px' }}>
                                    {labelKeys.length > 0 ? (
                                        labelKeys.map((key) => {
                                            const questionLabel = questionLabels[key] || key;
                                            const rawValue = intake.answers[key];
                                            const valueStr = Array.isArray(rawValue) ? rawValue.join(', ') : String(rawValue);
                                            return (
                                                <div key={key} style={{ marginBottom: '15px' }}>
                                                    <div style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>{questionLabel}</div>
                                                    <div style={{ color: '#94a3b8', fontSize: '0.9rem', paddingLeft: '10px', borderLeft: '2px solid #3b82f6' }}>{valueStr}</div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div style={{ color: '#94a3b8', fontStyle: 'italic' }}>Geen antwoorden geregistreerd.</div>
                                    )}
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            )}
        </div>
    );
};

export default Dashboard;

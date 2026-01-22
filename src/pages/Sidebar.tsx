import { useState } from 'react';
import logo from '../assets/wallemrectangle.png';
import '../styles/Sidebar.css';

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={`dashboard-root${sidebarOpen ? '' : ' sidebar-collapsed'}`}>
            <aside className={`dashboard-sidebar${sidebarOpen ? '' : ' collapsed'}`}>
                <div className="sidebar-header">
                    {sidebarOpen ? (
                        <span className="sidebar-logo" onClick={() => setSidebarOpen(false)}>
                            <img src={logo} alt="Wallem Logo" />
                        </span>
                    ) : (
                        <button
                            className="sidebar-toggle"
                            onClick={() => setSidebarOpen(true)}
                            aria-label="Toggle sidebar">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    )}
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="sidebar-link active">
                        <span className="sidebar-icon" aria-label="Dashboard">
                            {/* Dashboard icon */}
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" /><rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" /><rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" /><rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" /></svg>
                        </span>
                        {sidebarOpen && <span className="sidebar-label">Dashboard</span>}
                    </a>
                    <a href="#" className="sidebar-link">
                        <span className="sidebar-icon" aria-label="Backups">
                            {/* Backups icon */}
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>
                        </span>
                        {sidebarOpen && <span className="sidebar-label">Setup</span>}
                    </a>
                    <a href="#" className="sidebar-link">
                        <span className="sidebar-icon" aria-label="Settings">
                            {/* Settings icon */}
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9c.14.14.26.3.33.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {sidebarOpen && <span className="sidebar-label">Reports</span>}
                    </a>
                </nav>
                <div className="sidebar-logout">
                    <a href="#" className="sidebar-link">
                        <span className="sidebar-icon" aria-label="Logout">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                {/* Door shape */}
                                <path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                {/* Arrow pointing out */}
                                <path d="M14 12h7m-3-3l3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        {sidebarOpen && <span className="sidebar-label">Logout</span>}
                    </a>
                </div>
            </aside>

        </div>
    );
}

export default Sidebar;

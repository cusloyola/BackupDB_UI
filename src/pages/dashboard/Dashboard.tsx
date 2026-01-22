import Sidebar from '../../components/Sidebar';
import '../../styles/Dashboard.css';

function Dashboard() {
    // 1. Top Level Stats
    const stats = [
        { title: 'Last Backup', value: '14 mins ago', subtext: 'Production_DB', type: 'success' },
        { title: 'Success Rate', value: '98.5%', subtext: 'Last 30 Days', type: 'success' },
        { title: 'Storage Used', value: '850 GB', subtext: 'of 2 TB Quota', type: 'neutral' },
        { title: 'Failed Jobs', value: '1', subtext: 'Requires Attention', type: 'negative' },
    ];

    // 2. Main Report: Backup History Table
    const backupHistory = [
        { id: 1, datetime: 'Oct 24, 2023 - 14:30', details: 'PROD_DB_01 (Full Backup)', size: '45 GB', status: 'Success' },
        { id: 2, datetime: 'Oct 24, 2023 - 12:00', details: 'LOGS_ARCHIVE (Incremental)', size: '2.1 GB', status: 'Success' },
        { id: 3, datetime: 'Oct 24, 2023 - 11:45', details: 'USER_UPLOADS_BLOB', size: '120 GB', status: 'Running' },
        { id: 4, datetime: 'Oct 24, 2023 - 04:00', details: 'ANALYTICS_WH (Snapshot)', size: '0 GB', status: 'Failed' },
        { id: 5, datetime: 'Oct 23, 2023 - 23:00', details: 'PROD_DB_01 (Differential)', size: '12 GB', status: 'Success' },
    ];

    // 3. Secondary Report: Recent Alerts
    const systemAlerts = [
        { id: 1, time: '10:45 AM', message: 'Storage utilization warning (85%)', type: 'warning' },
        { id: 2, time: '04:01 AM', message: 'Connection timeout: ANALYTICS_WH', type: 'error' },
        { id: 3, time: 'Yesterday', message: 'Weekly retention cleanup completed', type: 'info' },
    ];

    return (
        <div className="dashboard-layout">
            <Sidebar />
            
            <aside className="dashboard-main">
                <header className="dashboard-header">
                    <div className="header-text">
                        <h1>Backup Operations</h1>
                        <p>System Status: <span style={{color: '#10b981', fontWeight: 'bold'}}>Operational</span></p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-secondary">Configure Agents</button>
                        <button className="btn-primary">Run Manual Backup</button>
                    </div>
                </header>

                <section className="dashboard-content">
                    {/* Stats Row */}
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3>{stat.title}</h3>
                                <div className="stat-value">{stat.value}</div>
                                <span className={`stat-subtext ${stat.type}`}>
                                    {stat.subtext}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="content-split">
                        {/* Left Column: Main Backup Table */}
                        <div className="card table-card">
                            <div className="card-header">
                                <h2>Recent Backups</h2>
                                <a href="#" className="view-all">View Logs</a>
                            </div>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>DateTime</th>
                                        <th>Details</th>
                                        <th>Size</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {backupHistory.map((job) => (
                                        <tr key={job.id}>
                                            <td className="text-muted">{job.datetime}</td>
                                            <td className="font-medium">{job.details}</td>
                                            <td>{job.size}</td>
                                            <td>
                                                <span className={`status-badge ${job.status.toLowerCase()}`}>
                                                    {job.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Right Column: Alerts & Quick Actions */}
                        <div className="side-panel">
                            <div className="card alerts-card">
                                <div className="card-header">
                                    <h2>System Alerts</h2>
                                </div>
                                <ul className="alerts-list">
                                    {systemAlerts.map((alert) => (
                                        <li key={alert.id} className={`alert-item ${alert.type}`}>
                                            <span className="alert-time">{alert.time}</span>
                                            <span className="alert-msg">{alert.message}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </aside>
        </div>
    );
}

export default Dashboard;
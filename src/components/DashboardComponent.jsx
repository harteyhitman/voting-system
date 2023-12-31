

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <div className="dashboard-section">
                <h2>Dashboard Section</h2>
                {}
            </div>
            <div className="main-section">
                <h2>Main Section</h2>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;

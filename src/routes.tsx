import { Navigate, Route, Routes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import DashboardLayout from '@/layouts/dashboard';
// import LogoOnlyLayout from '@/layouts/LogoOnlyLayout';
import NotFound from '@/pages/Page404';
import ServiceList from 'src/pages/ServiceList';
import ServiceRequest from 'src/pages/ServiceRequest';
import AccountManagement from 'src/pages/AccountManagement';
import AccountCreate from 'src/pages/AccountCreateWrapper';
import AccountUpdate from 'src/pages/AccountUpdateWrapper';
import AssetManagement from 'src/pages/AssetManagement';
import AssetCreate from 'src/pages/AssetCreate';
import Contract from 'src/pages/Contract';
import Stat from 'src/pages/Stat';
import ReportList from 'src/pages/ReportList';
import Notice from 'src/pages/Helloworld';
import CompanyManagement from 'src/pages/CompanyManagement';
import CompanyReport from 'src/pages/CompanyReport';
import Login from 'src/pages/Login';
import Profile from 'src/pages/PersonalInfo';
import DashboardApp from '@/pages/DashboardApp';

export const Router = (): ReactElement => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
                {/* <Route path="dashboard" element={<DashboardViewPage />} /> */}
                <Route path="" element={<Navigate to="/dashboard/app" replace />} />
                <Route path="app" element={<DashboardApp />} />
                <Route path="accountmanagement" element={<AccountManagement />} />
                <Route path="accountcreate" element={<AccountCreate />} />
                <Route path="accountupdate" element={<AccountUpdate />} />
                <Route path="assetmanagement" element={<AssetManagement />} />
                <Route path="assetcreate" element={<AssetCreate />} />
                <Route path="contract" element={<Contract />} />
                <Route path="profile" element={<Profile />} />
                <Route path="stat" element={<Stat />} />
                <Route path="reportlist" element={<ReportList />} />
                <Route path="notice" element={<Notice />} />
                <Route path="404" element={<NotFound />} />
                {/* <Route path="" element={<Navigate to="/dashboard" />} /> */}
                {/* <Route path="" element={<Navigate to="index/login" />} /> */}
                <Route path="*" element={<Navigate to="/404" />} />
            </Route>
            <Route path="/service" element={<DashboardLayout />}>
                <Route path="" element={<Navigate to="/service/request" replace />} />
                <Route path="request" element={<ServiceRequest />} />
                <Route path="list" element={<ServiceList />} />
            </Route>
            <Route path="/company" element={<DashboardLayout />}>
                <Route path="" element={<Navigate to="/company/management" replace />} />
                <Route path="management" element={<CompanyManagement />} />
                <Route path="report" element={<CompanyReport />} />
            </Route>
            <Route path="/" >
                <Route path="login" element={<Login />} />  
                <Route path="" element={<Navigate to="/login" replace />} />
            </Route>
         </Routes>
    );
};

export default Router;

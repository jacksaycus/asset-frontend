import { Navigate, Route, Routes } from 'react-router-dom';
import React, { ReactElement } from 'react';
import Layout from 'src/layouts/index';
import SimpleLayout from 'src/layouts/SimpleLayout';
import NotFound from 'src/pages/Page404';
import Helloworld from 'src/pages/Dashboard';
import ServiceList from 'src/pages/ServiceList';
import ServiceRequest from 'src/pages/ServiceRequest';
import AccountManagement from 'src/pages/AccountManagement';
import AccountCreate from 'src/pages/AccountCreate';
import AssetManagement from 'src/pages/AssetManagement';
import Contract from 'src/pages/Contract';
import Stat from 'src/pages/Stat';
import ReportList from 'src/pages/ReportList';
import Notice from 'src/pages/Notice';
import CompanyManagement from 'src/pages/CompanyManagement';
import CompanyReport from 'src/pages/CompanyReport';
import Login from 'src/pages/Login';

export const Router = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="dashboard" element={<Helloworld />} />
                <Route path="accountmanagement" element={<AccountManagement />} />
                <Route path="accountcreate" element={<AccountCreate />} />
                <Route path="assetmanagement" element={<AssetManagement />} />
                <Route path="contract" element={<Contract />} />
                <Route path="stat" element={<Stat />} />
                <Route path="reportlist" element={<ReportList />} />
                <Route path="notice" element={<Notice />} />
                <Route path="404" element={<NotFound />} />
                <Route path="" element={<Navigate to="/dashboard" />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Route>
            <Route path="/service" element={<Layout />}>
                <Route path="" element={<Navigate to="/service/request" replace />} />
                <Route path="request" element={<ServiceRequest />} />
                <Route path="list" element={<ServiceList />} />
            </Route>
            <Route path="/company" element={<Layout />}>
                <Route path="" element={<Navigate to="/company/management" replace />} />
                <Route path="management" element={<CompanyManagement />} />
                <Route path="report" element={<CompanyReport />} />
            </Route>
            <Route path="/index" element={<SimpleLayout />}>
                <Route path="login" element={<Login />} />  
            </Route>
         </Routes>
    );
};

export default Router;

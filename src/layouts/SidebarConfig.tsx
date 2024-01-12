import React from 'react';
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import { NavItemConfig } from 'src/models';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig: NavItemConfig[] = [
    {
        title: 'helloworld',
        path: '/helloworld',
        icon: getIcon(peopleFill)
    },
    {
        title: '간편등록',
        path: '/dashboard/app',
        icon: getIcon(pieChart2Fill)
    },
    {
        title: '서비스관리',
        path: '/dashboard/user',
        icon: getIcon(peopleFill)
    },
    {
        title: '그룹관리',
        path: '/dashboard/products',
        icon: getIcon(shoppingBagFill)
    },
    {
        title: '자산관리',
        path: '/dashboard/blog',
        icon: getIcon(fileTextFill)
    },
    {
        title: '계약관리',
        path: '/login',
        icon: getIcon(lockFill)
    },
    {
        title: '정기점검계약관리',
        path: '/register',
        icon: getIcon(personAddFill)
    },
    {
        title: '통계보고서',
        path: '/register',
        icon: getIcon(personAddFill)
    },
    {
        title: '공지사항',
        path: '/register',
        icon: getIcon(personAddFill)
    },
    {
        title: '설정관리',
        path: '/register',
        icon: getIcon(personAddFill)
    },
    {
        title: '고객센터',
        path: '/register',
        icon: getIcon(personAddFill)
    },
    {
        title: 'Not found',
        path: '/404',
        icon: getIcon(alertTriangleFill)
    }
];

export default sidebarConfig;

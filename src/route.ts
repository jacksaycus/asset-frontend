 // const ROUTES = {
//     helloworld: 'helloworld',
//     quickregister: '간편등록',
//     servicemanagement: '서비스관리',
//     groupmanagement: '그룹관리',
//     assetmanagement: '자산관리',
//     contractmanagement: '계약관리',
//     contractregandser: '계약등록/조회',
//     regularcheckcontractmanagement: '정기점검계약관리',
//     report: '통계/보고서',
//     notice: '공지사항',
//     settingmanagement: '설정관리',
//     helpcenter: '고객센터',
//   };
  
//   export default ROUTES;
// import standardNavIcons from 'docs/src/modules/components/AppNavIcons';
// import pagesApi from 'docs/data/material/pagesApi';
import { MuiPage } from 'src/MuiPage';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
const pages: MuiPage[] = [
  {
    pathname: '/dashboard',
    title: '메인',
    icon: 'home',
    children: []
  }
  // ,
  // {
  //   pathname: '/helloworld',
  //   title: 'helloworld',
  //   icon: 'home',
  //   children: []
  // }
  ,
  {
    pathname: '/service',
    title: '서비스',
    icon: 'service',
    children: [
      { pathname: '/service/request' , title:'서비스 요청',icon: 'dot'},
      { pathname: '/service/list' , title:'서비스 현황',icon: 'dot'},
    ],
  },
  {
    pathname: '/accountmanagement',
    title: '계정관리',
    icon: 'account',
    children: [
    ]
  }
  ,
  {
    pathname: '/accountcreate',
    title: '계정생성',
    icon: '',
    children: [
    ]
  }
  ,
  {
    pathname: '/accountupdate',
    title: '계정수정',
    icon: '',
    children: [
    ]
  }
  ,
  {
    pathname: '/assetmanagement',
    title: '자산관리',
    icon: 'assets',
    children: [
    ]
  }
  ,
  {
    pathname: '/assetcreate',
    title: '자산생성',
    icon: '',
    children: [
    ]
  }
  ,
  {
    pathname: '/contract',
    title: '계약',
    icon: 'contract',
    children: [
    ]
  }
  ,
  {
    pathname: '/company',
    title: '회사',
    icon: 'company',
    children: [
      { pathname: '/company/management' , title:'회사 및 지점관리',icon: 'dot'},
      { pathname: '/company/report' , title:'보고서 템플릿',icon: 'dot'},
    ]
  }
  ,
  {
    pathname: '/stat',
    title: '통계',
    icon: 'statistics',
    children: [
    ]
  }
  ,
  {
    pathname: '/reportlist',
    title: '보고서조회',
    icon: 'report',
    children: [
    ]
  }
  ,
  {
    pathname: '/notice',
    title: '공지사항',
    icon: 'board',
    children: [
    ]
  }
  // ,
  // {
  //   pathname: '/customercenter',
  //   title: '고객센터',
  //   icon: 'eva:book-outline',
  //   children: [
  //   ]
  // }
  // ,
  // {
  //   pathname: '/onetooneqna',
  //   title: '1:1일문의사항',
  //   icon: 'eva:book-outline',
  //   children: [
  //   ]
  // }
  // ,
  // {
  //   pathname: '/frequentlyquestion',
  //   title: '자주하는질문',
  //   icon: 'eva:book-outline',
  //   children: [
  //   ]
  // }
  // ,
  // {
  //   pathname: '/useguide',
  //   title: '이용안내',
  //   icon: 'eva:book-outline',
  //   children: [
  //   ]
  // }
  
  ]
 
export default pages;

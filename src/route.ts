import { MuiPage } from 'src/MuiPage';

const pages: MuiPage[] = [
  {
    pathname: '/dashboard',
    title: '메인',
    icon: 'home',
    children: []
  }
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
    pathname: '/profile',
    title: '프로필',
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
  ]
 
export default pages;

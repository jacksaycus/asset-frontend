import React, { useState } from 'react';
import { Icon , addIcon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, Stack, Typography } from '@mui/material';
import { MuiPage } from 'src/MuiPage';
import PageContext from 'src/components/PageContext';
import Divider from 'src/components/Divider';
import GroupIcon from 'src/assets/images/icons/group.png';
import { FileUploader } from "react-drag-drop-files";
import * as _ from "lodash";

addIcon('account', {
    body: '<path d="M4.9375 14.0625C5.6875 13.5347 6.48958 13.1424 7.34375 12.8854C8.19792 12.6285 9.08333 12.5 10 12.5C10.9167 12.5 11.8021 12.6285 12.6562 12.8854C13.5104 13.1424 14.3125 13.5347 15.0625 14.0625C15.5486 13.4931 15.9097 12.8611 16.1458 12.1667C16.3819 11.4722 16.5 10.75 16.5 10C16.5 8.19896 15.8665 6.66536 14.5994 5.39921C13.3323 4.13307 11.7976 3.5 9.99521 3.5C8.19285 3.5 6.65972 4.13307 5.39583 5.39921C4.13194 6.66536 3.5 8.19896 3.5 10C3.5 10.75 3.61806 11.4722 3.85417 12.1667C4.09028 12.8611 4.45139 13.4931 4.9375 14.0625ZM10 11.5C9.16667 11.5 8.45833 11.2083 7.875 10.625C7.29167 10.0417 7 9.33333 7 8.5C7 7.66667 7.29167 6.95833 7.875 6.375C8.45833 5.79167 9.16667 5.5 10 5.5C10.8333 5.5 11.5417 5.79167 12.125 6.375C12.7083 6.95833 13 7.66667 13 8.5C13 9.33333 12.7083 10.0417 12.125 10.625C11.5417 11.2083 10.8333 11.5 10 11.5ZM10.0058 18C8.9047 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0767 2.625 13.105C2.20833 12.1334 2 11.0952 2 9.99046C2 8.88571 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92332 3.04167 6.89496 2.625C7.86661 2.20833 8.90481 2 10.0095 2C11.1143 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92169 17.375 6.89008C17.7917 7.85849 18 8.89321 18 9.99425C18 11.0953 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0783 16.9583 13.1099 17.375C12.1415 17.7917 11.1068 18 10.0058 18ZM10 16.5C10.7222 16.5 11.4167 16.3854 12.0833 16.1562C12.75 15.9271 13.375 15.5903 13.9583 15.1458C13.3611 14.7708 12.7292 14.4861 12.0625 14.2917C11.3958 14.0972 10.7083 14 10 14C9.29167 14 8.60069 14.0938 7.92708 14.2812C7.25347 14.4688 6.625 14.7569 6.04167 15.1458C6.625 15.5903 7.25 15.9271 7.91667 16.1562C8.58333 16.3854 9.27778 16.5 10 16.5ZM10 10C10.4167 10 10.7708 9.85417 11.0625 9.5625C11.3542 9.27083 11.5 8.91667 11.5 8.5C11.5 8.08333 11.3542 7.72917 11.0625 7.4375C10.7708 7.14583 10.4167 7 10 7C9.58333 7 9.22917 7.14583 8.9375 7.4375C8.64583 7.72917 8.5 8.08333 8.5 8.5C8.5 8.91667 8.64583 9.27083 8.9375 9.5625C9.22917 9.85417 9.58333 10 10 10Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('assets', {
    body: '<path d="M3 16C2.72222 16 2.48611 15.9028 2.29167 15.7083C2.09722 15.5139 2 15.2778 2 15C2 14.7222 2.09722 14.4861 2.29167 14.2917C2.48611 14.0972 2.72222 14 3 14H4V5.5C4 5.0875 4.14687 4.73438 4.44062 4.44063C4.73437 4.14688 5.0875 4 5.5 4H16.25C16.4625 4 16.6406 4.07145 16.7844 4.21435C16.9281 4.35727 17 4.53435 17 4.7456C17 4.95687 16.9281 5.13542 16.7844 5.28125C16.6406 5.42708 16.4625 5.5 16.25 5.5H5.5V14H9C9.27778 14 9.51389 14.0972 9.70833 14.2917C9.90278 14.4861 10 14.7222 10 15C10 15.2778 9.90278 15.5139 9.70833 15.7083C9.51389 15.9028 9.27778 16 9 16H3ZM12.7559 16C12.5436 16 12.3646 15.9282 12.2188 15.7845C12.0729 15.6409 12 15.4629 12 15.2505V7.75602C12 7.54367 12.0718 7.36458 12.2154 7.21875C12.359 7.07292 12.5369 7 12.7492 7H17.2441C17.4564 7 17.6354 7.07182 17.7812 7.21546C17.9271 7.35911 18 7.53711 18 7.74946V15.244C18 15.4563 17.9282 15.6354 17.7846 15.7812C17.641 15.9271 17.4631 16 17.2508 16H12.7559ZM13.5 14H16.5V8.5H13.5V14Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('board', {
    body: '<path d="M4.75608 15.5C4.54369 15.5 4.36458 15.4285 4.21875 15.2856C4.07292 15.1427 4 14.9656 4 14.7544C4 14.5431 4.07188 14.3646 4.21563 14.2188C4.35938 14.0729 4.5375 14 4.75 14H5V9C5 7.79167 5.37153 6.72917 6.11458 5.8125C6.85764 4.89583 7.81944 4.32639 9 4.10417V3C9 2.72222 9.09722 2.48611 9.29167 2.29167C9.48611 2.09722 9.72222 2 10 2C10.2778 2 10.5139 2.09722 10.7083 2.29167C10.9028 2.48611 11 2.72222 11 3V4.10417C12.1806 4.32639 13.1424 4.89583 13.8854 5.8125C14.6285 6.72917 15 7.79167 15 9V14H15.25C15.4625 14 15.6406 14.0715 15.7844 14.2144C15.9281 14.3573 16 14.5344 16 14.7456C16 14.9569 15.9282 15.1354 15.7845 15.2812C15.6408 15.4271 15.4628 15.5 15.2504 15.5H4.75608ZM9.99558 18C9.58186 18 9.22917 17.8531 8.9375 17.5594C8.64583 17.2656 8.5 16.9125 8.5 16.5H11.5C11.5 16.9167 11.3527 17.2708 11.0581 17.5625C10.7635 17.8542 10.4093 18 9.99558 18ZM6.5 14H13.5V9C13.5 8.02778 13.1597 7.20139 12.4792 6.52083C11.7986 5.84028 10.9722 5.5 10 5.5C9.02778 5.5 8.20139 5.84028 7.52083 6.52083C6.84028 7.20139 6.5 8.02778 6.5 9V14Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('company', {
    body: '<path d="M14.5 7.5H16V6H14.5V7.5ZM14.5 10.75H16V9.25H14.5V10.75ZM14.5 14H16V12.5H14.5V14ZM17.5 17H14.25C14.0375 17 13.8594 16.9285 13.7156 16.7856C13.5719 16.6427 13.5 16.4656 13.5 16.2544C13.5 16.0431 13.5719 15.8646 13.7156 15.7188C13.8594 15.5729 14.0375 15.5 14.25 15.5H17.5V4.5H10.5V6.04167L9 4.95833V4.5C9 4.08975 9.14744 3.73719 9.44231 3.44231C9.73719 3.14744 10.0897 3 10.5 3H17.5C17.9125 3 18.2656 3.14688 18.5594 3.44063C18.8531 3.73438 19 4.0875 19 4.5V15.5C19 15.9125 18.8531 16.2656 18.5594 16.5594C18.2656 16.8531 17.9125 17 17.5 17ZM2.49481 17C2.0816 17 1.72917 16.8531 1.4375 16.5594C1.14583 16.2656 1 15.9125 1 15.5V9.77083C1 9.53472 1.05556 9.30903 1.16667 9.09375C1.27778 8.87847 1.43056 8.69444 1.625 8.54167L5.625 5.64583C5.89201 5.45139 6.18447 5.35417 6.50235 5.35417C6.82023 5.35417 7.11111 5.45139 7.375 5.64583L11.375 8.54167C11.5694 8.69444 11.7222 8.87847 11.8333 9.09375C11.9444 9.30903 12 9.53472 12 9.77083V15.5C12 15.9125 11.8533 16.2656 11.56 16.5594C11.2668 16.8531 10.9142 17 10.5023 17H8.25575C8.04358 17 7.86458 16.9281 7.71875 16.7844C7.57292 16.6406 7.5 16.4625 7.5 16.25V13.5H5.5V16.25C5.5 16.4625 5.428 16.6406 5.284 16.7844C5.14 16.9281 4.96157 17 4.74871 17H2.49481ZM2.5 9.75V15.5H4V12.75C4 12.5375 4.07188 12.3594 4.21563 12.2156C4.35938 12.0719 4.5375 12 4.75 12H8.25C8.4625 12 8.64063 12.0719 8.78438 12.2156C8.92813 12.3594 9 12.5375 9 12.75V15.5H10.5V9.75L6.5 6.85417L2.5 9.75Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('contract', {
    body: '<path d="M4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H8.0625C8.17361 2.56944 8.40625 2.21181 8.76042 1.92708C9.11458 1.64236 9.52778 1.5 10 1.5C10.4722 1.5 10.8854 1.64236 11.2396 1.92708C11.5938 2.21181 11.8264 2.56944 11.9375 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5ZM6.75 14H11.25C11.4625 14 11.6406 13.9285 11.7844 13.7856C11.9281 13.6427 12 13.4656 12 13.2544C12 13.0431 11.9281 12.8646 11.7844 12.7188C11.6406 12.5729 11.4625 12.5 11.25 12.5H6.75C6.5375 12.5 6.35938 12.5715 6.21563 12.7144C6.07188 12.8573 6 13.0344 6 13.2456C6 13.4569 6.07188 13.6354 6.21563 13.7812C6.35938 13.9271 6.5375 14 6.75 14ZM6.75 10.75H13.25C13.4625 10.75 13.6406 10.6785 13.7844 10.5356C13.9281 10.3927 14 10.2156 14 10.0044C14 9.79313 13.9281 9.61458 13.7844 9.46875C13.6406 9.32292 13.4625 9.25 13.25 9.25H6.75C6.5375 9.25 6.35938 9.32145 6.21563 9.46435C6.07188 9.60727 6 9.78435 6 9.9956C6 10.2069 6.07188 10.3854 6.21563 10.5312C6.35938 10.6771 6.5375 10.75 6.75 10.75ZM6.75 7.5H13.25C13.4625 7.5 13.6406 7.42855 13.7844 7.28565C13.9281 7.14273 14 6.96565 14 6.7544C14 6.54313 13.9281 6.36458 13.7844 6.21875C13.6406 6.07292 13.4625 6 13.25 6H6.75C6.5375 6 6.35938 6.07145 6.21563 6.21435C6.07188 6.35727 6 6.53435 6 6.7456C6 6.95687 6.07188 7.13542 6.21563 7.28125C6.35938 7.42708 6.5375 7.5 6.75 7.5ZM10 4C10.1444 4 10.2639 3.95278 10.3583 3.85833C10.4528 3.76389 10.5 3.64444 10.5 3.5C10.5 3.35556 10.4528 3.23611 10.3583 3.14167C10.2639 3.04722 10.1444 3 10 3C9.85556 3 9.73611 3.04722 9.64167 3.14167C9.54722 3.23611 9.5 3.35556 9.5 3.5C9.5 3.64444 9.54722 3.76389 9.64167 3.85833C9.73611 3.95278 9.85556 4 10 4Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('home', {
    body: '<path d="M5.5 15.5H7.5V11.25C7.5 11.0375 7.57188 10.8594 7.71563 10.7156C7.85938 10.5719 8.0375 10.5 8.25 10.5H11.75C11.9625 10.5 12.1406 10.5719 12.2844 10.7156C12.4281 10.8594 12.5 11.0375 12.5 11.25V15.5H14.5V8.25L10 4.875L5.5 8.25V15.5ZM4 15.25V8.25C4 8.01599 4.05208 7.79428 4.15625 7.5849C4.26042 7.37552 4.40972 7.19444 4.60417 7.04167L9.10417 3.66667C9.38194 3.47222 9.68056 3.375 10 3.375C10.3194 3.375 10.6181 3.47222 10.8958 3.66667L15.3958 7.04167C15.5903 7.19444 15.7396 7.37552 15.8438 7.5849C15.9479 7.79428 16 8.01599 16 8.25V15.25C16 15.7313 15.8286 16.1432 15.4859 16.4859C15.1432 16.8286 14.7313 17 14.25 17H11.75C11.5375 17 11.3594 16.9281 11.2156 16.7844C11.0719 16.6406 11 16.4625 11 16.25V12H9V16.25C9 16.4625 8.92813 16.6406 8.78438 16.7844C8.64063 16.9281 8.4625 17 8.25 17H5.75C5.26875 17 4.85677 16.8286 4.51406 16.4859C4.17135 16.1432 4 15.7313 4 15.25Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('report', {
    body: '<path d="M4.5 15.5H11.5V12.25C11.5 12.0375 11.5719 11.8594 11.7156 11.7156C11.8594 11.5719 12.0375 11.5 12.25 11.5H15.5V4.5H4.5V15.5ZM4.49298 17C4.08099 17 3.72917 16.8531 3.4375 16.5594C3.14583 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H15.5C15.9125 3 16.2656 3.14663 16.5594 3.4399C16.8531 3.73315 17 4.08567 17 4.49748V11.3672C17 11.5668 16.9653 11.7569 16.8958 11.9375C16.8264 12.1181 16.7139 12.2861 16.5583 12.4418L12.4417 16.5583C12.2861 16.7139 12.1178 16.8264 11.9368 16.8958C11.7558 16.9653 11.5654 17 11.3656 17H4.49298ZM9.25 11.5H6.75C6.5375 11.5 6.35938 11.4285 6.21563 11.2856C6.07188 11.1427 6 10.9656 6 10.7544C6 10.5431 6.07188 10.3646 6.21563 10.2188C6.35938 10.0729 6.5375 10 6.75 10H9.25C9.4625 10 9.64063 10.0715 9.78438 10.2144C9.92813 10.3573 10 10.5344 10 10.7456C10 10.9569 9.92813 11.1354 9.78438 11.2812C9.64063 11.4271 9.4625 11.5 9.25 11.5ZM13.25 8.5H6.75C6.5375 8.5 6.35938 8.42855 6.21563 8.28565C6.07188 8.14273 6 7.96565 6 7.7544C6 7.54313 6.07188 7.36458 6.21563 7.21875C6.35938 7.07292 6.5375 7 6.75 7H13.25C13.4625 7 13.6406 7.07145 13.7844 7.21435C13.9281 7.35727 14 7.53435 14 7.7456C14 7.95687 13.9281 8.13542 13.7844 8.28125C13.6406 8.42708 13.4625 8.5 13.25 8.5Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('service', {
    body: '<path d="M4.4945 9C4.0815 9 3.72917 8.85069 3.4375 8.55208C3.14583 8.25347 3 7.90278 3 7.5V4.5C3 4.0875 3.14706 3.73438 3.44117 3.44063C3.73528 3.14688 4.08883 3 4.50183 3H7.5055C7.9185 3 8.27083 3.14688 8.5625 3.44063C8.85417 3.73438 9 4.0875 9 4.5V7.5C9 7.90278 8.85294 8.25347 8.55883 8.55208C8.26472 8.85069 7.91117 9 7.49817 9H4.4945ZM4.4945 17C4.0815 17 3.72917 16.8529 3.4375 16.5588C3.14583 16.2647 3 15.9112 3 15.4982V12.4945C3 12.0815 3.14706 11.7292 3.44117 11.4375C3.73528 11.1458 4.08883 11 4.50183 11H7.5055C7.9185 11 8.27083 11.1471 8.5625 11.4412C8.85417 11.7353 9 12.0888 9 12.5018V15.5055C9 15.9185 8.85294 16.2708 8.55883 16.5625C8.26472 16.8542 7.91117 17 7.49817 17H4.4945ZM12.5 9C12.0972 9 11.7465 8.85069 11.4479 8.55208C11.1493 8.25347 11 7.90278 11 7.5V4.5C11 4.0875 11.1493 3.73438 11.4479 3.44063C11.7465 3.14688 12.0972 3 12.5 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V7.5C17 7.90278 16.8531 8.25347 16.5594 8.55208C16.2656 8.85069 15.9125 9 15.5 9H12.5ZM12.5 17C12.0972 17 11.7465 16.8529 11.4479 16.5588C11.1493 16.2647 11 15.9112 11 15.4982V12.4945C11 12.0815 11.1493 11.7292 11.4479 11.4375C11.7465 11.1458 12.0972 11 12.5 11H15.5C15.9125 11 16.2656 11.1471 16.5594 11.4412C16.8531 11.7353 17 12.0888 17 12.5018V15.5055C17 15.9185 16.8531 16.2708 16.5594 16.5625C16.2656 16.8542 15.9125 17 15.5 17H12.5ZM4.5 7.5H7.5V4.5H4.5V7.5ZM12.5 7.5H15.5V4.5H12.5V7.5ZM12.5 15.5H15.5V12.5H12.5V15.5ZM4.5 15.5H7.5V12.5H4.5V15.5Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('statistics', {
    body: '<path d="M2.54297 15.3963L6.9388 11.0005C7.23047 10.7088 7.58464 10.563 8.0013 10.563C8.41797 10.563 8.77214 10.7088 9.0638 11.0005L11.2721 13.2088L16.418 7.41712C16.5707 7.26435 16.7513 7.18101 16.9596 7.16712C17.168 7.15324 17.3485 7.22191 17.5013 7.37314C17.6413 7.51177 17.7146 7.67876 17.7209 7.8741C17.7273 8.06945 17.661 8.24351 17.5221 8.39629L12.3971 14.188C12.1055 14.5074 11.7444 14.6741 11.3138 14.688C10.8832 14.7018 10.5152 14.556 10.2096 14.2505L8.0013 12.0421L3.58464 16.4588C3.43482 16.6116 3.26194 16.688 3.06601 16.688C2.87009 16.688 2.69575 16.6112 2.54297 16.4577C2.39019 16.3043 2.3138 16.1272 2.3138 15.9265C2.3138 15.7258 2.39019 15.5491 2.54297 15.3963ZM2.52214 10.9796L6.9388 6.54212C7.23047 6.25046 7.58464 6.10462 8.0013 6.10462C8.41797 6.10462 8.77214 6.25046 9.0638 6.54212L11.2721 8.75046L16.418 2.95879C16.5707 2.80601 16.7513 2.72615 16.9596 2.71921C17.168 2.71226 17.3485 2.78441 17.5013 2.93564C17.6413 3.07427 17.7146 3.24126 17.7209 3.4366C17.7273 3.63195 17.661 3.80601 17.5221 3.95879L12.3971 9.75046C12.1055 10.0699 11.7444 10.2366 11.3138 10.2505C10.8832 10.2643 10.5152 10.1185 10.2096 9.81296L8.0013 7.60462L3.58464 12.0213C3.43097 12.1741 3.25366 12.2505 3.05272 12.2505C2.85177 12.2505 2.67491 12.1752 2.52214 12.0248C2.36936 11.8743 2.29297 11.7007 2.29297 11.5039C2.29297 11.3072 2.36936 11.1324 2.52214 10.9796Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('statistics', {
    body: '<path d="M2.54297 15.3963L6.9388 11.0005C7.23047 10.7088 7.58464 10.563 8.0013 10.563C8.41797 10.563 8.77214 10.7088 9.0638 11.0005L11.2721 13.2088L16.418 7.41712C16.5707 7.26435 16.7513 7.18101 16.9596 7.16712C17.168 7.15324 17.3485 7.22191 17.5013 7.37314C17.6413 7.51177 17.7146 7.67876 17.7209 7.8741C17.7273 8.06945 17.661 8.24351 17.5221 8.39629L12.3971 14.188C12.1055 14.5074 11.7444 14.6741 11.3138 14.688C10.8832 14.7018 10.5152 14.556 10.2096 14.2505L8.0013 12.0421L3.58464 16.4588C3.43482 16.6116 3.26194 16.688 3.06601 16.688C2.87009 16.688 2.69575 16.6112 2.54297 16.4577C2.39019 16.3043 2.3138 16.1272 2.3138 15.9265C2.3138 15.7258 2.39019 15.5491 2.54297 15.3963ZM2.52214 10.9796L6.9388 6.54212C7.23047 6.25046 7.58464 6.10462 8.0013 6.10462C8.41797 6.10462 8.77214 6.25046 9.0638 6.54212L11.2721 8.75046L16.418 2.95879C16.5707 2.80601 16.7513 2.72615 16.9596 2.71921C17.168 2.71226 17.3485 2.78441 17.5013 2.93564C17.6413 3.07427 17.7146 3.24126 17.7209 3.4366C17.7273 3.63195 17.661 3.80601 17.5221 3.95879L12.3971 9.75046C12.1055 10.0699 11.7444 10.2366 11.3138 10.2505C10.8832 10.2643 10.5152 10.1185 10.2096 9.81296L8.0013 7.60462L3.58464 12.0213C3.43097 12.1741 3.25366 12.2505 3.05272 12.2505C2.85177 12.2505 2.67491 12.1752 2.52214 12.0248C2.36936 11.8743 2.29297 11.7007 2.29297 11.5039C2.29297 11.3072 2.36936 11.1324 2.52214 10.9796Z" fill="#222222"/>',
    width: 20,
    height: 20,
});
addIcon('dot', {
    body: '<circle cx="10" cy="10" r="2" fill="#222222"/>',
    width: 20,
    height: 20,
});
const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(
    ({ theme }) => ({
        ...theme.typography.body2,
        height: 48,
        position: 'relative',
        textTransform: 'capitalize',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(2.5),
        color: theme.palette.text.secondary,
        '&:before': {
            top: 0,
            right: 0,
            width: 3,
            bottom: 0,
            display: 'none',
            position: 'absolute',
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            backgroundColor: theme.palette.primary.main
        }
    })
);

const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const ExpandDiv = styled('div')({
    display: 'flex',
    height: 'auto',
    padding: '8px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: 'var(--White, #FFF)'
})
const SideBottomDiv = styled('div')({
    display: 'flex',
    width: '228px',
    height: '160px',
    padding: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flexShrink: '0',
    borderRadius: '12px',
    border: '1.5px dashed var(--Gray-Gray-300, #E0E0E0)',
    background: 'var(--Gray-Gray-50, #FAFAFA)'
})

const GroupStyle = styled('div')({
    width: '40px',
    height: '40px', 
    flexShrink: '0',
    background: `url(${GroupIcon}), lightgray -287.299px -188.073px / 291.971% 137.615% no-repeat`
})

const BottomSVGLAYOUTDiv = styled('div')({
    width: '40px',
    height: '40px',
    flexShrink: '0'
})

interface NavItemProps {
     item:  MuiPage;
}

 function NavItem(props: NavItemProps) {
    
    const { activePage={} } = React.useContext(PageContext); 
    const { item } = props;
    const theme = useTheme();
    let isActiveRoot = false;

    const { title, pathname, icon , children} = item;

    if( item.pathname === activePage.pathname){    
        isActiveRoot = true;    
    }
    const [open, setOpen] = useState(isActiveRoot);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const activeRootStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        '&:before': { display: 'block' }
    };

    const activeSubStyle = {
        color: 'text.primary',
        fontWeight: 'fontWeightMedium'
    };

    if (children.length>0) {
        return (
            <>
                <ListItemStyle
                    onClick={handleOpen}
                    sx={{
                        ...(isActiveRoot && activeRootStyle)
                    }}
                >
                    <ListItemIconStyle>{icon && getIcon(icon)}</ListItemIconStyle>
                    <ListItemText disableTypography primary={title} />
                    {/* {info && info} */}
                    <Box
                        component={Icon}
                        icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
                        sx={{ width: 16, height: 16, ml: 1 }}
                    />
                </ListItemStyle>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((item) => {
                            const { title, pathname } = item;
                            isActiveRoot = false;
                            if( item.pathname === activePage.pathname){    
                                isActiveRoot = true;    
                            }
                            return (
                                <ListItemStyle
                                    key={title}
                                    component={RouterLink}
                                    to={pathname}
                                    sx={{
                                        ...(isActiveRoot && activeRootStyle)
                                    }}
                                >
                                    <ListItemIconStyle>
                                        <Box
                                            component="span"
                                            sx={{
                                                width: 4,
                                                height: 4,
                                                display: 'flex',
                                                borderRadius: '50%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: 'text.disabled',
                                                transition: (theme) =>
                                                    theme.transitions.create('transform'),
                                                    transform: 'scale(2)',
                                             }}
                                        />
                                    </ListItemIconStyle>
                                    <ListItemText disableTypography primary={title} />
                                </ListItemStyle>
                            );
                        })}
                    </List>
                </Collapse>
            </>
        );
    }
    if (icon!='') {
    return (
      
        <ListItemStyle
            component={RouterLink}
            to={pathname}
            sx={{
                ...(isActiveRoot && activeRootStyle)
            }}
        >
            <ListItemIconStyle>{icon && getIcon(icon)}</ListItemIconStyle>
            <ListItemText disableTypography primary={title} />
        </ListItemStyle>
        
        
    );
  }
}

const fileTypes = ["jpeg", "png", "gif"];
const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
const temp = []
function NavSection() {
    const [file, setFile] = useState<Array<File> | null>([]);
        // const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const [tempList, setTempList] = useState([]);
    const [noop, setNoop] = useState(null);

    const handleChange =  (file1:File) => {
      for(let i=0;i<file1.length;i++){
        console.log(file1[i]);
        temp.push(file1[i])
      }
      
    setTempList(temp)
    //   setFile(file1);
    setNoop(listItems(temp))
    console.log('changes',tempList);
    }

    const onDrop = (file:any) => {
        console.log('drop', file);
      };
      const onSelect = (file:any) => {
        console.log('onSelect', file);
      };

    const handleUpload = async () => {
        if (file) {
            console.log("Uploading file...");
        
            const formData = new FormData();
            formData.append("file", file);
        
            try {
              const result = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: formData,
              });
        
              const data = await result.json();
        
              console.log(data);
            } catch (error) {
              console.error(error);
            }
          }
    };

    const { pages} = React.useContext(PageContext); 

    const listItems = (list) => {
        let tmp=[];
        let i=0;
          _.forEach(list, function(value) {
        tmp.push(<li key={i}>{value.name}</li>)
        ++i;
      })
      console.log(tmp);
      return tmp;
    }
        
    // let listItems=null
    // React.useEffect(() => {
    //     listItems = (tempList) => {
    //         let tmp=[];
    //         let i=0;
    //           _.forEach(tempList, function(value) {
    //         tmp.push(<li key={i}>{value.name}</li>)
    //         ++i;
    //       })
    //       console.log(tmp);
    //       return tmp
    //     }
    // }, [tempList])

    return (
        <Box>
            <List disablePadding>
                {
                   pages.map((item) => (
                    <React.Fragment key={item.pathname}>
                    <NavItem key={item.pathname} item={item} />
                      { (item.pathname==='/dashboard/assetmanagement' || item.pathname==='/company')&&(
                       <>
                        <Divider />
                       </>
                       )
                       }
             
                     </React.Fragment>
                ))}
            </List>
            <ExpandDiv/>

            <FileUploader
            handleChange={handleChange}
            name="file"
            multiple={true}
            types={fileTypes}
           >
            <SideBottomDiv>
              <GroupStyle/>
              <Typography
                sx={{
                    color: 'var(--Gray-Gray-900, #222)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '20px'
                }}
                >
                    서비스 요청 이미지 접수하기
                </Typography>
                <Typography
                  sx={{
                    color: 'var(--Gray-Gray-500, #9E9E9E)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSsize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHHeight: '16px'
                  }}
                >
                    {tempList.length<1 &&
                      <span>드래그 앤 드롭</span>
                    }
                    {
                      listItems(tempList)
                        
                    //    tempList.map(({name}) => (
                    //     <li>1</li>
                    //  ))
                    }
                    
                </Typography>
            </SideBottomDiv>

            </ FileUploader>
            
        </Box>
        
    );
}

export default NavSection;

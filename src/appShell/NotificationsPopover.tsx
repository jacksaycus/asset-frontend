import { faker } from '@faker-js/faker';

import { noCase } from 'change-case';
import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { set, sub, formatDistanceToNow } from 'date-fns';
import { Icon } from '@iconify/react';
import bellFill from '@iconify/icons-eva/bell-outline';
import clockFill from '@iconify/icons-eva/clock-fill';
// import doneAllFill from '@iconify/icons-eva/done-all-fill';
import { alpha } from '@mui/material/styles';
import {
    Box,
    List,
    Badge,
    Button,
    Avatar,
    // Tooltip,
    Divider,
    IconButton,
    Typography,
    ListItemText,
    ListSubheader,
    ListItemAvatar,
    ListItemButton
} from '@mui/material';
import { mockImgAvatar } from 'src/utils/mockImages';
import Scrollbar from 'src/components/Scrollbar';
import MenuPopover from 'src/components/MenuPopover';

import icNotificationMail from 'src/assets/images/icons/ic_notification_mail.svg';
import icNotificationChat from 'src/assets/images/icons/ic_notification_chat.svg';
import icNotificationPackage from 'src/assets/images/icons/ic_notification_package.svg';
import icNotificationShipping from 'src/assets/images/icons/ic_notification_shipping.svg';

const NOTIFICATIONS = [
    {
        id: faker.datatype.uuid(),
        title: '새로운알림1',
        description: '',
        avatar: null,
        type: '',
        createdAt: set(new Date(), { hours: 10, minutes: 30 }),
        isUnRead: true
    },
    {
        id: faker.datatype.uuid(),
        title: '새로운알림2',
        description: '',
        avatar: null,
        type: '',
        createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
        isUnRead: false
    },
   
];

function renderContent(notification) {
    const title = (
        <Typography variant="subtitle2">
            {notification.title}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                &nbsp; {noCase(notification.description)}
            </Typography>
        </Typography>
    );

    return {
        avatar: <img alt={notification.title} src={icNotificationMail} />,
        title
    };
}

interface Props {
    notification;
}

const NotificationItem = (props: Props): JSX.Element => {
    const { notification } = props;
    const { avatar, title } = renderContent(notification);

    return (
        <ListItemButton
            to="#"
            disableGutters
            component={RouterLink}
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected'
                })
            }}
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled'
                        }}
                    >
                        {/* <Box
                            component={Icon}
                            icon={clockFill}
                            sx={{ mr: 0.5, width: 16, height: 16 }}
                        />
                        {formatDistanceToNow(new Date(notification.createdAt))} */}
                    </Typography>
                }
            />
        </ListItemButton>
    );
};

const NotificationsPopover = (): JSX.Element => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const totalUnRead = notifications.filter((item) => item.isUnRead).length;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false
            }))
        );
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                size="large"
                color={open ? 'primary' : 'default'}
                onClick={handleOpen}
                sx={{
                    ...(open && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                    paddingLeft:'unset',
                    marginLeft:'0px'
                    })
                }}
            >
                <Badge badgeContent={totalUnRead} color="error">
                    <Icon icon={bellFill} width={20} height={20} />
                </Badge>
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{ width: 360 }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1">알림</Typography>
                        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            메시지
                        </Typography> */}
                    </Box>
                </Box>

                <Divider />

                <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
                    <List
                        disablePadding
                        // subheader={
                        //     <ListSubheader
                        //         disableSticky
                        //         sx={{ py: 1, px: 2.5, typography: 'overline' }}
                        //     >
                        //         알림1
                        //     </ListSubheader>
                        // }
                    >
                        {notifications.slice(0, 2).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification} />
                        ))}
                    </List>

                    
                </Scrollbar>

                <Divider />

                <Box sx={{ p: 1 }}>
                    <Button fullWidth disableRipple component={RouterLink} to="#">
                        모두보기
                    </Button>
                </Box>
            </MenuPopover>
        </>
    );
};

export default NotificationsPopover;

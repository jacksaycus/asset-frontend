import { merge } from 'lodash';
import Card from 'src/theme/overrides/Card';
import Lists from 'src/theme/overrides/Lists';
import Paper from 'src/theme/overrides/Paper';
import Input from 'src/theme/overrides/Input';
import Button from 'src/theme/overrides/Button';
import Tooltip from 'src/theme/overrides/Tooltip';
import Backdrop from 'src/theme/overrides/Backdrop';
import Typography from 'src/theme/overrides/Typography';
import IconButton from 'src/theme/overrides/IconButton';
import Autocomplete from 'src/theme/overrides/Autocomplete';
import { Theme } from '@mui/material';

const ComponentsOverrides = (theme: Theme) => {
    return merge(
        Card(theme),
        Lists(theme),
        Paper(),
        Input(theme),
        Button(theme),
        Tooltip(theme),
        Backdrop(theme),
        Typography(theme),
        IconButton(theme),
        Autocomplete(theme)
    );
};

export default ComponentsOverrides;

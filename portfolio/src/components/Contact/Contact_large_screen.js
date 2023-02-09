import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import gmail_logo from '../../Img/gmail_logo.png'
import gitHub_logo from '../../Img/gitHub_logo.png'
import linkedin_logo from '../../Img/linkedin_logo.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ContactLargeScreen() {
    return (
        <div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <Item>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="Linkedin" src={linkedin_logo} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Linkedin"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Conocé mi perfil en linkedin
                                    </Typography>
                                    {" ...y accedé a mi red de contactos."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Item>
                <Item>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="GitHub" src={gitHub_logo} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="GitHub"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Puedés ver mis proyectos
                                    </Typography>
                                    {"...y profundizar en el código."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Item>
                <Item>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar alt="gmail" src={gmail_logo} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Gmail"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Enviame un correo
                                    </Typography>
                                    {' ...y organicemos una entrevista.'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Item>
            </Stack>
        </div>
    );
}
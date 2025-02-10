import * as React from 'react';
import s from './Contact.module.css'
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import linkedin_logo from '../../Img/linkedin_logo.png';
import gitHub_logo from '../../Img/gitHub_logo.png';
import gmail_logo from '../../Img/gmail_logo.png';
import { Link } from "react-router-dom";
import * as MailLink from '@react-email/link';
import { useTranslation } from "react-i18next";
import mediaQuery from '../../Utils/mediaQuery';



const Email = () => {
    return <MailLink href="https://leoariel17@gmail.com">leoariel17@gmail</MailLink>;
}; 

export default function Contact() {
    const {t} = useTranslation()
    return (
        <React.Fragment>
            <Typography sx={{ fontSize: '2rem', fontWeight: '600' }}>{t('contactame')}</Typography>
            <Container>
                <List sx={{
                    width: '100%',
                    bgcolor: '#6495ed9e',
                    display: mediaQuery('block', 'flex')
                }}>
                    <ListItem alignItems="center">
                        <Link to='https://www.linkedin.com/in/leonardo-meza-957b5017a/' className={s.link}>
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
                                            {t('text_linkedin1')}
                                        </Typography>
                                        {`${t('text_linkedin2')}`}
                                    </React.Fragment>
                                }
                            />
                        </Link>
                    </ListItem>
                    <Divider variant="fullWidth"  component="li" />
                    <ListItem alignItems="center">
                        <Link to='https://github.com/Leomez' className={s.link}>
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
                                           {t('text_github1')}
                                        </Typography>
                                        {`${t('text_github2')}`}
                                    </React.Fragment>
                                }
                            />
                        </Link>
                    </ListItem>
                    <Divider variant="fullWidth"  component="li" />
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
                                            {t('text_gmail')}
                                        </Typography>                                        
                                        {' leariel17@gmail.com'}
                                    </React.Fragment>
                                }
                            />                        
                    </ListItem>
                </List>
            </Container>
        </React.Fragment>
    );
}
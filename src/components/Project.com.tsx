import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material"

export const Project: React.FC<{}> = () => {

    return <>
        <Paper style={{ border: '4px solid #ddd', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
            <center>
                <h1>My Projects</h1>
            </center>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Paper  style={{ border: '4px solid #ddd', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', margin: '0 16px' }}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    React Portfolio
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Using React js and MUI i had created  a portfolio 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/HR9048/react-portfolio.git"><Button size="small">Repo</Button></a>
                                <a href="https://hr9048.github.io/react-portfolio/"><Button size="small">View Project</Button></a>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper style={{ border: '4px solid #ddd', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',margin: '0 16px' }}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bootstrap Portfolio
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    With the help of HTML, CSS and JS i had created a portfolio using Bootstrap framework
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <a href="https://github.com/HR9048/portfolio.git"><Button size="small">Repo</Button></a>
                            <a href="https://hr9048.github.io/portfolio/"><Button size="small">View Project</Button></a>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper style={{ border: '4px solid #ddd', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',margin: '0 16px' }}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Notes of FUll Stack Web Developement
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Using HTML, CSS, JavaScript and React Js i had created a W3 School like website to learn the Full Stack Web Developement
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <a href="https://github.com/HR9048/practise.git"><Button size="small">Repo</Button></a>
                            <a href="https://hr9048.github.io/practise/"><Button size="small">View Project</Button></a>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper style={{ border: '4px solid #ddd', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',margin: '0 16px' }}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Portfolio
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <a href=""><Button size="small">Repo</Button></a>
                            <a href=""><Button size="small">View Project</Button></a>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    </>

}
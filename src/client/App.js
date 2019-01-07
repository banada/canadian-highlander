import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet, Box, Heading, Button, Text, Grid, Image, TextInput } from 'grommet';

document.addEventListener('DOMContentLoaded', function() {
    // Start React
    ReactDOM.render(<App />, document.getElementById('react-container'))
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <Home />
        );
    }
}

/*
 * Home component
 *
 * Contains cards for different types of content
 */
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Grommet plain>
                <Box
                    fill
                    background="light-4"
                    gap="medium"
                >
                    <Header />
                    <SubscribeBar />
                    <Footer />
                </Box>
            </Grommet>
        );
    }
}

function Header() {
    return (
        <Box
            background="url(assets/header.jpg)"
            height="medium"
        >
            <Box
                align="center"
                justify="center"
                pad="medium"
            >
                <Heading
                    level="1"
                    margin="medium"
                    color="white"
                >
                    Canadian Highlander
                </Heading>
                <Heading
                    level="2"
                    margin="medium"
                    color="white"
                >
                    News, Decks, and Gameplay
                </Heading>
            </Box>
        </Box>
    )
}

function SubscribeBar() {
    return (
        <Box
            align="center"
            justify="center"
            pad="medium"
            background="neutral-3"
        >
            <Heading
                level="2"
                margin="medium"
                color="white"
            >
                Join our new community
            </Heading>
            <Text>
                Get an email when we hold an event or post a new deck.
            </Text>
            <form action="https://canadianhighlander.us7.list-manage.com/subscribe/post" method="POST">
                <Box pad="large" direction="column" gap="small">
                    <input type="hidden" name="u" value="0321f94e0029c9f837598c764" />
                    <input type="hidden" name="id" value="1ab155a882" />
                    <TextInput name="MERGE0" size="xlarge" type="email" placeholder="E-mail address" />
                    <Button type="submit" size="xlarge" label="Subscribe" />
                </Box>
            </form>
        </Box>
    );
}

function Footer() {
    return (
        <Box
            background="neutral-3"
        >
            <Box
                align="center"
                justify="center"
                pad="medium"
            >
                <Heading
                    level="3"
                    margin="medium"
                >
                    © Nathaniel Chen 2019
                </Heading>
            </Box>
        </Box>
    )
}

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Why Karakas should be pointed',
                    hasVideo: true,
                    videoSrc: 'HxAeUPTwTNw',
                    text: 'A great video about why Karakas should be moved to 1 point'
                }
            ]
        }
    }

    render() {

        const cards = this.state.cards.map((card) => {
            return <Card
                        title={card.title}
                        hasVideo={card.hasVideo}
                        videoSrc={card.videoSrc}
                        text={card.text}
                   />
        });

        return (
            <Grid
                rows="large"
                gap="medium"
            >
                {cards}
            </Grid>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Box flex
                direction="row"
                align="center"
                justify="center"
                pad="medium"
            >
                <Box
                    pad="medium"
                    width="xlarge"
                    height="large"
                    round="medium"
                    gap="medium"
                    background="white"
                    border = {
                        {
                            color: 'neutral-3',
                            size: 'medium'
                        }
                    }
                >
                    <Title
                        title={this.props.title}
                    />
                    {this.props.hasVideo &&
                        <Box fill>
                            <iframe
                                width="100%"
                                height="100%"
                                className="video"
                                src={'https://www.youtube.com/embed/' + this.props.videoSrc}
                                frameBorder="0"
                                allow="autoplay; encrypted-media">
                            </iframe>
                        </Box>
                    }
                    <Text>
                        {this.props.text}
                    </Text>
                </Box>
            </Box>
        )
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Heading level="2">
                {this.props.title}
            </Heading>
        );
    }
}

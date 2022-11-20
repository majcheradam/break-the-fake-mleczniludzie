import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material'
// ----------------------------------------------------------------------

import POSTS from '../_mock/blog'

// fetch('https://zydsonek.pl/api/articules')
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// mock

// ----------------------------------------------------------------------

export default function Article() {
    const params = useParams()
    const {
        image,
        title,
        text,
        author,
        createdAt,
        category,
        sentiment,
        slug,
        summary,
        source,
        tags,
    } = POSTS.find(({ slug }) => slug === params.slug)
    console.log(image)
    return (
        <>
            <Helmet>
                <title> {title} | Veritas </title>
            </Helmet>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        maxWidth: 700,
                        paddingLeft: 24,
                        paddingRight: 24,
                    }}
                >
                    <img src={image} alt="" />
                    <Typography style={{ paddingTop: 25 }} color="#4285F4">
                        {createdAt} | {author}
                    </Typography>
                    <h3>{title}</h3>
                    <summary>{summary}</summary>
                    {text.map((text) => (
                        <p>{text}</p>
                    ))}
                </div>
                <div
                    style={{ maxWidth: 400, paddingLeft: 24, paddingRight: 24 }}
                >
                    <h3 style={{ margin: 0, paddingBottom: 5 }}>
                        Stopień wiarygodnośći:{' '}
                        <span
                            style={{
                                color: 'green',
                                paddingLeft: 10,
                                margin: 0,
                            }}
                        >
                            Prawda
                        </span>
                    </h3>
                    <h3
                        style={{ margin: 0, display: 'flex', paddingBottom: 5 }}
                    >
                        Sentyment:{' '}
                        <Typography
                            color={sentiment === 'Pozytywny' ? 'green' : 'red'}
                            style={{
                                margin: 0,
                                paddingLeft: 10,
                                fontSize: '1em',
                                marginBlockStart: '1em',
                                marginBlockEnd: '1em',
                                marginInlineStart: '1em',
                                marginInlineEnd: '0px',
                                fontWeight: 'bold',
                                marginBlock: '0em',
                                marginInline: '0em',
                            }}
                        >
                            {sentiment}
                        </Typography>
                    </h3>
                    <h3 style={{ margin: 0, paddingBottom: 5 }}>
                        Kategoria:{' '}
                        <span style={{ color: 'blue', paddingLeft: 10 }}>
                            {category}
                        </span>
                    </h3>
                    <h3 style={{ margin: 0, paddingBottom: 5 }}>
                        Tagi:{' '}
                        {tags.map((tag) => (
                            <span
                                style={{
                                    color: 'grey',
                                }}
                            >
                                {tag + ',' + ' '}
                            </span>
                        ))}
                    </h3>
                    <h3 style={{ margin: 0, paddingBottom: 5 }}>
                        Źródło:{' '}
                        <a
                            href={source[1]}
                            style={{ color: 'blue', paddingLeft: 10 }}
                        >
                            {source[0]}
                        </a>
                    </h3>
                </div>
            </div>
        </>
    )
}

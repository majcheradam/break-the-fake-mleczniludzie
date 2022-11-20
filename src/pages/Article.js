import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

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
    const { image, title, text, author, createdAt, category, sentiment, slug } =
        POSTS.find(({ slug }) => slug === params.slug)
    console.log(image)
    return (
        <>
            <Helmet>
                <title> {title} | Minimal UI </title>
            </Helmet>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div
                    style={{ maxWidth: 700, paddingLeft: 24, paddingRight: 24 }}
                >
                    <img src={image} alt="" />
                    <Typography style={{ paddingTop: 25 }} color="#4285F4">
                        {createdAt} | {author}
                    </Typography>
                    <h3>{title}</h3>
                    {text.map((text) => (
                        <p>{text}</p>
                    ))}
                </div>
                <div
                    style={{ maxWidth: 100, paddingLeft: 24, paddingRight: 24 }}
                >
                    a
                </div>
            </div>
        </>
    )
}

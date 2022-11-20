import PropTypes from 'prop-types'
// @mui
import { alpha, styled } from '@mui/material/styles'
import {
    Box,
    Link,
    Card,
    Grid,
    Avatar,
    Typography,
    CardContent,
    Stack,
} from '@mui/material'
// utils
import { fDate } from '../../../utils/formatTime'
import { fShortenNumber } from '../../../utils/formatNumber'
//
import SvgColor from '../../../components/svg-color'
import Iconify from '../../../components/iconify'

// ----------------------------------------------------------------------

const StyledCardMedia = styled('div')({
    position: 'relative',
    paddingTop: 'calc(100% * 3 / 4)',
})

const StyledTitle = styled(Link)({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
})

// const StyledAvatar = styled(Avatar)(({ theme }) => ({
//     zIndex: 9,
//     width: 32,
//     height: 32,
//     position: 'absolute',
//     left: theme.spacing(3),
//     bottom: theme.spacing(-2),
// }))

const StyledInfo = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    color: theme.palette.text.disabled,
}))

const StyledCover = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
})

// ----------------------------------------------------------------------

BlogPostCard.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default function BlogPostCard({ post, index }) {
    const { image, title, author, fake, createdAt, category, sentiment, slug } =
        post
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ position: 'relative' }}>
                <StyledCardMedia
                    sx={{
                        pt: {
                            xs: 'calc(100% * 4 / 3)',
                            sm: 'calc(100% * 3 / 4.66)',
                        },
                    }}
                >
                    {/* <SvgColor
                        color="paper"
                        src="/assets/icons/shape-avatar.svg"
                        sx={{
                            width: 80,
                            height: 36,
                            zIndex: 9,
                            bottom: -15,
                            position: 'absolute',
                            color: 'background.paper',
                        }}
                    /> */}
                    {/* <StyledAvatar alt={author.name} src={author.avatarUrl} /> */}

                    <StyledCover alt={title} src={image} />
                </StyledCardMedia>

                <CardContent
                    sx={{
                        pt: 4,
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="caption"
                        sx={{ color: 'text.disabled', display: 'block' }}
                    >
                        {fDate(createdAt)} | {author}
                    </Typography>
                    <Link href={`blog/${slug}`}>
                        <StyledTitle
                            color="inherit"
                            variant="subtitle2"
                            underline="hover"
                        >
                            {title}
                        </StyledTitle>
                    </Link>

                    <StyledInfo>
                        <Stack
                            direction="row"
                            flexWrap="wrap-reverse"
                            justifyContent="space-between"
                            width="100%"
                        >
                            <Typography variant="subtitle2" color="#4285F4">
                                {category}
                            </Typography>
                            <Stack
                                direction="row"
                                flexWrap="wrap-reverse"
                                justifyContent="space-between"
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        pr: 1,
                                    }}
                                    color={
                                        sentiment === 'Pozytywny'
                                            ? 'green'
                                            : 'red'
                                    }
                                >
                                    {sentiment}
                                </Typography>
                                <Typography variant="subtitle2" color="green">
                                    {fake === false ? 'Prawda' : 'Fake'}
                                </Typography>
                            </Stack>
                        </Stack>
                    </StyledInfo>
                </CardContent>
            </Card>
        </Grid>
    )
}

import data from '../articules.json'

// ----------------------------------------------------------------------

const posts = data.map((post, i) => ({
    id: post.Author,
    slug: post.Slug,
    image: post.Image,
    title: post.Summary,
    createdAt: post.Date,
    author: post.Author,
    category: post.Category[0],
    sentiment: post.Sentiment,
    text: post.Text,
}))

export default posts

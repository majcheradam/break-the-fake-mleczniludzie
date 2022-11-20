import data from '../articules.json'

// ----------------------------------------------------------------------

const posts = data.map((post) => ({
    id: post.Author,
    slug: post.Slug,
    image: post.Image,
    title: post.Title,
    createdAt: post.Date,
    author: post.Author,
    category: post.Category[0],
    sentiment: post.Sentiment,
    text: post.Text,
    summary: post.Summary,
    source: post.Source,
    tags: post.Tags,
}))

export default posts

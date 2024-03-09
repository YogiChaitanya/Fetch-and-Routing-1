// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
  }

  componentDidMount() {
    this.getBlogItemMatchedData()
  }

  getBlogItemMatchedData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
      author: data.author,
    }

    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div className="blog-info">
        <h1>{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} className="author-img" alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="blog-item-image2" alt={title} />
        <p className="content-paragraph">{content}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="blogitem-details-container">
        {this.renderBlogItemDetails()}
      </div>
    )
  }
}

export default BlogItemDetails

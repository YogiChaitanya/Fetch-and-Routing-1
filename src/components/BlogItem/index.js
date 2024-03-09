// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="list-card">
        <img src={imageUrl} className="blog-item-img" alt={`item${id}`} />
        <div className="card11">
          <p className="paragraph1">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="card12">
            <img src={avatarUrl} className="avatar-img" alt={`avatar${id}`} />
            <p className="paragraph1">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem

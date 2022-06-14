import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageURL, newsURL } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageURL ? "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
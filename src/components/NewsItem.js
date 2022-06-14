import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://www.coindesk.com/resizer/xa-QJd3kqoIj8Z6xUY6l5SfoAvw=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TCPTTJ54WREAJEUNX6WNW2JXTE.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/news-detail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
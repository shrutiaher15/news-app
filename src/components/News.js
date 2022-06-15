import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    handleOnNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });

        this.updateNews();
    }

    handleOnPrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        });

        this.updateNews();
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=77b14e54ed2b42f7bdfd77dd112ad757&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();

        this.setState({
            page: this.state.page,
            articles: parsedData.articles,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{ margin: '30px 0px' }}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name ? element.source.name : "Unknown"} />
                        </div>
                    })}
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleOnPrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleOnNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
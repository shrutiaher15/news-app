import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    handleOnNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77b14e54ed2b42f7bdfd77dd112ad757&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        });
    }

    handleOnPrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77b14e54ed2b42f7bdfd77dd112ad757&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77b14e54ed2b42f7bdfd77dd112ad757&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({ loading: true });
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsURL={element.url} />
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
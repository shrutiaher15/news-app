import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Futures: What To Do After Today's Stock Market Plunge - Investor's Business Daily",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMingFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtd2hhdC10by1kby1hZnRlci10b2RheXMtc3RvY2stbWFya2V0LXBsdW5nZS1mZWQtbWVldGluZy1rZXktaW5mbGF0aW9uLXJlcG9ydC1uZXh0L9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-06-14T02:24:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NBC Chicago"
            },
            "author": null,
            "title": "Monkeypox Precautions Advised at Summer Gatherings as Chicago Reports 5 New Cases - NBC Chicago",
            "description": "While Chicago health officials maintain the risk of contracting monkeypox remains “low,” the city’s Department of Public Health announced…",
            "url": "https://www.nbcchicago.com/news/local/monkeypox-precautions-advised-in-chicago-as-5-new-cases-reported/2856358/",
            "urlToImage": "https://media.nbcchicago.com/2022/06/generic-monkeypox.png?resize=1200%2C675&quality=85&strip=all",
            "publishedAt": "2022-06-14T02:06:03Z",
            "content": "While Chicago health officials maintain the risk of contracting monkeypox remains \"low,\" the city's Department of Public Health announced it's advising the public to take precautions after five more … [+2706 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Elizabeth Wolfe, CNN",
            "title": "The 31 people arrested in Idaho have ties to a White nationalist group and planned to riot at a Pride event, police say. Here's what we know - CNN",
            "description": "After an alarmed 911 caller reported a group dressed like a \"little army\" getting into a moving truck, police in Coeur d'Alene, Idaho, arrested 31 men believed to be linked to a White nationalist group, who had plans to riot at a weekend Pride event, authorit…",
            "url": "https://www.cnn.com/2022/06/13/us/idaho-patriot-front-arrests-pride-what-we-know/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220611193155-01-patriot-front-idaho-pride-super-tease.jpg",
            "publishedAt": "2022-06-14T01:45:00Z",
            "content": "(CNN)After an alarmed 911 caller reported a group dressed like a \"little army\" getting into a moving truck, police in Coeur d'Alene, Idaho, arrested 31 men believed to be linked to a White nationalis… [+7451 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Sian Cain",
            "title": "Lizzo removes ‘harmful’ ableist slur from new song GRRRLS after criticism - The Guardian",
            "description": "Pop star says she ‘never want[ed] to promote derogatory language’ and re-releases song GRRRLS, removing offensive term for spastic diplegia",
            "url": "https://amp.theguardian.com/music/2022/jun/14/lizzo-removes-harmful-ableist-slur-from-new-song-grrrls-after-criticism",
            "urlToImage": null,
            "publishedAt": "2022-06-14T01:08:00Z",
            "content": "LizzoPop star says she never want[ed] to promote derogatory language and re-releases song, removing offensive term for spastic diplegia\r\nLizzo has removed an offensive term for disabled people from h… [+2871 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Shaurya Malwa, James Rubin",
            "title": "First Mover Asia: What Analysts Are Saying After Crypto Lender Celsius Paused Withdrawals; BTC Drops Below $23K - CoinDesk",
            "description": "Some observers of digital asset markets criticized the move but others said that Celsius could be protecting user funds; ether plummets 17%.",
            "url": "https://www.coindesk.com/markets/2022/06/14/first-mover-asia-what-analysts-are-saying-after-crypto-lender-celsius-paused-withdrawals-btc-drops-below-23k/",
            "urlToImage": "https://www.coindesk.com/resizer/xa-QJd3kqoIj8Z6xUY6l5SfoAvw=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TCPTTJ54WREAJEUNX6WNW2JXTE.jpg",
            "publishedAt": "2022-06-14T00:43:00Z",
            "content": "Good morning. Heres whats happening:\r\nPrices: Bitcoin and other cryptos have a dark day.\r\nInsights: Observers of digital assets react differently to Celsius's announcement to pause withdrawals.\r\nTech… [+18637 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Luke Broadwater, Maggie Haberman",
            "title": "What We Learned on Day 2 of the Jan. 6 Hearings - The New York Times",
            "description": "On the second day of the hearing, William P. Barr, the former attorney general, said in a recorded deposition that claims of widespread electoral fraud were nonsense. As the hearing closed, Rep. Zoe Lofgren said Mr. Trump used lies about fraud as a fund-raisi…",
            "url": "https://www.nytimes.com/live/2022/06/13/us/jan-6-hearings-trump",
            "urlToImage": "https://static01.nyt.com/images/2022/06/13/world/live-blog-20220613-jan-6-hearings-trump-header/live-blog-20220613-jan-6-hearings-trump-header-facebookJumbo.jpg",
            "publishedAt": "2022-06-14T00:14:00Z",
            "content": "The one big theme on the second day of hearings by the Jan. 6 committee was that former President Trump was told repeatedly including by his own attorney general that his big lie about a fraudulent e… [+5786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Starquakes! Gaia Spacecraft Sees Strange Stars in Most Detailed Milky Way Survey to Date - SciTechDaily",
            "description": "Gaia is a mission of the European Space Agency (ESA) to create an precise three-dimensional map of more than a billion stars throughout our Milky Way galaxy and beyond. Although it launched all the way back in 2013, it is still working to accurately map the t…",
            "url": "https://scitechdaily.com/starquakes-gaia-spacecraft-sees-strange-stars-in-most-detailed-milky-way-survey-to-date/",
            "urlToImage": "https://scitechdaily.com/images/Gaia-Sees-Starquakes.gif",
            "publishedAt": "2022-06-14T00:13:24Z",
            "content": "ByEuropean Space Agency (ESA)June 13, 2022\r\nOne of the surprising discoveries coming out of Gaia data release 3, is that Gaia is able to detect starquakes tiny motions on the surface of a star that c… [+9212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Resident Evil Village: Expansion & Gold Edition - Reveal Trailer | Capcom Showcase 2022 - IGN",
            "description": "Capcom reveals the Gold Edition of Resident Evil 8, which contains a new third-person perspective, Mercenaries: Additional Orders (featuringLady Dimetrescu),...",
            "url": "https://www.youtube.com/watch?v=74UNgIydskg",
            "urlToImage": "https://i.ytimg.com/vi/74UNgIydskg/hqdefault.jpg",
            "publishedAt": "2022-06-14T00:00:49Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Evan Real, Marjorie Hernandez",
            "title": "Britney Spears' ex Jason Alexander hit with felony, must stay away for 3 years - Page Six",
            "description": "“This should send a message to anyone out there who violates the law,” the pop star’s attorney, Mathew Rosengart, exclusively tells Page Six.",
            "url": "https://pagesix.com/2022/06/13/britney-spears-ex-jason-alexander-must-stay-away-for-3-years/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/06/britney-alexander-index.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-06-13T23:56:00Z",
            "content": "Britney Spears ex-husband Jason Alexander was hit with a felony and must stay away from her for the next three years, Page Six can confirm. \r\nDuring Alexanders arraignment Monday for breaking into Sp… [+4013 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "No children hurt after shots fired, gunman killed by police at summer camp in Duncanville - Fort Worth Star-Telegram",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiRGh0dHBzOi8vd3d3LnN0YXItdGVsZWdyYW0uY29tL25ld3MvbG9jYWwvY3JpbWUvYXJ0aWNsZTI2MjQ2MDc2Ny5odG1s0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-06-13T23:55:29Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Warriors-Celtics prediction, pick, odds, spread, line for 2022 NBA Finals Game 5 - CBS Sports",
            "description": "Our experts try and predict what should be an extremely competitive Game 5",
            "url": "https://www.cbssports.com/nba/news/warriors-celtics-prediction-pick-odds-spread-line-for-2022-nba-finals-game-5/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/12/3c72c5ba-cfad-47cd-a14c-a0bc096484ab/thumbnail/1200x675/47e279115752bd1c2362270e4cc867ea/celtics-warriors-getty-6.png",
            "publishedAt": "2022-06-13T23:50:00Z",
            "content": "The stakes couldn't be much higher than they are for Monday night's Game 5 of the 2022 NBA Finals between the Boston Celtics and Golden State Warriors. Through the first four games of the series, the… [+6065 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Joy Wiltermuth",
            "title": "JP Morgan, Goldman economists now expect Fed to raise rates by 75 basis points on Wednesday - MarketWatch",
            "description": "The ‘true surprise’ would actually be a 1% rate hike, something a JPM economist sees as ‘a non-trivial risk’",
            "url": "https://www.marketwatch.com/story/jp-morgan-goldman-economists-now-expect-fed-to-raise-rates-by-75-basis-points-on-wednesday-11655163658",
            "urlToImage": "https://images.mktw.net/im-552122/social",
            "publishedAt": "2022-06-13T23:40:00Z",
            "content": "Economists at JP Morgan and Goldman Sachs said in client notes Monday that they now expect the Federal Reserve to raise its policy rate by 75 basis points on Wednesday.JP Morgan \r\n JPM,\r\n -2.98%\r\neco… [+2307 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Transport crew made right decision to leave Kabul airport amid chaotic withdrawal, Air Force says - POLITICO",
            "description": "Human remains were discovered in the wheel well of the the C-17 military transport plane after it landed in Qatar.",
            "url": "https://www.politico.com/news/2022/06/13/military-transport-crew-made-right-decision-to-leave-kabul-airport-amid-chaotic-withdrawal-air-force-says-00039319",
            "urlToImage": "https://static.politico.com/0f/6d/86e1d9d44ec890f85bb042544270/https-delivery.gettyimages.com/downloads/1234876758",
            "publishedAt": "2022-06-13T23:25:39Z",
            "content": "The aircrews airmanship and quick thinking ensured the safety of the crew and their aircraft, she said.\r\nFollowing thechaotic event on Aug. 16 captured on video showing Afghans clinging to planes as … [+1132 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Paul LeBlanc, CNN",
            "title": "Manchin says bipartisan gun agreement takes 'no rights away, no privileges away' - CNN",
            "description": "Democratic Sen. Joe Manchin of West Virginia on Monday defended a newly reached bipartisan gun deal as a pragmatic step forward that won't threaten gun owners' Second Amendment rights.",
            "url": "https://www.cnn.com/2022/06/13/politics/joe-manchin-bipartisan-gun-agreement-cnntv/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220613144406-manchin-the-lead-0613-super-tease.jpg",
            "publishedAt": "2022-06-13T23:05:00Z",
            "content": "Washington (CNN)Democratic Sen. Joe Manchin of West Virginia on Monday defended a newly reached bipartisan gun deal as a pragmatic step forward that won't threaten gun owners' Second Amendment rights… [+2703 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KABC-TV"
            },
            "author": null,
            "title": "Slim 400 murder case: 2 people arrested in connection with shooting death of rapper in Inglewood in December 2021 - KABC-TV",
            "description": "Two people have been arrested in connection with the shooting death of rapper Slim 400, Inglewood police announced.",
            "url": "https://abc7.com/slim-400-shot-rapper-dead-suspect-arrest/11955928/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11955913_Michael-Lanell-Terry-and-Tamra-Lynn-Bell.JPG?w=1600",
            "publishedAt": "2022-06-13T22:36:17Z",
            "content": "INGLEWOOD, Calif. (KABC) -- Two people have been arrested in connection with the shooting death of rapper Slim 400, Inglewood police announced Monday.Michael Lanell Terry, 33, of Los Angeles, and Tam… [+1129 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Crypto crumbles — Has bitcoin reached a bottom? - CNBC Television",
            "description": "FM trader Brian Kelly on bitcoin and ethereum tanking. With CNBC's Brian Sullivan and the Fast Money traders, Tim Seymour, Dan Nathan, Guy Adami and Pete Naj...",
            "url": "https://www.youtube.com/watch?v=dlTog7bTqzU",
            "urlToImage": "https://i.ytimg.com/vi/dlTog7bTqzU/hqdefault.jpg",
            "publishedAt": "2022-06-13T22:23:21Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WESH Orlando"
            },
            "author": "Scott Heidler",
            "title": "Astra's failed rocket launch reminds us spaceflight can be difficult - WESH 2 Orlando",
            "description": "“This is orders of magnitude more difficult than pretty much almost any other engineering endeavor,\" according to Don Platt with Florida Tech.",
            "url": "https://www.wesh.com/article/astra-rocket-failure/40278588",
            "urlToImage": "https://kubrick.htvapps.com/vidthumb/28a81085-c6df-46fe-ad1b-1dfc0acdf6e6/28a81085-c6df-46fe-ad1b-1dfc0acdf6e6_image.jpg?crop=0.781xw:0.782xh;0.152xw,0&resize=1200:*",
            "publishedAt": "2022-06-13T22:09:00Z",
            "content": "CAPE CANAVERAL, Fla. —An Astra rocket launch from the Cape on Sunday failed.\r\nIt's the second time the start-up was unable to put satellites into orbit. \r\nIts known as the little rocket as the Astra … [+1650 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Brent D. Griffiths",
            "title": "Giuliani pushed Trump to prematurely declare victory, former aides say - Business Insider",
            "description": "Despite their pleas, Trump later declared from the White House, \"Frankly, we did win this election.\"",
            "url": "https://www.businessinsider.com/rudy-giuliani-pushed-trump-to-declare-victory-prematurely-2020-elections-2022-6",
            "urlToImage": "https://i.insider.com/62a75cfe6053710019e9f621?width=1200&format=jpeg",
            "publishedAt": "2022-06-13T22:06:58Z",
            "content": "A group of former Trump aides testified that Rudy Giuliani pushed Donald Trump to prematurely declare victory on election night in 2020, overriding the advice of the then-president's campaign manager… [+2457 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Thao Nguyen, USA TODAY",
            "title": "Yellowstone National Park closes entrances after 'unprecedented' rain - USA TODAY",
            "description": "Visitors in the northern section of Yellowstone National Park were being evacuated on Monday, with evacuations planned later in the southern loop.",
            "url": "https://www.usatoday.com/story/travel/2022/06/13/yellowstone-national-park-rain-flooding/7613503001/",
            "urlToImage": "https://www.gannett-cdn.com/-mm-/756bbda501b8e28d5e6dd952d18cc8fe1d98aac8/c=0-94-1000-656/local/-/media/2022/06/13/USATODAY/usatsports/ynp3.jpeg?auto=webp&format=pjpg&width=1200",
            "publishedAt": "2022-06-13T21:56:32Z",
            "content": "Yellowstone National Park indefinitely closed all entrances and began evacuating some visitors on Monday after heavy rains led to flooding and rockslides that washed out roads and at least one bridge… [+2613 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Bradford Betz",
            "title": "Washington DC Mayor Bowser adds 51st star to American flags displayed on Pennsylvania Ave ahead of Flag Day - Fox News",
            "description": "Washington, D.C. Mayor Muriel Bowser on Monday ordered her team to line Pennsylvania Avenue with 51-star American flags ahead of Flag Day on Tuesday.",
            "url": "https://www.foxnews.com/politics/washington-mayor-bowser-51-star-american-pennsylvania-avenue-flag-day",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/51-Star-Flag.jpg",
            "publishedAt": "2022-06-13T21:48:48Z",
            "content": "Washington, D.C. Mayor Muriel Bowser on Monday ordered 51-star American flags to be displayed along Pennsylvania Avenue ahead of Flag Day, June 14.\r\nThe mayor said she directed her team to hang the 5… [+3760 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="my description" imageURL="https://www.coindesk.com/resizer/xa-QJd3kqoIj8Z6xUY6l5SfoAvw=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TCPTTJ54WREAJEUNX6WNW2JXTE.jpg" newsURL="TODO" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="my description" imageURL="https://www.coindesk.com/resizer/xa-QJd3kqoIj8Z6xUY6l5SfoAvw=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TCPTTJ54WREAJEUNX6WNW2JXTE.jpg" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="my description" imageURL="https://www.coindesk.com/resizer/xa-QJd3kqoIj8Z6xUY6l5SfoAvw=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/TCPTTJ54WREAJEUNX6WNW2JXTE.jpg" />
                    </div>
                </div>

            </div>
        )
    }
}

export default News
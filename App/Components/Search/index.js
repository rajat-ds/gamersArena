import React, { Component } from 'react'
import ReactLoading from "react-loading";
import SearchInput, { createFilter } from 'react-search-input'
import Game from "../Game";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from "react-js-pagination";

const THEME_SECONDARY = "#f77f00";
const NO_OF_ITEMS_PER_PAGE = 9;
const MAX_NO_OF_PAGES = 5;
const KEYS_TO_FILTERS = ['title', 'platform', 'genre']
const URL = "http://starlord.hackerearth.com/gamesarena"



class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            loaded: false
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then((games) => {
                const API_LIMIT = games.shift();
                console.log(API_LIMIT);
                this.setState({ games, loaded: true, active: 1 });
            }).catch(e => console.log(e))
    }

    render() {
        const filteredGames = this.state.loaded ? this.state.games.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)) : []
        console.log(filteredGames)
        if (!this.state.loaded)
            return <ReactLoading type="spin" color={THEME_SECONDARY} height={'10%'} width={'10%'} />;

        filteredGames.sort(function (a, b) {
            if (a["editors_choice"] == "Y" && b["editors_chouce"] != "N")
                return -1;
            else if (a["editors_choice"] != "Y" && b["editors_chouce"] == "N")
                return 1;
            else
                return b["score"] - a["score"]

        })
        let start = 9 * (this.state.active - 1);
        let end = Math.min(9 * (this.state.active), filteredGames.length - 1);
        return (
            <div>
                <div style={{ width: "25%", paddingLeft: 10, backgroundColor: "white", paddingTop: 5, paddingBottom: 5, paddingRight: 10 }}>
                    <SearchInput className="search-input" placeholder="Search Game or Genre or Platform" style={{ paddingTop: 10, paddingBottom: 10, width: "100%", border: 0 }} onChange={this.searchUpdated} />
                </div>

                <Pagination
                    activePage={this.state.active}
                    itemsCountPerPage={NO_OF_ITEMS_PER_PAGE}
                    totalItemsCount={filteredGames.length}
                    pageRangeDisplayed={MAX_NO_OF_PAGES}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={(page) => { this.setState({ active: page }) }}
                />
                <Row>
                    {[...Array(end - start)].map((x, i) =>
                        <Game key={i} game={filteredGames[start + i]} />
                    )}
                </Row>
            </div>
        )
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
}

export default Search;
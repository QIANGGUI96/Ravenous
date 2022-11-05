import React from "react";
import './SearchBar.css';

const sortByOptions = {
    'Best Mach': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewd': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions() {
        return sortByOptions.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOption[sortByOption]

            return <li key={sortByOptionValue}>{sortByOption}</li>

        })
    }

    render() {
        return (<div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>{this.renderSortByOptions}</ul>
            </div>
            <div>
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a href="XXX">Let's Go</a>
            </div>

        </div>)

    }
};

export default SearchBar;
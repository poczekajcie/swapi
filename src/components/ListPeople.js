import React from 'react';
import {connect} from "react-redux";
import {fetchPeopleByPage} from "../actions";
import {Link} from "react-router-dom";

class ListPeople extends React.Component {

    componentDidMount() {
        this.props.fetchPeopleByPage(1);
    }

    onNextPage() {
        const nextPageId = this.props.nextPage.charAt(this.props.nextPage.length - 1);
        this.props.fetchPeopleByPage(nextPageId);
    }

    onPrevPage() {
        const prevPageId = this.props.previousPage.charAt(this.props.previousPage.length - 1);
        this.props.fetchPeopleByPage(prevPageId);
    }

    renderList() {
        if (!this.props.people) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>

            );
        }

        return this.props.people.map(person => {
            const personId = person.url.split("/")[5];
            return (
                <div className="item" key={person.name}>
                    <div className="content">
                        <div className="name">
                            <Link to={`/people/${personId}`} className="header">
                                <p>{person.name}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui segment" style={{marginTop: '10px'}}>
                <div className="ui relaxed divided list">
                    {this.renderList()}
                    <div>
                        {this.props.previousPage === null ? null :
                            <button className="ui button" onClick={() => this.onPrevPage()}>
                                Previous
                            </button>}
                        {this.props.nextPage === null ? null :
                            <button className="ui button" tabIndex="0" onClick={() => this.onNextPage()}>
                                Next
                            </button>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {people: state.data.results, nextPage: state.data.next, previousPage: state.data.previous};
};

export default connect(mapStateToProps, {fetchPeopleByPage})(ListPeople);
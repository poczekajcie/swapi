import React from 'react';
import {connect} from 'react-redux';
import {fetchPerson} from '../actions';
import {Link} from "react-router-dom";

class ShowPerson extends React.Component {

    componentDidMount() {
        const {id} = this.props.match.params;

        this.props.fetchPerson(id);
    }

    renderTableRow(parameterName, value) {
        return (
            <tr>
                <td>
                    <h4 className="ui image header">
                        <div className="content">
                            {parameterName}
                        </div>
                    </h4>
                </td>
                <td>
                    {value}
                </td>
            </tr>
        );
    }

    render() {
        if (!this.props.person) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            );
        }
        const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = this.props.person;

        return (
            <div className="ui segment" style={{marginTop: '10px', width: '50%'}}>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                    {this.renderTableRow("Name", name)}
                    {this.renderTableRow("Height", height)}
                    {this.renderTableRow("Mass", mass)}
                    {this.renderTableRow("Hair color", hair_color)}
                    {this.renderTableRow("Skin color", skin_color)}
                    {this.renderTableRow("Eye color", eye_color)}
                    {this.renderTableRow("Birth Year", birth_year)}
                    {this.renderTableRow("Gender", gender)}
                    </tbody>
                </table>
                <Link to={`/`}>
                    <button className="ui button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {person: state.person};
};

export default connect(
    mapStateToProps,
    {fetchPerson}
)(ShowPerson);

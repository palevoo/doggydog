import React, { Component } from 'react';
import './List.css';

import {GridList, GridTile} from 'material-ui/GridList';

class List extends Component {

  constructor() {
    super();
    this.fetchRestaraunts();
    this.state = {
      restarauntList: [
        {name: null,
        rating: null,
        url: null,
        date_created: null}
      ],
    };
  }

  fetchRestaraunts() {
    fetch('http://localhost:3050/restaurants')
    .then(response => response.json())
    .then(restaraunts => {
      this.setState({
        restarauntList: restaraunts
      })
    })
    .catch(error => console.error(error));
  }

  render() {
    return(
      <div>
      <div className="List">
        <GridList>
          {this.state.restarauntList.map((el) => (
          <GridTile
            key={el.url}
            title={el.name}
            subtitle={<span>{el.date_created} Rating <b>{el.rating}</b></span>}
          >
            <img src={el.url} />
          </GridTile>
        ))}
      </GridList>
      </div>
    </div>
    )
  }
}

export default List;

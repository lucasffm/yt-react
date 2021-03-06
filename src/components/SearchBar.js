import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: ''
  };

  onFormSubmit(e) {
    e.preventDefault();
    const { term } = this.state;
    this.props.searchVideo(term);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={e => this.onFormSubmit(e)}>
          <div className='field'>
            <img
              src='https://i.pinimg.com/originals/ed/45/b9/ed45b98be983560d0a5f3dac59a38436.png'
              alt=''
              style={{
                width: '50px',
                height: '50px'
              }}
            />
            <label>Pesquisar Video</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_circulars, delete_circular, edit_circular } from '../../store/action/circulars';

class CircularView extends Component {
  constructor(props) {
    super(props);
    this.circulars = this.props.circulars;
    this.state = {
      page: 1,
      totalPages: Math.ceil(this.props.circulars.length / 6),
      current_stack: 0,
      max_stack: (Math.ceil(this.props.circulars.length / 6) / 7) >> 0,
    };
  }

  componentDidMount() {
    this.props.get_circulars(localStorage.UserDetails[0].username);
  }

  render_list = (side) => {
    const id = localStorage.UserDetails[0].username;
    let offset = (this.state.page - 1) * 6;
    if (side === 1) offset += 3;
    const data = this.circulars.slice(offset, offset + 3);
    data.map((details) => {
      if (details.issued_by === id) {
        return (
          <div className='card card-danger'>
            <div className='card-header'>
              <h4>{details.notice_no}</h4>
              <div className='card-header-action'>
                {details.circular_path && (
                  <a href={details.circular_path} className='btn btn-primary' target='_blank'>
                    View
                  </a>
                )}
                <div className='dropdown'>
                  <a data-toggle='dropdown' className='btn btn-warning dropdown-toggle'>
                    Options
                  </a>
                  <div className='dropdown-menu'>
                    <a
                      className='dropdown-item has-icon'
                      onClick={() => this.props.edit_circular(id, details.circular_id)}>
                      <i className='far fa-edit'></i> Edit
                    </a>
                    <div className='dropdown-divider'></div>
                    <a
                      className='dropdown-item has-icon text-danger'
                      onClick={() => this.props.delete_circular(id, details.circular_id)}>
                      <i className='far fa-trash-alt'></i>
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <p>{details.circular_sub}</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className='card card-primary'>
            <div className='card-header'>
              <h4>{details.notice_no}</h4>
              <div className='card-header-action'>
                {details.circular_path && (
                  <a href={details.circular_path} className='btn btn-primary' target='_blank'>
                    View
                  </a>
                )}
              </div>
            </div>
            <div className='card-body'>
              <p>{details.circular_sub}</p>
            </div>
          </div>
        );
      }
    });
  };

  pageChange = (value) => {
    this.setState({ page: value });
  };

  pageStackChange = (value) => {
    let curr = this.state.current_stack;
    this.setState({ current_stack: curr + value });
    curr = this.state.current_stack;
    this.pageChange(curr * 7 + 1);
  };

  renderPageList = () => {
    let pages = [];
    const offset = this.state.current_stack;
    for (let i = offset * 7 + 1; i <= Math.min(this.state.totalPages, (offset + 1) * 7); ++i) {
      pages.push(
        <li className='page-item'>
          <a className='page-link' onClick={() => this.pageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='buttons'>
            <nav aria-label='Page navigation example'>
              <ul className='pagination'>
                <li className='page-item'>
                  <a
                    className={`page-link ${this.state.current_stack === 0 && 'disabled'}`}
                    onClick={() => this.pageStackChange(-1)}
                    aria-label='Previous'>
                    <span aria-hidden='true'>&laquo;</span>
                    <span className='sr-only'>Previous</span>
                  </a>
                </li>
                {pages}
                <li className='page-item'>
                  <a
                    className={`page-link ${this.state.current_stack === this.state.max_stack && 'disabled'}`}
                    onClick={() => this.pageStackChange(1)}
                    aria-label='Next'>
                    <span aria-hidden='true'>&raquo;</span>
                    <span className='sr-only'>Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h2 className='section-title'>Circulars</h2>
        <p className='section-lead'>Also, you can give a button or input on the card header.</p>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6'>{this.render_list(0)}</div>
          <div className='col-12 col-md-6 col-lg-6'>{this.render_list(1)}</div>
        </div>
        {this.renderPageList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { circulars: state.circulars };
};

export default connect(mapStateToProps, { get_circulars, edit_circular, delete_circular })(CircularView);

import React from 'react'
import { Link } from 'react-router-dom'
const SpecificData = (props) => {
  const { data } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>ID: {data.id}</h5>
          <p className="card-text">
            <strong>ClICKS</strong>: {data.clicks}
            <br/>
            <strong>IMPRESSIONS</strong>: {data.impressions}
          </p>
          <Link to={`text/texts/${data.id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i> View Texts
          </Link>

        </div>
      </div>
    </div>
  )
}

export default SpecificData

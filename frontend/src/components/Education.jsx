import React from 'react'

const Education = ({ formData, setFormData }) => {
  return (
    <div className='container'>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">School Name</label>
          <input type="text" className="form-control" id="name"
            value={formData.edu1_school} onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Academic year</label>
          <input type="number" className="form-control" id="phone"
            value={formData.edu1_year} onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Qualification</label>
          <input type="email" className="form-control" id="email"
            value={formData.edu1_qualification} onChange={(e) => {
              setFormData({ ...formData, edu1_qualification: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Description</label>
          <input type="password" className="form-control" id="password"
            value={formData.edu1_desc} onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value })
            }} />
        </div>
        <hr />

        <div className="col-md-6">
          <label htmlFor="edu2_school" className="form-label">College Name</label>
          <input type="text" className="form-control" id="edu2_school"
            value={formData.edu2_school} onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="edu2_year" className="form-label">Academic year</label>
          <input type="number" className="form-control" id="edu2_year"
            value={formData.edu2_year} onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="edu2_qualification" className="form-label">Qualification</label>
          <input type="text" className="form-control" id="edu2_qualification"
            value={formData.edu2_qualification} onChange={(e) => {
              setFormData({ ...formData, edu2_qualification: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="edu2_desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="edu2_desc"
            value={formData.edu2_desc} onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value })
            }} />
        </div>
      </form>
    </div>
  )
}

export default Education
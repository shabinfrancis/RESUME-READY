import React from 'react'

const Experience = ({ formData, setFormData }) => {
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="exp1_org" className="form-label">Organization Name</label>
          <input type="text" className="form-control" id="exp1_org"
            value={formData.exp1_org} onChange={(e) => {
              setFormData({ ...formData, exp1_org: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="exp1_pos" className="form-label">Position</label>
          <input type="text" className="form-control" id="exp1_pos"
            value={formData.exp1_pos} onChange={(e) => {
              setFormData({ ...formData, exp1_pos: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="exp1_desc" className="form-label">Qualification</label>
          <input type="text" className="form-control" id="exp1_desc"
            value={formData.exp1_desc} onChange={(e) => {
              setFormData({ ...formData, exp1_desc: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="exp1_dur" className="form-label">Description</label>
          <input type="number" className="form-control" id="exp1_dur"
            value={formData.exp1_dur} onChange={(e) => {
              setFormData({ ...formData, exp1_dur: e.target.value })
            }} />
        </div>
        <hr />

        <div className="col-md-6">
          <label htmlFor="edu2_org" className="form-label">Organization Name</label>
          <input type="text" className="form-control" id="edu2_org"
            value={formData.edu2_org} onChange={(e) => {
              setFormData({ ...formData, edu2_org: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="exp2_pos" className="form-label">Position</label>
          <input type="number" className="form-control" id="exp2_pos"
            value={formData.exp2_pos} onChange={(e) => {
              setFormData({ ...formData, exp2_pos: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="exp2_desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="exp2_desc"
            value={formData.exp2_desc} onChange={(e) => {
              setFormData({ ...formData, exp2_desc: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="exp2_dur" className="form-label">Duration</label>
          <input type="number" className="form-control" id="exp2_dur"
            value={formData.exp2_dur} onChange={(e) => {
              setFormData({ ...formData, exp2_dur: e.target.value })
            }} />
        </div>
      </form>
    </div>
  )
}

export default Experience
import React from 'react'

const Project = ({ formData, setFormData }) => {
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="proj1_title" className="form-label">Project Name</label>
          <input type="text" className="form-control" id="proj1_title"
            value={formData.proj1_title} onChange={(e) => {
              setFormData({ ...formData, proj1_title: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="proj1_link" className="form-label">Project Link</label>
          <input type="text" className="form-control" id="proj1_link"
            value={formData.proj1_link} onChange={(e) => {
              setFormData({ ...formData, proj1_link: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="proj1_desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="proj1_desc"
            value={formData.proj1_desc} onChange={(e) => {
              setFormData({ ...formData, proj1_desc: e.target.value })
            }} />
        </div>
        {/* <div className="col-md-6">
        <label htmlFor="exp1_dur" className="form-label">Description</label>
        <input type="number" className="form-control" id="exp1_dur"
          value={formData.exp1_dur} onChange={(e) => {
            setFormData({ ...formData, exp1_dur: e.target.value })
          }} />
      </div> */}
        <hr />

        <div className="col-md-6">
          <label htmlFor="proj2_title" className="form-label">Project Name</label>
          <input type="text" className="form-control" id="proj2_title"
            value={formData.proj2_title} onChange={(e) => {
              setFormData({ ...formData, proj2_title: e.target.value })
            }} />
        </div>
        <div className="col-md-6">
          <label htmlFor="proj2_link" className="form-label">Project Link</label>
          <input type="text" className="form-control" id="proj2_link"
            value={formData.proj2_link} onChange={(e) => {
              setFormData({ ...formData, proj2_link: e.target.value })
            }} />
        </div>
        {/* <div className="col-md-6">
        <label htmlFor="exp2_desc" className="form-label">Description</label>
        <input type="text" className="form-control" id="exp2_desc"
          value={formData.exp2_desc} onChange={(e) => {
            setFormData({ ...formData, exp2_desc: e.target.value })
          }} />
      </div> */}
        <div className="col-md-6">
          <label htmlFor="proj2_desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="proj2_desc"
            value={formData.proj2_desc} onChange={(e) => {
              setFormData({ ...formData, proj2_desc: e.target.value })
            }} />
        </div>
      </form>
    </div>
  )
}

export default Project
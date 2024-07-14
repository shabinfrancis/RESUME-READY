import React from 'react'

const PersonalData = ({formData, setFormData}) => {
  return (
    <>
      <div className='container'>
        <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" 
            value={formData.name} onChange={(e)=>{
              setFormData({...formData, name: e.target.value})
            }}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="phone" 
            value={formData.phone} onChange={(e)=>{
              setFormData({...formData, phone: e.target.value})
            }}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" 
            value={formData.email} onChange={(e)=>{
              setFormData({...formData, email: e.target.value})
            }}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" 
            value={formData.password} onChange={(e)=>{
              setFormData({...formData, password: e.target.value})
            }}/>
          </div>
          <div className="col-12">
            <label htmlFor="github" className="form-label">Github</label>
            <input type="text" className="form-control" id="github" placeholder="https://github/YOURUSERNAME" 
            value={formData.github} onChange={(e)=>{
              setFormData({...formData, github: e.target.value})
            }}/>
          </div>
          <div className="col-12">
            <label htmlFor="linkedin" className="form-label">LinkedIn</label>
            <input type="text" className="form-control" id="linkedin" placeholder="https://linkedin/YOURUSERNAME" 
            value={formData.linkedin} onChange={(e)=>{
              setFormData({...formData, linkedin: e.target.value})
            }}/>
          </div>
          <div className="col-12">
            <label htmlFor="skills" className="form-label">Skills</label>
            <input type="text" className="form-control" id="skills" placeholder="Ex: HTML, CSS, etc." 
            value={formData.skills} onChange={(e)=>{
              setFormData({...formData, skills: e.target.value})
            }}/>
          </div>
        </form>
      </div>
    </>
  )
}

export default PersonalData
import React from 'react'

export default function ProjectPanel() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>

        </div>

        <div className='col-md-6'>
          <h1 className='mb-3 text-start'>Project Panel</h1>
          <form>
            <div className='mb-3 text-start'>
              <label htmlFor="inputOption" className="form-label">Select a Project type</label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue={"1"}>Select An Option</option>
                <option defaultValue={"1"}>Kitchen</option>
                <option defaultValue={"1"}>Bathroom</option>
                <option defaultValue={"1"}>Basement</option>
                <option defaultValue={"1"}>Whole House</option>
              </select>
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="inputServiceTitle" className="form-label">Project Title</label>
              <input type="text" className="form-control" id="inputServiceTitle" aria-describedby="Name" />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="inputAddress" className="form-label">Location Address</label>
              <input type="text" className="form-control" id="inputAddress"></input>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="inputDescription" className="form-label">Write Description</label>
              <textarea className="form-control" id="inputDescription" rows="4"></textarea>
            </div>
            <div className="mb-3 text-start">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div >
          </form>
          <hr />
          <form>
           
            <div className="mb-3 text-start">
                <label htmlFor="formFileBeforeLg" className="form-label">Add max 25 Before Images</label>
                <input className='form-control form-control-lg' id="formFileBeforeLg" type="file" multiple></input>
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-primary">Add Before Images</button>
              </div >
          </form>
          <hr />
          <form>
            <div className="mb-3 text-start">
              <label htmlFor="formFileAfterLg" className="form-label">Add max 25 After Images</label>
              <input className='form-control form-control-lg' id="formFileAfterLg" type="file" multiple></input>
            </div>
            <div className="mb-3 text-end">
              <button type="submit" className="btn btn-primary">Add After Images</button>
            </div >
          </form>
        </div>

        <div className='col-md-2'>

        </div>
      </div>
    </div>

  )
}

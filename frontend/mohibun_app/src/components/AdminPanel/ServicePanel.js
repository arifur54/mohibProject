import React from 'react'



export default function ServicePanel() {


  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>

          </div>

          <div className='col-md-6'>
            <h1 className='mt-5 mb-3 text-start'>Service Panel</h1>
            <hr />
          <form>
            <div className='mb-3 text-start'>
              <label htmlFor="inputOption" className="form-label">Select a service type</label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue={"1"}>Select An Option</option>
                <option defaultValue={"1"}>Kitchen</option>
                <option defaultValue={"1"}>Bathroom</option>
                <option defaultValue={"1"}>Basement</option>
                <option defaultValue={"1"}>Whole House</option>
              </select>
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="inputServiceTitle" className="form-label">Service Title</label>
              <input type="text" className="form-control" id="inputServiceTitle" aria-describedby="Name" />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="inputDescription" className="form-label">Write Description</label>
              <textarea className="form-control" id="inputDescription" rows="4"></textarea>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="formFileLg" className="form-label">Add 5 Images</label>
              <input className='form-control form-control-lg' id="formFileLg" type="file" multiple></input>
            </div>
            <div  className="mb-3 text-start">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div >
          </form>
          </div>

          <div className='col-md-2'>

          </div>
        </div>
    </div>
  )
}

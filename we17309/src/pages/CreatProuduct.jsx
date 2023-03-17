import React from 'react'

const CreatProuduct = () => {
  return (
    <div>
<form>
  <div className="form-group">
    <label >productName</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label >price</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


    </div>
  )
}

export default CreatProuduct
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  // gives us a function that can be used to navigate the user
  const [resource, setResource] = useState("people");
  // usestateSnippet
  const [id, setId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/" + resource + "/" + id);
    // navigate(`/${resource}/${id}`); <-- Cleaner version of ^ called template literal
    // this sets up the route as /resource/id
  };
  // creating the handleSubmit for the form

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center gap-3">
            <label htmlFor="resource" className="form-label text-nowrap">
              {/* label.form-label */}
              Select Resource
            </label>
            <select
              name="resource"
              id="resource"
              className="form-select flex-grow-1"
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              // This sets resource in line 4 to the option picked below on changing of the dropdown
              // e is for event and the event is the changing of the dropdown
              // target is the select element
              // value is the option that is chosen
            >
              <option value="people">People</option>
              <option value="planets">Planets</option>
            </select>
            <label htmlFor="id" className="form-label flex-shrink-1">
              ID
            </label>
            <input
              type="number"
              name="id"
              id="id"
              className="form-control flex-shrink-1"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {/* input:number.form-control */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {/* button:submit.btn.btn-primary */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

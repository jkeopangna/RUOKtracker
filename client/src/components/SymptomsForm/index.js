import React, { useRef } from "react";
import API from "../../utils/API";


function CreateForm() {
    const symptoms = useRef();
    const [state] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        API.getPost({

        })
        .then(data => {

        })
        .catch(err => console.log(err));
    };

    return (
        
    <form>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
        </div>
    </form>

    );

};

export default CreateForm;
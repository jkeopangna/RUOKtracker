import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_SYMPTOMS, LOADING } from "../../utils/Actions";
import API from "../../utils/API";


function CreateForm() {
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.savePost({
            symptoms: [{
                BodyPain: {
                    count: document.getElementById('painCount').value,
                },
                Nausea: {
                    count: document.getElementById('nauseaCount').value
                }
            }]
        })
        .then(
        console.log("Success"))
        .then(results => {
            dispatch({
                type: UPDATE_SYMPTOMS,
                symptoms: results.data
            })
        })
        .catch(err => console.log(err));
    };

    return (
        <>
        <div>
        <h1>Daily Symptom Log</h1>
    <form onSubmit={handleSubmit} class="form-group mt-5 mb-5">
        <h3>Body Pain:</h3>
        <div class="row">
    <select class="form-select form-select-md" aria-label=".form-select-sm example">
  <option selected id='painCount'>Select Occurence Rate</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
    </select>
    </div>
        <h3>Nausea:</h3>
        <div class="row">
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected id='nauseaCount'>Select Occurence Rate</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
    </select>
    </div>
        <h3>Fatigue:</h3>
        <div class="row">
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Select Occurence Rate</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
    </select>
    </div>
        <h3>Coughing:</h3>
        <div class="row">
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Select Occurence Rate</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
    </select>
    </div>
        <h3>Fever:</h3>
        <div class="row">
    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Select Occurence Rate</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
    </select>
    </div>
    <div>
    <button type="submit" class="btn btn-secondary btn-sm" disabled={state.loading}>Log Symptoms</button>
    </div>
    </form>
    </div>
  </>
    );

};

export default CreateForm;

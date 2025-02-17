import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, closeModal } from "../../ReducerFolder/travelSlice";
import "./activityForm.css";

function ActivityFormModal() {
  const dispatch = useDispatch();
  const { isOpen, modalType, data } = useSelector(
    (state) => state.travel.modal
  );
  console.log("Modal state:", { isOpen, modalType, data });
  if (!isOpen) return null;

  const handleSubmitActivity = (event) => {
    console.log("activity submitted");
    event.preventDefault();
    const newActivityData = {
      activityId: Date.now(),

      activity: event.target.activity.value,
      specificLocation: event.target.specificLocation.value,
      date: event.target.date.value,
      cost: event.target.cost.value,
      description: event.target.description.value,
    };
    dispatch(addActivity({ travelId: data, activity: newActivityData }));
    event.target.reset();
    console.log("activity Wagwaan submitted");

    dispatch(closeModal());
  };

  return (
    <section className="aFModal">
      <div className="aFModal-backdrop"></div>
      <div className="aFModal-content">
        <h2 className="aFModal-title">Fill in trip details</h2>
        <button
          className="aFModal-closeButton"
          onClick={() => dispatch(closeModal())}
        >
          X
        </button>
        <form className="activityForm" onSubmit={handleSubmitActivity}>
          <input
            name="activity"
            type="text"
            placeholder="Enter activity..."
            required
          />
          <input
            name="specificLocation"
            type="text"
            placeholder="Specific location..."
            required
          />
          <input name="date" type="date" required />
          <input
            name="description"
            type="text"
            placeholder="Short description"
            required
          />
          <input
            name="cost"
            type="text"
            placeholder="Enter cost $..."
            required
          />

          <button className="aFModal-addButton" type="submit">
            Add
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="AfModal-addLaterButton"
          >
            Add later
          </button>
        </form>
      </div>
    </section>
  );
}

export default ActivityFormModal;

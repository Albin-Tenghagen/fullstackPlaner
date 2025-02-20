    import { useDispatch } from "react-redux";
    import {
      removeActivity,
      openModal
    } from "../../ReducerFolder/travelSlice";

    const ActivityDetail = ({ travelId, activity }) => {
      const dispatch = useDispatch();
  
      //TODO Fix CSS for this component
      return (
        <article className="activity-detail">
          <h5>{activity.activity}</h5>
          <p>
            <strong>Description: </strong> {activity.description}
          </p>
          <p>
            <strong>Specific Location: </strong>
          </p>
          <p>
            <strong>date: </strong> {activity.date}
          </p>
          <p>
            <strong>Cost: </strong> {activity.cost}
          </p>
          <button
            onClick={() =>
              dispatch(removeActivity({ travelId: travelId, activityId: activity.id }))
            }
          >
            <img src="/icons/remove-add-dark/X-circle.png" alt="remove icon" />
          </button>
          <button
            onClick={() =>
              dispatch(openModal({modalType: "editActivty", data: activity}))
            }
          >
            <img
              className="travelItemIcon"
              src="/icons/edit-light/Feather.png"
              alt="edit icon"
            />
          </button>{" "}
        </article>
      );
    };

    export default ActivityDetail;

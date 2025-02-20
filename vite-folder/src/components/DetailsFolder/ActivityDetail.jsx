import { useDispatch } from "react-redux";
import { removeActivity, openModal } from "../../ReducerFolder/travelSlice";
import "./ActivityDetail.css";
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
        <strong>Specific Location: </strong> {activity.specificLocation}
      </p>
      <p>
        <strong>date: </strong> {activity.date}
      </p>
      <p>
        <strong>Cost: </strong> {activity.cost}
      </p>
      <div className="buttonhouse1">
      <button
        onClick={() =>
          dispatch(
            removeActivity({ travelId: travelId, activityId: activity.id })
          )
        }
      >
        <img src="/icons/remove-add-dark/X-circle.png" alt="remove icon" />
      </button>
      <button
        onClick={() =>
          dispatch(
            openModal({
              modalType: "editActivity",
              data: { ...activity, travelId },
            })
          )
        }
      >
        <img
          className="travelItemIcon"
          src="/icons/edit-light/Feather.png"
          alt="edit icon"
        />
      </button>
      </div>{" "}
      
    </article>
  );
};

export default ActivityDetail;

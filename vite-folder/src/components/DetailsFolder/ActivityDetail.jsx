import { useDispatch } from "react-redux";
import { removeActivity } from "../../ReducerFolder/travelSlice";

const ActivityDetail = ({ travelId, activity }) => {
  const dispatch = useDispatch();

  return (
    <li className="activity-detail">
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
          dispatch(removeActivity({ travelId, activityId: activity.id }))
        }
      >
        <img
          src="/icons/remove-add-dark/X-circle.png"
          alt="remove icon"
        />
      </button>
    </li>
  );
};

export default ActivityDetail;
